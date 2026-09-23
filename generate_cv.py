import os
from PIL import Image, ImageDraw, ImageOps
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from reportlab.lib import colors
from reportlab.platypus import Paragraph
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

def generate_pdf():
    img_path = 'public/images/profile.jpg'
    circle_img_path = 'public/images/profile_circle.png'
    os.makedirs('public/cv', exist_ok=True)
    
    if os.path.exists(img_path):
        im = Image.open(img_path).convert('RGBA')
        w, h = im.size
        crop_box = (0, 0, w, int(h * 0.75))
        im_cropped = im.crop(crop_box)
        
        size = (500, 500)
        im_resized = ImageOps.fit(im_cropped, size, Image.Resampling.LANCZOS)
        
        mask = Image.new('L', size, 0)
        draw = ImageDraw.Draw(mask)
        draw.ellipse((0, 0) + size, fill=255)
        im_resized.putalpha(mask)
        im_resized.save(circle_img_path)
    
    pdf_path = 'public/cv/my-cv.pdf'
    width, height = A4 # 595.27 x 841.89 pt
    c = canvas.Canvas(pdf_path, pagesize=A4)
    
    NAVY = colors.HexColor('#1B3644')
    GOLD = colors.HexColor('#C49A2D')
    DARK_TEXT = colors.HexColor('#1E293B')
    MUTED_TEXT = colors.HexColor('#475569')
    WHITE = colors.HexColor('#FFFFFF')
    LIGHT_GOLD = colors.HexColor('#E5C158')
    
    # --- LEFT SIDEBAR ---
    sidebar_w = 200
    c.setFillColor(NAVY)
    c.rect(0, 0, sidebar_w, height, fill=1, stroke=0)
    
    # Profile Picture in Sidebar
    if os.path.exists(circle_img_path):
        c.setStrokeColor(GOLD)
        c.setLineWidth(3.5)
        c.circle(100, 725, 54, stroke=1, fill=0)
        c.drawImage(circle_img_path, 48, 673, width=104, height=104, mask='auto')
    
    # Contact Info (Left Sidebar)
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 10)
    
    contact_y = 635
    c.drawString(20, contact_y, "CONTACT")
    c.setStrokeColor(GOLD)
    c.setLineWidth(1)
    c.line(20, contact_y - 4, 180, contact_y - 4)
    
    c.setFont("Helvetica", 7.5)
    
    contacts = [
        ("Phone:", "01730481378"),
        ("Email:", "mdshabbirahmmed169@gmail.com"),
        ("Location:", "Jamalpur, Bangladesh"),
        ("LinkedIn:", "md-shabbir-ahmmed-378640432"),
        ("Facebook:", "sabbir.ahmmed.357605"),
        ("GitHub:", "github.com/md-sabbir-ahmmed")
    ]
    
    curr_y = contact_y - 16
    for label, val in contacts:
        c.setFont("Helvetica-Bold", 7.5)
        c.setFillColor(GOLD)
        c.drawString(20, curr_y, label)
        c.setFont("Helvetica", 7.5)
        c.setFillColor(WHITE)
        if len(val) > 26:
            c.drawString(20, curr_y - 9, val)
            curr_y -= 19
        else:
            c.drawString(62, curr_y, val)
            curr_y -= 13
            
    # Sidebar Section Draw Helper
    def draw_sidebar_pill(title, y_pos):
        c.setFillColor(GOLD)
        c.roundRect(15, y_pos, 170, 20, 10, fill=1, stroke=0)
        c.setFillColor(WHITE)
        c.setFont("Helvetica-Bold", 9)
        c.drawCentredString(100, y_pos + 6, title)

    def draw_sidebar_bullets(items, start_y):
        y = start_y
        c.setFont("Helvetica", 8)
        for item in items:
            c.setFillColor(GOLD)
            c.rect(20, y + 2, 3.5, 3.5, fill=1, stroke=0)
            c.setFillColor(WHITE)
            c.drawString(28, y, item)
            y -= 13
        return y

    # SKILLS (Sidebar)
    skills_y = curr_y - 6
    draw_sidebar_pill("S K I L L S", skills_y)
    skills_list = [
        "Circuit Analysis & Design",
        "Digital Logic Design (74xx)",
        "Microcontroller Prototyping",
        "Arduino Uno (C / C++)",
        "Circuit Simulation (Proteus)",
        "Tinkercad & PSpice",
        "Python & C Programming",
        "Problem Solving & Logic"
    ]
    next_y = draw_sidebar_bullets(skills_list, skills_y - 15)

    # LANGUAGES (Sidebar)
    lang_y = next_y - 6
    draw_sidebar_pill("L A N G U A G E S", lang_y)
    lang_list = [
        "Bengali – Native",
        "English – Working Proficient"
    ]
    next_y2 = draw_sidebar_bullets(lang_list, lang_y - 15)

    # HOBBIES / INTERESTS (Sidebar)
    hobb_y = next_y2 - 6
    draw_sidebar_pill("H O B B I E S", hobb_y)
    hobb_list = [
        "Robotics Prototyping",
        "Circuit Simulation",
        "Physics & Math Tutoring",
        "Engineering Books"
    ]
    draw_sidebar_bullets(hobb_list, hobb_y - 15)


    # --- RIGHT MAIN CONTENT ---
    main_x = 215
    main_w = width - main_x - 15 # 365 pt

    # Top Right Header Block (Dark Teal Navy)
    c.setFillColor(NAVY)
    c.rect(sidebar_w, 715, width - sidebar_w, height - 715, fill=1, stroke=0)
    
    # Gold Accent Decorative Wave Banner under header
    c.setFillColor(GOLD)
    p = c.beginPath()
    p.moveTo(sidebar_w, 715)
    p.lineTo(width, 715)
    p.lineTo(width, 705)
    p.curveTo(width - 100, 710, sidebar_w + 100, 698, sidebar_w, 705)
    p.close()
    c.drawPath(p, fill=1, stroke=0)

    # Name & Title in Header Block
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 20)
    c.drawString(220, 800, "MD. SABBIR AHMMED")
    
    c.setFillColor(LIGHT_GOLD)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(220, 784, "ELECTRICAL & ELECTRONIC ENGINEERING STUDENT")

    # Bio Summary paragraph in Header
    summary_text = (
        "Undergraduate EEE student at Jamalpur Science and Technology University (JSTU), "
        "Bangladesh. Driven by hands-on prototyping in electrical circuits, digital logic design, "
        "microcontroller robotics, and simulation analysis. Consistently achieved GPA 5.00 in SSC & HSC."
    )
    
    styles = getSampleStyleSheet()
    style_summary = ParagraphStyle(
        'HeaderSummary',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=11,
        textColor=colors.HexColor('#F1F5F9')
    )
    para = Paragraph(summary_text, style_summary)
    para.wrapOn(c, main_w - 25, 60)
    para.drawOn(c, 220, 725)


    # Main Right Section Helper
    def draw_right_pill(title, y_pos):
        c.setFillColor(GOLD)
        c.roundRect(220, y_pos, 220, 18, 9, fill=1, stroke=0)
        c.setFillColor(WHITE)
        c.setFont("Helvetica-Bold", 8.5)
        c.drawCentredString(330, y_pos + 5, title)

    # --- EXPERIENCE SECTION ---
    exp_y = 672
    draw_right_pill("E X P E R I E N C E", exp_y)

    experiences = [
        {
            "role": "Private Tutor (Physics, Higher Mathematics & ICT)",
            "sub": "Self-Employed | Bogura & Jamalpur | 2022 – Present",
            "bullets": [
                "Mentored college students in Newton's laws, circuit fundamentals, and calculus.",
                "Guided students to achieve top distinction (GPA 5.00) in SSC/HSC board exams."
            ]
        },
        {
            "role": "Undergraduate Engineering Student & Lab Researcher",
            "sub": "Jamalpur Science and Technology University (JSTU) | Oct 2024 – Present",
            "bullets": [
                "Conducted experimental verifications of circuit theory, diode rectifiers, and logic ICs.",
                "Authored engineering lab reports documenting schematics and error analysis."
            ]
        },
        {
            "role": "Hardware & Robotics Sub-Team Member",
            "sub": "EEE Project Study Group, JSTU | 2024 – Present",
            "bullets": [
                "Co-designed microcontroller firmware and pinout allocations for robotics prototypes."
            ]
        }
    ]

    curr_main_y = exp_y - 14
    for exp in experiences:
        c.setFillColor(DARK_TEXT)
        c.setFont("Helvetica-Bold", 8.5)
        c.drawString(220, curr_main_y, exp["role"])
        curr_main_y -= 10
        
        c.setFillColor(MUTED_TEXT)
        c.setFont("Helvetica-Oblique", 7.5)
        c.drawString(220, curr_main_y, exp["sub"])
        curr_main_y -= 10
        
        c.setFont("Helvetica", 7.5)
        for b in exp["bullets"]:
            c.setFillColor(GOLD)
            c.rect(222, curr_main_y + 2, 2.5, 2.5, fill=1, stroke=0)
            c.setFillColor(DARK_TEXT)
            c.drawString(228, curr_main_y, b)
            curr_main_y -= 10
        curr_main_y -= 4


    # --- FEATURED PROJECTS SECTION ---
    proj_y = curr_main_y - 2
    draw_right_pill("F E A T U R E D   P R O J E C T S", proj_y)
    
    projects = [
        ("Robotic Exoskeleton Control System Simulation", "Simulation concept integrating PWM motor drivers and joint actuation."),
        ("Line Following Robot using Arduino Uno", "Autonomous robot with TCRT5000 IR sensor array and differential PWM drive."),
        ("Bluetooth Control Car using Arduino Uno", "Wireless RC vehicle controlled over Bluetooth UART with smartphone app."),
        ("4-Bit Memory Using 74LS74 D Flip-Flop IC", "Sequential digital logic circuit implementing 4-bit PIPO register."),
        ("Automatic Water Level Controller Project", "Automated pump control system with liquid sensors and AC relay safety.")
    ]

    curr_main_y = proj_y - 14
    for title, desc in projects:
        c.setFillColor(DARK_TEXT)
        c.setFont("Helvetica-Bold", 8)
        c.drawString(220, curr_main_y, title)
        curr_main_y -= 9
        
        c.setFillColor(MUTED_TEXT)
        c.setFont("Helvetica", 7.5)
        c.drawString(228, curr_main_y, desc)
        c.setFillColor(GOLD)
        c.rect(222, curr_main_y + 2, 2.5, 2.5, fill=1, stroke=0)
        curr_main_y -= 11


    # --- EDUCATION SECTION ---
    edu_y = curr_main_y - 2
    draw_right_pill("E D U C A T I O N", edu_y)

    educations = [
        {
            "degree": "B.Sc. (Honours) in Electrical & Electronic Engineering",
            "inst": "Jamalpur Science and Technology University (JSTU)",
            "year": "Oct 2024 – Present (Running)"
        },
        {
            "degree": "Higher Secondary Certificate (HSC) - Science",
            "inst": "Sherpur Govt. College, Bogura | GPA 5.00 / 5.00",
            "year": "Passing Year: 2022"
        },
        {
            "degree": "Secondary School Certificate (SSC) - Science",
            "inst": "Nogor Shah Mozammel Haque High School | Golden GPA 5.00",
            "year": "Passing Year: 2020"
        }
    ]

    curr_main_y = edu_y - 14
    for edu in educations:
        c.setFillColor(DARK_TEXT)
        c.setFont("Helvetica-Bold", 8)
        c.drawString(220, curr_main_y, edu["degree"])
        
        c.setFillColor(GOLD)
        c.setFont("Helvetica-Bold", 7.5)
        c.drawRightString(width - 15, curr_main_y, edu["year"])
        curr_main_y -= 9
        
        c.setFillColor(MUTED_TEXT)
        c.setFont("Helvetica", 7.5)
        c.drawString(220, curr_main_y, edu["inst"])
        curr_main_y -= 13

    # Bottom Footer Strip
    c.setFillColor(GOLD)
    c.rect(sidebar_w, 0, width - sidebar_w, 8, fill=1, stroke=0)

    c.save()
    print("CV PDF updated at", pdf_path)

if __name__ == "__main__":
    generate_pdf()

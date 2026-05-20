import React, { useState, useEffect, useRef } from 'react';
import {
    CloudUpload,
    Settings,
    ArrowLeft,
    Trash2,
    Video,
    Play,
    CheckCircle2,
    Key,
    FileDown,
    FolderOpen,
    Info,
    Lock,
    Search,
    ExternalLink,
    Copy,
    Check,
    Loader2,
    Users,
    Server,
    Database,
    Languages,
    Award,
    BookOpen,
    Vote,
    TrendingUp,
    UserCheck,
    CheckSquare,
    ShieldCheck,
    Printer,
    ChevronRight,
    Sparkles,
    Sliders,
    HelpCircle,
    ChevronDown,
    Smile,
    Heart,
    Music,
    Star
} from 'lucide-react';

// Unified translation mapping for full Bilingual support tailored to Al-Madinah Stage (المدينة ستيج) - Emojis completely removed from all labels
const TRANSLATIONS = {
    ar: {
        title: "المدينة ستيج",
        subtitle: "منصة مسابقة الخطابة والإلقاء للأذكياء الصغار",
        organizerPanel: "لوحة لجنة التحكيم والمنظمين",
        exitDashboard: "العودة للواجهة الرئيسية",
        sandboxTitle: "قيد التشغيل في وضع التجربة والمحاكاة",
        sandboxSub: "سيتم حفظ مشاركاتك محلياً في المتصفح. لربط وتخزين الفيديوهات حقيقياً، استخدم لوحة التحكم لربط رابط Google Apps Script.",
        liveTitle: "مرتبط بقاعدة بيانات السحاب المباشرة",
        liveSub: "تُرسل بيانات المشتركين والملفات مباشرة إلى حساب Google Drive وجدول بيانات Google Sheet الخاص بك.",
        setupGoogleLink: "إعداد ربط السحابة",
        noLoginRequired: "سجل فوراً بدون حساب وبكل سهولة!",
        showcaseTitle: "مسابقة المدينة ستيج للأطفال",
        showcaseSub: "أهلاً بكم في المنصة التفاعلية المخصصة لمسابقة الإلقاء الرائعة للأطفال من عمر 7 إلى 14 سنة. عبّر عن موهبتك بصوتك العذب وشاركنا إبداعك اليوم!",
        fullName: "اسم الطفل المشارك رباعي",
        fullNamePlaceholder: "محمد بن أحمد الحركان",
        mobileNumber: "رقم جوال ولي الأمر",
        mobilePlaceholder: "مثال: 05xxxxxxxx",
        nationalId: "رقم الهوية الوطنية / الإقامة للطفل ",
        nationalIdPlaceholder: "رقم الهوية المكون من 10 أرقام",
        childAge: "عمر الطفل ",
        ageCategory: "الفئة العمرية",
        selectAge: "اختر عمرك الجميل",
        cat1: "الفئة الأولى (من 7 إلى 10 سنوات)",
        cat2: "الفئة الثانية (من 11 إلى 14 سنة)",
        idProofFile: "وثيقة إثبات هوية الطفل ",
        contestVideo: " فيديو الإلقاء للطفل",
        clickToUpload: "اضغط هنا لرفع الملف",
        dragDrop: "أو اسحب وأفلت الملف داخل الصندوق السحري",
        videoSizeRecommend: "الصيغ المقبولة: MP4, MOV (الحد الأقصى 30 ميجابايت ومصوّر بوضوح)",
        idProofRecommend: "الصيغ المقبولة: صور عادية أو ملف PDF واضح",
        parentAgreementText: "أقر أنا ولي أمر المشارك بصحة البيانات المدخلة، وموافقتي الكاملة على شروط وأحكام مسابقة المدينة ستيج، كما أوافق على رفع فيديو المشاركة واستخدامه لأغراض التقييم والتصويت والنشر الإعلامي المرتبط بالمسابقة، بما لا يخل بخصوصية الطفل أو حقوقه. كما أوافق على تصويره في الفعاليات والنهائيات الرائعة على المسرح ونشرها لتوثيق فخرنا بإبداعه.",
        agreeCheckbox: "أوافق بكل فخر وحب على جميع شروط وقواعد المسابقة ومشاركة طفلي المبدع.",
        instructionsTitle: "تعليمات الفيديو ومعايير المسابقة:",
        inst1: "أن يكون طول مقطع الإلقاء بين دقيقة إلى 3 دقائق كحد أقصى",
        inst2: "وضوح الصوت والوقوف بثقة وشجاعة أمام الكاميرا بابتسامة جميلة",
        inst3: "ارتداء الزي الوطني الأنيق أو ملابس رسمية لائقة بفرسان الإلقاء",
        inst4: "اختيار موضوع إلقاء هادف، ملهم وممتع للجميع",
        validateDetails: "نتأكد من صحة البيانات الجميلة...",
        encodeVideo: "نشفر الفيديو ووثائق البطل لإرسالها بأمان...",
        uploadingDrive: "جاري رفع الملفات الآن...",
        completed: "تهانينا الحارة! تم تسجيل بطلنا بنجاح",
        encryptingSandbox: "نشفر الفيديو في المتصفح التجريبي السريع...",
        savingSandbox: "نحفظ البطل الصغير في قائمة الأبطال المحلية...",
        uploadEntry: "إرسال المشاركة والانطلاق للمسابقة!",
        uploadingEntry: "جاري إرسال الإبداع المميّز...",
        subConfirmed: "أهلاً بك في عالم الإبداع والخطابة!",
        subConfirmedSub: "تم تسجيل طفلك بنجاح في مسابقة المدينة ستيج وحفظ الفيديو ووثيقة الهوية. لجنة التحكيم الموقرة متحمسة جداً لمشاهدة المقطع الرائع وسنقوم بإعلان النتائج قريباً!",
        applicant: "بطلنا المبدع:",
        idPassport: "الهوية الوطنية للبطل:",
        submissionCode: "رمز المشاركة الذهبي:",
        statusLabel: "حالة المشاركة الحالية:",
        submitAnother: "تسجيل بطل جديد",
        compEntries: "منصة مراجعة أبطال المدينة ستيج",
        compEntriesSub: "تقييم أداء الخطابة، ضبط الدرجات، رصد تصويت الجمهور، وإصدار شهادات التميز.",
        integrateDrive: "إعداد السحابة",
        exportCsv: "تصدير البيانات بصيغة إكسل",
        totalEntries: "عدد الفرسان المشاركين",
        systemMode: "وضع تشغيل النظام الحالي",
        prodServerless: "سحابي مباشر متصل",
        sandboxSimulated: "تجريبي محاكاة محلية",
        driveIntegration: "الاتصال بـ Google Drive",
        connected: "متصل بنجاح",
        notConfigured: "غير متصل",
        searchPlaceholder: "ابحث عن بطل بالاسم، الرمز الذهبي، أو الهوية...",
        competitorDetails: "البطل المبدع والفئة العمرية",
        competitorDate: "تاريخ الانضمام للمنصة",
        action: "الإجراءات",
        play: "تقييم الخطابة",
        videoReviewPanel: "غرفة التحكيم وتقييم الفرسان",
        noVideoSelected: "بانتظار اختيار بطل لتقييمه",
        selectContestant: "اختر فارساً من القائمة الجانبية لتشغيل فيديو الإلقاء الخاص به، وتقييم درجاته السبعة، والتحكم بحالة ترشحه.",
        driveFilePreview: "معاينة المقطع من Google Drive مباشرة",
        apiSandboxConstraints: "الفيديو مخزن في حساب Google Drive الخاص بك بشكل آمن. يمكنك النقر على زر المعاينة الخارجي الآمن لمتابعته بوضوح.",
        openInGoogle: "فتح المقطع في Google Drive",
        organizerPanelLog: "بوابة دخول لجنة التحكيم السرية",
        passcodeInstructions: "الرجاء كتابة رمز المرور الإداري السري للدخول إلى نظام التحكيم وتقييم المتسابقين وإصدار الشهادات.",
        passcode: "رمز المرور السري للجنة",
        passcodePlaceholder: "أدخل رمز المرور السري",
        defaultPasscode: "رمز المرور الافتراضي للتجربة والمحاكاة هو: admin123",
        accessDashboard: "دخول لبوابة التحكيم",
        incorrectPasscode: "رمز المرور غير صحيح! يرجى المحاولة مرة أخرى بتركيز.",
        connectorTitle: "رابط تهيئة وتوصيل Google Workspace",
        connectorSub: "قم بتحويل حساب جوجل درايف وجدول البيانات الخاص بك إلى قاعدة بيانات مجانية للمسابقة بلمسة واحدة.",
        connectWebApp: "ربط عنوان تطبيق ويب جوجل سكريبت",
        pasteUrl: "الصق رابط الويب سكريبت بعد نشره لتوجيه الفيديوهات والبيانات إليه مباشرة:",
        saveLink: "تفعيل الاتصال السحابي",
        createScript: "إنشاء مشروع Google Apps Script جديد",
        createScriptSub: "اذهب إلى مشروع جديد، وامسح الكود القديم والصق السكريبت التالي بالكامل:",
        copyCode: "نسخ السكريبت بالكامل",
        copied: "تم النسخ بنجاح!",
        deployWebApp: "خطوات النشر والتثبيت كتطبيق ويب",
        deployStep1: "1. من أعلى واجهة السكريبت اختر نشر ثم نشر جديد.",
        deployStep2: "2. اضغط على علامة الترس واختر تطبيق ويب.",
        deployStep3: "3. في خانة تشغيل كـ اختر: حسابي.",
        deployStep4: "4. في خانة من لديه صلاحية الوصول اختر: أي شخص لتمكين الأطفال من الرفع الآمن دون تعقيد.",
        deployStep5: "5. اضغط على نشر وامنح الصلاحيات للحساب، ثم انسخ الرابط والصقه في المربع بالأعلى.",
        exitSetup: "إغلاق نافذة الإعداد",
        toastSuccess: "تم تسجيل المشاركة وتأكيد ترشيح البطل بنجاح!",
        toastError: "حدث خطأ ما. يرجى مراجعة إعدادات السكريبت والاتصال.",
        toastFormError: "يرجى ملء جميع الخانات الإلزامية وتأكيد الموافقة على الشروط والأحكام لحماية طفلك.",
        toastNoFile: "يرجى اختيار فيديو الخطابة الخاص بالطفل لتكتمل المشاركة.",
        toastSelectValid: "يرجى اختيار ملف فيديو صالح بالصيغ المذكورة.",
        toastSettingsSynced: "تم حفظ وتفعيل رابط مزامنة Google بنجاح مذهل!",
        toastValidAppScript: "الرابط المدخل غير صالح. يجب أن يبدأ برابط تطبيق الويب الخاص بجوجل",
        toastNoExport: "لا توجد مشاركات حتى الآن لتصديرها.",
        toastCsvSuccess: "تم تصدير ملف إكسل بكامل البيانات والتقييمات بنجاح!",
        footerDesc: "المنصة الإلكترونية الرسمية لمسابقة المدينة ستيج للخطابة للأطفال. جميع الحقوق محفوظة.",
        // Evaluation Criteria Terms
        evalSheetTitle: "بطاقة رصد وتدقيق درجات الخطابة (100 درجة)",
        statusSelection: "تعديل حالة ترشح الفارس بالمسابقة",
        status_review: "قيد المراجعة والتقييم والتدقيق",
        status_qualified: "مؤهل للمرحلة التالية بتميز",
        status_unqualified: "شرفنا بالمشاركة (غير مؤهل حالياً)",
        status_finalist: "مترشح للنهائيات المباشرة على المسرح",
        status_winner: "فائز متميز بمسابقة المدينة ستيج لفرسان الإلقاء",
        releaseResultsBtn: "اعتماد ونشر النتيجة النهائية ليراها ولي الأمر في حسابه",
        resultsReleasedStatus: "النتائج معتمدة ومنشورة بشكل علني",
        resultsNotReleasedStatus: "النتائج معلقة وبانتظار اعتماد الإدارة",
        critVoice: "وضوح الصوت وقوة الإلقاء ومخارج الحروف (20 درجة)",
        critConfidence: "الثقة المذهلة والحضور والوقوف المتزن (20 درجة)",
        critLanguage: "سلامة وصحة اللغة والكلمات المستعملة (15 درجة)",
        critExpression: "التعبير الملوّن بنبرة الصوت والتفاعل مع النص (15 درجة)",
        critTime: "الالتزام بالوقت المحدد من دقيقة لثلاث دقائق (10 درجات)",
        critContent: "محتوى وقوة الخطاب وترابط الفكرة الهادفة (10 درجات)",
        critCreativity: "الإبداع والتميز واللمسة والابتسامة المميّزة (10 درجات)",
        totalScoreLabel: "إجمالي درجات البطل المستحقة:",
        saveEvaluation: "حفظ بطاقة التقييم والدرجات",
        toastEvalSaved: "تم حفظ درجات التقييم وتحديث حالة الفارس المبدع بنجاح باهر!",
        // Additional features
        publicVoteTab: "ساحة تصويت الجمهور العام والتشجيع",
        publicVoteBtn: "دخول ساحة التصويت",
        submissionTab: "بوابة تسجيل الأبطال",
        idProofLabel: "وثيقة هوية البطل المرفوعة:",
        viewIdProof: "عرض وثيقة الهوية",
        certButton: "تنزيل وطباعة شهادة المشاركة الملوّنة والتقدير",
        certTitle: "شهادة تقدير وتميز لفرسان الإلقاء",
        certPresentedTo: "تتقدم إدارة مسابقة المدينة ستيج للخطابة والإلقاء للأطفال بتقديم هذه الشهادة الملوّنة المليئة بالفخر والتقدير للبطل المبدع:",
        certBody: "تقديراً لمشاركته الرائعة وشجاعته الاستثنائية وتألقه في تصفيات مسابقة الإلقاء والخطابة للأطفال للموسم الحالي، وتمنحه هذه الشهادة كرمز دائم للتميز والتفوق متمنين له دوام التألق والنجاح في سماء الفصاحة والخطابة.",
        certSign: "لجنة التحكيم وإدارة مسابقة المدينة ستيج",
        certStamp: "الختم الرسمي للمسابقة",
        votedSuccessfully: "تم تسجيل صوتك وتشجيعك بنجاح! شكراً لدعمك للأبطال الصغار.",
        alreadyVoted: "لقد قمت بالتصويت والتشجيع مسبقاً لهذا الفارس المبدع.",
        voteCount: "صوت مشجع",
        voteNow: "صوت للبطل وشجعه!",
        noQualifiedForVote: "لا يوجد فرسان مؤهلين لمرحلة التصويت الإلكتروني العام حالياً.",
        statusQueryPlaceholder: "استعلم عن حالة بطلنا برقم هويته",
        queryBtn: "ابحث عن حالة الطلب",
        queryResultTitle: "حالة طلب مشاركة بطلكم الصغير:",
        releasedResultShow: "معتمد ومنشور من الإدارة",
        pendingRelease: "جاري مراجعته وتقييمه حالياً من لجنة التحكيم",
        underReview: "تحت المراجعة",
        registrationForm: "نموذج التسجيل"
    },
    en: {
        title: "Al-Madinah Stage",
        subtitle: "Public Speaking Platform for Bright Kids",
        organizerPanel: "Jury & Organizer Dashboard",
        exitDashboard: "Back to Public Portal",
        sandboxTitle: "Currently in Playful Sandbox Mode",
        sandboxSub: "Your entries will save locally in your browser cache. Link your Google Workspace script inside the Organizer Panel to connect actual Cloud Storage.",
        liveTitle: "Linked with Live Cloud Database",
        liveSub: "All contestants and video uploads route safely and securely to your custom Spreadsheet and Google Drive folder.",
        setupGoogleLink: "Setup Cloud Link",
        noLoginRequired: "Super Easy Registration - No Login Needed!",
        showcaseTitle: "Al-Madinah Stage Kids Contest",
        showcaseSub: "An interactive, beautiful platform dedicated to managing public speaking competitions for kids aged 7 to 14. Input details and upload your speech!",
        fullName: "Child's Full Name (Four parts)",
        fullNamePlaceholder: "Mohamed Ahmed Al-Harkan",
        mobileNumber: "Parent's Mobile Number",
        mobilePlaceholder: "e.g. 05xxxxxxxx",
        nationalId: "Child's National ID / Iqama",
        nationalIdPlaceholder: "10-digit identification number",
        childAge: "Child's Age",
        ageCategory: "Age Category",
        selectAge: "Select Your Age",
        cat1: "Category 1 (7 to 10 years old)",
        cat2: "Category 2 (11 to 14 years old)",
        idProofFile: "Child ID / Family Card Document Proof",
        contestVideo: "Upload Your Magic Speech Video!",
        clickToUpload: "Click to upload file",
        dragDrop: "or drag and drop here in the magic box",
        videoSizeRecommend: "Accepted formats: MP4, MOV (Max 30MB, clearly filmed)",
        idProofRecommend: "Accepted formats: JPG, PNG, or clear PDF",
        parentAgreementText: "I hereby declare as the parent/guardian that all provided details are correct, and I agree to the terms and conditions of Al-Madinah Stage. I consent to uploading the participant's video and using it for evaluation, public voting, and media broadcasting. I also agree to taking photos/videos of the child during the live theatre stages and publishing them for official documentation.",
        agreeCheckbox: "I proudly agree to all terms, conditions and participation guidelines of the competition.",
        instructionsTitle: "Magic Video Requirements & Guidelines:",
        inst1: "The speech duration must be between 1 to 3 minutes max",
        inst2: "Ensure clear voice delivery, stable camera angle, and proper lighting with a big smile!",
        inst3: "Wear national dress or formal attire.",
        inst4: "The topic of presentation must be positive, inspiring, and age-appropriate.",
        validateDetails: "Verifying your magic information...",
        encodeVideo: "Encoding binary chunks of video securely...",
        uploadingDrive: "Uploading files directly to Google Drive folders...",
        completed: "Congratulations! Registered Successfully",
        encryptingSandbox: "Encrypting video buffer (Sandbox mode)...",
        savingSandbox: "Saving participant to kids leaderboard...",
        uploadEntry: "Submit Official Participation Entry!",
        uploadingEntry: "Uploading and submitting your speech...",
        subConfirmed: "Welcome to Al-Madinah Stage!",
        subConfirmedSub: "Your child's details, national ID copy, and speech video have been stored successfully in the competition portal. The jury is excited to review it shortly.",
        applicant: "Participant Name:",
        idPassport: "Child's ID Number:",
        submissionCode: "Submission Reference Code:",
        statusLabel: "Current Submission Status:",
        submitAnother: "Register Another Child",
        compEntries: "Al-Madinah Stage Kids Dashboard",
        compEntriesSub: "Grade children, adjust application status, manage voting, and generate certificates.",
        integrateDrive: "Cloud Setup",
        exportCsv: "Export Excel / CSV",
        totalEntries: "Total Active Kids",
        systemMode: "System Mode",
        prodServerless: "Production Cloud",
        sandboxSimulated: "Sandbox Simulated",
        driveIntegration: "Google Integration",
        connected: "Connected Successfully",
        notConfigured: "Not Configured",
        searchPlaceholder: "Search by name, code, or ID...",
        competitorDetails: "Contestant & Age Category",
        competitorDate: "Registration Date",
        action: "Action",
        play: "Evaluate & Play",
        videoReviewPanel: "Jury Assessment & Evaluation Desk",
        noVideoSelected: "No Participant Selected for Review",
        selectContestant: "Select a competitor from the table to watch their speech, grade criteria out of 100, and change their participation status.",
        driveFilePreview: "Live Google Drive Stream",
        apiSandboxConstraints: "Video is stored on your Google Drive. You can inspect it directly using the official Drive hyperlink.",
        openInGoogle: "Open Video on Google Drive",
        organizerPanelLog: "Jury Panel Authorization",
        passcodeInstructions: "Please provide the secret administrative passcode to access the grading and evaluation portal.",
        passcode: "Jury Passcode",
        passcodePlaceholder: "Enter secret key",
        defaultPasscode: "The default developer passcode is: admin123",
        accessDashboard: "Access Organizer Deck",
        incorrectPasscode: "Incorrect passcode, please try again with focus.",
        connectorTitle: "Google Workspace API Setup Helper",
        connectorSub: "Turn your standard Google Workspace account into a serverless database.",
        connectWebApp: "Link Google Apps Script Web App",
        pasteUrl: "Paste your published Google Apps Script URL here:",
        saveLink: "Save & Connect Cloud",
        createScript: "Create Google Apps Script Project",
        createScriptSub: "Visit script.google.com, create a new project, wipe out code templates, and paste this script:",
        copyCode: "Copy Apps Script Code",
        copied: "Copied!",
        deployWebApp: "Deployment & Settings Guide",
        deployStep1: "1. Click Deploy > New deployment at the top right.",
        deployStep2: "2. Choose Web app from the configuration gear icon.",
        deployStep3: "3. Set Execute as: Me (your-account@gmail.com).",
        deployStep4: "4. Set Who has access: Anyone (required to allow public upload without authentication).",
        deployStep5: "5. Hit Deploy, authorize permissions, and copy the Web App URL into the box above.",
        exitSetup: "Close Integration Panel",
        toastSuccess: "Submission registered successfully!",
        toastError: "Process failed. Please check your cloud configuration.",
        toastFormError: "Please complete all mandatory fields and accept the parent terms.",
        toastNoFile: "Please select the contestant's speech video.",
        toastSelectValid: "Please choose a valid video format.",
        toastSettingsSynced: "Google Workspace Cloud successfully linked!",
        toastValidAppScript: "Invalid URL. It must begin with script.google.com",
        toastNoExport: "No entries available to export.",
        toastCsvSuccess: "Contestant database successfully exported as CSV!",
        footerDesc: "Official Interactive Portal for Al-Madinah Stage Kids Speaking Competition. All Rights Reserved.",
        // Evaluation Criteria Terms
        evalSheetTitle: "Official Judging Scorecard (100 Marks)",
        statusSelection: "Set Stage & Participation Status",
        status_review: "Under Review & Assessment",
        status_qualified: "Qualified to Next Audition Stage",
        status_unqualified: "Not Qualified",
        status_finalist: "Qualified to Live Theatre Finals",
        status_winner: "Official Al-Madinah Stage Winner",
        releaseResultsBtn: "Approve & Publish Results to Parent Portal",
        resultsReleasedStatus: "Results Approved & Released to Public",
        resultsNotReleasedStatus: "Results Pending Administrative Approval",
        critVoice: "Voice Clarity & Intonation (20 Marks)",
        critConfidence: "Confidence, Presence & Stature (20 Marks)",
        critLanguage: "Linguistic Correctness (15 Marks)",
        critExpression: "Expression & Accentuation of Text (15 Marks)",
        critTime: "Commitment to Time Limits (10 Marks)",
        critContent: "Clarity, Logic & Value of Speech (10 Marks)",
        critCreativity: "Originality & Distinctive Touch (10 Marks)",
        totalScoreLabel: "Accumulated Final Score:",
        saveEvaluation: "Save Scorecard & Update Participant",
        toastEvalSaved: "Contestant assessment saved and status updated!",
        // Additional features
        publicVoteTab: "Public Voting Arena",
        publicVoteBtn: "Go to Public Voting",
        submissionTab: "Registration Desk",
        idProofLabel: "Submitted Child's ID Proof Document:",
        viewIdProof: "View Uploaded ID Proof",
        certButton: "Print Official Appreciation Certificate",
        certTitle: "Appreciation & Participation Certificate",
        certPresentedTo: "The Administrative Committee of Al-Madinah Stage Kids Speaking Competition proudly presents this certificate to:",
        certBody: "In recognition and celebration of their outstanding courage, presence, and expressive performance in the audition brackets of the public speaking contest, wishing them infinite growth and stellar success.",
        certSign: "Al-Madinah Stage Directorate",
        certStamp: "Official Competition Stamp",
        votedSuccessfully: "Your vote has been successfully cast! Thank you for supporting the kids.",
        alreadyVoted: "You have already voted for this contestant.",
        voteCount: "Votes",
        voteNow: "Vote for this speech!",
        noQualifiedForVote: "No contestants are currently active in the public voting phase.",
        statusQueryPlaceholder: "Query child's status with Child National ID",
        queryBtn: "Search Request Status",
        queryResultTitle: "Your child's application status detail:",
        releasedResultShow: "Approved & Confirmed by Administration",
        pendingRelease: "Pending evaluation. Scores will be released once finalized by the jury.",
        underReview: "Under Review",
        registrationForm: "Registration Form"
    }
};

// Advanced Apps Script code template to support new required fields (National ID, Age Group, ID proof, Evaluation status, and detailed scores)
const GOOGLE_APPS_SCRIPT_TEMPLATE = `function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    
    // 1. Get or create Al-Madinah Stage Video Folder
    var folderName = "Al-Madinah Stage Submissions";
    var folders = DriveApp.getFoldersByName(folderName);
    var folder = folders.hasNext() ? folders.next() : DriveApp.createFolder(folderName);
    
    // 2. Upload Child's Video
    var fileData = Utilities.base64Decode(data.videoBase64);
    var blob = Utilities.newBlob(fileData, data.mimeType, data.fileName);
    var file = folder.createFile(blob);
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    var videoUrl = file.getUrl();

    // 3. Upload Child's ID/Iqama Document if provided
    var idProofUrl = "";
    if (data.idProofBase64) {
      var idData = Utilities.base64Decode(data.idProofBase64);
      var idBlob = Utilities.newBlob(idData, data.idProofMimeType, "ID_" + data.nationalId + "_" + data.idProofFileName);
      var idFile = folder.createFile(idBlob);
      idFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      idProofUrl = idFile.getUrl();
    }
    
    // 4. Record to Google Spreadsheet
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheetName = "Submissions";
    var sheet = ss.getSheetByName(sheetName) || ss.insertSheet(sheetName);
    
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Submission Code", "Full Name", "Mobile", "National ID", "Age", "Age Category", 
        "Date Submitted", "Video Link", "ID Proof Link", "Status", "Total Score", "Results Released"
      ]);
    }
    
    var submissionCode = "STAGE-" + Math.floor(100000 + Math.random() * 900000);
    var createdAt = new Date().toISOString();
    
    sheet.appendRow([
      submissionCode,
      data.fullName,
      data.mobile,
      data.nationalId,
      data.childAge,
      data.ageCategory,
      createdAt,
      videoUrl,
      idProofUrl,
      "Under Review",
      0, // initial total score
      "FALSE" // resultsReleased initialized as false
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      submissionCode: submissionCode,
      videoUrl: videoUrl,
      idProofUrl: idProofUrl,
      createdAt: createdAt
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Submissions");
    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify([])).setMimeType(ContentService.MimeType.JSON);
    }
    
    var data = sheet.getDataRange().getValues();
    var jsonArray = [];
    
    for (var i = 1; i < data.length; i++) {
      var row = data[i];
      jsonArray.push({
        submissionCode: row[0],
        fullName: row[1],
        mobile: row[2].toString(),
        nationalId: row[3].toString(),
        childAge: row[4],
        ageCategory: row[5],
        createdAt: row[6],
        videoUrl: row[7],
        idProofUrl: row[8],
        status: row[9] || "Under Review",
        totalScore: Number(row[10] || 0),
        resultsReleased: row[11] === "TRUE" || row[11] === true
      });
    }
    
    return ContentService.createTextOutput(JSON.stringify(jsonArray)).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ error: err.toString() })).setMimeType(ContentService.MimeType.JSON);
  }
}`;

export default function App() {
    // Navigation states: 'submission', 'voting', 'success', 'admin'
    const [currentView, setCurrentView] = useState('submission');

    // Custom Toast notification state
    const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

    // Language state ('ar' defaults for Al-Madinah Stage)
    const [lang, setLang] = useState(localStorage.getItem('contest_app_lang') || 'ar');

    // Configuration integration state
    const [googleScriptUrl, setGoogleScriptUrl] = useState(
        localStorage.getItem('react_google_script_url') || ''
    );
    const [tempScriptUrl, setTempScriptUrl] = useState(googleScriptUrl);

    // Form input states
    const [fullName, setFullName] = useState('');
    const [mobile, setMobile] = useState('');
    const [nationalId, setNationalId] = useState('');
    const [childAge, setChildAge] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedIdFile, setSelectedIdFile] = useState(null);
    const [parentAgreed, setParentAgreed] = useState(false);

    const fileInputRef = useRef(null);
    const idFileInputRef = useRef(null);

    const [dragActive, setDragActive] = useState(false);
    const [idDragActive, setIdDragActive] = useState(false);

    // Submission Progress states
    const [isUploading, setIsUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [progressStateText, setProgressStateText] = useState('');

    // Successful submission details
    const [receiptDetails, setReceiptDetails] = useState(null);

    // Admin access states
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [adminPasscode, setAdminPasscode] = useState('');
    const [authErrorMsg, setAuthErrorMsg] = useState(false);
    const [submissions, setSubmissions] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedVideo, setSelectedVideo] = useState(null);

    // Filter and Sorting in admin
    const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('ALL');

    // Interactive Assessment Scores
    const [scores, setScores] = useState({
        voice: 0,
        confidence: 0,
        language: 0,
        expression: 0,
        time: 0,
        content: 0,
        creativity: 0
    });
    const [evalStatus, setEvalStatus] = useState('Under Review');
    const [evalResultsReleased, setEvalResultsReleased] = useState(false);

    // Parent status inquiry state
    const [queryId, setQueryId] = useState('');
    const [queriedRecord, setQueriedRecord] = useState(null);
    const [hasQueried, setHasQueried] = useState(false);

    // Integration guide Modal state
    const [showSetupModal, setShowSetupModal] = useState(false);
    const [codeCopied, setCodeCopied] = useState(false);

    // Certificate printing overlay helper state
    const [showCertificate, setShowCertificate] = useState(false);
    const [certTarget, setCertTarget] = useState(null);

    // Quick dictionary reference
    const t = TRANSLATIONS[lang];

    // Auto determine age group category string
    const getAgeCategoryLabel = (age) => {
        if (!age) return '';
        const ageNum = parseInt(age);
        if (ageNum >= 7 && ageNum <= 10) {
            return lang === 'ar' ? "الفئة الأولى (من 7 إلى 10 سنوات)" : "Category 1 (7 to 10 years)";
        } else if (ageNum >= 11 && ageNum <= 14) {
            return lang === 'ar' ? "الفئة الثانية (من 11 إلى 14 سنة)" : "Category 2 (11 to 14 years)";
        }
        return '';
    };

    const handleLanguageToggle = () => {
        const nextLang = lang === 'en' ? 'ar' : 'en';
        setLang(nextLang);
        localStorage.setItem('contest_app_lang', nextLang);
    };

    // Load data initially and keep updated on state switch
    useEffect(() => {
        loadSubmissionsData();
    }, [googleScriptUrl, currentView]);

    // Synchronize scores when selecting a participant in admin panel
    useEffect(() => {
        if (selectedVideo) {
            setScores(selectedVideo.scores || {
                voice: 0,
                confidence: 0,
                language: 0,
                expression: 0,
                time: 0,
                content: 0,
                creativity: 0
            });
            setEvalStatus(selectedVideo.status || 'Under Review');
            setEvalResultsReleased(selectedVideo.resultsReleased || false);
        }
    }, [selectedVideo]);

    const loadSubmissionsData = async () => {
        if (googleScriptUrl && googleScriptUrl.startsWith('https://script.google.com')) {
            try {
                const response = await fetch(googleScriptUrl);
                const data = await response.json();
                if (Array.isArray(data)) {
                    setSubmissions(data.reverse()); // Keep newest first
                } else {
                    setSubmissions([]);
                }
            } catch (err) {
                console.error("Failed fetching live spreadsheet records", err);
                showToast(t.toastError, "error");
                loadSandboxSubmissions();
            }
        } else {
            loadSandboxSubmissions();
        }
    };

    const loadSandboxSubmissions = () => {
        const sandboxData = JSON.parse(localStorage.getItem("submissions_almadinah_stage") || "[]");
        sandboxData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setSubmissions(sandboxData);
    };

    const showToast = (message, type = 'success') => {
        setToast({ show: true, message, type });
        setTimeout(() => {
            setToast({ show: false, message: '', type: 'success' });
        }, 4000);
    };

    // Drag-and-drop helpers for speech video
    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const file = e.dataTransfer.files[0];
            if (file.type.startsWith('video/')) {
                setSelectedFile(file);
            } else {
                showToast(t.toastSelectValid, "error");
            }
        }
    };

    // Drag-and-drop helpers for child National ID proof
    const handleIdDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setIdDragActive(true);
        } else if (e.type === "dragleave") {
            setIdDragActive(false);
        }
    };

    const handleIdDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIdDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const file = e.dataTransfer.files[0];
            setSelectedIdFile(file);
        }
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            if (file.type.startsWith('video/')) {
                setSelectedFile(file);
            } else {
                showToast(t.toastSelectValid, "error");
            }
        }
    };

    const handleIdFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedIdFile(e.target.files[0]);
        }
    };

    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result.split(',')[1]);
            reader.onerror = error => reject(error);
        });
    };

    // Complete submission pipeline
    const handleFormSubmission = async (e) => {
        e.preventDefault();

        if (!fullName || !mobile || !nationalId || !childAge || !parentAgreed) {
            showToast(t.toastFormError, "error");
            return;
        }

        if (!selectedFile) {
            showToast(t.toastNoFile, "error");
            return;
        }

        setIsUploading(true);
        setUploadProgress(10);
        setProgressStateText(t.validateDetails);

        let videoUrl = "";
        let idProofUrl = "";
        const uniqueSubId = "STAGE-" + Math.floor(100000 + Math.random() * 900000);
        const calculatedCategory = getAgeCategoryLabel(childAge);

        try {
            if (googleScriptUrl && googleScriptUrl.startsWith('https://script.google.com')) {
                // Active cloud storage workflow with Apps Script integration
                setProgressStateText(t.encodeVideo);
                setUploadProgress(35);

                const base64Video = await getBase64(selectedFile);
                let base64Id = "";

                if (selectedIdFile) {
                    base64Id = await getBase64(selectedIdFile);
                }

                setProgressStateText(t.uploadingDrive);
                setUploadProgress(70);

                const payload = {
                    fullName,
                    mobile,
                    nationalId,
                    childAge,
                    ageCategory: calculatedCategory,
                    fileName: selectedFile.name,
                    mimeType: selectedFile.type,
                    videoBase64: base64Video,
                    idProofFileName: selectedIdFile ? selectedIdFile.name : "",
                    idProofMimeType: selectedIdFile ? selectedIdFile.type : "",
                    idProofBase64: base64Id
                };

                await fetch(googleScriptUrl, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'text/plain'
                    },
                    body: JSON.stringify(payload)
                });

                setUploadProgress(100);
                setProgressStateText(t.completed);
            } else {
                // Offline persistent simulation mode
                setProgressStateText(t.encryptingSandbox);
                let localProgress = 15;

                await new Promise((resolve) => {
                    const interval = setInterval(() => {
                        localProgress += 20;
                        if (localProgress >= 100) {
                            clearInterval(interval);
                            resolve();
                        } else {
                            setUploadProgress(localProgress);
                            if (localProgress > 50) setProgressStateText(t.savingSandbox);
                        }
                    }, 150);
                });

                // Set beautiful sample video loops for realistic playability
                const demoVideos = [
                    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
                    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                ];

                videoUrl = demoVideos[Math.floor(Math.random() * demoVideos.length)];
                idProofUrl = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"; // placeholder mock PDF

                // Save simulated record
                const newRecord = {
                    submissionCode: uniqueSubId,
                    fullName,
                    mobile,
                    nationalId,
                    childAge,
                    ageCategory: calculatedCategory,
                    videoUrl,
                    idProofUrl,
                    createdAt: new Date().toISOString(),
                    status: 'Under Review',
                    scores: {
                        voice: 0,
                        confidence: 0,
                        language: 0,
                        expression: 0,
                        time: 0,
                        content: 0,
                        creativity: 0
                    },
                    totalScore: 0,
                    resultsReleased: false,
                    votes: Math.floor(Math.random() * 12)
                };

                const existing = JSON.parse(localStorage.getItem("submissions_almadinah_stage") || "[]");
                existing.push(newRecord);
                localStorage.setItem("submissions_almadinah_stage", JSON.stringify(existing));
            }

            setReceiptDetails({
                fullName,
                nationalId,
                submissionCode: uniqueSubId,
                status: 'Under Review'
            });

            showToast(t.toastSuccess, "success");
            setCurrentView('success');

        } catch (err) {
            console.error(err);
            showToast(t.toastError, "error");
        } finally {
            setIsUploading(false);
            setUploadProgress(0);
            setProgressStateText("");
        }
    };

    // Submit assessment metrics
    const saveJuryEvaluation = () => {
        if (!selectedVideo) return;

        const totalSum = Number(scores.voice) +
            Number(scores.confidence) +
            Number(scores.language) +
            Number(scores.expression) +
            Number(scores.time) +
            Number(scores.content) +
            Number(scores.creativity);

        // Save evaluation back into dataset
        const updatedSubmissions = submissions.map(item => {
            if (item.submissionCode === selectedVideo.submissionCode) {
                return {
                    ...item,
                    scores: { ...scores },
                    totalScore: totalSum,
                    status: evalStatus,
                    resultsReleased: evalResultsReleased
                };
            }
            return item;
        });

        setSubmissions(updatedSubmissions);

        // Persist locally
        if (!googleScriptUrl) {
            localStorage.setItem("submissions_almadinah_stage", JSON.stringify(updatedSubmissions));
        } else {
            showToast("جاري التحديث... يرجى مراجعة جدول البيانات أيضاً لمطابقة البيانات المرفوعة حياً.", "success");
        }

        // Refresh active panel view item
        setSelectedVideo({
            ...selectedVideo,
            scores: { ...scores },
            totalScore: totalSum,
            status: evalStatus,
            resultsReleased: evalResultsReleased
        });

        showToast(t.toastEvalSaved, "success");
    };

    // Simulated Voting logic
    const registerVote = (item) => {
        const voterRecord = JSON.parse(localStorage.getItem("almadinah_user_votes") || "[]");
        if (voterRecord.includes(item.submissionCode)) {
            showToast(t.alreadyVoted, "error");
            return;
        }

        const updatedSubmissions = submissions.map(sub => {
            if (sub.submissionCode === item.submissionCode) {
                return { ...sub, votes: (sub.votes || 0) + 1 };
            }
            return sub;
        });

        setSubmissions(updatedSubmissions);
        localStorage.setItem("submissions_almadinah_stage", JSON.stringify(updatedSubmissions));

        voterRecord.push(item.submissionCode);
        localStorage.setItem("almadinah_user_votes", JSON.stringify(voterRecord));

        showToast(t.votedSuccessfully, "success");
    };

    // Parent status inquiry
    const handleQueryStatus = (e) => {
        e.preventDefault();
        if (!queryId.trim()) return;

        const match = submissions.find(item => item.nationalId.trim() === queryId.trim());
        setQueriedRecord(match || null);
        setHasQueried(true);
    };

    const handleAdminAuth = () => {
        if (adminPasscode.trim() === "admin123") {
            setShowAuthModal(false);
            setAdminPasscode('');
            setAuthErrorMsg(false);
            setCurrentView('admin');
        } else {
            setAuthErrorMsg(true);
        }
    };

    const saveGoogleIntegration = () => {
        if (tempScriptUrl.trim() === "" || tempScriptUrl.startsWith("https://script.google.com")) {
            localStorage.setItem('react_google_script_url', tempScriptUrl.trim());
            setGoogleScriptUrl(tempScriptUrl.trim());
            setShowSetupModal(false);
            showToast(t.toastSettingsSynced, "success");
        } else {
            showToast(t.toastValidAppScript, "error");
        }
    };

    const exportToCSV = () => {
        if (submissions.length === 0) {
            showToast(t.toastNoExport, "error");
            return;
        }

        const headers = [
            "Submission Code", "Full Name", "Mobile Number", "National ID", "Age", "Category",
            "Voice Core (20)", "Confidence Core (20)", "Language Core (15)", "Expression Core (15)",
            "Time Core (10)", "Content Core (10)", "Creativity Core (10)", "Total Score (100)", "Status", "Date Submitted"
        ];

        const rows = submissions.map(item => [
            item.submissionCode || "",
            `"${(item.fullName || "").replace(/"/g, '""')}"`,
            `"${item.mobile || ""}"`,
            `"${item.nationalId || ""}"`,
            item.childAge || "",
            `"${item.ageCategory || ""}"`,
            item.scores?.voice || 0,
            item.scores?.confidence || 0,
            item.scores?.language || 0,
            item.scores?.expression || 0,
            item.scores?.time || 0,
            item.scores?.content || 0,
            item.scores?.creativity || 0,
            item.totalScore || 0,
            item.status || 'Under Review',
            item.createdAt || ""
        ]);

        const csvContent = "data:text/csv;charset=utf-8,\uFEFF"
            + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `Madinah_Stage_Competitors_${new Date().toISOString().slice(0, 10)}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showToast(t.toastCsvSuccess, "success");
    };

    // Filtered submissions based on search and category filter
    const filteredSubmissions = submissions.filter(item => {
        const query = searchQuery.toLowerCase();
        const matchesSearch = (
            item.fullName?.toLowerCase().includes(query) ||
            item.mobile?.includes(query) ||
            item.nationalId?.toLowerCase().includes(query) ||
            item.submissionCode?.toLowerCase().includes(query)
        );

        const matchesCategory = selectedCategoryFilter === 'ALL' ||
            (selectedCategoryFilter === 'CAT1' && item.childAge >= 7 && item.childAge <= 10) ||
            (selectedCategoryFilter === 'CAT2' && item.childAge >= 11 && item.childAge <= 14);

        return matchesSearch && matchesCategory;
    });

    return (
        <div dir={lang === 'ar' ? 'rtl' : 'ltr'} className="bg-amber-50/30 text-slate-900 min-h-screen flex flex-col antialiased font-sans relative overflow-hidden">

            {/* Playful Floating Bubbles Background for Kids Theme */}
            <div className="absolute top-10 left-10 w-24 h-24 bg-pink-100 rounded-full blur-3xl opacity-60 pointer-events-none animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-sky-200 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
            <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-purple-100 rounded-full blur-3xl opacity-40 pointer-events-none animate-bounce duration-1000"></div>

            {/* Toast Alert Banner */}
            {toast.show && (
                <div className={`fixed bottom-4 ${lang === 'ar' ? 'left-4' : 'right-4'} z-50 text-white px-6 py-4 rounded-2xl shadow-xl flex items-center space-x-3 gap-2 transition-all duration-300 transform translate-y-0 ${toast.type === 'success' ? 'bg-gradient-to-r from-emerald-500 to-teal-600' : 'bg-gradient-to-r from-rose-500 to-red-600'
                    }`}>
                    <span className="text-sm font-bold">{toast.message}</span>
                </div>
            )}

            {/* Playful Navigation Top Header */}
            <nav className="bg-white/95 border-b-4 border-yellow-300 sticky top-0 z-30 shadow-md backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20 items-center">

                        {/* Branding Title */}
                        <div className="flex items-center space-x-2.5 gap-2.5">
                            <div className="w-12 h-12 bg-gradient-to-tr from-amber-400 via-orange-400 to-pink-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-orange-200 transform hover:rotate-6 transition-all duration-200 cursor-pointer">
                                <Star className="w-7 h-7" />
                            </div>
                            <div>
                                <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                                    {t.title}
                                </span>
                                <span className="text-xs block text-purple-500 font-bold tracking-wider -mt-0.5">
                                    {t.subtitle}
                                </span>
                            </div>
                        </div>

                        {/* Menu and Controls */}
                        <div className="flex items-center space-x-2 gap-2">

                            {/* Submission Portal / Voting Tab switchers */}
                            <button
                                onClick={() => setCurrentView('submission')}
                                className={`px-4 py-2.5 text-xs sm:text-sm font-black rounded-2xl transition-all border-b-4 font-normal ${currentView === 'submission'
                                        ? 'bg-purple-600 border-purple-800 text-white shadow-md'
                                        : 'bg-purple-50 hover:bg-purple-100 text-purple-700 border-transparent hover:border-purple-200'
                                    }`}
                            >
                                {t.submissionTab}
                            </button>

                            <button
                                onClick={() => setCurrentView('voting')}
                                className={`px-4 py-2.5 text-xs sm:text-sm font-black rounded-2xl transition-all border-b-4 font-normal ${currentView === 'voting'
                                        ? 'bg-purple-600 border-purple-800 text-white shadow-md '
                                        : 'bg-purple-50 hover:bg-purple-100 text-purple-700 border-transparent hover:border-purple-200'
                                    }`}
                            >
                                {t.publicVoteTab}
                            </button>

                            {/* Bilingual Toggle Button */}
                            <button
                                onClick={handleLanguageToggle}
                                className="flex items-center justify-center w-11 h-11 text-amber-700 bg-amber-100 hover:bg-amber-200 border-b-4 border-amber-300 hover:border-amber-400 rounded-2xl transition-all duration-200"
                                title={lang === 'en' ? 'العربية' : 'English'}
                            >
                                <Languages className="w-5 h-5" />
                            </button>

                            {currentView !== 'admin' ? (
                                <button
                                    onClick={() => setShowAuthModal(true)}
                                    className="flex items-center space-x-1 gap-1 px-4 h-11 text-xs sm:text-sm font-black text-slate-700 bg-slate-100 hover:bg-yellow-100 border-b-4 border-slate-300 hover:border-yellow-400 rounded-2xl transition-all duration-200"
                                >
                                    <Lock className="w-4 h-4 text-purple-600" />
                                    <span className="hidden md:inline font-normal">{t.organizerPanel}</span>
                                </button>
                            ) : (
                                <button
                                    onClick={() => setCurrentView('submission')}
                                    className="flex items-center space-x-1 gap-1 px-4 h-11 text-xs sm:text-sm font-black text-slate-755 bg-slate-100 hover:bg-rose-50 border-b-4 border-slate-300 hover:border-rose-400 rounded-2xl transition-all duration-200"
                                >
                                    <ArrowLeft className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                                    <span>{t.exitDashboard}</span>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Container */}
            <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">

                {/* Sandbox Indicator Warning */}
                {/*{currentView !== 'admin' && (*/}
                {/*    <div className={`mb-8 p-5 rounded-[1.5rem] border-b-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-300 shadow-sm ${googleScriptUrl*/}
                {/*            ? 'bg-emerald-50 border-emerald-300 text-emerald-800'*/}
                {/*            : 'bg-purple-50 border-purple-300 text-purple-800'*/}
                {/*        }`}>*/}
                {/*        <div className="flex items-start space-x-3 gap-3">*/}
                {/*            <div className={`mt-0.5 text-lg flex-shrink-0 ${googleScriptUrl ? 'text-emerald-600' : 'text-purple-600'}`}>*/}
                {/*                <Info className="w-6 h-6" />*/}
                {/*            </div>*/}
                {/*            <div className="text-sm">*/}
                {/*                <strong className="block font-black text-base font-bold">*/}
                {/*                    {googleScriptUrl ? t.liveTitle : t.sandboxTitle}*/}
                {/*                </strong>*/}
                {/*                <span className={`${googleScriptUrl ? 'text-emerald-700/90' : 'text-purple-700/90'} text-xs font-semibold`}>*/}
                {/*                    {googleScriptUrl ? t.liveSub : t.sandboxSub}*/}
                {/*                </span>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        {!googleScriptUrl && (*/}
                {/*            <div className="flex items-center">*/}
                {/*                <button*/}
                {/*                    onClick={() => {*/}
                {/*                        setShowAuthModal(true);*/}
                {/*                        setTimeout(() => setAdminPasscode('admin123'), 200);*/}
                {/*                    }}*/}
                {/*                    className="px-4 py-2.5 bg-yellow-400 hover:bg-yellow-500 text-yellow-950 text-xs font-black rounded-xl border-b-2 border-yellow-600 hover:border-yellow-700 transition-all flex items-center space-x-1 gap-1 shadow-sm"*/}
                {/*                >*/}
                {/*                    <Settings className="w-4 h-4" />*/}
                {/*                    <span>{t.setupGoogleLink}</span>*/}
                {/*                </button>*/}
                {/*            </div>*/}
                {/*        )}*/}
                {/*    </div>*/}
                {/*)}*/}

                {/* VIEW 1: Public Submission Desk & Form */}
                {currentView === 'submission' && (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                        {/* Guide Guidelines Sidebar */}
                        <div className="lg:col-span-4 space-y-6">
                            <div className="bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400 text-white rounded-[2rem] p-8 shadow-xl shadow-purple-900/10 relative overflow-hidden border-b-8 border-purple-800">
                                <div className="absolute right-0 bottom-0 opacity-15 pointer-events-none transform translate-y-8 translate-x-8">
                                    <Award className="w-48 h-48" />
                                </div>
                                <div className="absolute top-3 left-3 opacity-20">
                                    <Music className="w-8 h-8" />
                                </div>
                                <span className="inline-block px-3 py-1 text-[10px] font-bold bg-white/20 rounded-full uppercase tracking-wider mb-4 border border-white/10">
                                    {t.noLoginRequired}
                                </span>
                                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2 flex items-center gap-2">
                                    <span>{t.showcaseTitle}</span>
                                </h1>
                                <p className="text-white/90 text-xs sm:text-sm font-medium leading-relaxed">
                                    {t.showcaseSub}
                                </p>
                            </div>

                            {/* Requirement Checklist card */}
                            <div className="bg-white rounded-[2rem] border-4 border-yellow-200 p-6 sm:p-7 space-y-4 shadow-sm relative overflow-hidden">
                                <div className="absolute -top-3 -left-3 w-10 h-10 bg-yellow-100 rounded-full opacity-40"></div>
                                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2 border-b-2 border-slate-100 pb-3">
                                    <BookOpen className="w-5 h-5 text-orange-500" />
                                    <span>{t.instructionsTitle}</span>
                                </h3>
                                <ul className="space-y-3.5 text-xs sm:text-sm font-semibold text-slate-650">
                                    <li className="flex items-start gap-2.5">
                                        <span>{t.inst1}</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span>{t.inst2}</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span>{t.inst3}</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span>{t.inst4}</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Parental Quick Query Panel */}
                            <div className="bg-white rounded-[2rem] border-4 border-purple-200 p-6 space-y-4 shadow-sm">
                                <h3 className="font-bold text-purple-950 text-base flex items-center gap-2 border-b-2 border-slate-100 pb-3">
                                    <Search className="w-5 h-5 text-purple-600" />
                                    <span>{t.queryResultTitle}</span>
                                </h3>
                                <form onSubmit={handleQueryStatus} className="space-y-3">
                                    <input
                                        type="text"
                                        placeholder={t.statusQueryPlaceholder}
                                        value={queryId}
                                        onChange={(e) => setQueryId(e.target.value)}
                                        className="w-full px-4 py-3 border-2 border-purple-100 rounded-2xl text-xs sm:text-sm font-semibold focus:outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-400 transition-all"
                                    />
                                    <button
                                        type="submit"
                                        className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-2xl border-b-4 border-purple-800 transition-all text-xs sm:text-sm"
                                    >
                                        {t.queryBtn}
                                    </button>
                                </form>

                                {hasQueried && (
                                    <div className="p-4 bg-purple-50/50 rounded-2xl border-2 border-purple-100 text-xs sm:text-sm text-slate-700 animate-fade-in space-y-3">
                                        {queriedRecord ? (
                                            <div className="space-y-3">
                                                <p className="font-extrabold text-purple-950">{queriedRecord.fullName}</p>
                                                <div className="flex justify-between items-center bg-white p-3 rounded-xl border border-purple-100">
                                                    <span className="text-slate-400 font-bold">{t.statusLabel}</span>
                                                    <span className={`px-3 py-1 rounded-full text-[10px] sm:text-xs font-black ${queriedRecord.status === 'Winner' ? 'bg-yellow-400 text-yellow-950 border border-yellow-600' :
                                                            queriedRecord.status === 'Qualified' || queriedRecord.status === 'Finalist' ? 'bg-green-100 text-green-800 border border-green-300' :
                                                                queriedRecord.status === 'Not Qualified' ? 'bg-rose-100 text-rose-800' :
                                                                    'bg-purple-100 text-purple-800'
                                                        }`}>
                                                        {t[`status_${queriedRecord.status.toLowerCase().replace(" ", "_")}`] || queriedRecord.status}
                                                    </span>
                                                </div>

                                                {/* Interactive Certificate presentation for qualified kids */}
                                                {queriedRecord.resultsReleased && (queriedRecord.status === 'Qualified' || queriedRecord.status === 'Finalist' || queriedRecord.status === 'Winner') && (
                                                    <button
                                                        onClick={() => {
                                                            setCertTarget(queriedRecord);
                                                            setShowCertificate(true);
                                                        }}
                                                        className="w-full py-3 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-yellow-950 font-black rounded-xl text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm border-b-2 border-amber-600"
                                                    >
                                                        <Award className="w-4 h-4" />
                                                        <span>{t.certButton}</span>
                                                    </button>
                                                )}

                                                {!queriedRecord.resultsReleased && (
                                                    <p className="text-xs text-amber-600 text-center italic font-bold"> {t.pendingRelease}</p>
                                                )}
                                            </div>
                                        ) : (
                                            <p className="text-center text-slate-400 py-3 font-semibold">لا توجد مشاركة مسجلة برقم الهوية هذا حالياً.</p>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Registration Form Field */}
                        <div className="lg:col-span-8 bg-white rounded-[2.5rem] border-4 border-yellow-300 shadow-xl p-6 sm:p-10 relative ">
                            <div className="absolute top-0 right-10 transform -translate-y-1/2 bg-yellow-300 text-yellow-950 font-black px-6 py-1.5 rounded-full text-xs shadow-sm font-bold">
                                {t.registrationForm}
                            </div>

                            <form onSubmit={handleFormSubmission} className="space-y-6">

                                {/* Child Name Input */}
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.fullName} <span className="text-rose-500">*</span></label>
                                    <input
                                        type="text"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        required
                                        placeholder={t.fullNamePlaceholder}
                                        className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-200 rounded-2xl text-slate-900 font-semibold placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-400 transition-all text-sm"
                                    />
                                </div>

                                {/* Mobile, National ID & Age Category Row */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">{t.mobileNumber} <span className="text-rose-500">*</span></label>
                                        <input
                                            type="tel"
                                            value={mobile}
                                            onChange={(e) => setMobile(e.target.value)}
                                            required
                                            placeholder={t.mobilePlaceholder}
                                            className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-200 rounded-2xl text-slate-900 font-semibold placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-400 transition-all text-sm"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">{t.nationalId} <span className="text-rose-500">*</span></label>
                                        <input
                                            type="text"
                                            value={nationalId}
                                            onChange={(e) => setNationalId(e.target.value)}
                                            required
                                            placeholder={t.nationalIdPlaceholder}
                                            className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-200 rounded-2xl text-slate-900 font-semibold placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-400 transition-all text-sm"
                                        />
                                    </div>

                                    {/* Redesigned Child Age Custom Dropdown list */}
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">{t.childAge} <span className="text-rose-500">*</span></label>
                                        <div className="relative">
                                            <select
                                                value={childAge}
                                                onChange={(e) => setChildAge(e.target.value)}
                                                required
                                                className={`w-full bg-slate-50 border-2 border-slate-200 rounded-2xl text-slate-900 font-semibold focus:outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-400 transition-all text-sm appearance-none py-4 ${lang === 'ar' ? 'pl-10 pr-5' : 'pr-10 pl-5'
                                                    }`}
                                            >
                                                <option value="" className="text-slate-400">{t.selectAge}</option>
                                                {[7, 8, 9, 10, 11, 12, 13, 14].map(age => (
                                                    <option key={age} value={age} className="text-slate-900 font-semibold">
                                                        {age} {lang === 'ar' ? 'سنوات' : 'Years'}
                                                    </option>
                                                ))}
                                            </select>
                                            {/* Interactive Custom Styled Indicator Arrow */}
                                            <div className={`absolute inset-y-0 ${lang === 'ar' ? 'left-4' : 'right-4'} flex items-center pointer-events-none text-purple-600`}>
                                                <ChevronDown className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Automatically Determined Age category indicator */}
                                {childAge && (
                                    <div className="p-4 bg-purple-50/70 border-2 border-purple-200/60 rounded-2xl text-xs sm:text-sm text-purple-800 font-bold flex items-center gap-2">
                                        <Award className="w-5 h-5 text-purple-600" />
                                        <span>{t.ageCategory}: {getAgeCategoryLabel(childAge)}</span>
                                    </div>
                                )}

                                {/* National ID / Iqama proof document upload */}
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.idProofFile} <span className="text-rose-500">*</span></label>
                                    <div
                                        onDragEnter={handleIdDrag}
                                        onDragOver={handleIdDrag}
                                        onDragLeave={handleIdDrag}
                                        onDrop={handleIdDrop}
                                        onClick={() => idFileInputRef.current.click()}
                                        className={`border-4 border-dashed rounded-3xl p-8 text-center cursor-pointer transition-all duration-200 group relative ${idDragActive ? 'border-purple-500 bg-purple-50/20' : 'border-slate-200 hover:border-purple-500 bg-slate-50 hover:bg-purple-50/10'
                                            }`}
                                    >
                                        <input
                                            ref={idFileInputRef}
                                            type="file"
                                            accept=".jpg,.jpeg,.png,.pdf"
                                            onChange={handleIdFileChange}
                                            className="hidden"
                                        />

                                        {!selectedIdFile ? (
                                            <div className="space-y-3">
                                                <div className="w-14 h-14 bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center mx-auto text-slate-400 group-hover:text-purple-600 group-hover:scale-110 transition-all duration-200">
                                                    <CloudUpload className="w-7 h-7" />
                                                </div>
                                                <div className="text-slate-655 text-sm sm:text-sm font-bold">
                                                    <span className="font-bold text-purple-600 group-hover:underline">{t.clickToUpload}</span> {t.dragDrop}
                                                </div>
                                                <p className="text-xs sm:text-sm text-slate-400">{t.idProofRecommend}</p>
                                            </div>
                                        ) : (
                                            <div className="flex items-center justify-between p-3 bg-white border-2 border-purple-100 rounded-2xl shadow-sm gap-2">
                                                <div className="flex items-center space-x-3 gap-2 text-left min-w-0">
                                                    <div className="w-11 h-11 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 flex-shrink-0">
                                                        <Check className="w-6 h-6" />
                                                    </div>
                                                    <div className="min-w-0">
                                                        <p className="text-xs sm:text-sm font-bold text-slate-800 truncate max-w-[180px] sm:max-w-xs">{selectedIdFile.name}</p>
                                                    </div>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setSelectedIdFile(null);
                                                    }}
                                                    className="w-8 h-8 rounded-lg hover:bg-rose-50 text-slate-400 hover:text-rose-600 flex items-center justify-center transition-all"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Speech Video Upload Drag & Drop */}
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.contestVideo} <span className="text-rose-500">*</span></label>
                                    <div
                                        onDragEnter={handleDrag}
                                        onDragOver={handleDrag}
                                        onDragLeave={handleDrag}
                                        onDrop={handleDrop}
                                        onClick={() => fileInputRef.current.click()}
                                        className={`border-4 border-dashed rounded-3xl p-8 text-center cursor-pointer transition-all duration-200 group relative ${dragActive ? 'border-orange-400 bg-orange-50/20' : 'border-slate-200 hover:border-orange-400 bg-slate-50 hover:bg-orange-50/10'
                                            }`}
                                    >
                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            accept="video/*"
                                            onChange={handleFileChange}
                                            className="hidden"
                                        />

                                        {!selectedFile ? (
                                            <div className="space-y-3">
                                                <div className="w-14 h-14 bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center mx-auto text-slate-400 group-hover:text-orange-500 group-hover:scale-110 transition-all duration-200">
                                                    <Video className="w-7 h-7" />
                                                </div>
                                                <div className="text-slate-655 text-sm sm:text-base font-bold">
                                                    <span className="font-bold text-orange-500 group-hover:underline">{t.clickToUpload}</span> {t.dragDrop}
                                                </div>
                                                <p className="text-xs sm:text-sm text-slate-400">{t.videoSizeRecommend}</p>
                                            </div>
                                        ) : (
                                            <div className="flex items-center justify-between p-3 bg-white border-2 border-orange-100 rounded-2xl shadow-sm gap-2">
                                                <div className="flex items-center space-x-3 gap-3 text-left min-w-0">
                                                    <div className="w-11 h-11 bg-orange-50 rounded-lg flex items-center justify-center text-orange-500 flex-shrink-0">
                                                        <Video className="w-6 h-6" />
                                                    </div>
                                                    <div className="min-w-0">
                                                        <p className="text-xs sm:text-sm font-bold text-slate-800 truncate max-w-[180px] sm:max-w-xs">{selectedFile.name}</p>
                                                        <p className="text-xs text-slate-400">{(selectedFile.size / (1024 * 1024)).toFixed(2)} MB</p>
                                                    </div>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setSelectedFile(null);
                                                    }}
                                                    className="w-9 h-9 rounded-xl hover:bg-rose-50 text-slate-400 hover:text-rose-600 flex items-center justify-center transition-all"
                                                >
                                                    <Trash2 className="w-4.5 h-4.5" />
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Legal Statement Terms and Conditions Checkbox */}
                                <div className="bg-amber-50/40 rounded-3xl p-5 sm:p-6 border-2 border-amber-200 space-y-4">
                                    <div className="flex items-start gap-2.5 text-slate-655 text-justify">
                                        <ShieldCheck className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-xs sm:text-sm font-normal leading-relaxed">
                                            {t.parentAgreementText}
                                        </p>
                                    </div>
                                    <label className="flex items-center gap-2.5 cursor-pointer mt-2 pt-3 border-t-2 border-amber-200">
                                        <input
                                            type="checkbox"
                                            checked={parentAgreed}
                                            onChange={(e) => setParentAgreed(e.target.checked)}
                                            className="w-5 h-5 text-purple-600 border-slate-300 rounded focus:ring-purple-500"
                                        />
                                        <span className="text-xs sm:text-sm font-bold  text-purple-950">{t.agreeCheckbox} <span className="text-rose-500">*</span></span>
                                    </label>
                                </div>

                                {/* Progress Bar Loader (Active during upload) */}
                                {isUploading && (
                                    <div className="space-y-2 bg-purple-50/50 p-4 border border-purple-100 rounded-xl animate-fade-in">
                                        <div className="flex justify-between items-center gap-2">
                                            <span className="text-xs sm:text-sm font-bold text-purple-700 flex items-center">
                                                <Loader2 className={`w-4 h-4 animate-spin ${lang === 'ar' ? 'ml-1.5' : 'mr-1.5'}`} />
                                                {progressStateText}
                                            </span>
                                            <span className="text-xs sm:text-sm font-bold text-purple-700">{uploadProgress}%</span>
                                        </div>
                                        <div className="w-full bg-purple-100 rounded-full h-3.5 overflow-hidden border border-purple-200">
                                            <div className="bg-purple-600 h-full rounded-full transition-all duration-150" style={{ width: `${uploadProgress}%` }}></div>
                                        </div>
                                    </div>
                                )}

                                {/* Submit Action Button */}
                                <button
                                    type="submit"
                                    disabled={isUploading}
                                    className={`w-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white font-bold py-5 px-6 rounded-3xl shadow-xl hover:shadow-purple-200 active:scale-[0.99] transition-all flex items-center justify-center space-x-2 gap-2 text-sm sm:text-base border-b-8 border-purple-800 ${isUploading ? 'opacity-50 cursor-not-allowed' : ''
                                        }`}
                                >
                                    <CloudUpload className="w-6 h-6" />
                                    <span>{isUploading ? t.uploadingEntry : t.uploadEntry}</span>
                                </button>

                            </form>
                        </div>
                    </div>
                )}

                {/* VIEW 2: Public Voting Arena */}
                {currentView === 'voting' && (
                    <div className="space-y-6">
                        <div className="text-center max-w-xl mx-auto space-y-3">
                            <span className="px-4 py-1.5 text-xs font-bold bg-pink-100 text-pink-700 border border-pink-200 rounded-full inline-block">
                                {t.publicVoteTab}
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent pb-2 ">تفاعل الجمهور والتصويت المفتوح</h2>
                            <p className="text-slate-600 text-sm sm:text-base font-semibold">
                                صوتكم يصنع الفرق! شارك في دعم متحدثي المستقبل من فئة البراعم والناشئين المؤهلين للتصويت الإلكتروني العام.
                            </p>
                        </div>

                        {/* Voting Arena Grid */}
                        {submissions.filter(s => s.status === 'Qualified' || s.status === 'Finalist' || s.status === 'Winner').length === 0 ? (
                            <div className="text-center py-20 bg-white border-4 border-yellow-200 rounded-[2rem] shadow-sm">
                                <Vote className="w-16 h-16 text-slate-300 mx-auto mb-3" />
                                <p className="text-slate-500 font-bold text-sm sm:text-base">{t.noQualifiedForVote}</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {submissions.filter(s => s.status === 'Qualified' || s.status === 'Finalist' || s.status === 'Winner').map(item => (
                                    <div key={item.submissionCode} className="bg-white border-4 border-yellow-200 rounded-[2rem] overflow-hidden shadow-sm flex flex-col hover:shadow-lg transition-all transform hover:-translate-y-1">

                                        {/* Simulated Player Box */}
                                        <div className="aspect-video bg-black relative flex items-center justify-center">
                                            <video src={item.videoUrl} className="w-full h-full object-cover opacity-75" controls preload="none" />
                                            <div className="absolute top-3 right-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-black text-[10px] sm:text-xs px-3 py-1 rounded-full shadow-md">
                                                {item.submissionCode}
                                            </div>
                                        </div>

                                        <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                                            <div>
                                                <div className="flex justify-between items-start gap-2">
                                                    <h4 className="font-black text-slate-900 text-lg">{item.fullName}</h4>
                                                    <span className="text-[10px] sm:text-xs font-black px-2.5 py-1 bg-yellow-100 text-yellow-900 rounded-full">
                                                        {item.childAge} {lang === 'ar' ? 'أعوام' : 'years'}
                                                    </span>
                                                </div>
                                                <p className="text-purple-600 text-xs font-bold mt-1">
                                                    {item.ageCategory}
                                                </p>
                                            </div>

                                            <div className="flex justify-between items-center bg-purple-50/50 p-4 rounded-2xl border-2 border-purple-100">
                                                <div className="flex items-center gap-1.5 text-purple-950">
                                                    <TrendingUp className="w-5 h-5 text-pink-500" />
                                                    <span className="text-xs sm:text-sm font-black">{item.votes || 0} {t.voteCount}</span>
                                                </div>

                                                <button
                                                    onClick={() => registerVote(item)}
                                                    className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white text-xs sm:text-sm font-black rounded-xl shadow-sm transition-all flex items-center gap-1.5 border-b-2 border-purple-800"
                                                >
                                                    <Vote className="w-4 h-4" />
                                                    <span>{t.voteNow}</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* VIEW 3: Success Confirmation Page */}
                {currentView === 'success' && receiptDetails && (
                    <section className="max-w-lg mx-auto py-10 text-center transition-all duration-300">
                        <div className="bg-white rounded-[2.5rem] border-4 border-yellow-300 shadow-2xl p-8 sm:p-10 space-y-6">
                            <div className="w-20 h-20 bg-green-100 rounded-3xl flex items-center justify-center text-green-600 mx-auto text-3xl shadow-lg shadow-green-50">
                                <CheckCircle2 className="w-10 h-10" />
                            </div>
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{t.subConfirmed}</h2>
                                <p className="text-slate-500 text-xs sm:text-sm font-semibold mt-2 leading-relaxed">
                                    {t.subConfirmedSub}
                                </p>
                            </div>

                            {/* Contest Receipt Code Box */}
                            <div className="bg-purple-50/45 border-2 border-purple-100 rounded-2xl p-5 text-left divide-y-2 divide-purple-100 space-y-3">
                                <div className="pt-0 flex justify-between items-center text-xs sm:text-sm gap-4">
                                    <span className="text-purple-950 font-bold">{t.applicant}</span>
                                    <span className="font-bold text-slate-900">{receiptDetails.fullName}</span>
                                </div>
                                <div className="pt-3 flex justify-between items-center text-xs sm:text-sm gap-4">
                                    <span className="text-purple-950 font-bold">{t.idPassport}</span>
                                    <span className="font-extrabold text-slate-900 font-mono">{receiptDetails.nationalId}</span>
                                </div>
                                <div className="pt-3 flex justify-between items-center text-xs sm:text-sm gap-4">
                                    <span className="text-purple-950 font-bold">{t.submissionCode}</span>
                                    <span className="font-black text-pink-600 font-mono text-base">{receiptDetails.submissionCode}</span>
                                </div>
                                <div className="pt-3 flex justify-between items-center text-xs sm:text-sm gap-4">
                                    <span className="text-purple-950 font-bold">{t.statusLabel}</span>
                                    <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 border border-yellow-300 text-[10px] sm:text-xs font-black">
                                        {t[`status_${receiptDetails.status.toLowerCase().replace(" ", "_")}`] || receiptDetails.status}
                                    </span>
                                </div>
                            </div>

                            <button
                                onClick={() => {
                                    setFullName('');
                                    setMobile('');
                                    setNationalId('');
                                    setChildAge('');
                                    setSelectedFile(null);
                                    setSelectedIdFile(null);
                                    setParentAgreed(false);
                                    setCurrentView('submission');
                                }}
                                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-4 px-6 rounded-2xl transition-all"
                            >
                                {t.submitAnother}
                            </button>
                        </div>
                    </section>
                )}

                {/* VIEW 4: Admin / Organizer Dashboard Panel */}
                {currentView === 'admin' && (
                    <section className="transition-opacity duration-300">

                        {/* Header / Config controls of Organizer Panel */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                            <div>
                                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">{t.compEntries}</h1>
                                <p className="text-slate-500 text-sm">{t.compEntriesSub}</p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <button
                                    onClick={() => {
                                        setTempScriptUrl(googleScriptUrl);
                                        setShowSetupModal(true);
                                    }}
                                    className="flex items-center space-x-1 gap-1 px-4 py-2.5 text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 rounded-xl hover:shadow-sm transition-all"
                                >
                                    <Database className="w-4 h-4 text-green-600" />
                                    <span>{t.integrateDrive}</span>
                                </button>
                                <button
                                    onClick={exportToCSV}
                                    className="flex items-center space-x-1 gap-1 px-4 py-2.5 text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 rounded-xl hover:shadow-sm transition-all"
                                >
                                    <FileDown className="w-4 h-4 text-emerald-600" />
                                    <span>{t.exportCsv}</span>
                                </button>
                                <button
                                    onClick={() => setCurrentView('submission')}
                                    className="flex items-center space-x-1 gap-1 px-4 py-2.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all"
                                >
                                    <ArrowLeft className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                                    <span>{t.exitDashboard}</span>
                                </button>
                            </div>
                        </div>

                        {/* Dashboard Statistics Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                            <div className="bg-white rounded-2xl border border-slate-150 p-5 shadow-sm flex items-center justify-between">
                                <div className="space-y-1">
                                    <span className="text-xs text-slate-400 font-semibold tracking-wider uppercase">{t.totalEntries}</span>
                                    <p className="text-3xl font-extrabold text-slate-900">{submissions.length}</p>
                                </div>
                                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
                                    <Users className="w-5 h-5" />
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl border border-slate-150 p-5 shadow-sm flex items-center justify-between">
                                <div className="space-y-1">
                                    <span className="text-xs text-slate-400 font-semibold tracking-wider uppercase">{t.systemMode}</span>
                                    <p className={`text-sm font-bold ${googleScriptUrl ? 'text-green-600' : 'text-amber-600'}`}>
                                        {googleScriptUrl ? t.prodServerless : t.sandboxSimulated}
                                    </p>
                                </div>
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${googleScriptUrl ? 'bg-green-50 text-green-600' : 'bg-amber-50 text-amber-600'}`}>
                                    <Server className="w-5 h-5" />
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl border border-slate-150 p-5 shadow-sm flex items-center justify-between">
                                <div className="space-y-1">
                                    <span className="text-xs text-slate-400 font-semibold tracking-wider uppercase">{t.driveIntegration}</span>
                                    <p className="text-sm font-bold text-slate-500">
                                        {googleScriptUrl ? t.connected : t.notConfigured}
                                    </p>
                                </div>
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${googleScriptUrl ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-400'}`}>
                                    <CloudUpload className="w-5 h-5" />
                                </div>
                            </div>
                        </div>

                        {/* Split Screen Panel Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

                            {/* Submission Table Column */}
                            <div className="bg-white rounded-2xl border border-slate-150 overflow-hidden shadow-sm lg:col-span-8 flex flex-col min-h-[500px]">

                                {/* Search & Category Filter Header */}
                                <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 bg-slate-50/50">
                                    <div className="relative flex-grow max-w-xs">
                                        <span className={`absolute inset-y-0 ${lang === 'ar' ? 'right-0 pr-3' : 'left-0 pl-3'} flex items-center text-slate-400`}>
                                            <Search className="w-3.5 h-3.5" />
                                        </span>
                                        <input
                                            type="text"
                                            placeholder={t.searchPlaceholder}
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className={`w-full py-2 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-green-500/50 focus:border-green-500 ${lang === 'ar' ? 'pr-9 pl-4' : 'pl-9 pr-4'}`}
                                        />
                                    </div>

                                    <div className="flex gap-1.5 items-center">
                                        <button
                                            onClick={() => setSelectedCategoryFilter('ALL')}
                                            className={`px-2.5 py-1 text-[10px] font-bold rounded-lg transition-all ${selectedCategoryFilter === 'ALL' ? 'bg-slate-800 text-white' : 'bg-slate-200/60 text-slate-600'
                                                }`}
                                        >
                                            الكل
                                        </button>
                                        <button
                                            onClick={() => {
                                                setSelectedCategoryFilter('CAT1');
                                                setSelectedVideo(null);
                                            }}
                                            className={`px-2.5 py-1 text-[10px] font-bold rounded-lg transition-all ${selectedCategoryFilter === 'CAT1' ? 'bg-slate-800 text-white' : 'bg-slate-200/60 text-slate-600'
                                                }`}
                                        >
                                            الفئة الأولى (٧-١٠)
                                        </button>
                                        <button
                                            onClick={() => {
                                                setSelectedCategoryFilter('CAT2');
                                                setSelectedVideo(null);
                                            }}
                                            className={`px-2.5 py-1 text-[10px] font-bold rounded-lg transition-all ${selectedCategoryFilter === 'CAT2' ? 'bg-slate-800 text-white' : 'bg-slate-200/60 text-slate-600'
                                                }`}
                                        >
                                            الفئة الثانية (١١-١٤)
                                        </button>
                                    </div>
                                </div>

                                {/* Table Data */}
                                <div className="flex-grow overflow-x-auto">
                                    <table className="w-full border-collapse text-left text-sm text-slate-600">
                                        <thead className="bg-slate-50 border-b border-slate-150 text-slate-400 text-xs uppercase font-semibold">
                                            <tr>
                                                <th className={`px-6 py-3 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>{t.competitorDetails}</th>
                                                <th className={`px-6 py-3 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>{t.nationalId}</th>
                                                <th className={`px-6 py-3 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>{t.statusLabel}</th>
                                                <th className={`px-6 py-3 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>إجمالي التقييم</th>
                                                <th className={`px-6 py-3 ${lang === 'ar' ? 'text-left' : 'text-right'}`}>{t.action}</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            {filteredSubmissions.length === 0 ? (
                                                <tr>
                                                    <td colSpan="5" className="text-center py-20 text-slate-400">
                                                        <div className="flex flex-col items-center justify-center space-y-3">
                                                            <FolderOpen className="w-10 h-10 text-slate-300" />
                                                            <p className="font-medium text-xs">لا يوجد بيانات مطابقة للبحث.</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ) : (
                                                filteredSubmissions.map((item) => (
                                                    <tr
                                                        key={item.submissionCode}
                                                        onClick={() => setSelectedVideo(item)}
                                                        className={`hover:bg-slate-50 transition-colors cursor-pointer border-b border-slate-100 ${selectedVideo?.submissionCode === item.submissionCode ? 'bg-purple-50/45' : ''
                                                            }`}
                                                    >
                                                        <td className="px-6 py-4 flex items-center space-x-3 gap-3">
                                                            <div className="w-9 h-9 bg-purple-100 text-purple-700 rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0">
                                                                {item.fullName ? item.fullName.charAt(0).toUpperCase() : '?'}
                                                            </div>
                                                            <div className="min-w-0 text-right">
                                                                <p className="font-bold text-slate-800 text-xs sm:text-sm truncate max-w-[120px] sm:max-w-[200px]">{item.fullName || 'Unknown'}</p>
                                                                <span className="text-[10px] text-slate-400 font-bold block">العمر: {item.childAge} سنوات ({item.childAge >= 11 ? "الفئة الثانية" : "الفئة الأولى"})</span>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 font-mono text-xs text-slate-600 font-semibold">{item.nationalId || 'N/A'}</td>
                                                        <td className="px-6 py-4">
                                                            <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold ${item.status === 'Winner' ? 'bg-yellow-100 text-yellow-800' :
                                                                    item.status === 'Qualified' || item.status === 'Finalist' ? 'bg-green-100 text-green-800' :
                                                                        item.status === 'Not Qualified' ? 'bg-rose-100 text-rose-800' :
                                                                            'bg-slate-100 text-slate-800'
                                                                }`}>
                                                                {t[`status_${item.status?.toLowerCase().replace(" ", "_")}`] || item.status}
                                                            </span>
                                                            {!item.resultsReleased && (
                                                                <span className="text-[8px] text-amber-600 font-medium block mt-1">مسودة غير منشورة</span>
                                                            )}
                                                        </td>
                                                        <td className="px-6 py-4 font-bold text-xs">
                                                            {item.totalScore || 0} / 100
                                                        </td>
                                                        <td className={`px-6 py-4 ${lang === 'ar' ? 'text-left' : 'text-right'}`}>
                                                            <button
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    setSelectedVideo(item);
                                                                }}
                                                                className="px-3 py-1.5 bg-slate-100 hover:bg-purple-600 hover:text-white text-slate-600 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5"
                                                            >
                                                                <Sliders className="w-3 h-3" /> <span>{t.play}</span>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Sticky Detailed Jury Assessment Desk */}
                            <div className="lg:col-span-4 space-y-4">
                                <div className="bg-white rounded-2xl border border-slate-150 p-5 shadow-sm sticky top-24">
                                    <h2 className="text-sm font-extrabold text-slate-900 mb-3 flex items-center gap-2 border-b border-slate-100 pb-2">
                                        <Video className="w-4 h-4 text-purple-600" />
                                        <span>{t.videoReviewPanel}</span>
                                    </h2>

                                    {!selectedVideo ? (
                                        <div className="aspect-video bg-slate-900 rounded-xl flex flex-col items-center justify-center text-center p-4 border border-slate-800 text-slate-400">
                                            <Video className="w-8 h-8 mb-2 text-slate-500 animate-pulse" />
                                            <p className="text-xs font-semibold">{t.noVideoSelected}</p>
                                            <p className="text-[10px] text-slate-500 mt-1 max-w-[180px]">{t.selectContestant}</p>
                                        </div>
                                    ) : (
                                        <div className="space-y-4">

                                            {/* Video Player */}
                                            <div className="aspect-video bg-black rounded-xl overflow-hidden border border-slate-950 relative">
                                                {selectedVideo.videoUrl.startsWith('http') && !selectedVideo.videoUrl.includes('drive.google.com') ? (
                                                    <video
                                                        src={selectedVideo.videoUrl}
                                                        controls
                                                        autoPlay
                                                        className="w-full h-full object-contain"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex flex-col items-center justify-center text-center p-4 text-slate-400 bg-slate-900">
                                                        <CloudUpload className="w-10 h-10 text-purple-500 mb-2" />
                                                        <p className="text-xs font-bold text-white">{t.driveFilePreview}</p>
                                                        <p className="text-[10px] text-slate-500 mt-1 px-2">{t.apiSandboxConstraints}</p>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Video actions */}
                                            <div className="flex gap-2">
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href={selectedVideo.videoUrl}
                                                    className="flex-1 py-1.5 bg-purple-50 hover:bg-purple-100 text-purple-700 font-bold rounded-lg text-[10px] transition-all flex items-center justify-center gap-1.5"
                                                >
                                                    <ExternalLink className="w-3.5 h-3.5" />
                                                    <span>{t.openInGoogle}</span>
                                                </a>

                                                {selectedVideo.idProofUrl && (
                                                    <a
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        href={selectedVideo.idProofUrl}
                                                        className="flex-1 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-lg text-[10px] transition-all flex items-center justify-center gap-1.5"
                                                    >
                                                        <FolderOpen className="w-3.5 h-3.5 text-blue-600" />
                                                        <span>{t.viewIdProof}</span>
                                                    </a>
                                                )}
                                            </div>

                                            {/* Official Criteria Grading Scorecard (from PDF) */}
                                            <div className="bg-slate-50 rounded-xl p-4 border border-slate-150 space-y-4 text-right">
                                                <h3 className="text-xs font-extrabold text-slate-800 border-b border-slate-200 pb-1.5">{t.evalSheetTitle}</h3>

                                                {/* Grades Grid */}
                                                <div className="space-y-2.5">
                                                    <div>
                                                        <div className="flex justify-between text-[10px] font-bold text-slate-600 mb-1">
                                                            <span>{t.critVoice}</span>
                                                            <span className="text-purple-700 font-bold">{scores.voice} / 20</span>
                                                        </div>
                                                        <input
                                                            type="range" min="0" max="20"
                                                            value={scores.voice}
                                                            onChange={(e) => setScores({ ...scores, voice: parseInt(e.target.value) })}
                                                            className="w-full accent-purple-600"
                                                        />
                                                    </div>

                                                    <div>
                                                        <div className="flex justify-between text-[10px] font-bold text-slate-600 mb-1">
                                                            <span>{t.critConfidence}</span>
                                                            <span className="text-purple-700 font-bold">{scores.confidence} / 20</span>
                                                        </div>
                                                        <input
                                                            type="range" min="0" max="20"
                                                            value={scores.confidence}
                                                            onChange={(e) => setScores({ ...scores, confidence: parseInt(e.target.value) })}
                                                            className="w-full accent-purple-600"
                                                        />
                                                    </div>

                                                    <div>
                                                        <div className="flex justify-between text-[10px] font-bold text-slate-600 mb-1">
                                                            <span>{t.critLanguage}</span>
                                                            <span className="text-purple-700 font-bold">{scores.language} / 15</span>
                                                        </div>
                                                        <input
                                                            type="range" min="0" max="15"
                                                            value={scores.language}
                                                            onChange={(e) => setScores({ ...scores, language: parseInt(e.target.value) })}
                                                            className="w-full accent-purple-600"
                                                        />
                                                    </div>

                                                    <div>
                                                        <div className="flex justify-between text-[10px] font-bold text-slate-600 mb-1">
                                                            <span>{t.critExpression}</span>
                                                            <span className="text-purple-700 font-bold">{scores.expression} / 15</span>
                                                        </div>
                                                        <input
                                                            type="range" min="0" max="15"
                                                            value={scores.expression}
                                                            onChange={(e) => setScores({ ...scores, expression: parseInt(e.target.value) })}
                                                            className="w-full accent-purple-600"
                                                        />
                                                    </div>

                                                    <div>
                                                        <div className="flex justify-between text-[10px] font-bold text-slate-600 mb-1">
                                                            <span>{t.critTime}</span>
                                                            <span className="text-purple-700 font-bold">{scores.time} / 10</span>
                                                        </div>
                                                        <input
                                                            type="range" min="0" max="10"
                                                            value={scores.time}
                                                            onChange={(e) => setScores({ ...scores, time: parseInt(e.target.value) })}
                                                            className="w-full accent-purple-600"
                                                        />
                                                    </div>

                                                    <div>
                                                        <div className="flex justify-between text-[10px] font-bold text-slate-600 mb-1">
                                                            <span>{t.critContent}</span>
                                                            <span className="text-purple-700 font-bold">{scores.content} / 10</span>
                                                        </div>
                                                        <input
                                                            type="range" min="0" max="10"
                                                            value={scores.content}
                                                            onChange={(e) => setScores({ ...scores, content: parseInt(e.target.value) })}
                                                            className="w-full accent-purple-600"
                                                        />
                                                    </div>

                                                    <div>
                                                        <div className="flex justify-between text-[10px] font-bold text-slate-600 mb-1">
                                                            <span>{t.critCreativity}</span>
                                                            <span className="text-purple-700 font-bold">{scores.creativity} / 10</span>
                                                        </div>
                                                        <input
                                                            type="range" min="0" max="10"
                                                            value={scores.creativity}
                                                            onChange={(e) => setScores({ ...scores, creativity: parseInt(e.target.value) })}
                                                            className="w-full accent-purple-600"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Automatic Grade Accumulation */}
                                                <div className="pt-2 border-t border-slate-200 flex justify-between items-center">
                                                    <span className="text-xs font-bold text-slate-700">{t.totalScoreLabel}</span>
                                                    <span className="text-lg font-black text-purple-700">
                                                        {Number(scores.voice) +
                                                            Number(scores.confidence) +
                                                            Number(scores.language) +
                                                            Number(scores.expression) +
                                                            Number(scores.time) +
                                                            Number(scores.content) +
                                                            Number(scores.creativity)} / 100
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Redesigned Admin Status Selection Custom Dropdown */}
                                            <div className="bg-slate-50 rounded-xl p-4 border border-slate-150 space-y-3 text-right">
                                                <label className="block text-xs font-bold text-slate-700">{t.statusSelection}</label>
                                                <div className="relative">
                                                    <select
                                                        value={evalStatus}
                                                        onChange={(e) => setEvalStatus(e.target.value)}
                                                        className={`w-full bg-white border border-slate-200 rounded-xl text-xs focus:outline-none py-2.5 appearance-none ${lang === 'ar' ? 'pl-9 pr-3' : 'pr-9 pl-3'
                                                            }`}
                                                    >
                                                        <option value="Under Review">{t.status_review}</option>
                                                        <option value="Qualified">{t.status_qualified}</option>
                                                        <option value="Not Qualified">{t.status_unqualified}</option>
                                                        <option value="Finalist">{t.status_finalist}</option>
                                                        <option value="Winner">{t.status_winner}</option>
                                                    </select>
                                                    <div className={`absolute inset-y-0 ${lang === 'ar' ? 'left-3' : 'right-3'} flex items-center pointer-events-none text-slate-500`}>
                                                        <ChevronDown className="w-3.5 h-3.5" />
                                                    </div>
                                                </div>

                                                {/* Release checkbox toggle */}
                                                <label className="flex items-center gap-2 mt-2 pt-1 border-t border-slate-200 cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        checked={evalResultsReleased}
                                                        onChange={(e) => setEvalResultsReleased(e.target.checked)}
                                                        className="w-4 h-4 text-green-600"
                                                    />
                                                    <span className="text-[10px] font-bold text-slate-700">{t.releaseResultsBtn}</span>
                                                </label>
                                            </div>

                                            {/* Action trigger button */}
                                            <button
                                                onClick={saveJuryEvaluation}
                                                className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-extrabold rounded-xl transition-all text-xs shadow-md"
                                            >
                                                {t.saveEvaluation}
                                            </button>

                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>
                    </section>
                )}

            </main>

            {/* MODAL 1: Password Authenticator Modal */}
            {showAuthModal && (
                <div className="fixed inset-0 z-50 bg-slate-950/45 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-white rounded-[2rem] border-4 border-purple-200 max-w-md w-full shadow-2xl p-6 relative">
                        <button
                            onClick={() => {
                                setShowAuthModal(false);
                                setAdminPasscode('');
                                setAuthErrorMsg(false);
                            }}
                            className={`absolute top-4 ${lang === 'ar' ? 'left-4' : 'right-4'} text-slate-400 hover:text-slate-650 transition-all`}
                        >
                            <ArrowLeft className={`w-5 h-5 ${lang === 'ar' ? '' : 'rotate-180'}`} />
                        </button>
                        <div className="text-center space-y-4">
                            <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center text-xl mx-auto shadow-sm">
                                <Key className="w-7 h-7" />
                            </div>
                            <div>
                                <h3 className="text-lg font-black text-slate-900 font-sans">{t.organizerPanelLog}</h3>
                                <p className="text-xs text-slate-505 font-semibold mt-1">{t.passcodeInstructions}</p>
                            </div>
                            <div className="space-y-3 text-left">
                                <div>
                                    <label className={`block text-xs font-black text-slate-600 mb-1.5 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>{t.passcode}</label>
                                    <input
                                        type="password"
                                        placeholder={t.passcodePlaceholder}
                                        value={adminPasscode}
                                        onChange={(e) => setAdminPasscode(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') handleAdminAuth();
                                        }}
                                        className={`w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 font-sans ${lang === 'ar' ? 'text-right' : 'text-left'}`}
                                    />
                                    <p className={`text-[10px] text-slate-400 mt-1 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>💡 {t.defaultPasscode}</p>
                                </div>
                                {authErrorMsg && (
                                    <div className={`text-xs text-rose-600 font-semibold flex items-center ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                                        <Info className="w-3.5 h-3.5 mr-1 ml-1" /> {t.incorrectPasscode}
                                    </div>
                                )}
                            </div>
                            <button
                                onClick={handleAdminAuth}
                                className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-black rounded-xl border-b-4 border-purple-800 transition-all text-sm"
                            >
                                {t.accessDashboard}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* MODAL 2: Google Drive & Sheets Connector Modal Setup */}
            {showSetupModal && (
                <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
                    <div className="bg-white rounded-[2rem] border-4 border-purple-300 max-w-2xl w-full shadow-2xl p-6 relative max-h-[90vh] flex flex-col">

                        <button
                            onClick={() => setShowSetupModal(false)}
                            className={`absolute top-4 ${lang === 'ar' ? 'left-4' : 'right-4'} text-purple-600 hover:text-purple-800 transition-all text-sm font-black`}
                        >
                            {t.exitSetup}
                        </button>

                        <div className="flex items-center space-x-3 gap-3 mb-4 pb-3 border-b border-slate-100">
                            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 text-lg">
                                <CloudUpload className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-extrabold text-slate-900 text-lg">{t.connectorTitle}</h3>
                                <p className="text-xs text-slate-500">{t.connectorSub}</p>
                            </div>
                        </div>

                        <div className="flex-grow overflow-y-auto pr-2 pl-2 space-y-4 text-xs text-slate-600">

                            {/* Endpoint Link Form Box */}
                            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
                                <h4 className={`font-bold text-slate-800 text-sm mb-2 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>{t.connectWebApp}</h4>
                                <p className={`text-xs text-slate-500 mb-3 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>{t.pasteUrl}</p>

                                <div className="flex flex-col sm:flex-row gap-2">
                                    <input
                                        type="url"
                                        placeholder="https://script.google.com/macros/s/xxxxxx/exec"
                                        value={tempScriptUrl}
                                        onChange={(e) => setTempScriptUrl(e.target.value)}
                                        className="flex-grow px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/20 text-slate-800 font-mono text-xs"
                                    />
                                    <button
                                        onClick={saveGoogleIntegration}
                                        className="px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all"
                                    >
                                        {t.saveLink}
                                    </button>
                                </div>
                            </div>

                            {/* Implementation Guide */}
                            <div className="space-y-3">
                                <h4 className={`font-bold text-slate-800 text-sm flex items-center ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                                    <span className={`w-5 h-5 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-[10px] font-black ${lang === 'ar' ? 'ml-2' : 'mr-2'}`}>1</span>
                                    {t.createScript}
                                </h4>
                                <p className={`${lang === 'ar' ? 'pr-7' : 'pl-7'} ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                                    {t.createScriptSub}
                                </p>

                                {/* Code Copy Field */}
                                <div className={`relative ${lang === 'ar' ? 'pr-7' : 'pl-7'}`}>
                                    <textarea
                                        readOnly
                                        value={GOOGLE_APPS_SCRIPT_TEMPLATE}
                                        className="w-full h-40 bg-slate-900 text-slate-300 font-mono p-3 rounded-xl border border-slate-950 text-[10px] focus:outline-none"
                                    />
                                    <button
                                        onClick={() => {
                                            navigator.clipboard.writeText(GOOGLE_APPS_SCRIPT_TEMPLATE);
                                            setCodeCopied(true);
                                            setTimeout(() => setCodeCopied(false), 2000);
                                        }}
                                        className={`absolute top-2 ${lang === 'ar' ? 'left-4' : 'right-4'} bg-slate-800 text-slate-400 hover:text-white px-2.5 py-1 rounded text-[10px] font-bold transition-all flex items-center space-x-1 gap-1`}
                                    >
                                        {codeCopied ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                                        <span>{codeCopied ? t.copied : t.copyCode}</span>
                                    </button>
                                </div>

                                <h4 className={`font-bold text-slate-800 text-sm flex items-center ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                                    <span className={`w-5 h-5 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-[10px] font-black ${lang === 'ar' ? 'ml-2' : 'mr-2'}`}>2</span>
                                    {t.deployWebApp}
                                </h4>
                                <div className={`space-y-1.5 leading-relaxed ${lang === 'ar' ? 'pr-7 text-right' : 'pl-7 text-left'}`}>
                                    <p>{t.deployStep1}</p>
                                    <p>{t.deployStep2}</p>
                                    <p>{t.deployStep3}</p>
                                    <p>{t.deployStep4}</p>
                                    <p>{t.deployStep5}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}

            {/* MODAL 3: Electronic Certificate Generator Viewer */}
            {showCertificate && certTarget && (
                <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
                    <div className="bg-white rounded-3xl max-w-4xl w-full border border-slate-200 shadow-2xl p-6 sm:p-8 relative">

                        <button
                            onClick={() => {
                                setShowCertificate(false);
                                setCertTarget(null);
                            }}
                            className="absolute top-4 left-4 bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-xl text-xs font-bold transition-all"
                        >
                            {lang === 'ar' ? "إغلاق الشهادة" : "Close Certificate"}
                        </button>

                        {/* Printable Frame Area */}
                        <div id="printable-certificate" className="border-8 double border-amber-600 bg-amber-50/20 p-8 sm:p-12 text-center space-y-6 relative rounded-2xl">

                            {/* Geometric Corner Borders */}
                            <div className="absolute top-2 right-2 w-12 h-12 border-t-4 border-r-4 border-amber-500 rounded-tr-md"></div>
                            <div className="absolute top-2 left-2 w-12 h-12 border-t-4 border-l-4 border-amber-500 rounded-tl-md"></div>
                            <div className="absolute bottom-2 right-2 w-12 h-12 border-b-4 border-r-4 border-amber-500 rounded-br-md"></div>
                            <div className="absolute bottom-2 left-2 w-12 h-12 border-b-4 border-l-4 border-amber-500 rounded-tl-md"></div>

                            {/* Badge Icon */}
                            <div className="w-20 h-20 bg-gradient-to-tr from-amber-500 to-yellow-400 rounded-full flex items-center justify-center text-white mx-auto shadow-md">
                                <Award className="w-10 h-10" />
                            </div>

                            <div className="space-y-2">
                                <h2 className="text-2xl sm:text-3xl font-black text-amber-800 tracking-tight">{t.certTitle}</h2>
                                <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
                            </div>

                            <p className="text-slate-655 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-semibold">
                                {t.certPresentedTo}
                            </p>

                            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 border-b-2 border-slate-300 max-w-md mx-auto pb-2 tracking-wide font-sans">
                                {certTarget.fullName}
                            </h1>

                            <p className="text-slate-500 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
                                {t.certBody}
                            </p>

                            <div className="grid grid-cols-2 gap-8 pt-8 max-w-xl mx-auto text-xs font-bold text-slate-750">
                                <div className="space-y-1">
                                    <p className="text-slate-400 text-[10px] font-semibold">{t.certSign}</p>
                                    <p className="text-amber-800 text-sm font-black">لجنة تحكيم المدينة ستيج</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-slate-400 text-[10px] font-semibold">{t.certStamp}</p>
                                    <div className="w-16 h-16 border-4 border-dashed border-amber-600 rounded-full flex items-center justify-center text-amber-600 font-extrabold rotate-12 text-[10px] mx-auto opacity-70">
                                        المدينة ستيج
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Print Action Trigger */}
                        <div className="mt-6 flex justify-end gap-2">
                            <button
                                onClick={() => window.print()}
                                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 font-extrabold rounded-xl transition-all text-xs flex items-center gap-1.5 shadow-sm"
                            >
                                <Printer className="w-4 h-4" />
                                <span>طباعة أو حفظ PDF</span>
                            </button>
                        </div>

                    </div>
                </div>
            )}

            {/* Footer copyright */}
            <footer className="bg-white border-t border-slate-150 py-6 text-center text-xs text-slate-400 mt-12">
                <p>&copy; 2026 {t.footerDesc}</p>
            </footer>

        </div>
    );
}


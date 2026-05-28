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
  Star,
  XCircle
} from 'lucide-react';

// Unified translation mapping for full Bilingual support tailored to Al-Madinah Stage (المدينة ستيج) - Emojis completely removed from all labels
const TRANSLATIONS = {
  ar: {
    title: "مسابقة المدينة ستيج",
        subtitle: "أصوات ملهمة من المدينة المنورة",
    organizerPanel: "لوحة لجنة التحكيم والمنظمين",
    exitDashboard: "العودة للواجهة الرئيسية",
    sandboxTitle: "قيد التشغيل في وضع التجربة والمحاكاة",
    sandboxSub: "سيتم حفظ مشاركاتك محلياً في المتصفح. لربط وتخزين الفيديوهات حقيقياً، استخدم لوحة التحكم لربط رابط Google Apps Script.",
    liveTitle: "مرتبط بقاعدة بيانات السحاب المباشرة",
    liveSub: "تُرسل بيانات المشتركين والملفات مباشرة إلى حساب Google Drive وجدول بيانات Google Sheet الخاص بك.",
    setupGoogleLink: "إعداد ربط السحابة",
    noLoginRequired: "يتطلب حساب ولي أمر للمشاركة",
        showcaseTitle: "المدينة ستيج: حيث يخطو الأطفال أولى خطواتهم نحو منصة الخطابة",
        showcaseSub: "منصة خاصة بمسابقة المدينة ستيج والتي تنظمها جمعية البر بالمدينة المنورة وجمعية أطفال طيبة للأطفال في المدينة المنورة  من سن 7 إلى 15 عامًا.",
    fullName: "اسم الطفل رباعي",
    fullNamePlaceholder: "محمد بن أحمد الحركان",
    mobileNumber: "رقم جوال ولي الأمر",
    mobilePlaceholder: "مثال: 05xxxxxxxx",
    nationalId: "رقم الهوية الوطنية / الإقامة للطفل ",
    nationalIdPlaceholder: "رقم الهوية المكون من 10 أرقام",
    childAge: "عمر الطفل ",
    ageCategory: "الفئة العمرية",
    selectAge: "اختر عمرك الجميل",
    cat1: "لبنات الاستيج (الأعمار 7–9)",
    cat2: "رواد الاستيج (الأعمار 10–12)",
    cat3: "فرسان الاستيج (الأعمار 13–15)",
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
    inst2: "وضوح الصوت والوقوف بثقة وشجاعة أمام الكاميرا بابتسازة جميلة",
    inst3: "ارتداء الزي الوطني الأنيق أو ملابس رسمية لائقة بفرسان الإلقاء",
    inst4: "اختيار موضوع إلقاء هادف، ملهم وممتع للجميع",
    validateDetails: "نتأكد من صحة البيانات الجميلة...",
    encodeVideo: "تحويل الملفات وبناء حزم الأمان الفنية...",
    uploadingDrive: "جاري رفع الملفات والبيانات السحابية الآن...",
    completed: "تهانينا الحارة! تم تسجيل بطلنا بنجاح",
    encryptingSandbox: "نشفر الفيديو في المتصفح التجريبي السريع...",
    savingSandbox: "نحفظ البطل الصغير في قائمة الأبطال المحلية...",
    uploadEntry: "إرسال المشاركة والانطلاق للمسابقة!",
    uploadingEntry: "جاري إرسال الإبداع المميّز...",
    subConfirmed: "أهلاً بك في عالم الإبداع والخطابة!",
    subConfirmedSub: "تم تسجيل طفلك بنجاح في مسابقة المدينة ستيج وحفظ الفيديو ووثيقة الهوية. لجنة التحكيم الموقرة متحمسة جداً لمشاهدة المقطع الرائع وسنقوم بإعلان النتائج قريباً!",
    applicant: "ولي الأمر:",
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
    defaultPasscode: "",
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
    submissionTab: "تسجيل الأطفال",
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
    queryResultTitle: "حالة طلب مشاركة طفلك الصغير:",
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
    noLoginRequired: "Parent Account Required to Participate",
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
    cat1: "Lubnat Al-Istij (Ages 7–9)",
    cat2: "Ruwwad Al-Istij (Ages 10–12)",
    cat3: "Fursan Al-Istij (Ages 13–15)",
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
    defaultPasscode: "",
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

  // Backend API URL - update this after Railway deployment
  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
  const isConnected = !!apiUrl;

  // Form input states
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [nationalId, setNationalId] = useState('');
  const [childAge, setChildAge] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedIdFile, setSelectedIdFile] = useState(null);
  const [selectedPhotoFile, setSelectedPhotoFile] = useState(null);
  const [parentAgreed, setParentAgreed] = useState(false);

  const fileInputRef = useRef(null);
  const idFileInputRef = useRef(null);
  const photoFileInputRef = useRef(null);

  const [dragActive, setDragActive] = useState(false);
  const [idDragActive, setIdDragActive] = useState(false);
  const [photoDragActive, setPhotoDragActive] = useState(false);

  // Submission Progress states
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [progressStateText, setProgressStateText] = useState('');

  // Successful submission details
  const [receiptDetails, setReceiptDetails] = useState(null);

  // Unified Portal Authentication States (Collapsing multiple modals/states into a single robust layout)
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authTab, setAuthTab] = useState('parent'); // 'parent' | 'admin'
  const [parentMode, setParentMode] = useState('login'); // 'login' | 'register'
  const [registerStep, setRegisterStep] = useState(1); // 1 | 2
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [confirmPasswordInput, setConfirmPasswordInput] = useState('');
  const [regFullName, setRegFullName] = useState('');
  const [regAge, setRegAge] = useState('');
  const [regNationalId, setRegNationalId] = useState('');
  const [regMobile, setRegMobile] = useState('');
  const [authError, setAuthError] = useState('');
  const [authLoading, setAuthLoading] = useState(false);

  // User (parent) session state
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const isRefreshing = useRef(false);

  // On mount: try to restore session from refresh token cookie
  useEffect(() => {
    const restoreSession = async () => {
      try {
        const res = await fetch(`${apiUrl}/api/user/refresh`, { method: 'POST', credentials: 'include' });
        const data = await res.json();
        if (data.status === 'success') {
          setAccessToken(data.accessToken);
          setLoggedInUser(data.user);
        }
      } catch { /* no session to restore */ }
    };
    restoreSession();
  }, []);

  // apiFetch: like fetch() but auto-attaches access token and silently refreshes on 401
  const apiFetch = async (url, options = {}) => {
    const doRequest = (token) => fetch(url, {
      ...options,
      credentials: 'include',
      headers: { ...(options.headers || {}), Authorization: `Bearer ${token}` },
    });

    let res = await doRequest(accessToken);

    if (res.status === 401 && !isRefreshing.current) {
      isRefreshing.current = true;
      try {
        const refreshRes = await fetch(`${apiUrl}/api/user/refresh`, { method: 'POST', credentials: 'include' });
        const refreshData = await refreshRes.json();
        if (refreshData.status === 'success') {
          setAccessToken(refreshData.accessToken);
          setLoggedInUser(refreshData.user);
          isRefreshing.current = false;
          res = await doRequest(refreshData.accessToken); // retry original request
        } else {
          // Refresh token expired → logout
          isRefreshing.current = false;
          handleSessionExpired();
          throw new Error('session_expired');
        }
      } catch (err) {
        isRefreshing.current = false;
        if (err.message !== 'session_expired') handleSessionExpired();
        throw err;
      }
    }
    return res;
  };

  const handleSessionExpired = () => {
    setLoggedInUser(null);
    setAccessToken(null);
    setUserSubmissions([]);
    setCurrentView('submission');
    showToast(
      lang === 'ar'
        ? 'انتهت جلستك. يرجى تسجيل الدخول مجدداً.'
        : 'Your session expired. Please log in again.',
      'error'
    );
  };
  
  const [userSubmissions, setUserSubmissions] = useState([]);
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

  // Admin session state
  const [adminRole, setAdminRole] = useState(null); // 'admin' | 'data_admin' | null
  const [adminCredentials, setAdminCredentials] = useState(null); // { username, passcode }
  const [votingEnabled, setVotingEnabled] = useState(true); // controlled by data_admin
  const [showCertificate, setShowCertificate] = useState(false);
  const [certTarget, setCertTarget] = useState(null);
  // Admin tab filter: 'pending' | 'evaluated' | 'all'
  const [adminTab, setAdminTab] = useState('pending');
  // Evaluation popup modal
  const [showEvalModal, setShowEvalModal] = useState(false);
  // Confirmation dialog before finalizing evaluation
  const [showEvalConfirm, setShowEvalConfirm] = useState(false);

  // Data edit popup modal (data_admin)
  const [showEditModal, setShowEditModal] = useState(false);
  const [editTarget, setEditTarget] = useState(null);
  const [editFullName, setEditFullName] = useState('');
  const [editMobile, setEditMobile] = useState('');
  const [editNationalId, setEditNationalId] = useState('');
  const [editChildAge, setEditChildAge] = useState('');
  const [editAgeCategory, setEditAgeCategory] = useState('');
  const [editSaving, setEditSaving] = useState(false);

  // Quick dictionary reference
  const t = TRANSLATIONS[lang];

  // Map English DB status values to translation keys
  const getStatusLabel = (status) => {
    const map = {
      'Under Review': t.status_review,
      'Qualified': t.status_qualified,
      'Not Qualified': t.status_unqualified,
      'Finalist': t.status_finalist,
      'Winner': t.status_winner,
    };
    return map[status] || status;
  };

  // Auto determine age group category string
  const getAgeCategoryLabel = (age) => {
    if (!age) return '';
    const ageNum = parseInt(age);
    if (ageNum >= 7 && ageNum <= 9) {
      return lang === 'ar' ? "لبنات الاستيج (الأعمار 7–9)" : "Lubnat Al-Istij (Ages 7–9)";
    } else if (ageNum >= 10 && ageNum <= 12) {
      return lang === 'ar' ? "رواد الاستيج (الأعمار 10–12)" : "Ruwwad Al-Istij (Ages 10–12)";
    } else if (ageNum >= 13 && ageNum <= 15) {
      return lang === 'ar' ? "فرسان الاستيج (الأعمار 13–15)" : "Fursan Al-Istij (Ages 13–15)";
    }
    return '';
  };

  const handleLanguageToggle = () => {
    const nextLang = lang === 'en' ? 'ar' : 'en';
    setLang(nextLang);
    localStorage.setItem('contest_app_lang', nextLang);
  };

  // Load data initially and keep updated on state switch
  // Load data initially and keep updated on state switch
  useEffect(() => {
    loadSubmissionsData();
  }, [apiUrl, currentView]);

  // Fetch voting enabled setting on mount — applies to all users
  useEffect(() => {
    fetch(`${apiUrl}/api/settings/voting`)
      .then(r => r.ok ? r.json() : null)
      .then(d => { if (d) setVotingEnabled(d.enabled !== false); })
      .catch(() => {});
  }, [apiUrl]);

  // Load user submissions when logged in
  useEffect(() => {
    if (loggedInUser) {
      loadUserSubmissions(loggedInUser.id);
    }
  }, [loggedInUser, apiUrl]);

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
    try {
      const response = await fetch(`${apiUrl}/api/submissions`);
      if (!response.ok) throw new Error('Server error');
      const data = await response.json();
      localStorage.removeItem("submissions_almadinah_stage");
      setSubmissions(Array.isArray(data) ? data : []);
    } catch (err) {
      console.warn("Failed fetching submissions from server", err);
      setSubmissions([]);
    }
  };

  const toggleVoting = async () => {
    const newVal = !votingEnabled;
    setVotingEnabled(newVal);
    try {
      const res = await fetch(`${apiUrl}/api/settings/voting`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ enabled: newVal, username: adminCredentials?.username, passcode: adminCredentials?.passcode }),
      });
      if (!res.ok) throw new Error('failed');
      showToast(newVal ? (lang === 'ar' ? 'تم تفعيل التصويت' : 'Voting enabled') : (lang === 'ar' ? 'تم إيقاف التصويت' : 'Voting disabled'), 'success');
    } catch {
      setVotingEnabled(!newVal);
      showToast(lang === 'ar' ? 'فشل تغيير حالة التصويت' : 'Failed to update voting status', 'error');
    }
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
        const maxSize = 100 * 1024 * 1024; // 100MB
        if (file.size > maxSize) {
          showToast(lang === 'ar' ? 'حجم الفيديو كبير جداً. الحد الأقصى 100 ميجابايت.' : 'Video too large. Max size is 100MB.', "error");
          return;
        }
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

  const handlePhotoDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setPhotoDragActive(e.type === 'dragenter' || e.type === 'dragover');
  };

  const handlePhotoDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setPhotoDragActive(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) setSelectedPhotoFile(file);
  };

  const handlePhotoFileChange = (e) => {
    if (e.target.files && e.target.files[0]) setSelectedPhotoFile(e.target.files[0]);
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

    if (!loggedInUser) {
      showToast(lang === 'ar' ? 'يجب تسجيل الدخول أولاً لإرسال المشاركة' : 'You must log in first to submit.', 'error');
      return;
    }

    if (!fullName || !nationalId || !childAge || !parentAgreed) {
      showToast(t.toastFormError, "error");
      return;
    }

    // Full name: must have at least 4 parts
    const nameParts = fullName.trim().split(/\s+/);
    if (nameParts.length < 4) {
      showToast(lang === 'ar' ? 'يرجى إدخال الاسم الرباعي كاملاً (الاسم الأول والثاني والثالث واللقب)' : 'Please enter the full four-part name (first, second, third, and last name)', "error");
      return;
    }

    // National ID: letters and numbers only, no spaces or special characters
    const nationalIdRegex = /^[a-zA-Z0-9\u0600-\u06FF]+$/;
    if (!nationalIdRegex.test(nationalId.trim())) {
      showToast(lang === 'ar' ? 'رقم الهوية يجب أن يحتوي على أحرف وأرقام فقط بدون رموز أو مسافات' : 'National ID must contain only letters and numbers, no spaces or special characters', "error");
      return;
    }
    if (!selectedFile) {
      showToast(t.toastNoFile, "error");
      return;
    }

    setIsUploading(true);
    setUploadProgress(5);
    setProgressStateText(t.validateDetails);

    const calculatedCategory = getAgeCategoryLabel(childAge);

    // Build FormData
    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('nationalId', nationalId);
    formData.append('childAge', childAge);
    formData.append('ageCategory', calculatedCategory);
    formData.append('video', selectedFile);
    if (selectedPhotoFile) formData.append('childPhoto', selectedPhotoFile);
    if (loggedInUser) formData.append('userId', loggedInUser.id);

    // Use XMLHttpRequest for real upload progress tracking
    const uploadWithProgress = () => new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      // Track upload progress (0% → 80%: sending to server)
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          // Upload to server = 0-80%, Cloudinary processing = 80-100%
          const percent = Math.round((event.loaded / event.total) * 80);
          setUploadProgress(percent);
          if (percent < 30) {
            setProgressStateText(t.encodeVideo);
          } else if (percent < 70) {
            setProgressStateText(t.uploadingDrive);
          } else {
            setProgressStateText(lang === 'ar' ? 'جاري الحفظ في السحابة...' : 'Saving to cloud...');
          }
        }
      };

      // When server finishes processing (Cloudinary + Supabase = 80-100%)
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          setUploadProgress(100);
          setProgressStateText(t.completed);
          try {
            resolve(JSON.parse(xhr.responseText));
          } catch {
            reject(new Error('Invalid server response'));
          }
        } else {
          try {
            const err = JSON.parse(xhr.responseText);
            reject(new Error(err.message || `Server error ${xhr.status}`));
          } catch {
            reject(new Error(`Server error ${xhr.status}`));
          }
        }
      };

      xhr.onerror = () => reject(new Error('Network error — check your connection'));
      xhr.ontimeout = () => reject(new Error('Upload timed out'));
      xhr.timeout = 300000; // 5 min timeout

      xhr.open('POST', `${apiUrl}/api/submit`);
      xhr.send(formData);

      // Simulate 80-95% while server processes Cloudinary upload
      let cloudProgress = 80;
      const cloudInterval = setInterval(() => {
        if (cloudProgress < 95) {
          cloudProgress += 1;
          setUploadProgress(cloudProgress);
          setProgressStateText(lang === 'ar' ? 'جاري رفع الفيديو على المنصة...' : 'Uploading video to Cloudinary...');
        } else {
          clearInterval(cloudInterval);
        }
      }, 800);

      // Clear interval when done
      xhr.onloadend = () => clearInterval(cloudInterval);
    });

    try {
      const result = await uploadWithProgress();
      if (result.status !== 'success') throw new Error(result.message);

      setReceiptDetails({
        fullName,
        nationalId,
        submissionCode: result.submissionCode,
        status: 'Under Review'
      });

      showToast(t.toastSuccess, "success");
      setCurrentView('success');

    } catch (err) {
      showToast(lang === 'ar' ? 'تعذر الاتصال بالخادم. يرجى المحاولة مرة أخرى.' : 'Server error. Please try again.', "error");
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
      setProgressStateText("");
    }
  };

  // Submit assessment metrics
  const saveJuryEvaluation = async () => {
    if (!selectedVideo) return;

    // Block re-evaluation
    const alreadyEvaluated = selectedVideo.status !== 'Under Review' || (selectedVideo.totalScore && selectedVideo.totalScore > 0);
    if (alreadyEvaluated) {
      showToast(lang === 'ar' ? 'تم تقييم هذا الطلب مسبقاً ولا يمكن تعديله' : 'This submission has already been evaluated and cannot be changed.', 'error');
      return;
    }

    const totalSum = Number(scores.voice) + Number(scores.confidence) +
      Number(scores.language) + Number(scores.expression) +
      Number(scores.time) + Number(scores.content) + Number(scores.creativity);

    const updatedSubmissions = submissions.map(item =>
      item.submissionCode === selectedVideo.submissionCode
        ? { ...item, scores: { ...scores }, totalScore: totalSum, status: evalStatus, resultsReleased: evalResultsReleased }
        : item
    );
    setSubmissions(updatedSubmissions);
    setSelectedVideo({ ...selectedVideo, scores: { ...scores }, totalScore: totalSum, status: evalStatus, resultsReleased: evalResultsReleased });

    try {
      const response = await fetch(`${apiUrl}/api/submissions/${selectedVideo.submissionCode}/evaluate`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: evalStatus, totalScore: totalSum, resultsReleased: evalResultsReleased, scores }),
      });
      const result = await response.json();
      if (result.status !== 'success') throw new Error(result.message);
      showToast(t.toastEvalSaved, "success");
    } catch (err) {
      console.error('Eval save error:', err);
      showToast(lang === 'ar' ? 'تعذر حفظ التقييم. يرجى المحاولة مرة أخرى.' : 'Failed to save evaluation. Please try again.', "error");
    }
  };

  // Change status only (admin: can update status at any time, even after evaluation)
  const saveStatusChange = async () => {
    if (!selectedVideo) return;

    const updatedSubmissions = submissions.map(item =>
      item.submissionCode === selectedVideo.submissionCode
        ? { ...item, status: evalStatus, resultsReleased: evalResultsReleased }
        : item
    );
    setSubmissions(updatedSubmissions);
    setSelectedVideo({ ...selectedVideo, status: evalStatus, resultsReleased: evalResultsReleased });

    try {
      const response = await fetch(`${apiUrl}/api/submissions/${selectedVideo.submissionCode}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: evalStatus, resultsReleased: evalResultsReleased }),
      });
      const result = await response.json();
      if (result.status !== 'success') throw new Error(result.message);
      showToast(lang === 'ar' ? 'تم تحديث حالة الطلب بنجاح' : 'Status updated successfully', "success");
    } catch (err) {
      console.error('Status update error:', err);
      showToast(lang === 'ar' ? 'تعذر تحديث الحالة. يرجى المحاولة مرة أخرى.' : 'Failed to update status. Please try again.', "error");
    }
  };

  // Save data edits (data_admin)
  const saveDataEdit = async () => {
    if (!editTarget) return;
    setEditSaving(true);
    const updatedAgeCategory = getAgeCategoryLabel(editChildAge);
    const updatedSubmissions = submissions.map(item =>
      item.submissionCode === editTarget.submissionCode
        ? { ...item, fullName: editFullName, nationalId: editNationalId, childAge: editChildAge, ageCategory: updatedAgeCategory }
        : item
    );
    setSubmissions(updatedSubmissions);

    try {
      const response = await fetch(`${apiUrl}/api/submissions/${editTarget.submissionCode}/edit`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName: editFullName, nationalId: editNationalId, childAge: editChildAge, ageCategory: updatedAgeCategory }),
      });
      const result = await response.json();
      if (result.status !== 'success') throw new Error(result.message);
      showToast(lang === 'ar' ? 'تم تعديل بيانات الطلب بنجاح' : 'Submission data updated successfully', "success");
    } catch (err) {
      showToast(lang === 'ar' ? 'تعذر حفظ التعديلات. يرجى المحاولة مرة أخرى.' : 'Failed to save changes. Please try again.', "error");
    }
    setEditSaving(false);
  };

  // Voting logic
  const registerVote = async (item) => {
    if (!loggedInUser) {
      showToast(lang === 'ar' ? 'يجب تسجيل الدخول للتصويت' : 'Please log in to vote', "error");
      return;
    }

    // Optimistically update UI
    setSubmissions(prev => prev.map(sub =>
      sub.submissionCode === item.submissionCode
        ? { ...sub, votes: (sub.votes || 0) + 1 }
        : sub
    ));

    try {
      const response = await apiFetch(`${apiUrl}/api/submissions/vote/${item.submissionCode}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      const result = await response.json();

      if (result.status === 'success') {
        showToast(t.votedSuccessfully, "success");
      } else if (result.message === 'already_voted') {
        // Server says already voted — rollback
        setSubmissions(prev => prev.map(sub =>
          sub.submissionCode === item.submissionCode
            ? { ...sub, votes: Math.max((sub.votes || 1) - 1, 0) }
            : sub
        ));
        showToast(lang === 'ar' ? 'لقد صوّتت لهذا المتسابق من قبل' : 'You already voted for this contestant', "error");
      } else {
        throw new Error(result.message);
      }
    } catch (err) {
      // Rollback optimistic update
      setSubmissions(prev => prev.map(sub =>
        sub.submissionCode === item.submissionCode
          ? { ...sub, votes: Math.max((sub.votes || 1) - 1, 0) }
          : sub
      ));
      showToast(lang === 'ar' ? 'فشل حفظ التصويت. حاول مرة أخرى.' : 'Failed to save vote. Please try again.', "error");
    }
  };

  // Parent status inquiry
  const handleQueryStatus = (e) => {
    e.preventDefault();
    if (!queryId.trim()) return;

    const match = submissions.find(item => item.nationalId.trim() === queryId.trim());
    setQueriedRecord(match || null);
    setHasQueried(true);
  };

  // Unified Portal Authentication Handler (Combines parents register, parent login, and administrator check)
  const handleUnifiedAuth = async (e) => {
    e.preventDefault();
    setAuthError('');
    setAuthLoading(true);

    if (authTab === 'admin') {
      // 1. ADMIN JURY LOGIN FLOW
      try {
        const response = await fetch(`${apiUrl}/api/admin/verify`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: emailInput.trim(), passcode: passwordInput }),
        });
        const result = await response.json();
        if (result.status === 'success' && (result.user?.role === 'admin' || result.user?.role === 'data_admin')) {
          setAdminRole(result.user.role);
          setAdminCredentials({ username: emailInput.trim(), passcode: passwordInput });
          setShowAuthModal(false);
          clearAuthInputs();
          setCurrentView('admin');
          showToast(lang === 'ar' ? 'تم الدخول بنجاح إلى لوحة تحكيم المدينة ستيج' : 'Admin successfully logged in', 'success');
        } else {
          setAuthError(translateServerError(result.message) || t.incorrectPasscode);
        }
      } catch (err) {
        setAuthError(lang === 'ar' ? 'عذراً، لم نتمكن من الوصول لخادم الإدارة.' : 'Admin server is offline or unreachable.');
      }
    } else {
      // 2. PARENT LOGIN & REGISTRATION FLOWS
      if (!emailInput.trim() || !passwordInput) {
        setAuthError(lang === 'ar' ? 'يرجى كتابة البريد الإلكتروني وكلمة المرور' : 'Please fill in email and password');
        setAuthLoading(false);
        return;
      }

      if (parentMode === 'register') {
        // STEP 1: validate email + password, then advance
        if (registerStep === 1) {
          if (passwordInput !== confirmPasswordInput) {
            setAuthError(lang === 'ar' ? 'كلمتا المرور غير متطابقتين' : 'Passwords do not match');
            setAuthLoading(false);
            return;
          }
          if (passwordInput.length < 6) {
            setAuthError(lang === 'ar' ? 'يجب ألا تقل كلمة المرور عن 6 أحرف' : 'Password must be at least 6 characters');
            setAuthLoading(false);
            return;
          }
          setAuthError('');
          setAuthLoading(false);
          setRegisterStep(2);
          return;
        }

        // STEP 2: validate profile fields, then submit
        if (!regFullName.trim()) {
          setAuthError(lang === 'ar' ? 'يرجى إدخال الاسم الكامل' : 'Please enter your full name');
          setAuthLoading(false);
          return;
        }
        const ageNum = parseInt(regAge);
        if (!regAge || isNaN(ageNum) || ageNum < 1 || ageNum > 120) {
          setAuthError(lang === 'ar' ? 'يرجى إدخال عمر صحيح' : 'Please enter a valid age');
          setAuthLoading(false);
          return;
        }
        if (!regNationalId.trim()) {
          setAuthError(lang === 'ar' ? 'يرجى إدخال رقم الهوية' : 'Please enter your ID number');
          setAuthLoading(false);
          return;
        }
        if (!regMobile.trim()) {
          setAuthError(lang === 'ar' ? 'يرجى إدخال رقم الجوال' : 'Please enter your mobile number');
          setAuthLoading(false);
          return;
        }

        // Parent Registration
        try {
          const response = await fetch(`${apiUrl}/api/user/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: emailInput.trim(), password: passwordInput, fullName: regFullName.trim(), age: ageNum, nationalId: regNationalId.trim(), mobile: regMobile.trim() }),
          });
          const result = await response.json();
          if (result.status === 'success') {
            setAccessToken(result.accessToken);
            setLoggedInUser(result.user);
            setShowAuthModal(false);
            clearAuthInputs();
            showToast(lang === 'ar' ? 'تم إنشاء حساب ولي الأمر بنجاح! أهلاً بك' : 'Account created successfully!', 'success');
          } else {
            setAuthError(translateServerError(result.message));
          }
        } catch (err) {
          setAuthError(lang === 'ar' ? 'تعذّر الاتصال بالخادم. يرجى التحقق من الاتصال والمحاولة مرة أخرى.' : 'Could not reach the server. Please check your connection and try again.');
        }
      } else {
        // Parent Sign-In
        try {
          const response = await fetch(`${apiUrl}/api/user/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: emailInput.trim(), password: passwordInput }),
          });
          const result = await response.json();
          if (result.status === 'success') {
            setAccessToken(result.accessToken);
            setLoggedInUser(result.user);
            setShowAuthModal(false);
            clearAuthInputs();
            showToast(lang === 'ar' ? `أهلاً بك مجدداً يا ${result.user.username}!` : `Welcome back, ${result.user.username}!`, 'success');
          } else {
            setAuthError(translateServerError(result.message));
          }
        } catch (err) {
          setAuthError(lang === 'ar' ? 'تعذّر الاتصال بالخادم. يرجى التحقق من الاتصال والمحاولة مرة أخرى.' : 'Could not reach the server. Please check your connection and try again.');
        }
      }
    }
    setAuthLoading(false);
  };

  // Translate server error messages to the current language
  const translateServerError = (msg) => {
    if (lang !== 'ar') return msg;
    const map = {
      'Invalid email or password':               'البريد الإلكتروني أو كلمة المرور غير صحيحة',
      'Invalid username or password':              'البريد الإلكتروني أو كلمة المرور غير صحيحة',
      'Invalid email or password':                  'البريد الإلكتروني أو كلمة المرور غير صحيحة',
      'Username and passcode are required':         'يرجى إدخال اسم المستخدم ورمز المرور',
      'Email already registered. Please use another.': 'البريد الإلكتروني مسجل بالفعل. يرجى استخدام بريد آخر.',
      'Mobile number already registered. Please use another.': 'رقم الجوال مسجل بالفعل. يرجى استخدام رقم آخر.',
      'Email and password are required':          'البريد الإلكتروني وكلمة المرور مطلوبان',
      'Please enter a valid email address':       'يرجى إدخال بريد إلكتروني صحيح',
      'Password must be at least 6 characters': 'يجب ألا تقل كلمة المرور عن 6 أحرف',
      'Internal server error':                  'خطأ داخلي في الخادم',
    };
    return map[msg] || msg;
  };

  const clearAuthInputs = () => {
    setEmailInput('');
    setPasswordInput('');
    setConfirmPasswordInput('');
    setRegFullName('');
    setRegAge('');
    setRegNationalId('');
    setRegMobile('');
    setRegisterStep(1);
    setAuthError('');
  };

  const handleUserLogout = async () => {
    try { await fetch(`${apiUrl}/api/user/logout`, { method: 'POST', credentials: 'include' }); } catch {}
    setLoggedInUser(null);
    setAccessToken(null);
    setUserSubmissions([]);
    setCurrentView('submission');
    showToast(lang === 'ar' ? 'تم تسجيل الخروج بنجاح' : 'Logged out successfully', 'success');
  };

  const loadUserSubmissions = async (userId) => {
    try {
      const [subsResponse, votesResponse] = await Promise.all([
        apiFetch(`${apiUrl}/api/user/${userId}/submissions`),
        apiFetch(`${apiUrl}/api/user/${userId}/votes`),
      ]);
      if (subsResponse.ok) {
        const data = await subsResponse.json();
        setUserSubmissions(Array.isArray(data) ? data : []);
      }
      if (votesResponse.ok) {
        const votesData = await votesResponse.json();
        if (votesData.votedCodes) {
          // votes are tracked server-side only
        }
      }
    } catch {
      setUserSubmissions([]);
    }
  };

  const saveGoogleIntegration = () => {
    setShowSetupModal(false);
    showToast(t.toastSettingsSynced, "success");
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
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'} className="bg-[#E3F3F7]/20 text-slate-900 min-h-screen flex flex-col antialiased font-sans relative overflow-hidden">
      <style>{`
        input::placeholder {
          line-height: normal !important;
          opacity: 1;
        }
        input {
          line-height: normal !important;
          box-sizing: border-box;
        }
      `}</style>

      {/* Playful Floating Bubbles Background for Kids Theme */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-[#FBE8EB] rounded-full blur-3xl opacity-60 pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#E3F3F7] rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-[#EAE8F5] rounded-full blur-3xl opacity-40 pointer-events-none animate-bounce duration-1000"></div>

      {/* Toast Alert Banner */}
      {toast.show && (
        <div className={`fixed bottom-4 ${lang === 'ar' ? 'left-4' : 'right-4'} z-50 text-white px-6 py-4 rounded-2xl shadow-xl flex items-center space-x-3 gap-2 transition-all duration-300 transform translate-y-0 ${toast.type === 'success' ? 'bg-[#6AB28D]' : 'bg-[#E37C8D]'
          }`}>
          <span className="text-sm font-bold">{toast.message}</span>
        </div>
      )}

      {/* Playful Navigation Top Header */}
      <nav className="bg-white/95 border-b-4 border-[#60A7BD] sticky top-0 z-30 shadow-md backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:justify-between py-3 lg:h-20 lg:items-center gap-3">

            {/* Branding Title */}
            <div className="flex items-center gap-2 w-full lg:w-auto justify-center lg:justify-start">
              {/* Three brand logos replacing the single icon */}
              <img src="/logo1.png" alt="جمعية البر" className="h-10 sm:h-12 w-auto object-contain" />
              <img src="/logo2.png" alt="Taibah Kids" className="h-10 sm:h-12 w-auto object-contain" />
              <img src="/logo3.png" alt="Almadinah Stage" className="h-10 sm:h-12 w-auto object-contain" />
              <div>
                <span className="text-lg sm:text-2xl font-bold tracking-tight text-[#AC6E97]">
                  {t.title}
                </span>
                <span className="text-xs block text-[#7d72ad] font-bold tracking-wider -mt-0.5">
                  {t.subtitle}
                </span>
              </div>
            </div>

            {/* Menu and Controls */}
            <div className="flex flex-wrap justify-center lg:justify-end items-center gap-2 w-full lg:w-auto">

              {/* Submission Portal / Voting Tab switchers */}
              <button
                onClick={() => setCurrentView('submission')}
                className={`px-3 sm:px-4 py-2 text-[11px] sm:text-sm font-bold rounded-2xl transition-all border-b-4 font-normal ${currentView === 'submission'
                    ? 'bg-[#6A5E9E] border-[#4a4080] text-white shadow-md'
                    : 'bg-[#E3F3F7] hover:bg-[#c8eaf2] text-[#60A7BD] border-transparent hover:border-[#60A7BD]'
                  }`}
              >
                {t.submissionTab}
              </button>

              {loggedInUser && currentView !== 'admin' && votingEnabled && (
                <button
                  onClick={() => setCurrentView('voting')}
                  className={`px-3 sm:px-4 py-2 text-[11px] sm:text-sm font-bold rounded-2xl transition-all border-b-4 font-normal ${currentView === 'voting'
                      ? 'bg-[#6A5E9E] border-[#4a4080] text-white shadow-md '
                      : 'bg-[#E3F3F7] hover:bg-[#c8eaf2] text-[#60A7BD] border-transparent hover:border-[#60A7BD]'
                    }`}
                >
                  {t.publicVoteTab}
                </button>
              )}

              {/* UNIFIED SESSION CONTROL (Single navbar button based on dynamic active role session) */}
              {currentView === 'admin' ? (
                // 1. Admin Active Session
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1.5 px-3 h-10 sm:h-11 bg-[#E3F2EB] border-b-4 border-[#6AB28D] text-[#4a9070] text-xs font-bold rounded-2xl">
                    <Sliders className="w-4 h-4" />
                    {lang === 'ar' ? 'لجنة التحكيم' : 'Jury Admin'}
                  </span>
                  <button
                    onClick={() => setCurrentView('submission')}
                    className="flex items-center gap-1 px-3 sm:px-4 h-10 sm:h-11 text-[11px] sm:text-sm font-bold text-slate-700 bg-slate-100 hover:bg-[#FEF0F2] border-b-4 border-slate-300 hover:border-rose-400 rounded-2xl transition-all duration-200"
                  >
                    <ArrowLeft className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                    <span>{t.exitDashboard}</span>
                  </button>
                </div>
              ) : loggedInUser ? (
                // 2. Parent Active Session
                <div className="flex items-center gap-2">
                  <span className="hidden md:flex items-center gap-1.5 px-3 h-10 sm:h-11 bg-[#EEF8F3] border-b-4 border-emerald-300 text-[#4a9070] text-xs font-bold rounded-2xl">
                    <UserCheck className="w-4 h-4" />
                    {loggedInUser.username}
                  </span>
                  <button
                    onClick={handleUserLogout}
                    className="flex items-center gap-1 px-3 sm:px-4 h-10 sm:h-11 text-[11px] sm:text-sm font-bold text-rose-600 bg-[#FEF0F2] hover:bg-[#FBE8EB] border-b-4 border-rose-200 hover:border-rose-400 rounded-2xl transition-all duration-200"
                  >
                    <ArrowLeft className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                    <span>{lang === 'ar' ? 'تسجيل الخروج' : 'Logout'}</span>
                  </button>
                </div>
              ) : (
                // 3. Logged-Out Guest View: Show Elegant Unified Member Portal Login Trigger
                <button
                  onClick={() => {
                    setAuthTab('parent');
                    setParentMode('login');
                    clearAuthInputs();
                    setShowAuthModal(true);
                  }}
                  className="flex items-center gap-1.5 px-3 sm:px-5 h-10 sm:h-11 text-[11px] sm:text-sm font-bold text-[#6A5E9E] bg-[#F4F3FB] hover:bg-[#EAE8F5] border-b-4 border-[#a89dd0] hover:border-[#8a7eb8] rounded-2xl transition-all duration-200 shadow-sm"
                >
                  <Lock className="w-4 h-4 text-[#6A5E9E]" />
                  <span>{lang === 'ar' ? 'تسجيل الدخول' : 'Member Portal'}</span>
                </button>
              )}

            </div>
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">

        {/* VIEW 1: Public Submission Desk & Form */}
        {currentView === 'submission' && (
          <>
          {/* Hero Card — full width */}
          <div className="mb-8">
              <div className="bg-[#2d2650] text-white rounded-[2rem] shadow-2xl relative overflow-hidden" style={{minHeight: '360px'}}>
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, #6A5E9E 0%, transparent 60%), radial-gradient(circle at 80% 20%, #AC6E97 0%, transparent 50%)'}}></div>

                <div className="relative z-10 flex flex-col lg:flex-row h-full">
                  {/* Left: text content */}
                  <div className="flex-1 p-8 sm:p-10 flex flex-col justify-between gap-6">
                    {/* Top badge */}
                    <div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-bold bg-[#F5876C]/20 text-[#F5876C] rounded-full border border-[#F5876C]/30 mb-5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F5876C] animate-pulse inline-block"></span>
                        {lang === 'ar' ? 'دورة 2026 — مفتوحة الآن' : 'Season 2026 — Now Open'}
                      </span>

                      <h1 className="text-2xl sm:text-3xl font-bold leading-snug mb-4 text-white">
                        {t.showcaseTitle}
                      </h1>
                      <p className="text-white/70 text-xs sm:text-sm font-medium leading-relaxed max-w-md">
                        {t.showcaseSub}
                      </p>
                    </div>

                    {/* CTA buttons */}
                    <div className="flex flex-wrap gap-3 items-center">
                      <button
                        onClick={() => document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                        className="px-6 py-3 bg-[#F5876C] hover:bg-[#e0705a] text-white font-bold rounded-2xl border-b-4 border-[#c45e42] transition-all text-sm shadow-lg active:scale-95"
                      >
                        {lang === 'ar' ? 'سجّل طفلك الآن' : 'Register Now'}
                      </button>
                      <button
                        onClick={() => setCurrentView('voting')}
                        className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl border border-white/20 transition-all text-sm"
                      >
                        {lang === 'ar' ? 'انتقل إلى التصويت' : 'Go to Voting'}
                      </button>
                    </div>

                    {/* Stats row */}
                    <div className="flex gap-6 pt-2 border-t border-white/10">
                      <div>
                        <p className="text-xl font-extrabold text-[#E37C8D]">{submissions.length || '0'}</p>
                        <p className="text-[10px] text-white/50 font-semibold">{lang === 'ar' ? 'مشاركاً مسجّلاً' : 'Registered'}</p>
                      </div>
                      <div>
                        <p className="text-xl font-extrabold text-[#60A7BD]">3</p>
                        <p className="text-[10px] text-white/50 font-semibold">{lang === 'ar' ? 'فئات عمرية' : 'Age Groups'}</p>
                      </div>
                      <div>
                        <p className="text-xl font-extrabold text-[#6AB28D]">{submissions.reduce((acc, s) => acc + (s.votes || 0), 0)}</p>
                        <p className="text-[10px] text-white/50 font-semibold">{lang === 'ar' ? 'إجمالي الأصوات' : 'Total Votes'}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right: photo */}
                  <div className="lg:w-[42%] relative overflow-hidden rounded-b-[2rem] lg:rounded-b-none lg:rounded-s-none lg:rounded-e-[2rem]" style={{minHeight: '260px'}}>
                    <img
                      src="data:image/png;base64,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"
                      alt="kids on stage"
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{filter: 'brightness(0.75)'}}
                    />
                    {/* Gradient fade into card on the inner edge */}
                    <div className="absolute inset-0" style={{background: lang === 'ar' ? 'linear-gradient(to left, transparent 40%, #2d2650 100%)' : 'linear-gradient(to right, transparent 40%, #2d2650 100%)'}}></div>
                  </div>
                </div>
              </div>
          </div>

          {/* ── MY CERTIFICATES SECTION (visible to logged-in parents only) ── */}
          {loggedInUser && userSubmissions.length > 0 && (
            <div className="mb-8">
              <div className="bg-white rounded-[2rem] border-4 border-[#6A5E9E]/30 shadow-xl overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#6A5E9E] to-[#AC6E97] px-6 sm:px-8 py-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-white font-bold text-base sm:text-lg">
                                                  {lang === 'ar' ? 'لوحة متابعة مشاركات أطفالك' : 'My Certificates & Submissions'}
                      </h2>
                      <p className="text-white/70 text-xs font-medium">
                        {lang === 'ar'
                          ? 'تتبع حالة طفلك وحمّل شهاداته من هنا'
                          : "Track your child's status and download their certificates"}
                      </p>
                    </div>
                  </div>
                  <span className="bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    {userSubmissions.length} {lang === 'ar' ? 'طلب' : 'submission(s)'}
                  </span>
                </div>

                {/* Cards Grid */}
                <div className="p-5 sm:p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                    {userSubmissions.map((sub) => {
                      const isQualified = ['Qualified', 'Finalist', 'Winner'].includes(sub.status);
                      const canDownload = sub.resultsReleased && isQualified;
                      const statusColors = {
                        Winner: 'bg-[#FFF3E0] text-[#E37C8D] border-[#E37C8D]',
                        Finalist: 'bg-[#E3F2EB] text-[#4a9070] border-[#6AB28D]',
                        Qualified: 'bg-[#E3F2EB] text-[#4a9070] border-[#6AB28D]',
                        'Not Qualified': 'bg-[#FEF0F2] text-rose-600 border-rose-300',
                        'Under Review': 'bg-[#EAE8F5] text-[#6A5E9E] border-[#a89dd0]',
                      };
                      const colorClass = statusColors[sub.status] || statusColors['Under Review'];

                      return (
                        <div key={sub.submissionCode}
                          className="relative bg-slate-50 border-2 border-slate-100 rounded-[1.5rem] p-5 flex flex-col gap-4 hover:border-[#6A5E9E]/30 hover:shadow-md transition-all duration-200">

                          {/* Decorative top glow for winners */}
                          {/*{sub.status === 'Winner' && (*/}
                          {/*  //<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E37C8D] via-[#F5876C] to-[#AC6E97] rounded-t-[1.5rem]"></div>*/}
                          {/*)}*/}

                          {/* Child info */}
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex items-center gap-3 min-w-0">
                              <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                                style={{ background: canDownload ? 'linear-gradient(135deg, #6A5E9E, #AC6E97)' : '#EAE8F5' }}>
                                {canDownload
                                  ? <Award className="w-5 h-5 text-white" />
                                  : <Loader2 className="w-5 h-5 text-[#6A5E9E]" />}
                              </div>
                              <div className="min-w-0">
                                <p className="font-bold text-slate-900 text-sm truncate">{sub.fullName}</p>
                                <p className="text-xs text-slate-400 font-medium">{sub.ageCategory || getAgeCategoryLabel(sub.childAge)}</p>
                              </div>
                            </div>
                            <span className={`flex-shrink-0 text-[10px] font-bold px-2.5 py-1 rounded-full border ${colorClass}`}>
                              {getStatusLabel(sub.status)}
                            </span>
                          </div>

                          {/* Submission code */}
                          <div className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-100 rounded-xl">
                            <Key className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                            <span className="text-[11px] text-slate-500 font-mono truncate">{sub.submissionCode}</span>
                          </div>

                          {/* Score badge (if evaluated and released) */}
                          {sub.resultsReleased && sub.totalScore > 0 && (
                            <div className="flex items-center justify-between px-4 py-2.5 bg-[#EAE8F5] rounded-xl border border-[#6A5E9E]/20">
                              <span className="text-xs text-[#6A5E9E] font-bold">
                                {lang === 'ar' ? 'الدرجة الكلية' : 'Total Score'}
                              </span>
                              <span className="text-[#6A5E9E] font-extrabold text-sm">{sub.totalScore} / 100</span>
                            </div>
                          )}

                          {/* Certificate Download Button */}
                          {canDownload ? (
                            <button
                              onClick={() => { setCertTarget(sub); setShowCertificate(true); }}
                              className="w-full py-3 bg-gradient-to-r from-[#6A5E9E] to-[#AC6E97] hover:from-[#5a4e8e] hover:to-[#96598a] text-white font-bold rounded-xl transition-all text-xs flex items-center justify-center gap-2 shadow-md border-b-2 border-[#4a4080] active:scale-[0.98]"
                            >
                              <FileDown className="w-4 h-4" />
                              <span>{lang === 'ar' ? 'عرض وتحميل الشهادة' : 'View & Download Certificate'}</span>
                            </button>
                          ) : (
                            <div className="w-full py-3 bg-slate-100 text-slate-400 font-bold rounded-xl text-xs flex items-center justify-center gap-2 border border-slate-200">
                              <Lock className="w-3.5 h-3.5" />
                              <span>
                                {sub.resultsReleased
                                  ? (lang === 'ar' ? 'الشهادة غير متاحة لهذا المستوى' : 'Certificate not available for this level')
                                  : (lang === 'ar' ? 'بانتظار اعتماد النتيجة' : 'Pending result approval')}
                              </span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">

            {/* Guide Guidelines Sidebar */}
            <div className="lg:col-span-4 space-y-6">

              {/* Requirement Checklist card */}
              <div className="bg-white rounded-[2rem] border-4 border-[#E37C8D]/40 p-6 sm:p-7 space-y-4 shadow-sm relative overflow-hidden">
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-[#EAE8F5] rounded-full opacity-40"></div>
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2 border-b-2 border-slate-100 pb-3">
                  <BookOpen className="w-5 h-5 text-orange-500" />
                  <span>{t.instructionsTitle}</span>
                </h3>
                <ul className="space-y-3.5 text-xs sm:text-sm font-semibold text-slate-655">
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
              <div className="bg-white rounded-[2rem] border-4 border-[#ccc7e8] p-6 space-y-4 shadow-sm">
                <h3 className="font-bold text-[#2d2650] text-base flex items-center gap-2 border-b-2 border-slate-100 pb-3">
                  <Search className="w-5 h-5 text-[#6A5E9E]" />
                  <span>{t.queryResultTitle}</span>
                </h3>
                <form onSubmit={handleQueryStatus} className="space-y-3">
                  <input
                    type="text"
                    placeholder={t.statusQueryPlaceholder}
                    value={queryId}
                    onChange={(e) => setQueryId(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-[#EAE8F5] rounded-2xl text-xs sm:text-sm font-semibold focus:outline-none focus:ring-4 focus:ring-[#6A5E9E]/10 focus:border-[#8a7eb8] transition-all"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#60A7BD] hover:bg-[#4a91a8] text-white font-bold rounded-2xl border-b-4 border-[#3a7a90] transition-all text-xs sm:text-sm"
                  >
                    {t.queryBtn}
                  </button>
                </form>

                {hasQueried && (
                  <div className="p-4 bg-[#E3F3F7]/50 rounded-2xl border-2 border-[#60A7BD]/30 text-xs sm:text-sm text-slate-700 animate-fade-in space-y-3">
                    {queriedRecord ? (
                      <div className="space-y-3">
                        <p className="font-extrabold text-[#2d2650]">{queriedRecord.fullName}</p>
                        <div className="flex justify-between items-center bg-white p-3 rounded-xl border border-[#EAE8F5]">
                          <span className="text-slate-400 font-bold">{t.statusLabel}</span>
                          <span className={`px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold ${queriedRecord.status === 'Winner' ? 'bg-[#E37C8D] text-white border border-[#6A5E9E]' :
                              queriedRecord.status === 'Qualified' || queriedRecord.status === 'Finalist' ? 'bg-green-100 text-green-800 border border-green-300' :
                                queriedRecord.status === 'Not Qualified' ? 'bg-[#FBE8EB] text-rose-800' :
                                  'bg-[#EAE8F5] text-[#4a4080]'
                            }`}>
                            {getStatusLabel(queriedRecord.status)}
                          </span>
                        </div>

                        {/* Interactive Certificate presentation for qualified kids */}
                        {queriedRecord.resultsReleased && (queriedRecord.status === 'Qualified' || queriedRecord.status === 'Finalist' || queriedRecord.status === 'Winner') && (
                          <button
                            onClick={() => {
                              setCertTarget(queriedRecord);
                              setShowCertificate(true);
                            }}
                            className="w-full py-3 bg-[#F5876C] hover:bg-[#e0705a] text-white font-bold rounded-xl text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm border-b-2 border-[#c45e42]"
                          >
                            <Award className="w-4 h-4" />
                            <span>{t.certButton}</span>
                          </button>
                        )}

                        {!queriedRecord.resultsReleased && (
                          <p className="text-xs text-[#AC6E97] text-center italic font-bold"> {t.pendingRelease}</p>
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
                          <div className="lg:col-span-8 bg-white rounded-[2.5rem] border-4 border-[#F5876C] shadow-xl p-6 sm:p-10 relative ">
                              <div className="absolute top-0 right-10 transform -translate-y-1/2 bg-[#F5876C] text-white font-bold px-6 py-1.5 rounded-full text-xs shadow-sm font-bold">
                {t.registrationForm}
              </div>

              {!loggedInUser ? (
                <div className="text-center py-12 px-4 space-y-6">
                                      <div className="w-20 h-20 bg-[#E37C8D]/30 text-[#F5876C] rounded-3xl flex items-center justify-center text-3xl mx-auto shadow-md">
                    <Lock className="w-10 h-10 animate-bounce" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-800">
                      {lang === 'ar' ? 'منطقة خاصة بأولياء الأمور' : 'Parents Area'}
                    </h3>
                    <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed font-semibold">
                      {lang === 'ar' 
                        ? 'يرجى تسجيل الدخول أو إنشاء حساب لولي الأمر لتتمكن من رفع مقطع الإلقاء الخاص بطفلك ومتابعة تقييم لجنة التحكيم وحالة ترشيحه.'
                        : 'Please sign in or create a parent account to upload your child\'s speech video, view jury grades, and track participation status.'}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setAuthTab('parent');
                      setParentMode('login');
                      clearAuthInputs();
                      setShowAuthModal(true);
                    }}
                                          className="inline-flex items-center gap-2 px-8 py-4 bg-[#6A5E9E] hover:bg-[#5a4e8e] text-white font-bold rounded-2xl shadow-lg active:scale-95 transition-all text-sm sm:text-base border-b-4 border-[#4a4080]"
                  >
                    <Lock className="w-5 h-5" />
                    <span>{lang === 'ar' ? 'تسجيل الدخول / إنشاء حساب ولي الأمر' : 'Log In / Create Parent Account'}</span>
                  </button>
                </div>
              ) : (
                <form id="registration-form" onSubmit={handleFormSubmission} className="space-y-6">

                  {/* Child Name Input */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.fullName} <span className="text-rose-500">*</span></label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      placeholder={t.fullNamePlaceholder}
                      className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-200 rounded-2xl text-slate-900 font-semibold placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-[#6A5E9E]/10 focus:border-[#8a7eb8] transition-all text-sm"
                    />
                  </div>

                  {/* National ID & Age Category Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">{t.nationalId} <span className="text-rose-500">*</span></label>
                      <input
                        type="text"
                        value={nationalId}
                        onChange={(e) => setNationalId(e.target.value)}
                        required
                        placeholder={t.nationalIdPlaceholder}
                        className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-200 rounded-2xl text-slate-900 font-semibold placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-[#6A5E9E]/10 focus:border-[#8a7eb8] transition-all text-sm"
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
                          className={`w-full bg-slate-50 border-2 border-slate-200 rounded-2xl font-semibold focus:outline-none focus:ring-4 focus:ring-[#6A5E9E]/10 focus:border-[#8a7eb8] transition-all text-sm appearance-none py-4 ${lang === 'ar' ? 'pl-10 pr-5' : 'pr-10 pl-5'} ${childAge ? 'text-slate-900' : 'text-slate-400'}`}
                        >
                          <option value="" className="text-slate-400">{t.selectAge}</option>
                          {[7, 8, 9, 10, 11, 12, 13, 14, 15].map(age => (
                            <option key={age} value={age} className="text-slate-900 font-semibold">
                              {age} {lang === 'ar' ? 'سنوات' : 'Years'}
                            </option>
                          ))}
                        </select>
                        {/* Interactive Custom Styled Indicator Arrow */}
                        <div className={`absolute inset-y-0 ${lang === 'ar' ? 'left-4' : 'right-4'} flex items-center pointer-events-none text-[#6A5E9E]`}>
                          <ChevronDown className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Automatically Determined Age category indicator */}
                  {childAge && (
                    <div className="p-4 bg-[#E3F2EB] border-2 border-[#6AB28D]/50 rounded-2xl text-xs sm:text-sm text-[#3a8060] font-bold flex items-center gap-2">
                      <Award className="w-5 h-5 text-[#6AB28D]" />
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
                      className={`border-4 border-dashed rounded-3xl p-8 text-center cursor-pointer transition-all duration-200 group relative ${idDragActive ? 'border-[#60A7BD] bg-[#E3F3F7]/20' : 'border-slate-200 hover:border-[#60A7BD] bg-slate-50 hover:bg-[#E3F3F7]/10'}`}
                    >
                      <input ref={idFileInputRef} type="file" accept=".jpg,.jpeg,.png,.pdf" onChange={handleIdFileChange} className="hidden" />
                      {!selectedIdFile ? (
                        <div className="space-y-3">
                          <div className="w-14 h-14 bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center mx-auto text-slate-400 group-hover:text-[#6A5E9E] group-hover:scale-110 transition-all duration-200">
                            <CloudUpload className="w-7 h-7" />
                          </div>
                          <div className="text-slate-655 text-sm sm:text-sm font-bold">
                            <span className="font-bold text-[#60A7BD] group-hover:underline">{t.clickToUpload}</span> {t.dragDrop}
                          </div>
                          <p className="text-xs sm:text-sm text-slate-400">{t.idProofRecommend}</p>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between p-3 bg-white border-2 border-[#EAE8F5] rounded-2xl shadow-sm gap-2">
                          <div className="flex items-center gap-2 min-w-0">
                            <div className="w-11 h-11 bg-[#E3F3F7] rounded-lg flex items-center justify-center text-[#60A7BD] flex-shrink-0">
                              <Check className="w-6 h-6" />
                            </div>
                            <p className="text-xs sm:text-sm font-bold text-slate-800 truncate max-w-[180px] sm:max-w-xs">{selectedIdFile.name}</p>
                          </div>
                          <button type="button" onClick={(e) => { e.stopPropagation(); setSelectedIdFile(null); }} className="w-8 h-8 rounded-lg hover:bg-[#FEF0F2] text-slate-400 hover:text-rose-600 flex items-center justify-center transition-all">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Child Personal Photo Upload */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      {lang === 'ar' ? 'صورة شخصية للطفل' : 'Child Personal Photo'} <span className="text-rose-500">*</span>
                    </label>
                    <div
                      onDragEnter={handlePhotoDrag}
                      onDragOver={handlePhotoDrag}
                      onDragLeave={handlePhotoDrag}
                      onDrop={handlePhotoDrop}
                      onClick={() => photoFileInputRef.current.click()}
                      className={`border-4 border-dashed rounded-3xl p-8 text-center cursor-pointer transition-all duration-200 group relative ${photoDragActive ? 'border-teal-500 bg-[#E3F3F7]/20' : 'border-slate-200 hover:border-teal-500 bg-slate-50 hover:bg-[#E3F3F7]/10'}`}
                    >
                      <input ref={photoFileInputRef} type="file" accept="image/*" onChange={handlePhotoFileChange} className="hidden" />
                      {!selectedPhotoFile ? (
                        <div className="space-y-3">
                          <div className="w-14 h-14 bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center mx-auto text-slate-400 group-hover:text-teal-600 group-hover:scale-110 transition-all duration-200">
                            <CloudUpload className="w-7 h-7" />
                          </div>
                          <div className="text-slate-655 text-sm sm:text-sm font-bold">
                            <span className="font-bold text-teal-600 group-hover:underline">{t.clickToUpload}</span> {t.dragDrop}
                          </div>
                          <p className="text-xs sm:text-sm text-slate-400">{lang === 'ar' ? 'الصيغ المقبولة: JPG، PNG' : 'Accepted: JPG, PNG'}</p>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between p-3 bg-white border-2 border-teal-100 rounded-2xl shadow-sm gap-2">
                          <div className="flex items-center gap-3 min-w-0">
                            <img src={URL.createObjectURL(selectedPhotoFile)} alt="preview" className="w-11 h-11 rounded-lg object-cover flex-shrink-0 border border-teal-200" />
                            <div className="min-w-0">
                              <p className="text-xs sm:text-sm font-bold text-slate-800 truncate max-w-[180px] sm:max-w-xs">{selectedPhotoFile.name}</p>
                              <p className="text-xs text-slate-400">{(selectedPhotoFile.size / 1024).toFixed(0)} KB</p>
                            </div>
                          </div>
                          <button type="button" onClick={(e) => { e.stopPropagation(); setSelectedPhotoFile(null); }} className="w-8 h-8 rounded-lg hover:bg-[#FEF0F2] text-slate-400 hover:text-rose-600 flex items-center justify-center transition-all">
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
                          <div className="text-slate-655 text-sm sm:text-sm font-bold">
                            <span className="font-bold text-orange-500 group-hover:underline">{t.clickToUpload}</span> {t.dragDrop}
                          </div>
                          <p className="text-xs sm:text-sm text-slate-400">{t.videoSizeRecommend}</p>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between p-3 bg-white border-2 border-orange-100 rounded-2xl shadow-sm gap-2">
                          <div className="flex items-center space-x-3 gap-3 text-left min-w-0">
                            <div className="w-11 h-11 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500 flex-shrink-0">
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
                  setSelectedPhotoFile(null);
                            }}
                            className="w-9 h-9 rounded-xl hover:bg-[#FEF0F2] text-slate-400 hover:text-rose-600 flex items-center justify-center transition-all"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Legal Statement Terms and Conditions Checkbox */}
                  <div className="bg-[#FBE8EB] rounded-3xl p-5 sm:p-6 border-2 border-[#E37C8D]/30 space-y-4">
                    <div className="flex items-start gap-2.5 text-slate-655 text-justify">
                      <ShieldCheck className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm font-normal leading-relaxed">
                        {t.parentAgreementText}
                      </p>
                    </div>
                    <label className="flex items-center gap-2.5 cursor-pointer mt-2 pt-3 border-t-2 border-[#E37C8D]/30">
                      <input
                        type="checkbox"
                        checked={parentAgreed}
                        onChange={(e) => setParentAgreed(e.target.checked)}
                        className="w-5 h-5 text-[#6A5E9E] border-slate-300 rounded focus:ring-[#6A5E9E]"
                      />
                      <span className="text-xs sm:text-sm font-bold  text-[#2d2650]">{t.agreeCheckbox} <span className="text-rose-500">*</span></span>
                    </label>
                  </div>

                  {/* Progress Bar Loader (Active during upload) */}
                  {isUploading && (
                    <div className="space-y-2 bg-[#E3F2EB]/50 p-4 border border-[#6AB28D]/30 rounded-xl animate-fade-in">
                      <div className="flex justify-between items-center gap-2">
                        <span className="text-xs sm:text-sm font-bold text-[#6AB28D] flex items-center">
                          <Loader2 className={`w-4 h-4 animate-spin ${lang === 'ar' ? 'ml-1.5' : 'mr-1.5'}`} />
                          {progressStateText}
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-[#6AB28D]">{uploadProgress}%</span>
                      </div>
                      <div className="w-full bg-[#E3F2EB] rounded-full h-3.5 overflow-hidden border border-[#6AB28D]/30">
                        <div className="bg-[#6AB28D] h-full rounded-full transition-all duration-150" style={{ width: `${uploadProgress}%` }}></div>
                      </div>
                    </div>
                  )}

                  {/* Submit Action Button */}
                  <button
                    type="submit"
                    disabled={isUploading}
                    className={`w-full bg-[#F5876C] hover:bg-[#e0705a] text-white font-bold py-5 px-6 rounded-3xl shadow-xl active:scale-[0.99] transition-all flex items-center justify-center space-x-2 gap-2 text-sm sm:text-base border-b-8 border-[#c45e42] ${isUploading ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                  >
                    <CloudUpload className="w-6 h-6" />
                    <span>{isUploading ? t.uploadingEntry : t.uploadEntry}</span>
                  </button>

                </form>
              )}
            </div>
          </div>
          </>
        )}

        {/* VIEW 2: Public Voting Arena */}
        {currentView === 'voting' && (
          <div className="space-y-6">
            {!votingEnabled ? (
              <div className="flex flex-col items-center justify-center py-24 space-y-6 text-center">
                <div className="w-20 h-20 bg-[#EAE8F5] text-[#6A5E9E] rounded-3xl flex items-center justify-center shadow-md">
                  <Lock className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-800">
                    {lang === 'ar' ? 'التصويت مغلق حالياً' : 'Voting is Currently Closed'}
                  </h3>
                  <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed font-semibold">
                    {lang === 'ar'
                      ? 'مرحلة التصويت العام لم تبدأ بعد أو انتهت. تابعنا للاطلاع على آخر المستجدات.'
                      : 'The public voting phase has not started yet or has ended. Stay tuned for updates.'}
                  </p>
                </div>
              </div>
            ) : !loggedInUser ? (
              <div className="flex flex-col items-center justify-center py-24 space-y-6 text-center">
                <div className="w-20 h-20 bg-[#FBE8EB] text-[#E37C8D] rounded-3xl flex items-center justify-center shadow-md">
                  <Lock className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-800">
                    {lang === 'ar' ? 'يجب تسجيل الدخول للتصويت' : 'Login Required to Vote'}
                  </h3>
                  <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed font-semibold">
                    {lang === 'ar'
                      ? 'ساحة التصويت متاحة لأولياء الأمور المسجلين فقط. سجّل دخولك أو أنشئ حساباً للمشاركة في التصويت ودعم الأبطال الصغار.'
                      : 'The voting arena is available to registered parents only. Log in or create an account to vote and support the young champions.'}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setAuthTab('parent');
                    setParentMode('login');
                    clearAuthInputs();
                    setShowAuthModal(true);
                  }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#60A7BD] hover:bg-[#4a91a8] text-white font-bold rounded-2xl shadow-lg transition-all text-sm border-b-4 border-[#3a7a90]"
                >
                  <Lock className="w-5 h-5" />
                  <span>{lang === 'ar' ? 'تسجيل الدخول / إنشاء حساب' : 'Log In / Create Account'}</span>
                </button>
              </div>
            ) : (
              <>
            <div className="text-center max-w-xl mx-auto space-y-3">
              <span className="px-4 py-1.5 text-xs font-bold bg-[#FBE8EB] text-[#c45e70] border border-[#f5c0cb] rounded-full inline-block">
                {t.publicVoteTab}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#AC6E97] pb-2 ">تفاعل الجمهور والتصويت المفتوح</h2>
              <p className="text-slate-600 text-sm sm:text-base font-semibold">
                صوتكم يصنع الفرق! شارك في دعم متحدثي المستقبل من فئة البراعم والناشئين المؤهلين للتصويت الإلكتروني العام.
              </p>
            </div>

            {/* Voting Arena Grid */}
            {submissions.filter(s => s.status === 'Qualified' || s.status === 'Finalist' || s.status === 'Winner').length === 0 ? (
              <div className="text-center py-20 bg-white border-4 border-[#60A7BD]/40 rounded-[2rem] shadow-sm">
                <Vote className="w-16 h-16 text-slate-300 mx-auto mb-3" />
                <p className="text-slate-550 font-bold text-sm sm:text-base">{t.noQualifiedForVote}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {submissions.filter(s => s.status === 'Qualified' || s.status === 'Finalist' || s.status === 'Winner').map(item => (
                  <div key={item.submissionCode} className="bg-white border-4 border-[#ccc7e8] rounded-[2rem] overflow-hidden shadow-sm flex flex-col hover:shadow-lg transition-all transform hover:-translate-y-1">

                    {/* Simulated Player Box */}
                    <div className="aspect-video bg-black relative flex items-center justify-center">
                      <video src={item.videoUrl} className="w-full h-full object-cover opacity-75" controls preload="none" />
                      <div className="absolute top-3 right-3 bg-[#6A5E9E] text-white font-bold text-[10px] sm:text-xs px-3 py-1 rounded-full shadow-md">
                        {item.submissionCode}
                      </div>
                    </div>

                    <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                      <div>
                        <div className="flex justify-between items-start gap-2">
                          <h4 className="font-bold text-slate-900 text-lg">{item.fullName}</h4>
                          <span className="text-[10px] sm:text-xs font-bold px-2.5 py-1 bg-[#E3F3F7] text-[#3a8faa] rounded-full">
                            {item.childAge} {lang === 'ar' ? 'أعوام' : 'years'}
                          </span>
                        </div>
                        <p className="text-[#6A5E9E] text-xs font-bold mt-1">
                          {item.ageCategory}
                        </p>
                      </div>

                      <div className="flex justify-between items-center bg-[#FBE8EB]/50 p-4 rounded-2xl border-2 border-[#E37C8D]/20">
                        <div className="flex items-center gap-1.5 text-[#2d2650]">
                          <TrendingUp className="w-5 h-5 text-[#AC6E97]" />
                          <span className="text-xs sm:text-sm font-bold">{item.votes || 0} {t.voteCount}</span>
                        </div>

                        <button
                          onClick={() => registerVote(item)}
                          className="px-4 py-2 bg-[#E37C8D] hover:bg-[#d06a7d] text-white text-xs sm:text-sm font-bold rounded-xl shadow-sm transition-all flex items-center gap-1.5 border-b-2 border-[#c45e70]"
                        >
                          <Vote className="w-5 h-5" />
                          <span>{t.voteNow}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
              </>
            )
            }
          </div>
        )}

        {/* VIEW 3: Success Confirmation Page */}

        {currentView === 'success' && receiptDetails && (
          <section className="max-w-lg mx-auto py-10 text-center transition-all duration-300">
            <div className="bg-white rounded-[2.5rem] border-4 border-[#ccc7e8] shadow-2xl p-8 sm:p-10 space-y-6">
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
              <div className="bg-[#E3F2EB]/40 border-2 border-[#6AB28D]/30 rounded-2xl p-5 text-left divide-y-2 divide-[#ccc7e8] space-y-3">
                <div className="pt-0 flex justify-between items-center text-xs sm:text-sm gap-4">
                  <span className="text-[#2d2650] font-bold">{t.applicant}</span>
                  <span className="font-bold text-slate-900">{receiptDetails.fullName}</span>
                </div>
                <div className="pt-3 flex justify-between items-center text-xs sm:text-sm gap-4">
                  <span className="text-[#2d2650] font-bold">{t.idPassport}</span>
                  <span className="font-extrabold text-slate-900 font-mono">{receiptDetails.nationalId}</span>
                </div>
                <div className="pt-3 flex justify-between items-center text-xs sm:text-sm gap-4">
                  <span className="text-[#2d2650] font-bold">{t.submissionCode}</span>
                  <span className="font-bold text-[#E37C8D] font-mono text-base">{receiptDetails.submissionCode}</span>
                </div>
                <div className="pt-3 flex justify-between items-center text-xs sm:text-sm gap-4">
                  <span className="text-[#2d2650] font-bold">{t.statusLabel}</span>
                  <span className="px-3 py-1 rounded-full bg-[#EAE8F5] text-[#4a4080] border border-[#ccc7e8] text-[10px] sm:text-xs font-bold">
                    {getStatusLabel(receiptDetails.status)}
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  setFullName('');
                  setNationalId('');
                  setChildAge('');
                  setSelectedFile(null);
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

        {/* VIEW 5: Parent / User Dashboard */}
        {/*{loggedInUser && currentView === 'submission' && (*/}
        {/*  <div style={{ marginTop: '2.5rem' }} className="bg-white rounded-[2rem] border-4 border-emerald-200 shadow-lg p-6 sm:p-8">*/}
        {/*    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">*/}
        {/*      <div className="flex items-center gap-3">*/}
        {/*        <div className="w-12 h-12 bg-[#E3F2EB] text-[#4a9070] rounded-2xl flex items-center justify-center font-bold text-lg shadow-sm">*/}
        {/*          {loggedInUser.username.charAt(0).toUpperCase()}*/}
        {/*        </div>*/}
        {/*        <div>*/}
        {/*          <h2 className="text-lg font-bold text-slate-900">*/}
        {/*            {lang === 'ar' ? `أهلاً، ${loggedInUser.username}` : `Welcome, ${loggedInUser.username}`}*/}
        {/*          </h2>*/}
        {/*          <p className="text-xs text-[#6AB28D] font-bold">*/}
        {/*            {lang === 'ar' ? 'لوحة متابعة مشاركات طفلك' : 'Your children\'s submissions dashboard'}*/}
        {/*          </p>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      <button*/}
        {/*        onClick={() => { loadUserSubmissions(loggedInUser.id); }}*/}
        {/*        className="flex items-center gap-1.5 px-4 py-2 bg-[#FEF0EC] hover:bg-[#fde0d4] text-[#c45e42] font-bold text-xs rounded-xl border border-[#F5876C]/30 transition-all"*/}
        {/*      >*/}
        {/*        <Loader2 className="w-4 h-4" />*/}
        {/*        {lang === 'ar' ? 'تحديث' : 'Refresh'}*/}
        {/*      </button>*/}
        {/*    </div>*/}

        {/*    {userSubmissions.length === 0 ? (*/}
        {/*      <div className="text-center py-10 text-slate-400">*/}
        {/*        <BookOpen className="w-10 h-10 mx-auto mb-3 opacity-40" />*/}
        {/*        <p className="font-bold text-sm">*/}
        {/*          {lang === 'ar' ? 'لا توجد مشاركات مسجلة بعد. سجّل طفلك أدناه!' : 'No submissions yet. Register your child below!'}*/}
        {/*        </p>*/}
        {/*      </div>*/}
        {/*    ) : (*/}
        {/*      <div className="space-y-4">*/}
        {/*        {userSubmissions.map(item => (*/}
        {/*          <div key={item.submissionCode} className="bg-slate-50 rounded-2xl border-2 border-slate-100 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">*/}
        {/*            <div className="flex items-center gap-3">*/}
        {/*              <div className="w-10 h-10 bg-[#E3F3F7] text-[#60A7BD] rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0">*/}
        {/*                {item.fullName?.charAt(0).toUpperCase()}*/}
        {/*              </div>*/}
        {/*              <div>*/}
        {/*                <p className="font-bold text-slate-900 text-sm">{item.fullName}</p>*/}
        {/*                <p className="text-xs text-[#6A5E9E] font-bold">{item.ageCategory} • {item.childAge} {lang === 'ar' ? 'سنة' : 'yrs'}</p>*/}
        {/*                <p className="text-[10px] text-slate-400 font-mono mt-0.5">{item.submissionCode}</p>*/}
        {/*              </div>*/}
        {/*            </div>*/}
        {/*            <div className="flex items-center gap-3 flex-wrap">*/}
        {/*              {item.resultsReleased ? (*/}
        {/*                <div className="text-center">*/}
        {/*                  <p className="text-2xl font-extrabold text-[#6A5E9E]">{item.totalScore}<span className="text-sm text-slate-400">/100</span></p>*/}
        {/*                  <p className="text-[10px] text-slate-400 font-bold">{lang === 'ar' ? 'الدرجة' : 'Score'}</p>*/}
        {/*                </div>*/}
        {/*              ) : (*/}
        {/*                <div className="text-center px-3">*/}
        {/*                  <p className="text-xs text-slate-400 font-bold">{lang === 'ar' ? 'النتائج قريباً' : 'Results soon'}</p>*/}
        {/*                </div>*/}
        {/*              )}*/}
        {/*              <span className={`px-3 py-1.5 rounded-xl text-xs font-bold ${*/}
        {/*                item.status === 'Winner' ? 'bg-[#E3F2EB] text-[#3a8060] border border-[#6AB28D]/40' :*/}
        {/*                item.status === 'Qualified' || item.status === 'Finalist' ? 'bg-green-100 text-green-800 border border-green-300' :*/}
        {/*                item.status === 'Not Qualified' ? 'bg-[#FBE8EB] text-rose-800 border border-rose-200' :*/}
        {/*                'bg-[#F3E8EF] text-[#6A5E9E] border border-[#ccc7e8]'*/}
        {/*              }`}>*/}
        {/*                {item.resultsReleased ? getStatusLabel(item.status) : (lang === 'ar' ? 'قيد المراجعة' : 'Under Review')}*/}
        {/*              </span>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*        ))}*/}
        {/*      </div>*/}
        {/*    )}*/}
        {/*  </div>*/}
        {/*)}*/}

        {/* VIEW 4: Admin / Organizer Dashboard Panel */}
        {currentView === 'admin' && (
          <section className="transition-opacity duration-300">

            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">{t.compEntries}</h1>
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${adminRole === 'data_admin' ? 'bg-blue-100 text-blue-700 border-blue-300' : 'bg-[#EAE8F5] text-[#6A5E9E] border-[#a89dd0]'}`}>
                    {adminRole === 'data_admin'
                      ? (lang === 'ar' ? 'مدير البيانات' : 'Data Admin')
                      : (lang === 'ar' ? 'لجنة التحكيم' : 'Jury Admin')}
                  </span>
                </div>
                <p className="text-slate-505 text-sm">{t.compEntriesSub}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button onClick={() => loadSubmissionsData()} className="flex items-center gap-1 px-4 py-2.5 text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 rounded-xl hover:shadow-sm transition-all">
                  <Loader2 className="w-4 h-4 text-blue-500" />
                  <span>{lang === 'ar' ? 'تحديث' : 'Refresh'}</span>
                </button>
                <button onClick={exportToCSV} className="flex items-center gap-1 px-4 py-2.5 text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 rounded-xl hover:shadow-sm transition-all">
                  <FileDown className="w-4 h-4 text-[#F5876C]" />
                  <span>{t.exportCsv}</span>
                </button>
                <button onClick={() => { setCurrentView('submission'); setAdminRole(null); }} className="flex items-center gap-1 px-4 py-2.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all">
                  <ArrowLeft className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                  <span>{t.exitDashboard}</span>
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              <div className="bg-white rounded-2xl border border-slate-150 p-4 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 font-semibold uppercase">{lang === 'ar' ? 'الكل' : 'Total'}</span>
                  <p className="text-2xl font-bold text-slate-900">{submissions.length}</p>
                </div>
                <div className="w-10 h-10 bg-[#EAE8F5] text-[#6A5E9E] rounded-xl flex items-center justify-center"><Users className="w-5 h-5" /></div>
              </div>
              <div className="bg-white rounded-2xl border border-slate-150 p-4 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 font-semibold uppercase">{lang === 'ar' ? 'قيد المراجعة' : 'Pending'}</span>
                  <p className="text-2xl font-bold text-[#60A7BD]">{submissions.filter(s => s.status === 'Under Review').length}</p>
                </div>
                <div className="w-10 h-10 bg-[#E3F3F7] text-[#60A7BD] rounded-xl flex items-center justify-center"><Loader2 className="w-5 h-5" /></div>
              </div>
              <div className="bg-white rounded-2xl border border-slate-150 p-4 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 font-semibold uppercase">{lang === 'ar' ? 'مؤهل' : 'Qualified'}</span>
                  <p className="text-2xl font-bold text-green-600">{submissions.filter(s => s.status === 'Qualified' || s.status === 'Finalist' || s.status === 'Winner').length}</p>
                </div>
                <div className="w-10 h-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center"><CheckCircle2 className="w-5 h-5" /></div>
              </div>

              {/* Voting toggle — data_admin only */}
              {adminRole === 'data_admin' ? (
                <button
                  onClick={toggleVoting}
                  className={`rounded-2xl border p-4 shadow-sm flex items-center justify-between transition-all ${votingEnabled ? 'bg-[#E3F2EB] border-[#6AB28D]/40' : 'bg-slate-100 border-slate-200'}`}
                >
                  <div className={`text-${lang === 'ar' ? 'right' : 'left'}`}>
                    <span className="text-[10px] text-slate-400 font-semibold uppercase">{lang === 'ar' ? 'التصويت' : 'Voting'}</span>
                    <p className={`text-sm font-bold ${votingEnabled ? 'text-[#6AB28D]' : 'text-slate-400'}`}>
                      {votingEnabled ? (lang === 'ar' ? 'مفعّل' : 'Enabled') : (lang === 'ar' ? 'موقوف' : 'Disabled')}
                    </p>
                  </div>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${votingEnabled ? 'bg-[#6AB28D] text-white' : 'bg-slate-200 text-slate-400'}`}>
                    {votingEnabled ? <CheckCircle2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                  </div>
                </button>
              ) : (
                <div className="bg-white rounded-2xl border border-slate-150 p-4 shadow-sm flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 font-semibold uppercase">{lang === 'ar' ? 'الخادم' : 'Server'}</span>
                    <p className={`text-sm font-bold ${isConnected ? 'text-green-600' : 'text-[#6AB28D]'}`}>{isConnected ? t.prodServerless : t.sandboxSimulated}</p>
                  </div>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isConnected ? 'bg-green-50 text-green-600' : 'bg-[#E3F2EB] text-[#6AB28D]'}`}><Server className="w-5 h-5" /></div>
                </div>
              )}
            </div>

            {/* Tab Filter: Pending / Evaluated / All */}
            <div className="flex gap-2 mb-4">
              {['pending', 'evaluated', 'all'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setAdminTab(tab)}
                  className={`px-4 py-2 text-xs font-bold rounded-xl border-b-4 transition-all ${adminTab === tab ? 'bg-[#AC6E97] border-[#8a4f7a] text-white' : 'bg-white border-slate-200 text-slate-600 hover:bg-[#F3E8EF]'}`}
                >
                  {tab === 'pending' ? (lang === 'ar' ? `قيد المراجعة (${submissions.filter(s => s.status === 'Under Review').length})` : `Pending (${submissions.filter(s => s.status === 'Under Review').length})`) :
                   tab === 'evaluated' ? (lang === 'ar' ? `تم التقييم (${submissions.filter(s => s.status !== 'Under Review').length})` : `Evaluated (${submissions.filter(s => s.status !== 'Under Review').length})`) :
                   (lang === 'ar' ? `الكل (${submissions.length})` : `All (${submissions.length})`)}
                </button>
              ))}
            </div>

            {/* Full-width Table */}
            <div className="bg-white rounded-2xl border border-slate-150 overflow-hidden shadow-sm">

              {/* Search & Category Filter */}
              <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 bg-slate-50/50">
                <div className="relative flex-grow max-sm">
                  <span className={`absolute inset-y-0 ${lang === 'ar' ? 'right-0 pr-3' : 'left-0 pl-3'} flex items-center text-slate-400`}>
                    <Search className="w-3.5 h-3.5" />
                  </span>
                  <input
                    type="text"
                    placeholder={t.searchPlaceholder}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={`w-full py-2 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-[#6A5E9E]/50 focus:border-[#6A5E9E] ${lang === 'ar' ? 'pr-9 pl-4' : 'pl-9 pr-4'}`}
                  />
                </div>
                <div className="flex gap-1.5 items-center flex-wrap">
                  {[{id:'ALL', label: lang === 'ar' ? 'الكل' : 'All'}, {id:'CAT1', label: lang === 'ar' ? 'الفئة الأولى (٧-١٠)' : 'Cat 1 (7-10)'}, {id:'CAT2', label: lang === 'ar' ? 'الفئة الثانية (١١-١٤)' : 'Cat 2 (11-14)'}].map(cat => (
                    <button key={cat.id} onClick={() => { setSelectedCategoryFilter(cat.id); setSelectedVideo(null); }} className={`px-2.5 py-1 text-[10px] font-bold rounded-lg transition-all ${selectedCategoryFilter === cat.id ? 'bg-slate-800 text-white' : 'bg-slate-200/60 text-slate-600'}`}>
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm text-slate-600">
                  <thead className="bg-slate-50 border-b border-slate-150 text-slate-400 text-xs uppercase font-semibold">
                    <tr>
                      <th className={`px-5 py-3 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>{t.competitorDetails}</th>
                      <th className={`px-5 py-3 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>{lang === 'ar' ? 'العمر' : 'Age'}</th>
                      <th className={`px-5 py-3 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>{t.mobileNumber}</th>
                      <th className={`px-5 py-3 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>{t.nationalId}</th>
                      <th className={`px-5 py-3 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>{lang === 'ar' ? 'المستخدم' : 'Submitted By'}</th>
                      <th className={`px-5 py-3 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>{lang === 'ar' ? 'تاريخ التسجيل' : 'Date'}</th>
                      <th className={`px-5 py-3 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>{t.statusLabel}</th>
                      <th className={`px-5 py-3 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>{lang === 'ar' ? 'التقييم' : 'Score'}</th>
                      <th className={`px-5 py-3 ${lang === 'ar' ? 'text-left' : 'text-right'}`}>{t.action}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredSubmissions.filter(item =>
                      adminTab === 'pending' ? item.status === 'Under Review' :
                      adminTab === 'evaluated' ? item.status !== 'Under Review' : true
                    ).length === 0 ? (
                      <tr>
                        <td colSpan="9" className="text-center py-16 text-slate-400">
                          <div className="flex flex-col items-center justify-center gap-2">
                            <FolderOpen className="w-10 h-10 text-slate-300" />
                            <p className="font-medium text-xs">{lang === 'ar' ? 'لا توجد بيانات مطابقة' : 'No matching records'}</p>
                          </div>
                        </td>
                      </tr>
                    ) : (
                      filteredSubmissions
                        .filter(item =>
                          adminTab === 'pending' ? item.status === 'Under Review' :
                          adminTab === 'evaluated' ? item.status !== 'Under Review' : true
                        )
                        .map((item) => (
                          <tr key={item.submissionCode} className={`hover:bg-slate-50 transition-colors border-b border-slate-100 ${item.status === 'Under Review' ? 'bg-[#E3F3F7]/20' : ''}`}>
                            <td className="px-5 py-3 flex items-center gap-3">
                              <div className="w-9 h-9 bg-[#E3F3F7] text-[#60A7BD] rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0">
                                {item.fullName ? item.fullName.charAt(0).toUpperCase() : '?'}
                              </div>
                              <div className="min-w-0">
                                <p className="font-bold text-slate-800 text-xs sm:text-sm truncate max-w-[160px]">{item.fullName || 'Unknown'}</p>
                                <span className="text-[10px] text-[#60A7BD] font-bold block truncate max-w-[160px]">{item.ageCategory || ''}</span>
                              </div>
                            </td>
                            <td className="px-5 py-3 text-xs font-bold text-slate-700 whitespace-nowrap">{item.childAge} {lang === 'ar' ? 'سنة' : 'yrs'}</td>
                            <td className="px-5 py-3 font-mono text-xs text-slate-600 whitespace-nowrap" dir="ltr">{item.mobile || 'N/A'}</td>
                            <td className="px-5 py-3 font-mono text-xs text-slate-600">{item.nationalId || 'N/A'}</td>
                            <td className="px-5 py-3">
                              {item.submittedBy ? (
                                <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-[#EEF8F3] text-[#4a9070] rounded-lg text-[11px] font-bold">
                                  <Users className="w-3 h-3" />
                                  {item.submittedBy}
                                </span>
                              ) : (
                                <span className="text-slate-300 text-xs">—</span>
                              )}
                            </td>
                            <td className="px-5 py-3 text-xs text-slate-500 whitespace-nowrap" dir="ltr">
                              {item.createdAt ? (
                                <div>
                                  <p className="font-semibold text-slate-700">{new Date(item.createdAt).toLocaleDateString('ar-SA')}</p>
                                  <p className="text-[10px] text-slate-400">{new Date(item.createdAt).toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' })}</p>
                                </div>
                              ) : '—'}
                            </td>
                            <td className="px-5 py-3">
                              <span className={`px-2 py-1 rounded-lg text-[10px] font-bold whitespace-nowrap ${
                                item.status === 'Winner' ? 'bg-[#E3F2EB] text-[#3a8060]' :
                                item.status === 'Qualified' || item.status === 'Finalist' ? 'bg-green-100 text-green-800' :
                                item.status === 'Not Qualified' ? 'bg-[#FBE8EB] text-rose-800' :
                                'bg-[#F3E8EF] text-[#6A5E9E]'
                              }`}>
                                {getStatusLabel(item.status)}
                              </span>
                              {!item.resultsReleased && item.status !== 'Under Review' && (
                                <span className="text-[8px] text-slate-400 font-medium block mt-0.5">{lang === 'ar' ? 'غير منشور' : 'Draft'}</span>
                              )}
                            </td>
                            <td className="px-5 py-3 font-bold text-xs whitespace-nowrap">
                              <span className={`${item.totalScore >= 80 ? 'text-green-600' : item.totalScore >= 60 ? 'text-[#AC6E97]' : item.totalScore > 0 ? 'text-rose-500' : 'text-slate-400'}`}>
                                {item.totalScore || 0}
                              </span>
                              <span className="text-slate-300"> / 100</span>
                            </td>
                            <td className={`px-5 py-3 ${lang === 'ar' ? 'text-left' : 'text-right'}`}>
                              {adminRole === 'admin' && (
                                (() => {
                                  const alreadyEval = item.status !== 'Under Review' || (item.totalScore && item.totalScore > 0);
                                  return alreadyEval ? (
                                    <button
                                      onClick={() => { setSelectedVideo(item); setShowEvalModal(true); }}
                                      className="px-3 py-1.5 bg-[#E3F3F7] hover:bg-[#c8eaf2] text-[#60A7BD] border border-[#60A7BD]/30 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap"
                                    >
                                      <ShieldCheck className="w-3 h-3" />
                                      <span>{lang === 'ar' ? 'عرض / تعديل الحالة' : 'View / Edit Status'}</span>
                                    </button>
                                  ) : (
                                    <button
                                      onClick={() => { setSelectedVideo(item); setShowEvalModal(true); }}
                                      className="px-3 py-1.5 bg-[#E37C8D] hover:bg-[#d06a7d] text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap"
                                    >
                                      <Sliders className="w-3 h-3" />
                                      <span>{t.play}</span>
                                    </button>
                                  );
                                })()
                              )}
                              {adminRole === 'data_admin' && (
                                <button
                                  onClick={() => {
                                    setEditTarget(item);
                                    setEditFullName(item.fullName || '');
                                    setEditMobile(item.mobile || '');
                                    setEditNationalId(item.nationalId || '');
                                    setEditChildAge(item.childAge || '');
                                    setEditAgeCategory(item.ageCategory || '');
                                    setShowEditModal(true);
                                  }}
                                  className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap"
                                >
                                  <Settings className="w-3 h-3" />
                                  <span>{lang === 'ar' ? 'تعديل' : 'Edit'}</span>
                                </button>
                              )}
                            </td>
                          </tr>
                        ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </section>
        )}

      </main>

      {/* MODAL: Unified Members & Committee Portal Login popup */}
      {showAuthModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/45 backdrop-blur-sm flex items-center justify-center p-4">
          <div dir={lang === 'ar' ? 'rtl' : 'ltr'} className="bg-white rounded-[2rem] border-4 border-[#a89dd0] max-w-md w-full shadow-2xl p-6 relative">
            
            {/* Close Button */}
            <button
              onClick={() => {
                setShowAuthModal(false);
                clearAuthInputs();
              }}
              className={`absolute top-4 ${lang === 'ar' ? 'left-4' : 'right-4'} text-slate-400 hover:text-slate-655 transition-all`}
            >
              <ArrowLeft className={`w-5 h-5 ${lang === 'ar' ? '' : 'rotate-180'}`} />
            </button>

            <div className="text-center space-y-4">
              <div className="w-14 h-14 bg-[#EAE8F5] text-[#6A5E9E] rounded-2xl flex items-center justify-center text-xl mx-auto shadow-sm">
                <Lock className="w-7 h-7" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 font-sans">
                  {lang === 'ar' ? 'بوابة تسجيل دخول الأعضاء' : 'Members Portal Login'}
                </h3>
                <p className="text-xs text-slate-500 font-semibold mt-1">
                  {lang === 'ar' ? 'يرجى اختيار نوع الحساب والتحقق من الهوية للدخول' : 'Please select your account type to access the platform'}
                </p>
              </div>

              {/* Segmented Tab Switcher (Parents vs Committee/Admin) */}
              <div className="flex bg-slate-100 rounded-xl p-1 gap-1">
                <button
                  onClick={() => { setAuthTab('parent'); setAuthError(''); }}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${authTab === 'parent' ? 'bg-white text-[#6A5E9E] shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  <Users className="w-3.5 h-3.5 inline mr-1 ml-1" />
                  {lang === 'ar' ? 'أولياء الأمور' : 'Parents'}
                </button>
                <button
                  onClick={() => { setAuthTab('admin'); setAuthError(''); }}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${authTab === 'admin' ? 'bg-white text-[#6A5E9E] shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  <Sliders className="w-3.5 h-3.5 inline mr-1 ml-1" />
                  {lang === 'ar' ? 'لجنة التحكيم' : 'Jury / Committee'}
                </button>
              </div>

              {/* Parent Sub-mode switcher (Login vs Register) */}
              {authTab === 'parent' && (
                <div className="flex justify-center gap-4 text-xs font-semibold pb-1 border-b border-slate-100">
                  <button
                    onClick={() => { setParentMode('login'); setRegisterStep(1); setAuthError(''); }}
                    className={`pb-1 ${parentMode === 'login' ? 'text-[#AC6E97] border-b-2 border-[#AC6E97] font-bold' : 'text-slate-400 hover:text-slate-655'}`}
                  >
                    {lang === 'ar' ? 'تسجيل الدخول' : 'Sign In'}
                  </button>
                  <button
                    onClick={() => { setParentMode('register'); setRegisterStep(1); setAuthError(''); }}
                    className={`pb-1 ${parentMode === 'register' ? 'text-[#AC6E97] border-b-2 border-[#AC6E97] font-bold' : 'text-slate-400 hover:text-slate-655'}`}
                  >
                    {lang === 'ar' ? 'إنشاء حساب جديد' : 'New Account'}
                  </button>
                </div>
              )}

              {/* Dynamic Login Form */}
              <form onSubmit={handleUnifiedAuth} className={`space-y-3 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>

                {/* Step indicator for register */}
                {authTab === 'parent' && parentMode === 'register' && (
                  <div className="flex items-center gap-2 mb-1">
                    <div className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${lang === 'ar' ? 'order-3' : 'order-1'} ${registerStep === 1 ? 'bg-[#F5876C] text-white' : 'bg-[#FEF0EC] text-[#F5876C]'}`}>1</div>
                    <div className={`flex-1 h-0.5 bg-slate-200 overflow-hidden order-2 flex`} style={lang === 'ar' ? {flexFlow: 'row-reverse'} : {}}>
                      <div className={`h-full bg-[#7d72ad] transition-all duration-300 ${registerStep === 2 ? 'w-full' : 'w-0'}`}></div>
                    </div>
                    <div className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${lang === 'ar' ? 'order-1' : 'order-3'} ${registerStep === 2 ? 'bg-[#F5876C] text-white' : 'bg-slate-200 text-slate-400'}`}>2</div>
                    <span className={`text-[10px] text-slate-400 font-semibold ${lang === 'ar' ? 'order-0' : 'order-4'}`}>
                      {registerStep === 1 ? (lang === 'ar' ? 'بيانات الدخول' : 'Account') : (lang === 'ar' ? 'البيانات الشخصية' : 'Profile')}
                    </span>
                  </div>
                )}

                {/* STEP 1 fields — always shown for login/admin, or register step 1 */}
                {(authTab !== 'parent' || parentMode !== 'register' || registerStep === 1) && (
                  <>
                    <div>
                      <label className={`block text-xs font-bold text-slate-600 mb-1.5 ${lang === 'ar' ? 'text-right' : ''}`}>
                        {lang === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                      </label>
                      <input
                        type={authTab === 'admin' ? 'text' : 'email'}
                        required
                        placeholder={authTab === 'admin' ? (lang === 'ar' ? 'اسم مستخدم الإدارة' : 'admin') : (lang === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email')}
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        className={`w-full px-4 py-3.5 bg-slate-50 border-2 border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#6A5E9E]/20 focus:border-[#6A5E9E] font-sans ${lang === 'ar' ? 'text-right' : ''}`}
                      />
                    </div>
                    <div>
                      <label className={`block text-xs font-bold text-slate-600 mb-1.5 ${lang === 'ar' ? 'text-right' : ''}`}>
                        {lang === 'ar' ? 'كلمة المرور' : 'Password'}
                      </label>
                      <input
                        type="password"
                        required
                        placeholder={authTab === 'admin' ? (lang === 'ar' ? 'كلمة مرور المشرف' : 'Jury passcode') : (lang === 'ar' ? 'أدخل كلمة المرور الخاصة بك' : 'Enter password')}
                        value={passwordInput}
                        onChange={(e) => setPasswordInput(e.target.value)}
                        className={`w-full px-4 py-3.5 bg-slate-50 border-2 border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#6A5E9E]/20 focus:border-[#6A5E9E] font-sans ${lang === 'ar' ? 'text-right' : ''}`}
                      />
                    </div>
                    {authTab === 'parent' && parentMode === 'register' && (
                      <div>
                        <label className={`block text-xs font-bold text-slate-600 mb-1.5 ${lang === 'ar' ? 'text-right' : ''}`}>
                          {lang === 'ar' ? 'تأكيد كلمة المرور' : 'Confirm Password'}
                        </label>
                        <input
                          type="password"
                          required
                          placeholder={lang === 'ar' ? 'أعد كتابة كلمة المرور' : 'Re-enter your password'}
                          value={confirmPasswordInput}
                          onChange={(e) => setConfirmPasswordInput(e.target.value)}
                          className={`w-full px-4 py-3.5 bg-slate-50 border-2 border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#6A5E9E]/20 focus:border-[#6A5E9E] font-sans ${lang === 'ar' ? 'text-right' : ''}`}
                        />
                      </div>
                    )}
                  </>
                )}

                {/* STEP 2 fields — profile info */}
                {authTab === 'parent' && parentMode === 'register' && registerStep === 2 && (
                  <>
                    <div>
                      <label className={`block text-xs font-bold text-slate-600 mb-1.5 ${lang === 'ar' ? 'text-right' : ''}`}>
                        {lang === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={lang === 'ar' ? 'أدخل اسمك الرباعي' : 'Enter your full name'}
                        value={regFullName}
                        onChange={(e) => setRegFullName(e.target.value)}
                        className={`w-full px-4 py-3.5 bg-slate-50 border-2 border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#6A5E9E]/20 focus:border-[#6A5E9E] font-sans ${lang === 'ar' ? 'text-right' : ''}`}
                      />
                    </div>
                    <div>
                      <label className={`block text-xs font-bold text-slate-600 mb-1.5 ${lang === 'ar' ? 'text-right' : ''}`}>
                        {lang === 'ar' ? 'العمر' : 'Age'}
                      </label>
                      <input
                        type="number"
                        required
                        min="1"
                        max="120"
                        placeholder={lang === 'ar' ? 'أدخل عمرك' : 'Enter your age'}
                        value={regAge}
                        onChange={(e) => setRegAge(e.target.value)}
                        className={`w-full px-4 py-3.5 bg-slate-50 border-2 border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#6A5E9E]/20 focus:border-[#6A5E9E] font-sans ${lang === 'ar' ? 'text-right' : ''}`}
                      />
                    </div>
                    <div>
                      <label className={`block text-xs font-bold text-slate-600 mb-1.5 ${lang === 'ar' ? 'text-right' : ''}`}>
                        {lang === 'ar' ? 'رقم الهوية الوطنية' : 'National ID'}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={lang === 'ar' ? 'أدخل رقم هويتك' : 'Enter your national ID'}
                        value={regNationalId}
                        onChange={(e) => setRegNationalId(e.target.value)}
                        className={`w-full px-4 py-3.5 bg-slate-50 border-2 border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#6A5E9E]/20 focus:border-[#6A5E9E] font-sans ${lang === 'ar' ? 'text-right' : ''}`}
                      />
                    </div>
                    <div>
                      <label className={`block text-xs font-bold text-slate-600 mb-1.5 ${lang === 'ar' ? 'text-right' : ''}`}>
                        {lang === 'ar' ? 'رقم الجوال' : 'Mobile Number'}
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder={lang === 'ar' ? 'مثال: 05xxxxxxxx' : 'e.g. 05xxxxxxxx'}
                        value={regMobile}
                        onChange={(e) => setRegMobile(e.target.value)}
                        className={`w-full px-4 py-3.5 bg-slate-50 border-2 border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#6A5E9E]/20 focus:border-[#6A5E9E] font-sans ${lang === 'ar' ? 'text-right' : ''}`}
                      />
                    </div>
                  </>
                )}

                {authTab === 'admin' && (
                  <p className={`text-[10px] text-slate-400 mt-1 ${lang === 'ar' ? 'text-right' : ''}`}>
                    {t.defaultPasscode}
                  </p>
                )}

                {authError && (
                  <div dir={lang === 'ar' ? 'rtl' : 'ltr'} className="text-xs text-rose-600 font-semibold flex items-center gap-1">
                    <Info className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{authError}</span>
                  </div>
                )}

                <div className="flex gap-2 mt-4">
                  {authTab === 'parent' && parentMode === 'register' && registerStep === 2 && (
                    <button
                      type="button"
                      onClick={() => { setRegisterStep(1); setAuthError(''); }}
                      className="px-4 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-all text-sm"
                    >
                      {lang === 'ar' ? 'رجوع' : 'Back'}
                    </button>
                  )}
                  <button
                    type="submit"
                    disabled={authLoading}
                    className="flex-1 py-3.5 bg-[#6A5E9E] hover:bg-[#5a4e8e] disabled:opacity-60 text-white font-bold rounded-xl border-b-4 border-[#4a4080] transition-all text-sm flex items-center justify-center gap-2"
                  >
                    {authLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                    <span>
                      {authLoading ? (lang === 'ar' ? 'جارٍ التحقق...' : 'Verifying...') :
                       authTab === 'admin' ? (lang === 'ar' ? 'تسجيل دخول المحكمين' : 'Jury Admin Login') :
                       parentMode === 'login' ? (lang === 'ar' ? 'دخول حساب أولياء الأمور' : 'Parents Sign In') :
                       registerStep === 1 ? (lang === 'ar' ? 'التالي' : 'Next') :
                       (lang === 'ar' ? 'إنشاء الحساب' : 'Create Account')}
                    </span>
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>
      )}

      {/* EDIT MODAL: Data Admin - Edit Submission Data */}
      {showEditModal && editTarget && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-[2rem] border-4 border-blue-300 max-w-lg w-full shadow-2xl relative flex flex-col max-h-[90vh]">

            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center font-bold text-base flex-shrink-0">
                  {editTarget.fullName?.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">
                    {lang === 'ar' ? 'تعديل بيانات المشاركة' : 'Edit Submission Data'}
                  </h3>
                  <p className="text-xs text-blue-600 font-bold">{editTarget.submissionCode}</p>
                </div>
              </div>
              <button onClick={() => setShowEditModal(false)} className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-all">
                <ArrowLeft className={`w-4 h-4 ${lang === 'ar' ? '' : 'rotate-180'}`} />
              </button>
            </div>

            <div className="overflow-y-auto p-5 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1.5">{t.fullName}</label>
                <input type="text" value={editFullName} onChange={e => setEditFullName(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 font-semibold" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1.5">{t.nationalId}</label>
                <input type="text" value={editNationalId} onChange={e => setEditNationalId(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 font-mono" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1.5">{t.childAge}</label>
                <div className="relative">
                  <select value={editChildAge} onChange={e => setEditChildAge(e.target.value)}
                    className={`w-full bg-slate-50 border-2 border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 font-semibold appearance-none py-3 ${lang === 'ar' ? 'pl-10 pr-4' : 'pr-10 pl-4'} ${editChildAge ? 'text-slate-900' : 'text-slate-400'}`}>
                    <option value="">{lang === 'ar' ? 'اختر العمر' : 'Select Age'}</option>
                    {[7, 8, 9, 10, 11, 12, 13, 14, 15].map(age => (
                      <option key={age} value={age} className="text-slate-900 font-semibold">
                        {age} {lang === 'ar' ? 'سنوات' : 'Years'}
                      </option>
                    ))}
                  </select>
                  <div className={`absolute inset-y-0 ${lang === 'ar' ? 'left-3' : 'right-3'} flex items-center pointer-events-none text-blue-500`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>
              {editChildAge && (
                <div className="flex items-center gap-2 px-4 py-3 bg-blue-50 border-2 border-blue-100 rounded-xl">
                  <Award className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-0.5">{t.ageCategory}</p>
                    <p className="text-sm font-bold text-blue-700">{getAgeCategoryLabel(editChildAge)}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Footer Save Button */}
            <div className="p-5 border-t border-slate-100 bg-white rounded-b-[2rem]">
              <button
                onClick={async () => { await saveDataEdit(); setShowEditModal(false); }}
                disabled={editSaving}
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-bold rounded-xl transition-all text-sm shadow-md flex items-center justify-center gap-2"
              >
                {editSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle2 className="w-5 h-5" />}
                <span>{editSaving ? (lang === 'ar' ? 'جاري الحفظ...' : 'Saving...') : (lang === 'ar' ? 'حفظ التعديلات' : 'Save Changes')}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* EVAL MODAL: Jury Assessment Popup */}
      {showEvalModal && selectedVideo && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-[2rem] border-4 border-[#a89dd0] max-w-2xl w-full shadow-2xl relative flex flex-col max-h-[90vh]">

            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#EAE8F5] text-[#6A5E9E] rounded-xl flex items-center justify-center font-bold text-base flex-shrink-0">
                  {selectedVideo.fullName?.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">{selectedVideo.fullName}</h3>
                  <p className="text-xs text-[#6A5E9E] font-bold">{selectedVideo.ageCategory} • {selectedVideo.childAge} {lang === 'ar' ? 'سنة' : 'yrs'}</p>
                </div>
              </div>
              <button onClick={() => { setShowEvalModal(false); setShowEvalConfirm(false); }} className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-all">
                <ArrowLeft className={`w-4 h-4 ${lang === 'ar' ? '' : 'rotate-180'}`} />
              </button>
            </div>

            <div className="overflow-y-auto p-5 space-y-5">

              {/* Video Player */}
              <div className="aspect-video bg-black rounded-2xl overflow-hidden border border-slate-200 relative">
                {selectedVideo.videoUrl?.startsWith('http') ? (
                  <video src={selectedVideo.videoUrl} controls autoPlay className="w-full h-full object-contain" />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-center p-4 text-slate-400 bg-slate-900">
                    <Video className="w-10 h-10 text-[#7d72ad] mb-2" />
                    <p className="text-xs font-bold text-white">{lang === 'ar' ? 'معاينة الفيديو' : 'Video Preview'}</p>
                  </div>
                )}
              </div>

              {/* Quick links */}
              <div className="flex gap-2">
                {selectedVideo.videoUrl && (
                  <a target="_blank" rel="noopener noreferrer" href={selectedVideo.videoUrl}
                    className="flex-1 py-2 bg-[#F4F3FB] hover:bg-[#EAE8F5] text-[#6A5E9E] font-bold rounded-xl text-xs transition-all flex items-center justify-center gap-1.5">
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>{lang === 'ar' ? 'فتح الفيديو' : 'Open Video'}</span>
                  </a>
                )}
                {selectedVideo.idProofUrl && (
                  <a target="_blank" rel="noopener noreferrer" href={selectedVideo.idProofUrl}
                    className="flex-1 py-2 bg-slate-100 hover:bg-slate-200 text-slate-755 font-bold rounded-xl text-xs transition-all flex items-center justify-center gap-1.5">
                    <FolderOpen className="w-3.5 h-3.5 text-blue-600" />
                    <span>{t.viewIdProof}</span>
                  </a>
                )}
              </div>

              {/* Already-evaluated locked banner */}
              {(selectedVideo.status !== 'Under Review' || (selectedVideo.totalScore && selectedVideo.totalScore > 0)) && (
                adminRole === 'admin' ? (
                  <div className="flex items-center gap-2.5 px-4 py-3 bg-[#F9F2F6] border-2 border-indigo-200 rounded-2xl text-[#7a4f72]">
                    <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                    <span className="text-xs font-bold">
                      {lang === 'ar' ? 'الدرجات مؤمّنة — يمكنك مشاهدة الفيديو والوثيقة وتعديل الحالة.' : 'Scores are locked — you can still watch the video, view the ID, and change the status.'}
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2.5 px-4 py-3 bg-[#E3F3F7] border-2 border-[#60A7BD] rounded-2xl text-[#3a8faa]">
                    <Lock className="w-4 h-4 flex-shrink-0" />
                    <span className="text-xs font-bold">
                      {lang === 'ar' ? 'تم تقييم هذا الطلب مسبقاً — العرض للمراجعة فقط، لا يمكن التعديل.' : 'This submission has already been evaluated — view only, no changes allowed.'}
                    </span>
                  </div>
                )
              )}

              {/* Scorecard */}
              {(() => {
                const locked = selectedVideo.status !== 'Under Review' || (selectedVideo.totalScore && selectedVideo.totalScore > 0);
                return (
                  <div className={`bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-4 ${locked ? 'opacity-70' : ''}`}>
                    <h3 className="text-sm font-bold text-slate-800 border-b border-slate-200 pb-2">{t.evalSheetTitle}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { key: 'voice', label: t.critVoice, max: 20 },
                        { key: 'confidence', label: t.critConfidence, max: 20 },
                        { key: 'language', label: t.critLanguage, max: 15 },
                        { key: 'expression', label: t.critExpression, max: 15 },
                        { key: 'time', label: t.critTime, max: 10 },
                        { key: 'content', label: t.critContent, max: 10 },
                        { key: 'creativity', label: t.critCreativity, max: 10 },
                      ].map(({ key, label, max }) => (
                        <div key={key} className="bg-white rounded-xl p-3 border border-slate-100">
                          <div className="flex justify-between text-[10px] font-bold text-slate-600 mb-2">
                            <span className="truncate max-w-[140px]">{label}</span>
                            <span className="text-[#6A5E9E] font-bold flex-shrink-0 ml-1">{scores[key]}/{max}</span>
                          </div>
                          <input type="range" min="0" max={max} value={scores[key]}
                            disabled={locked}
                            onChange={(e) => !locked && setScores({ ...scores, [key]: parseInt(e.target.value) })}
                            className={`w-full accent-purple-600 ${locked ? 'cursor-not-allowed' : ''}`} />
                        </div>
                      ))}
                    </div>
                    <div className="pt-2 border-t border-slate-200 flex justify-between items-center bg-[#F4F3FB] rounded-xl px-4 py-3">
                      <span className="text-sm font-bold text-slate-700">{t.totalScoreLabel}</span>
                      <span className="text-2xl font-bold text-[#6A5E9E]">
                        {Object.values(scores).reduce((a, b) => a + Number(b), 0)} / 100
                      </span>
                    </div>
                  </div>
                );
              })()}

              {/* Status & Release */}
              {(() => {
                const evalLocked = selectedVideo.status !== 'Under Review' || (selectedVideo.totalScore && selectedVideo.totalScore > 0);
                // Status is always editable for admin, locked for everyone else once evaluated
                const statusLocked = evalLocked && adminRole !== 'admin';
                return (
                  <div className={`rounded-2xl p-5 border space-y-3 ${statusLocked ? 'bg-slate-50 border-slate-200 opacity-70' : 'bg-white border-indigo-200'}`}>
                    <div className="flex items-center gap-2">
                      {!statusLocked && evalLocked && <ShieldCheck className="w-4 h-4 text-[#AC6E97] flex-shrink-0" />}
                      <label className="block text-sm font-bold text-slate-700">{t.statusSelection}</label>
                    </div>
                    <div className="relative">
                      <select
                        value={evalStatus}
                        onChange={(e) => !statusLocked && setEvalStatus(e.target.value)}
                        disabled={statusLocked}
                        className={`w-full bg-white border rounded-xl text-sm focus:outline-none py-3 appearance-none font-bold ${lang === 'ar' ? 'pl-9 pr-4' : 'pr-9 pl-4'} ${statusLocked ? 'border-slate-200 cursor-not-allowed' : 'border-slate-300 focus:ring-2 focus:ring-indigo-300'}`}>
                        <option value="Under Review">{t.status_review}</option>
                        <option value="Qualified">{t.status_qualified}</option>
                        <option value="Not Qualified">{t.status_unqualified}</option>
                        <option value="Finalist">{t.status_finalist}</option>
                        <option value="Winner">{t.status_winner}</option>
                      </select>
                      <div className={`absolute inset-y-0 ${lang === 'ar' ? 'left-3' : 'right-3'} flex items-center pointer-events-none text-slate-500`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                    <label className={`flex items-center gap-2.5 pt-2 border-t border-slate-200 ${statusLocked ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}>
                      <input type="checkbox" checked={evalResultsReleased} onChange={(e) => !statusLocked && setEvalResultsReleased(e.target.checked)} disabled={statusLocked} className="w-4 h-4 text-green-600 rounded" />
                      <span className="text-xs font-bold text-slate-700">{t.releaseResultsBtn}</span>
                    </label>
                  </div>
                );
              })()}

            </div>

            {/* Footer Save Button */}
            <div className="p-5 border-t border-slate-100 bg-white rounded-b-[2rem] space-y-3">
              {(() => {
                const evalLocked = selectedVideo.status !== 'Under Review' || (selectedVideo.totalScore && selectedVideo.totalScore > 0);
                if (!evalLocked) {
                  // First-time evaluation: show confirmation dialog before saving
                  return (
                    <button onClick={() => setShowEvalConfirm(true)}
                      className="w-full py-3.5 bg-[#6A5E9E] hover:bg-[#5a4e8e] text-white font-bold rounded-xl transition-all text-sm shadow-md flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>{t.saveEvaluation}</span>
                    </button>
                  );
                }
                if (adminRole === 'admin') {
                  // Already evaluated — admin can update status only
                  return (
                    <>
                      <div className="flex items-center gap-2 px-3 py-2 bg-[#F9F2F6] border border-indigo-200 rounded-xl">
                        <ShieldCheck className="w-4 h-4 text-[#AC6E97] flex-shrink-0" />
                        <span className="text-xs font-bold text-[#60A7BD]">
                          {lang === 'ar' ? 'التقييم مؤمّن — يمكنك تعديل الحالة فقط' : 'Scores locked — you can still update the status'}
                        </span>
                      </div>
                      <button onClick={async () => { await saveStatusChange(); setShowEvalModal(false); }}
                        className="w-full py-3.5 bg-[#AC6E97] hover:bg-[#AC6E97] text-white font-bold rounded-xl transition-all text-sm shadow-md flex items-center justify-center gap-2">
                        <CheckCircle2 className="w-5 h-5" />
                        <span>{lang === 'ar' ? 'حفظ تعديل الحالة' : 'Save Status Change'}</span>
                      </button>
                    </>
                  );
                }
                // Evaluated + not admin: fully locked
                return (
                  <div className="w-full py-3.5 bg-slate-100 text-slate-400 font-bold rounded-xl text-sm flex items-center justify-center gap-2 cursor-not-allowed border border-slate-200">
                    <Lock className="w-5 h-5" />
                    <span>{lang === 'ar' ? 'تم التقييم — لا يمكن التعديل' : 'Already Evaluated — Locked'}</span>
                  </div>
                );
              })()}
            </div>

            {/* Confirmation Dialog — shown inside eval modal before finalizing evaluation */}
            {showEvalConfirm && (
              <div className="absolute inset-0 z-10 bg-white/90 backdrop-blur-sm rounded-[2rem] flex flex-col items-center justify-center p-8 gap-6">
                <div className="w-16 h-16 bg-[#EAE8F5] rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-8 h-8 text-[#6A5E9E]" />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-lg font-bold text-slate-900">
                    {lang === 'ar' ? 'تأكيد حفظ التقييم' : 'Confirm Evaluation'}
                  </h3>
                  <p className="text-sm text-slate-600 max-w-xs leading-relaxed">
                    {lang === 'ar'
                      ? 'هل أنت متأكد من حفظ التقييم النهائي؟ لن يمكن تعديل الدرجات بعد التأكيد.'
                      : 'Are you sure you want to save this evaluation? Scores cannot be changed after confirmation.'}
                  </p>
                  <p className="text-xl font-bold text-[#6A5E9E] pt-1">
                    {Object.values(scores).reduce((a, b) => a + Number(b), 0)} / 100
                  </p>
                </div>
                <div className="flex gap-3 w-full max-w-xs">
                  <button
                    onClick={() => setShowEvalConfirm(false)}
                    className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-all text-sm">
                    {lang === 'ar' ? 'إلغاء' : 'Cancel'}
                  </button>
                  <button
                    onClick={async () => { setShowEvalConfirm(false); await saveJuryEvaluation(); setShowEvalModal(false); }}
                    className="flex-1 py-3 bg-[#6A5E9E] hover:bg-[#5a4e8e] text-white font-bold rounded-xl transition-all text-sm flex items-center justify-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    {lang === 'ar' ? 'تأكيد' : 'Confirm'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* MODAL 3: Electronic Certificate Generator Viewer */}
      {showCertificate && certTarget && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-4xl w-full border border-slate-200 shadow-2xl p-6 sm:p-8">

            {/* Printable Frame Area */}
            <div id="printable-certificate" className="border-8 border-double border-[#6A5E9E] bg-[#F4F3FB] p-8 sm:p-12 text-center space-y-6 relative rounded-2xl">

              {/* Geometric Corner Borders */}
              <div className="absolute top-2 right-2 w-12 h-12 border-t-4 border-r-4 border-[#6A5E9E] rounded-tr-md"></div>
                          <div className="absolute top-2 left-2 w-12 h-12 border-t-4 border-l-4 border-[#6A5E9E] rounded-tl-md" style={{ margin: '0' }} ></div>
              <div className="absolute bottom-2 right-2 w-12 h-12 border-b-4 border-r-4 border-[#6A5E9E] rounded-br-md"></div>
              <div className="absolute bottom-2 left-2 w-12 h-12 border-b-4 border-l-4 border-[#6A5E9E] rounded-bl-md"></div>

              {/* Three brand logos */}
              <div className="flex items-center justify-center gap-6 mx-auto pt-2">
                <img src="/logo1.png" alt="جمعية البر" className="h-14 w-auto object-contain" />
                <img src="/logo2.png" alt="Taibah Kids" className="h-14 w-auto object-contain" />
                <img src="/logo3.png" alt="Almadinah Stage" className="h-14 w-auto object-contain" />
              </div>

              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#AC6E97] tracking-tight">{t.certTitle}</h2>
                <div className="w-32 h-0.5 bg-[#AC6E97] mx-auto rounded-full opacity-40"></div>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-semibold">
                {t.certPresentedTo}
              </p>

              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 border-b-2 border-[#6A5E9E]/30 max-w-md mx-auto pb-2 tracking-wide font-sans">
                {certTarget.fullName}
              </h1>

              <p className="text-slate-500 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
                {t.certBody}
              </p>

              <div className="grid grid-cols-2 gap-8 pt-6 max-w-xl mx-auto text-xs font-bold">
                <div className="space-y-1">
                  <p className="text-slate-400 text-[10px] font-semibold">{t.certSign}</p>
                  <p className="text-[#6A5E9E] text-sm font-bold">لجنة تحكيم المدينة ستيج</p>
                </div>
                <div className="space-y-1">
                  <p className="text-slate-400 text-[10px] font-semibold">{t.certStamp}</p>
                  <div className="w-16 h-16 border-4 border-dashed border-[#6A5E9E] rounded-full flex items-center justify-center text-[#AC6E97] font-bold rotate-12 text-[10px] mx-auto opacity-70">
                    المدينة ستيج
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons — outside certificate, no overlap */}
            <div className="mt-6 flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  setShowCertificate(false);
                  setCertTarget(null);
                }}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-all text-xs"
              >
                {lang === 'ar' ? "إغلاق الشهادة" : "Close Certificate"}
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('printable-certificate');
                  import('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js').then(() => {
                    window.html2canvas(el, { scale: 2, useCORS: true, backgroundColor: '#F4F3FB' }).then(canvas => {
                      const link = document.createElement('a');
                      link.download = `certificate-${certTarget.fullName}.png`;
                      link.href = canvas.toDataURL('image/png');
                      link.click();
                    });
                  }).catch(() => {
                    // Fallback: load html2canvas via script tag then download
                    const script = document.createElement('script');
                    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
                    script.onload = () => {
                      window.html2canvas(el, { scale: 2, useCORS: true, backgroundColor: '#F4F3FB' }).then(canvas => {
                        const link = document.createElement('a');
                        link.download = `certificate-${certTarget.fullName}.png`;
                        link.href = canvas.toDataURL('image/png');
                        link.click();
                      });
                    };
                    document.head.appendChild(script);
                  });
                }}
                className="px-5 py-2.5 bg-[#6A5E9E] hover:bg-[#5a4e8e] text-white font-bold rounded-xl transition-all text-xs flex items-center gap-1.5 shadow-sm"
              >
                <FileDown className="w-4 h-4" />
                <span>{lang === 'ar' ? 'تنزيل الشهادة (PNG)' : 'Download Certificate (PNG)'}</span>
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
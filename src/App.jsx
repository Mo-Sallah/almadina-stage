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
    noLoginRequired: "يتطلب حساب ولي أمر للمشاركة",
    showcaseTitle: "مسابقة المدينة ستيج للأطفال",
    showcaseSub: "أهلاً بكم في المنصة التفاعلية المخصصة لمسابقة الإلقاء الرائعة للأطفال من عمر 7 إلى 14 سنة. عبّر عن موهبتك بصوتك العذب وشاركنا إبداعك اليوم!",
    fullName: "اسم ولي الأمر رباعي",
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

  // Unified Portal Authentication States (Collapsing multiple modals/states into a single robust layout)
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authTab, setAuthTab] = useState('parent'); // 'parent' | 'admin'
  const [parentMode, setParentMode] = useState('login'); // 'login' | 'register'
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [confirmPasswordInput, setConfirmPasswordInput] = useState('');
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

  // Certificate printing overlay helper state
  const [showCertificate, setShowCertificate] = useState(false);
  const [certTarget, setCertTarget] = useState(null);
  // Admin tab filter: 'pending' | 'evaluated' | 'all'
  const [adminTab, setAdminTab] = useState('pending');
  // Evaluation popup modal
  const [showEvalModal, setShowEvalModal] = useState(false);

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
  }, [apiUrl, currentView]);

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
      if (Array.isArray(data)) {
        setSubmissions(data);
      } else {
        setSubmissions([]);
      }
    } catch (err) {
      console.warn("Failed fetching submissions, falling back to local cache", err);
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

    if (!fullName || !mobile || !nationalId || !childAge || !parentAgreed) {
      showToast(t.toastFormError, "error");
      return;
    }

    // Full name: must have at least 4 parts
    const nameParts = fullName.trim().split(/\s+/);
    if (nameParts.length < 4) {
      showToast(lang === 'ar' ? 'يرجى إدخال الاسم الرباعي كاملاً (الاسم الأول والثاني والثالث واللقب)' : 'Please enter the full four-part name (first, second, third, and last name)', "error");
      return;
    }

    // Saudi mobile: must start with 05 and be exactly 10 digits
    const saudiMobileRegex = /^05[0-9]{8}$/;
    if (!saudiMobileRegex.test(mobile.trim())) {
      showToast(lang === 'ar' ? 'رقم الجوال يجب أن يبدأ بـ 05 ويتكون من 10 أرقام (مثال: 0512345678)' : 'Mobile number must start with 05 and be exactly 10 digits (e.g. 0512345678)', "error");
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

    // Check if Railway URL is unconfigured, fallback immediately to local simulated sandbox storage
    if (!isConnected) {
      await handleSandboxSubmission(calculatedCategory);
      setIsUploading(false);
      setUploadProgress(0);
      setProgressStateText("");
      return;
    }

    // Build FormData
    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('mobile', mobile);
    formData.append('nationalId', nationalId);
    formData.append('childAge', childAge);
    formData.append('ageCategory', calculatedCategory);
    formData.append('video', selectedFile);
    if (selectedIdFile) formData.append('idProof', selectedIdFile);
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
      console.error("Submission failed on server. Falling back to sandbox storage.", err);
      showToast(lang === 'ar' ? 'تعذر الاتصال بالخادم. سيتم الحفظ محلياً في المتصفح.' : 'Server offline. Saving to browser cache.', "error");
      await handleSandboxSubmission(calculatedCategory);
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
      setProgressStateText("");
    }
  };

  const handleSandboxSubmission = async (calculatedCategory) => {
    setProgressStateText(t.encryptingSandbox);
    let localProgress = 15;
    const uniqueSubId = "STAGE-" + Math.floor(100000 + Math.random() * 900000);

    await new Promise((resolve) => {
      const timer = setInterval(() => {
        localProgress += 20;
        if (localProgress >= 100) {
          clearInterval(timer);
          resolve();
        } else {
          setUploadProgress(localProgress);
          if (localProgress > 50) setProgressStateText(t.savingSandbox);
        }
      }, 150);
    });

    const demoVideos = [
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    ];

    const videoUrl = demoVideos[Math.floor(Math.random() * demoVideos.length)];
    const idProofUrl = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

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

    setReceiptDetails({
      fullName,
      nationalId,
      submissionCode: uniqueSubId,
      status: 'Under Review'
    });

    showToast(t.toastSuccess, "success");
    setCurrentView('success');
  };

  // Submit assessment metrics
  const saveJuryEvaluation = async () => {
    if (!selectedVideo) return;

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

    if (!isConnected) {
      localStorage.setItem("submissions_almadinah_stage", JSON.stringify(updatedSubmissions));
      showToast(t.toastEvalSaved + ' (local only)', "success");
      return;
    }

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
      localStorage.setItem("submissions_almadinah_stage", JSON.stringify(updatedSubmissions));
      showToast(t.toastEvalSaved + ' (local fallback saved)', "success");
    }
  };

  // Simulated Voting logic
  const registerVote = async (item) => {
    if (!loggedInUser) {
      showToast(lang === 'ar' ? 'يجب تسجيل الدخول للتصويت' : 'Please log in to vote', "error");
      return;
    }

    const voterRecord = JSON.parse(localStorage.getItem("almadinah_user_votes_" + loggedInUser.id) || "[]");
    if (voterRecord.includes(item.submissionCode)) {
      showToast(t.alreadyVoted, "error");
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
        // Save to localStorage as cache
        voterRecord.push(item.submissionCode);
        localStorage.setItem("almadinah_user_votes_" + loggedInUser.id, JSON.stringify(voterRecord));
        showToast(t.votedSuccessfully, "success");
      } else if (result.message === 'already_voted') {
        // Server says already voted — rollback and update local cache
        setSubmissions(prev => prev.map(sub =>
          sub.submissionCode === item.submissionCode
            ? { ...sub, votes: Math.max((sub.votes || 1) - 1, 0) }
            : sub
        ));
        voterRecord.push(item.submissionCode);
        localStorage.setItem("almadinah_user_votes_" + loggedInUser.id, JSON.stringify(voterRecord));
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
          body: JSON.stringify({ username: usernameInput.trim(), passcode: passwordInput }),
        });
        const result = await response.json();
        if (result.status === 'success' && result.user?.role === 'admin') {
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
      if (!usernameInput.trim() || !passwordInput) {
        setAuthError(lang === 'ar' ? 'يرجى كتابة اسم المستخدم وكلمة المرور' : 'Please fill in username and password');
        setAuthLoading(false);
        return;
      }

      if (parentMode === 'register') {
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

        // Parent Registration
        try {
          const response = await fetch(`${apiUrl}/api/user/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: usernameInput.trim(), password: passwordInput }),
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
            body: JSON.stringify({ username: usernameInput.trim(), password: passwordInput }),
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
      'Invalid username or password':           'اسم المستخدم أو كلمة المرور غير صحيحة',
      'Username already taken. Please choose another.': 'اسم المستخدم مستخدم بالفعل. يرجى اختيار اسم آخر.',
      'Username and password are required':     'اسم المستخدم وكلمة المرور مطلوبان',
      'Username must be at least 3 characters': 'يجب أن يكون اسم المستخدم 3 أحرف على الأقل',
      'Password must be at least 6 characters': 'يجب ألا تقل كلمة المرور عن 6 أحرف',
      'Internal server error':                  'خطأ داخلي في الخادم',
    };
    return map[msg] || msg;
  };

  const clearAuthInputs = () => {
    setUsernameInput('');
    setPasswordInput('');
    setConfirmPasswordInput('');
    setAuthError('');
  };

  const handleUserLogout = async () => {
    try { await fetch(`${apiUrl}/api/user/logout`, { method: 'POST', credentials: 'include' }); } catch {}
    setLoggedInUser(null);
    setAccessToken(null);
    localStorage.removeItem('almadinah_user');
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
          localStorage.setItem("almadinah_user_votes_" + userId, JSON.stringify(votesData.votedCodes));
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
          <div className="flex flex-col lg:flex-row lg:justify-between py-3 lg:h-20 lg:items-center gap-3">

            {/* Branding Title */}
            <div className="flex items-center gap-2 w-full lg:w-auto justify-center lg:justify-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-tr from-amber-400 via-orange-400 to-pink-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-orange-200 transform hover:rotate-6 transition-all duration-200 cursor-pointer">
                <Star className="w-7 h-7" />
              </div>
              <div>
                <span className="text-lg sm:text-2xl font-bold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                  {t.title}
                </span>
                <span className="text-xs block text-purple-500 font-bold tracking-wider -mt-0.5">
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
                    ? 'bg-purple-600 border-purple-800 text-white shadow-md'
                    : 'bg-purple-50 hover:bg-purple-100 text-purple-700 border-transparent hover:border-purple-200'
                  }`}
              >
                {t.submissionTab}
              </button>

              {loggedInUser && currentView !== 'admin' && (
                <button
                  onClick={() => setCurrentView('voting')}
                  className={`px-3 sm:px-4 py-2 text-[11px] sm:text-sm font-bold rounded-2xl transition-all border-b-4 font-normal ${currentView === 'voting'
                      ? 'bg-purple-600 border-purple-800 text-white shadow-md '
                      : 'bg-purple-50 hover:bg-purple-100 text-purple-700 border-transparent hover:border-purple-200'
                    }`}
                >
                  {t.publicVoteTab}
                </button>
              )}

              {/* UNIFIED SESSION CONTROL (Single navbar button based on dynamic active role session) */}
              {currentView === 'admin' ? (
                // 1. Admin Active Session
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1.5 px-3 h-10 sm:h-11 bg-purple-100 border-b-4 border-purple-300 text-purple-700 text-xs font-bold rounded-2xl">
                    <Sliders className="w-4 h-4" />
                    {lang === 'ar' ? 'لجنة التحكيم' : 'Jury Admin'}
                  </span>
                  <button
                    onClick={() => setCurrentView('submission')}
                    className="flex items-center gap-1 px-3 sm:px-4 h-10 sm:h-11 text-[11px] sm:text-sm font-bold text-slate-700 bg-slate-100 hover:bg-rose-50 border-b-4 border-slate-300 hover:border-rose-400 rounded-2xl transition-all duration-200"
                  >
                    <ArrowLeft className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                    <span>{t.exitDashboard}</span>
                  </button>
                </div>
              ) : loggedInUser ? (
                // 2. Parent Active Session
                <div className="flex items-center gap-2">
                  <span className="hidden md:flex items-center gap-1.5 px-3 h-10 sm:h-11 bg-emerald-50 border-b-4 border-emerald-300 text-emerald-700 text-xs font-bold rounded-2xl">
                    <UserCheck className="w-4 h-4" />
                    {loggedInUser.username}
                  </span>
                  <button
                    onClick={handleUserLogout}
                    className="flex items-center gap-1 px-3 sm:px-4 h-10 sm:h-11 text-[11px] sm:text-sm font-bold text-rose-600 bg-rose-50 hover:bg-rose-100 border-b-4 border-rose-200 hover:border-rose-400 rounded-2xl transition-all duration-200"
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
                  className="flex items-center gap-1.5 px-3 sm:px-5 h-10 sm:h-11 text-[11px] sm:text-sm font-bold text-purple-700 bg-purple-50 hover:bg-purple-100 border-b-4 border-purple-300 hover:border-purple-400 rounded-2xl transition-all duration-200 shadow-sm"
                >
                  <Lock className="w-4 h-4 text-purple-600" />
                  <span>{lang === 'ar' ? 'بوابة تسجيل الدخول' : 'Member Portal'}</span>
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">

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
                          <span className={`px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold ${queriedRecord.status === 'Winner' ? 'bg-yellow-400 text-yellow-950 border border-yellow-600' :
                              queriedRecord.status === 'Qualified' || queriedRecord.status === 'Finalist' ? 'bg-green-100 text-green-800 border border-green-300' :
                                queriedRecord.status === 'Not Qualified' ? 'bg-rose-100 text-rose-800' :
                                  'bg-purple-100 text-purple-800'
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
                            className="w-full py-3 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-yellow-950 font-bold rounded-xl text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm border-b-2 border-amber-600"
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
              <div className="absolute top-0 right-10 transform -translate-y-1/2 bg-yellow-300 text-yellow-950 font-bold px-6 py-1.5 rounded-full text-xs shadow-sm font-bold">
                {t.registrationForm}
              </div>

              {!loggedInUser ? (
                <div className="text-center py-12 px-4 space-y-6">
                  <div className="w-20 h-20 bg-purple-100 text-purple-600 rounded-3xl flex items-center justify-center text-3xl mx-auto shadow-md">
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
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-purple-100 active:scale-95 transition-all text-sm sm:text-base border-b-4 border-purple-800"
                  >
                    <Lock className="w-5 h-5" />
                    <span>{lang === 'ar' ? 'تسجيل الدخول / إنشاء حساب ولي الأمر' : 'Log In / Create Parent Account'}</span>
                  </button>
                </div>
              ) : (
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
                        dir={lang === 'ar' ? 'rtl' : 'ltr'}
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
                          className={`w-full bg-slate-50 border-2 border-slate-200 rounded-2xl font-semibold focus:outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-400 transition-all text-sm appearance-none py-4 ${lang === 'ar' ? 'pl-10 pr-5' : 'pr-10 pl-5'} ${childAge ? 'text-slate-900' : 'text-slate-400'}`}
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
              )}
            </div>
          </div>
        )}

        {/* VIEW 2: Public Voting Arena */}
        {currentView === 'voting' && (
          <div className="space-y-6">
            {!loggedInUser ? (
              <div className="flex flex-col items-center justify-center py-24 space-y-6 text-center">
                <div className="w-20 h-20 bg-pink-100 text-pink-500 rounded-3xl flex items-center justify-center shadow-md">
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
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-bold rounded-2xl shadow-lg transition-all text-sm border-b-4 border-purple-800"
                >
                  <Lock className="w-5 h-5" />
                  <span>{lang === 'ar' ? 'تسجيل الدخول / إنشاء حساب' : 'Log In / Create Account'}</span>
                </button>
              </div>
            ) : (
              <>
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
                <p className="text-slate-550 font-bold text-sm sm:text-base">{t.noQualifiedForVote}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {submissions.filter(s => s.status === 'Qualified' || s.status === 'Finalist' || s.status === 'Winner').map(item => (
                  <div key={item.submissionCode} className="bg-white border-4 border-yellow-200 rounded-[2rem] overflow-hidden shadow-sm flex flex-col hover:shadow-lg transition-all transform hover:-translate-y-1">

                    {/* Simulated Player Box */}
                    <div className="aspect-video bg-black relative flex items-center justify-center">
                      <video src={item.videoUrl} className="w-full h-full object-cover opacity-75" controls preload="none" />
                      <div className="absolute top-3 right-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold text-[10px] sm:text-xs px-3 py-1 rounded-full shadow-md">
                        {item.submissionCode}
                      </div>
                    </div>

                    <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                      <div>
                        <div className="flex justify-between items-start gap-2">
                          <h4 className="font-bold text-slate-900 text-lg">{item.fullName}</h4>
                          <span className="text-[10px] sm:text-xs font-bold px-2.5 py-1 bg-yellow-100 text-yellow-900 rounded-full">
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
                          <span className="text-xs sm:text-sm font-bold">{item.votes || 0} {t.voteCount}</span>
                        </div>

                        <button
                          onClick={() => registerVote(item)}
                          className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white text-xs sm:text-sm font-bold rounded-xl shadow-sm transition-all flex items-center gap-1.5 border-b-2 border-purple-800"
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
                  <span className="font-bold text-pink-600 font-mono text-base">{receiptDetails.submissionCode}</span>
                </div>
                <div className="pt-3 flex justify-between items-center text-xs sm:text-sm gap-4">
                  <span className="text-purple-950 font-bold">{t.statusLabel}</span>
                  <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 border border-yellow-300 text-[10px] sm:text-xs font-bold">
                    {getStatusLabel(receiptDetails.status)}
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

        {/* VIEW 5: Parent / User Dashboard */}
        {loggedInUser && currentView === 'submission' && (
          <div style={{ marginTop: '2.5rem' }} className="bg-white rounded-[2rem] border-4 border-emerald-200 shadow-lg p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center font-bold text-lg shadow-sm">
                  {loggedInUser.username.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    {lang === 'ar' ? `أهلاً، ${loggedInUser.username}` : `Welcome, ${loggedInUser.username}`}
                  </h2>
                  <p className="text-xs text-emerald-600 font-bold">
                    {lang === 'ar' ? 'لوحة متابعة مشاركات طفلك' : 'Your children\'s submissions dashboard'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => { loadUserSubmissions(loggedInUser.id); }}
                className="flex items-center gap-1.5 px-4 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-xs rounded-xl border border-emerald-200 transition-all"
              >
                <Loader2 className="w-4 h-4" />
                {lang === 'ar' ? 'تحديث' : 'Refresh'}
              </button>
            </div>

            {userSubmissions.length === 0 ? (
              <div className="text-center py-10 text-slate-400">
                <BookOpen className="w-10 h-10 mx-auto mb-3 opacity-40" />
                <p className="font-bold text-sm">
                  {lang === 'ar' ? 'لا توجد مشاركات مسجلة بعد. سجّل طفلك أدناه!' : 'No submissions yet. Register your child below!'}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {userSubmissions.map(item => (
                  <div key={item.submissionCode} className="bg-slate-50 rounded-2xl border-2 border-slate-100 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 text-purple-700 rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {item.fullName?.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-sm">{item.fullName}</p>
                        <p className="text-xs text-purple-505 font-bold">{item.ageCategory} • {item.childAge} {lang === 'ar' ? 'سنة' : 'yrs'}</p>
                        <p className="text-[10px] text-slate-400 font-mono mt-0.5">{item.submissionCode}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 flex-wrap">
                      {item.resultsReleased ? (
                        <div className="text-center">
                          <p className="text-2xl font-extrabold text-purple-700">{item.totalScore}<span className="text-sm text-slate-400">/100</span></p>
                          <p className="text-[10px] text-slate-400 font-bold">{lang === 'ar' ? 'الدرجة' : 'Score'}</p>
                        </div>
                      ) : (
                        <div className="text-center px-3">
                          <p className="text-xs text-slate-400 font-bold">{lang === 'ar' ? 'النتائج قريباً' : 'Results soon'}</p>
                        </div>
                      )}
                      <span className={`px-3 py-1.5 rounded-xl text-xs font-bold ${
                        item.status === 'Winner' ? 'bg-yellow-100 text-yellow-800 border border-yellow-300' :
                        item.status === 'Qualified' || item.status === 'Finalist' ? 'bg-green-100 text-green-800 border border-green-300' :
                        item.status === 'Not Qualified' ? 'bg-rose-100 text-rose-800 border border-rose-200' :
                        'bg-amber-100 text-amber-800 border border-amber-200'
                      }`}>
                        {item.resultsReleased ? getStatusLabel(item.status) : (lang === 'ar' ? 'قيد المراجعة' : 'Under Review')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* VIEW 4: Admin / Organizer Dashboard Panel */}
        {currentView === 'admin' && (
          <section className="transition-opacity duration-300">

            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">{t.compEntries}</h1>
                <p className="text-slate-505 text-sm">{t.compEntriesSub}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button onClick={exportToCSV} className="flex items-center gap-1 px-4 py-2.5 text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 rounded-xl hover:shadow-sm transition-all">
                  <FileDown className="w-4 h-4 text-emerald-600" />
                  <span>{t.exportCsv}</span>
                </button>
                <button onClick={() => setCurrentView('submission')} className="flex items-center gap-1 px-4 py-2.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all">
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
                <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center"><Users className="w-5 h-5" /></div>
              </div>
              <div className="bg-white rounded-2xl border border-slate-150 p-4 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 font-semibold uppercase">{lang === 'ar' ? 'قيد المراجعة' : 'Pending'}</span>
                  <p className="text-2xl font-bold text-amber-600">{submissions.filter(s => s.status === 'Under Review').length}</p>
                </div>
                <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center"><Loader2 className="w-5 h-5" /></div>
              </div>
              <div className="bg-white rounded-2xl border border-slate-150 p-4 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 font-semibold uppercase">{lang === 'ar' ? 'مؤهل' : 'Qualified'}</span>
                  <p className="text-2xl font-bold text-green-600">{submissions.filter(s => s.status === 'Qualified' || s.status === 'Finalist' || s.status === 'Winner').length}</p>
                </div>
                <div className="w-10 h-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center"><CheckCircle2 className="w-5 h-5" /></div>
              </div>
              <div className="bg-white rounded-2xl border border-slate-150 p-4 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 font-semibold uppercase">{lang === 'ar' ? 'الخادم' : 'Server'}</span>
                  <p className={`text-sm font-bold ${isConnected ? 'text-green-600' : 'text-amber-600'}`}>{isConnected ? t.prodServerless : t.sandboxSimulated}</p>
                </div>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isConnected ? 'bg-green-50 text-green-600' : 'bg-amber-50 text-amber-600'}`}><Server className="w-5 h-5" /></div>
              </div>
            </div>

            {/* Tab Filter: Pending / Evaluated / All */}
            <div className="flex gap-2 mb-4">
              {['pending', 'evaluated', 'all'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setAdminTab(tab)}
                  className={`px-4 py-2 text-xs font-bold rounded-xl border-b-4 transition-all ${adminTab === tab ? 'bg-purple-600 border-purple-800 text-white' : 'bg-white border-slate-200 text-slate-600 hover:bg-purple-50'}`}
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
                    className={`w-full py-2 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-purple-500/50 focus:border-purple-500 ${lang === 'ar' ? 'pr-9 pl-4' : 'pl-9 pr-4'}`}
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
                          <tr key={item.submissionCode} className={`hover:bg-slate-50 transition-colors border-b border-slate-100 ${item.status === 'Under Review' ? 'bg-amber-50/30' : ''}`}>
                            <td className="px-5 py-3 flex items-center gap-3">
                              <div className="w-9 h-9 bg-purple-100 text-purple-700 rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0">
                                {item.fullName ? item.fullName.charAt(0).toUpperCase() : '?'}
                              </div>
                              <div className="min-w-0">
                                <p className="font-bold text-slate-800 text-xs sm:text-sm truncate max-w-[160px]">{item.fullName || 'Unknown'}</p>
                                <span className="text-[10px] text-purple-500 font-bold block truncate max-w-[160px]">{item.ageCategory || ''}</span>
                              </div>
                            </td>
                            <td className="px-5 py-3 text-xs font-bold text-slate-700 whitespace-nowrap">{item.childAge} {lang === 'ar' ? 'سنة' : 'yrs'}</td>
                            <td className="px-5 py-3 font-mono text-xs text-slate-600 whitespace-nowrap" dir="ltr">{item.mobile || 'N/A'}</td>
                            <td className="px-5 py-3 font-mono text-xs text-slate-600">{item.nationalId || 'N/A'}</td>
                            <td className="px-5 py-3">
                              {item.submittedBy ? (
                                <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-emerald-50 text-emerald-700 rounded-lg text-[11px] font-bold">
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
                                item.status === 'Winner' ? 'bg-yellow-100 text-yellow-800' :
                                item.status === 'Qualified' || item.status === 'Finalist' ? 'bg-green-100 text-green-800' :
                                item.status === 'Not Qualified' ? 'bg-rose-100 text-rose-800' :
                                'bg-amber-100 text-amber-800'
                              }`}>
                                {getStatusLabel(item.status)}
                              </span>
                              {!item.resultsReleased && item.status !== 'Under Review' && (
                                <span className="text-[8px] text-slate-400 font-medium block mt-0.5">{lang === 'ar' ? 'غير منشور' : 'Draft'}</span>
                              )}
                            </td>
                            <td className="px-5 py-3 font-bold text-xs whitespace-nowrap">
                              <span className={`${item.totalScore >= 80 ? 'text-green-600' : item.totalScore >= 60 ? 'text-amber-600' : item.totalScore > 0 ? 'text-rose-500' : 'text-slate-400'}`}>
                                {item.totalScore || 0}
                              </span>
                              <span className="text-slate-300"> / 100</span>
                            </td>
                            <td className={`px-5 py-3 ${lang === 'ar' ? 'text-left' : 'text-right'}`}>
                              <button
                                onClick={() => { setSelectedVideo(item); setShowEvalModal(true); }}
                                className="px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap"
                              >
                                <Sliders className="w-3 h-3" />
                                <span>{t.play}</span>
                              </button>
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
          <div className="bg-white rounded-[2rem] border-4 border-purple-300 max-w-md w-full shadow-2xl p-6 relative">
            
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
              <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center text-xl mx-auto shadow-sm">
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
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${authTab === 'parent' ? 'bg-white text-purple-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  <Users className="w-3.5 h-3.5 inline mr-1 ml-1" />
                  {lang === 'ar' ? 'أولياء الأمور' : 'Parents'}
                </button>
                <button
                  onClick={() => { setAuthTab('admin'); setAuthError(''); }}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${authTab === 'admin' ? 'bg-white text-purple-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  <Sliders className="w-3.5 h-3.5 inline mr-1 ml-1" />
                  {lang === 'ar' ? 'لجنة التحكيم' : 'Jury / Committee'}
                </button>
              </div>

              {/* Parent Sub-mode switcher (Login vs Register) */}
              {authTab === 'parent' && (
                <div className="flex justify-center gap-4 text-xs font-semibold pb-1 border-b border-slate-100">
                  <button
                    onClick={() => { setParentMode('login'); setAuthError(''); }}
                    className={`pb-1 ${parentMode === 'login' ? 'text-purple-600 border-b-2 border-purple-500 font-bold' : 'text-slate-400 hover:text-slate-655'}`}
                  >
                    {lang === 'ar' ? 'تسجيل الدخول' : 'Sign In'}
                  </button>
                  <button
                    onClick={() => { setParentMode('register'); setAuthError(''); }}
                    className={`pb-1 ${parentMode === 'register' ? 'text-purple-600 border-b-2 border-purple-500 font-bold' : 'text-slate-400 hover:text-slate-655'}`}
                  >
                    {lang === 'ar' ? 'إنشاء حساب جديد' : 'New Account'}
                  </button>
                </div>
              )}

              {/* Dynamic Login Form */}
              <form onSubmit={handleUnifiedAuth} className="space-y-3 text-left">
                <div>
                  <label className={`block text-xs font-bold text-slate-600 mb-1.5 ${lang === 'ar' ? 'text-right' : ''}`}>
                    {lang === 'ar' ? 'اسم المستخدم' : 'Username'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={authTab === 'admin' ? (lang === 'ar' ? 'اسم مستخدم الإدارة' : 'admin') : (lang === 'ar' ? 'أدخل اسم مستخدم الحساب' : 'Enter username')}
                    value={usernameInput}
                    onChange={(e) => setUsernameInput(e.target.value)}
                    className={`w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 font-sans ${lang === 'ar' ? 'text-right' : ''}`}
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
                    className={`w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 font-sans ${lang === 'ar' ? 'text-right' : ''}`}
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
                      className={`w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 font-sans ${lang === 'ar' ? 'text-right' : ''}`}
                    />
                  </div>
                )}

                {authTab === 'admin' && (
                  <p className={`text-[10px] text-slate-400 mt-1 ${lang === 'ar' ? 'text-right' : ''}`}>
                    💡 {t.defaultPasscode}
                  </p>
                )}

                {authError && (
                  <div className={`text-xs text-rose-600 font-semibold flex items-center gap-1 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                    <Info className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{authError}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={authLoading}
                  className="w-full mt-4 py-3.5 bg-purple-600 hover:bg-purple-700 disabled:opacity-60 text-white font-bold rounded-xl border-b-4 border-purple-800 transition-all text-sm flex items-center justify-center gap-2"
                >
                  {authLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                  <span>
                    {authLoading ? (lang === 'ar' ? 'جارٍ التحقق...' : 'Verifying...') :
                     authTab === 'admin' ? (lang === 'ar' ? 'تسجيل دخول المحكمين' : 'Jury Admin Login') :
                     parentMode === 'login' ? (lang === 'ar' ? 'دخول حساب أولياء الأمور' : 'Parents Sign In') :
                     (lang === 'ar' ? 'إنشاء حساب أولياء الأمور' : 'Parents Sign Up')}
                  </span>
                </button>
              </form>

            </div>
          </div>
        </div>
      )}

      {/* EVAL MODAL: Jury Assessment Popup */}
      {showEvalModal && selectedVideo && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-[2rem] border-4 border-purple-300 max-w-2xl w-full shadow-2xl relative flex flex-col max-h-[90vh]">

            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 text-purple-700 rounded-xl flex items-center justify-center font-bold text-base flex-shrink-0">
                  {selectedVideo.fullName?.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">{selectedVideo.fullName}</h3>
                  <p className="text-xs text-purple-505 font-bold">{selectedVideo.ageCategory} • {selectedVideo.childAge} {lang === 'ar' ? 'سنة' : 'yrs'}</p>
                </div>
              </div>
              <button onClick={() => setShowEvalModal(false)} className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-all">
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
                    <Video className="w-10 h-10 text-purple-500 mb-2" />
                    <p className="text-xs font-bold text-white">{lang === 'ar' ? 'معاينة الفيديو' : 'Video Preview'}</p>
                  </div>
                )}
              </div>

              {/* Quick links */}
              <div className="flex gap-2">
                {selectedVideo.videoUrl && (
                  <a target="_blank" rel="noopener noreferrer" href={selectedVideo.videoUrl}
                    className="flex-1 py-2 bg-purple-50 hover:bg-purple-100 text-purple-700 font-bold rounded-xl text-xs transition-all flex items-center justify-center gap-1.5">
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

              {/* Scorecard */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-4">
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
                        <span className="text-purple-700 font-bold flex-shrink-0 ml-1">{scores[key]}/{max}</span>
                      </div>
                      <input type="range" min="0" max={max} value={scores[key]}
                        onChange={(e) => setScores({ ...scores, [key]: parseInt(e.target.value) })}
                        className="w-full accent-purple-600" />
                    </div>
                  ))}
                </div>
                <div className="pt-2 border-t border-slate-200 flex justify-between items-center bg-purple-50 rounded-xl px-4 py-3">
                  <span className="text-sm font-bold text-slate-700">{t.totalScoreLabel}</span>
                  <span className="text-2xl font-bold text-purple-700">
                    {Object.values(scores).reduce((a, b) => a + Number(b), 0)} / 100
                  </span>
                </div>
              </div>

              {/* Status & Release */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
                <label className="block text-sm font-bold text-slate-700">{t.statusSelection}</label>
                <div className="relative">
                  <select value={evalStatus} onChange={(e) => setEvalStatus(e.target.value)}
                    className={`w-full bg-white border border-slate-200 rounded-xl text-sm focus:outline-none py-3 appearance-none font-bold ${lang === 'ar' ? 'pl-9 pr-4' : 'pr-9 pl-4'}`}>
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
                <label className="flex items-center gap-2.5 cursor-pointer pt-2 border-t border-slate-200">
                  <input type="checkbox" checked={evalResultsReleased} onChange={(e) => setEvalResultsReleased(e.target.checked)} className="w-4 h-4 text-green-600 rounded" />
                  <span className="text-xs font-bold text-slate-750">{t.releaseResultsBtn}</span>
                </label>
              </div>

            </div>

            {/* Footer Save Button */}
            <div className="p-5 border-t border-slate-100 bg-white rounded-b-[2rem]">
              <button onClick={async () => { await saveJuryEvaluation(); setShowEvalModal(false); }}
                className="w-full py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-all text-sm shadow-md flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>{t.saveEvaluation}</span>
              </button>
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
                <h2 className="text-2xl sm:text-3xl font-bold text-amber-800 tracking-tight">{t.certTitle}</h2>
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

              <div className="grid grid-cols-2 gap-8 pt-8 max-w-xl mx-auto text-xs font-bold text-slate-755">
                <div className="space-y-1">
                  <p className="text-slate-400 text-[10px] font-semibold">{t.certSign}</p>
                  <p className="text-amber-800 text-sm font-bold">لجنة تحكيم المدينة ستيج</p>
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
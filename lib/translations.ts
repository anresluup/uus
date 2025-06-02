export type Locale = "en" | "fr"

export type Translations = {
  [key in Locale]: {
    [key: string]: string
  }
}

export const translations: Translations = {
  en: {
    // Header
    "nav.howItWorks": "How It Works",
    "nav.pricing": "Pricing",
    "nav.faq": "FAQ",
    "nav.login": "Login",
    "nav.scanNow": "Scan Now",

    // Hero Section
    "hero.secure": "Private & Secure Scanning",
    "hero.title": "FIND OUT IF THEY'RE CHEATING",
    "hero.subtitle":
      "Instantly scan dating apps to discover if your partner is active on Tinder, Bumble, Hinge & more. Get peace of mind with our secure, discreet service.",
    "hero.inputPlaceholder": "Enter their name...",
    "hero.agePlaceholder": "Enter their age...",
    "hero.startScan": "Start Scan",
    "hero.secure.label": "Secure",
    "hero.encrypted.label": "Encrypted",
    "hero.reviews": "4.8/5 (2,305 reviews)",
    "hero.profileFound": "Profile Found",
    "hero.activeAgo": "Active 2 hours ago",
    "hero.alert": "Alert",
    "hero.location": "Location:",
    "hero.milesAway": "2.3 miles away",
    "hero.lastActive": "Last Active:",
    "hero.today": "Today, 5:37 PM",
    "hero.datingApps": "Dating Apps:",
    "hero.apps": "Tinder, Bumble",
    "hero.profileStatus": "Profile Status:",
    "hero.currentlyActive": "Currently Active",
    "hero.viewDetails": "View Details",
    "hero.downloadReport": "Download Report",
    "hero.uploadPhoto": "Upload a Photo (Optional)",
    "hero.uploadPhotoDesc": "Adding a photo increases match accuracy by 95%",

    // Featured Section
    "featured.title": "Featured in Leading Publications",
    "featured.trustpilot": "Join thousands of satisfied users who trust our service to verify dating profiles",

    // How It Works Section
    "how.title": "How Does It Work?",
    "how.subtitle":
      "Our AI-powered system carefully scans popular dating apps to verify activity with industry-leading accuracy",
    "how.step1.title": "Enter Details",
    "how.step1.desc":
      "Provide basic information to help our AI bots target the right profiles. Your search details remain private and encrypted.",
    "how.step2.title": "Upload a Photo",
    "how.step2.desc":
      "Our AI uses advanced facial recognition technology to match profiles across multiple platforms with 95% accuracy.",
    "how.step3.title": "AI Bots Scan Apps",
    "how.step3.desc":
      "Our secure bots create temporary profiles to scan dating apps across multiple locations within a 50-mile radius.",
    "how.step4.title": "Get Detailed Results",
    "how.step4.desc":
      "Receive a comprehensive report with activity data, timestamps, and location information from our 24/7 monitoring system.",

    // Privacy Section
    "privacy.title1": "Important Privacy Information",
    "privacy.desc1":
      "We understand the sensitive nature of our service. CheatScanner is designed to provide factual information while respecting privacy and legal boundaries:",
    "privacy.item1": "We only search publicly available information on dating platforms",
    "privacy.item2": "Your search details and results are encrypted and never shared",
    "privacy.item3": "We recommend using this information for honest conversations",
    "privacy.item4": "Our service complies with all relevant data protection laws",
    "privacy.title2": "When to Use This Service",
    "privacy.desc2":
      "While discovering the truth can be difficult, it's important to approach relationship concerns with care:",
    "privacy.item5": "Use this as one tool for gathering information, not as definitive proof",
    "privacy.item6": "Consider open communication with your partner about your concerns",
    "privacy.item7": "Remember that some dating apps retain inactive profiles",

    // Trust Section
    "trust.title": "Why Trust Us?",
    "trust.subtitle": "CheatScanner uses advanced technology to provide accurate results with full discretion",
    "trust.item1.title": "AI Bot Network",
    "trust.item1.desc":
      "Our bots scan multiple locations 24/7 to ensure comprehensive coverage across all major dating platforms.",
    "trust.item2.title": "Complete Anonymity",
    "trust.item2.desc": "Our AI bots operate discreetly, ensuring your partner never knows they've been searched.",
    "trust.item3.title": "Advanced Detection",
    "trust.item3.desc": "AI-powered profile matching technology with 92-95% accuracy across various dating platforms.",
    "trust.item4.title": "End-to-End Encryption",
    "trust.item4.desc": "Secure hot connection encryption protects your data and search history at all times.",
    "trust.stats.title": "Accuracy Statistics",
    "trust.stats.item1": "Profile Detection",
    "trust.stats.item2": "Location Accuracy",
    "trust.security.title": "Our Security Promise",
    "trust.security.desc":
      "Your privacy and security are our top priorities. We've implemented multiple layers of protection to ensure your data and searches remain completely confidential:",
    "trust.security.item1.title": "256-bit Encryption",
    "trust.security.item1.desc": "Military-grade encryption for all data",
    "trust.security.item2.title": "No Search History",
    "trust.security.item2.desc": "Searches are never stored after completion",

    // Pricing Section
    "pricing.title": "Simple, One-time Payment",
    "pricing.bestValue": "BEST VALUE",
    "pricing.lifetime": "Lifetime Access",
    "pricing.price": "€1.99", // Updated
    "pricing.subtitle": "One-time payment, unlimited access",
    "pricing.feature1": "Full dating profile details",
    "pricing.feature2": "Complete contact information",
    "pricing.feature3": "Location history and activity",
    "pricing.feature4": "All social media profiles",
    "pricing.feature5": "Downloadable PDF report",
    "pricing.cta": "Get Started Now",
    "pricing.secure": "Secure Payment",
    "pricing.discreet": "100% Discreet",
    "pricing.trusted": "Trusted by thousands of users worldwide",
    "pricing.ssl": "SSL Secure",
    "pricing.encryption": "256-bit Encryption",
    "pricing.gdpr": "GDPR Compliant",

    // Results Container
    "results.title": "Search Results for",
    "results.ageLabel": "Age:",
    "results.location": "Showing results near",
    "results.found": "We found",
    "results.activeProfiles": "3 active profiles",
    "results.matching": "matching your search within the last 24 hours",
    "results.appsSearched": "Dating Apps Searched",
    "results.platforms": "120+ dating platforms",
    "results.scanComplete": "Scan complete",
    "results.recentActivity": "Most Recent Activity",
    "results.today": "Today at 2:45 PM",
    "results.locationActivity": "Location Activity",
    "results.within": "Within 30 miles of you",
    "results.highMatch": "High Match",
    "results.active": "Active 15 minutes ago",
    "results.datingApps": "Dating Apps:",
    "results.apps": "Tinder, Bumble",
    "results.others": "+4 others",
    "results.confidence": "Match Confidence:",
    "results.match": "80% match",
    "results.email": "Email:",
    "results.phone": "Phone:",
    "results.address": "Address:",
    "results.age": "Age/DOB:",
    "results.photos": "Profile Photos:",
    "results.locked": "Full profile details locked",
    "results.unlock": "Unlock for €1.99", // Updated
    "results.viewDetails": "View Details",
    "results.basicReport": "Basic Report",
    "results.basicMatch": "Basic Match",
    "results.activeYesterday": "Active yesterday",
    "results.accessDetails": "Access Complete Details",
    "results.oneTime": "One-time payment, lifetime access",
    "results.feature1": "Age & Date of Birth",
    "results.feature2": "Home Address",
    "results.feature3": "Phone Number",
    "results.feature4": "Email Address",
    "results.feature5": "Middle Name",
    "results.feature6": "Social Media Profiles",
    "results.feature7": "Dating Profile Links",
    "results.feature8": "Profile Images",
    "results.securePayment": "Secure Payment",
    "results.encrypted": "Encrypted",
    "results.lifetimeAccess": "Lifetime Access",
    "results.countdown": "Report available for next 10 minutes only",
    "results.viewing": "7 people from {city} are viewing these results right now",

    // CTA Section
    "cta.title": "Facts Over Feelings—Check Now!",
    "cta.subtitle": "In an era where dating profiles can hide so much, get verification in seconds.",
    "cta.button": "Start Scanning",

    // Footer
    "footer.desc": "Providing peace of mind through technology and transparency in relationships.",
    "footer.company": "Company",
    "footer.aboutUs": "About Us",
    "footer.howItWorks": "How It Works",
    "footer.privacyPolicy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.support": "Support",
    "footer.contactUs": "Contact Us",
    "footer.faq": "FAQ",
    "footer.helpCenter": "Help Center",
    "footer.reportIssues": "Report Issues",
    "footer.legal": "Legal",
    "footer.privacyPolicy2": "Privacy Policy",
    "footer.terms2": "Terms & Conditions",
    "footer.cookiePolicy": "Cookie Policy",
    "footer.gdpr": "GDPR Compliance",
    "footer.rights": "All rights reserved.",
    "footer.moreQuestions": "Have more questions?",
    "footer.visitFaq": "Visit our complete FAQ page.",

    // Scan Section
    "scan.scanning": "Scanning Dating Apps",
    "scan.searching": "Searching for profiles matching",
    "scan.searchingWithAge": "Searching for profiles matching", // Example: "Searching for profiles matching John Doe (Age: 30)"
    "scan.sites": "dating sites being scanned",
    "scan.profilesChecked": "Profiles checked:",
    "scan.cancel": "Cancel Scan",
    "scan.status.initializing": "Initializing scan...",
    "scan.status.connecting": "Connecting to dating app servers...",
    "scan.status.searching": "Searching for matching profiles...",
    "scan.status.analyzing": "Analyzing profile data...",
    "scan.status.crossReferencing": "Cross-referencing with social media...",
    "scan.status.finalizing": "Finalizing results...",
    "scan.status.complete": "Scan complete! Found 3 matching profiles.",
    "scan.photoAnalysis": "Photo analysis in progress...",
    "scan.faceRecognition": "Running facial recognition...",
    "scan.enhancedSearch": "Enhanced search with photo active",

    // Upload
    "upload.dragDrop": "Drag & drop a photo here",
    "upload.orClickToUpload": "or click to upload",
    "upload.selectPhoto": "Select Photo",
    "upload.maxFileSize": "Max file size: 5MB",
    "upload.invalidFileType": "Invalid file type. Please upload an image.",
    "upload.fileTooLarge": "File is too large. Maximum size is 5MB.",
    "upload.uploadedPhoto": "Uploaded photo",
    "upload.removePhoto": "Remove photo",
    "upload.photoUploaded": "Photo uploaded successfully",
    "upload.dropZoneLabel": "Drop zone for uploading photos",
    "upload.enhancedSearch": "Enhanced search with photo",
    "upload.accuracy": "95% match accuracy",
  },
  fr: {
    // Header
    "nav.howItWorks": "Comment ça marche",
    "nav.pricing": "Tarification",
    "nav.faq": "FAQ",
    "nav.login": "Connexion",
    "nav.scanNow": "Scanner maintenant",

    // Hero Section
    "hero.secure": "Analyse privée et sécurisée",
    "hero.title": "DÉCOUVREZ S'ILS VOUS TROMPENT",
    "hero.subtitle":
      "Analysez instantanément les applications de rencontres pour découvrir si votre partenaire est actif sur Tinder, Bumble, Hinge et plus. Obtenez la tranquillité d'esprit avec notre service discret et sécurisé.",
    "hero.inputPlaceholder": "Entrez leur nom...",
    "hero.agePlaceholder": "Entrez leur âge...",
    "hero.startScan": "Commencer l'analyse",
    "hero.secure.label": "Sécurisé",
    "hero.encrypted.label": "Crypté",
    "hero.reviews": "4.8/5 (2 305 avis)",
    "hero.profileFound": "Profil trouvé",
    "hero.activeAgo": "Actif il y a 2 heures",
    "hero.alert": "Alerte",
    "hero.location": "Emplacement :",
    "hero.milesAway": "3,7 km de distance",
    "hero.lastActive": "Dernière activité :",
    "hero.today": "Aujourd'hui, 17h37",
    "hero.datingApps": "Applications de rencontres :",
    "hero.apps": "Tinder, Bumble",
    "hero.profileStatus": "Statut du profil :",
    "hero.currentlyActive": "Actuellement actif",
    "hero.viewDetails": "Voir les détails",
    "hero.downloadReport": "Télécharger le rapport",
    "hero.uploadPhoto": "Télécharger une photo (Optionnel)",
    "hero.uploadPhotoDesc": "Ajouter une photo augmente la précision de correspondance de 95%",

    // Featured Section
    "featured.title": "Présenté dans les principales publications",
    "featured.trustpilot":
      "Rejoignez des milliers d'utilisateurs satisfaits qui font confiance à notre service pour vérifier les profils de rencontres",

    // How It Works Section
    "how.title": "Comment ça marche ?",
    "how.subtitle":
      "Notre système alimenté par l'IA analyse soigneusement les applications de rencontres populaires pour vérifier l'activité avec une précision de pointe",
    "how.step1.title": "Entrez les détails",
    "how.step1.desc":
      "Fournissez des informations de base pour aider nos robots IA à cibler les bons profils. Vos détails de recherche restent privés et cryptés.",
    "how.step2.title": "Téléchargez une photo",
    "how.step2.desc":
      "Notre IA utilise une technologie avancée de reconnaissance faciale pour faire correspondre les profils sur plusieurs plateformes avec une précision de 95%.",
    "how.step3.title": "Les robots IA analysent les applications",
    "how.step3.desc":
      "Nos robots sécurisés créent des profils temporaires pour analyser les applications de rencontres dans plusieurs emplacements dans un rayon de 80 km.",
    "how.step4.title": "Obtenez des résultats détaillés",
    "how.step4.desc":
      "Recevez un rapport complet avec des données d'activité, des horodatages et des informations de localisation de notre système de surveillance 24/7.",

    // Privacy Section
    "privacy.title1": "Informations importantes sur la confidentialité",
    "privacy.desc1":
      "Nous comprenons la nature sensible de notre service. CheatScanner est conçu pour fournir des informations factuelles tout en respectant la vie privée et les limites légales :",
    "privacy.item1":
      "Nous recherchons uniquement des informations publiquement disponibles sur les plateformes de rencontres",
    "privacy.item2": "Vos détails de recherche et résultats sont cryptés et jamais partagés",
    "privacy.item3": "Nous recommandons d'utiliser ces informations pour des conversations honnêtes",
    "privacy.item4": "Notre service est conforme à toutes les lois pertinentes sur la protection des données",
    "privacy.title2": "Quand utiliser ce service",
    "privacy.desc2":
      "Bien que découvrir la vérité puisse être difficile, il est important d'aborder les préoccupations relationnelles avec soin :",
    "privacy.item5":
      "Utilisez ceci comme un outil parmi d'autres pour recueillir des informations, pas comme une preuve définitive",
    "privacy.item6": "Envisagez une communication ouverte avec votre partenaire concernant vos préoccupations",
    "privacy.item7": "N'oubliez pas que certaines applications de rencontres conservent des profils inactifs",

    // Trust Section
    "trust.title": "Pourquoi nous faire confiance ?",
    "trust.subtitle":
      "CheatScanner utilise une technologie avancée pour fournir des résultats précis en toute discrétion",
    "trust.item1.title": "Réseau de robots IA",
    "trust.item1.desc":
      "Nos robots analysent plusieurs emplacements 24/7 pour assurer une couverture complète sur toutes les principales plateformes de rencontres.",
    "trust.item2.title": "Anonymat complet",
    "trust.item2.desc":
      "Nos robots IA opèrent discrètement, garantissant que votre partenaire ne sait jamais qu'il a été recherché.",
    "trust.item3.title": "Détection avancée",
    "trust.item3.desc":
      "Technologie de correspondance de profil alimentée par l'IA avec une précision de 92-95% sur diverses plateformes de rencontres.",
    "trust.item4.title": "Cryptage de bout en bout",
    "trust.item4.desc":
      "Le cryptage sécurisé de connexion protège vos données et l'historique de recherche à tout moment.",
    "trust.stats.title": "Statistiques de précision",
    "trust.stats.item1": "Détection de profil",
    "trust.stats.item2": "Précision de localisation",
    "trust.security.title": "Notre promesse de sécurité",
    "trust.security.desc":
      "Votre vie privée et votre sécurité sont nos priorités absolues. Nous avons mis en place plusieurs couches de protection pour garantir que vos données et recherches restent totalement confidentielles :",
    "trust.security.item1.title": "Cryptage 256 bits",
    "trust.security.item1.desc": "Cryptage de qualité militaire pour toutes les données",
    "trust.security.item2.title": "Pas d'historique de recherche",
    "trust.security.item2.desc": "Les recherches ne sont jamais stockées après leur achèvement",

    // Pricing Section
    "pricing.title": "Paiement unique simple",
    "pricing.bestValue": "MEILLEURE VALEUR",
    "pricing.lifetime": "Accès à vie",
    "pricing.price": "€1.99", // Updated
    "pricing.subtitle": "Paiement unique, accès illimité",
    "pricing.feature1": "Détails complets du profil de rencontres",
    "pricing.feature2": "Informations de contact complètes",
    "pricing.feature3": "Historique de localisation et activité",
    "pricing.feature4": "Tous les profils de médias sociaux",
    "pricing.feature5": "Rapport PDF téléchargeable",
    "pricing.cta": "Commencer maintenant",
    "pricing.secure": "Paiement sécurisé",
    "pricing.discreet": "100% discret",
    "pricing.trusted": "Approuvé par des milliers d'utilisateurs dans le monde",
    "pricing.ssl": "SSL sécurisé",
    "pricing.encryption": "Cryptage 256 bits",
    "pricing.gdpr": "Conforme au RGPD",

    // Results Container
    "results.title": "Résultats de recherche pour",
    "results.ageLabel": "Âge:",
    "results.location": "Affichage des résultats près de",
    "results.found": "Nous avons trouvé",
    "results.activeProfiles": "3 profils actifs",
    "results.matching": "correspondant à votre recherche au cours des dernières 24 heures",
    "results.appsSearched": "Applications de rencontres recherchées",
    "results.platforms": "Plus de 120 plateformes de rencontres",
    "results.scanComplete": "Analyse terminée",
    "results.recentActivity": "Activité la plus récente",
    "results.today": "Aujourd'hui à 14h45",
    "results.locationActivity": "Activité de localisation",
    "results.within": "Dans un rayon de 48 km de vous",
    "results.highMatch": "Correspondance élevée",
    "results.active": "Actif il y a 15 minutes",
    "results.datingApps": "Applications de rencontres :",
    "results.apps": "Tinder, Bumble",
    "results.others": "+4 autres",
    "results.confidence": "Confiance de correspondance :",
    "results.match": "80% de correspondance",
    "results.email": "Email :",
    "results.phone": "Téléphone :",
    "results.address": "Adresse :",
    "results.age": "Âge/Date de naissance :",
    "results.photos": "Photos de profil :",
    "results.locked": "Détails complets du profil verrouillés",
    "results.unlock": "Débloquer pour €1.99", // Updated
    "results.viewDetails": "Voir les détails",
    "results.basicReport": "Rapport de base",
    "results.basicMatch": "Correspondance basique",
    "results.activeYesterday": "Actif hier",
    "results.accessDetails": "Accéder aux détails complets",
    "results.oneTime": "Paiement unique, accès à vie",
    "results.feature1": "Âge et date de naissance",
    "results.feature2": "Adresse du domicile",
    "results.feature3": "Numéro de téléphone",
    "results.feature4": "Adresse email",
    "results.feature5": "Deuxième prénom",
    "results.feature6": "Profils de médias sociaux",
    "results.feature7": "Liens de profil de rencontres",
    "results.feature8": "Images de profil",
    "results.securePayment": "Paiement sécurisé",
    "results.encrypted": "Crypté",
    "results.lifetimeAccess": "Accès à vie",
    "results.countdown": "Rapport disponible pour les 10 prochaines minutes seulement",
    "results.viewing": "7 personnes de {city} consultent ces résultats en ce moment",

    // CTA Section
    "cta.title": "Les faits plutôt que les sentiments — Vérifiez maintenant !",
    "cta.subtitle":
      "À une époque où les profils de rencontres peuvent cacher tant de choses, obtenez une vérification en quelques secondes.",
    "cta.button": "Commencer l'analyse",

    // Footer
    "footer.desc": "Offrir la tranquillité d'esprit grâce à la technologie et à la transparence dans les relations.",
    "footer.company": "Entreprise",
    "footer.aboutUs": "À propos de nous",
    "footer.howItWorks": "Comment ça marche",
    "footer.privacyPolicy": "Politique de confidentialité",
    "footer.terms": "Conditions d'utilisation",
    "footer.support": "Support",
    "footer.contactUs": "Contactez-nous",
    "footer.faq": "FAQ",
    "footer.helpCenter": "Centre d'aide",
    "footer.reportIssues": "Signaler des problèmes",
    "footer.legal": "Légal",
    "footer.privacyPolicy2": "Politique de confidentialité",
    "footer.terms2": "Termes et conditions",
    "footer.cookiePolicy": "Politique de cookies",
    "footer.gdpr": "Conformité RGPD",
    "footer.rights": "Tous droits réservés.",
    "footer.moreQuestions": "Vous avez d'autres questions ?",
    "footer.visitFaq": "Visitez notre page FAQ complète.",

    // Scan Section
    "scan.scanning": "Analyse des applications de rencontres",
    "scan.searching": "Recherche de profils correspondant à",
    "scan.searchingWithAge": "Recherche de profils correspondant à",
    "scan.sites": "sites de rencontres analysés",
    "scan.profilesChecked": "Profils vérifiés :",
    "scan.cancel": "Annuler l'analyse",
    "scan.status.initializing": "Initialisation de l'analyse...",
    "scan.status.connecting": "Connexion aux serveurs d'applications de rencontres...",
    "scan.status.searching": "Recherche de profils correspondants...",
    "scan.status.analyzing": "Analyse des données de profil...",
    "scan.status.crossReferencing": "Recoupement avec les médias sociaux...",
    "scan.status.finalizing": "Finalisation des résultats...",
    "scan.status.complete": "Analyse terminée ! 3 profils correspondants trouvés.",
    "scan.photoAnalysis": "Analyse de photo en cours...",
    "scan.faceRecognition": "Exécution de la reconnaissance faciale...",
    "scan.enhancedSearch": "Recherche améliorée avec photo active",

    // Upload
    "upload.dragDrop": "Glissez et déposez une photo ici",
    "upload.orClickToUpload": "ou cliquez pour télécharger",
    "upload.selectPhoto": "Sélectionner une photo",
    "upload.maxFileSize": "Taille maximale du fichier : 5 Mo",
    "upload.invalidFileType": "Type de fichier invalide. Veuillez télécharger une image.",
    "upload.fileTooLarge": "Le fichier est trop volumineux. La taille maximale est de 5 Mo.",
    "upload.uploadedPhoto": "Photo téléchargée",
    "upload.removePhoto": "Supprimer la photo",
    "upload.photoUploaded": "Photo téléchargée avec succès",
    "upload.dropZoneLabel": "Zone de dépôt pour télécharger des photos",
    "upload.enhancedSearch": "Recherche améliorée avec photo",
    "upload.accuracy": "Précision de correspondance de 95%",
  },
}

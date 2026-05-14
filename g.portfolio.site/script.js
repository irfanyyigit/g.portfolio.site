// 🌙 Tema Değiştirici
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Önceki tema tercihini yükle
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-mode");
  themeToggle.textContent = "🌙";
} else {
  themeToggle.textContent = "☀️";
}

// Tema değiştirme işlemi
themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "🌙";
  } else {
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "☀️";
  }
}); 

let currentLang = "tr";

const translations = {
  tr: {
    nav: ["Hakkımda","Yetenekler","Deneyim","Projeler","İletişim"],
    aboutTitle: "Merhaba, Ben İrfan Yiğit",
    aboutDesc: "Python, JavaScript ve .NET ile ölçeklenebilir uygulamalar geliştiriyorum",
    showProjects: "Projelerimi Gör",
    contactBtn: "İletişime Geç",
    locationExp: "📍 Kayseri / Melikgazi     🧑‍💻 4+ yıl deneyim",
    propertiesBtn: "Yazılım • Web Geliştirme • Script",
    skillsTitle: "Yetenekler",
    projectsTitle: "Projeler",
    projectsFilters: ["Tümü","Yazılım","Python","Flutter","PHP"],
    contactFormTitle: "İletişim Formu",
    contactFormLabels: ["Ad Soyad","Telefon","E-posta","Mesaj"],
    submitBtn: "Gönder",
    footer: "@  2025 İrfan Yiğit",

      aboutSection: {
      title: "Hakkımda",
      desc: "Python’dan .NET’e, fikirleri dijital çözümlere dönüştürüyorum.",
      focusTitle: "Odak Alanlarım",
      focusButtons: ["Web Uygulamaları","Arduino test uyg.","Python","PHP projeleri"],
      educationTitle: "Eğitim",
      educationList: ["Kayseri Mesleki ve Teknik Anadolu Lisesi - Bilişim Teknolojileri & Yazılım Geliştirme"],
    },

    projectsSection: {
    title: "Projeler",
    filters: ["Tümü","Yazılım","Python","Flutter","PHP"],
    cards: [
        {
          title: "Game Development",
          desc: "Gdevelop ve Mblock kullanarak eğitici ve eğlenceli oyun projeleri geliştirdim. Her biri farklı bir hikaye ve deneyim sunuyor.",
          buttons: ["Design","Logic","Creativity"]
        },
        {
          title: "Mobile Applications",
          desc: "Android Studio ile basit ama işlevsel mobil uygulamalar oluşturdum. Kullanıcı deneyimini ön planda tutarak tasarlandılar.",
          buttons: ["UI/UX","Responsive"]
        },
        {
          title: "Database Systems",
          desc: "PHP ve SQL tabanlı küçük ölçekli veri tabanı projeleri geliştirdim. Verilerin güvenli ve hızlı yönetilmesine odaklandım.",
          buttons: ["Android","Performance","UserFlow"]
        },
        {
          title: "Digital Design Works",
          desc: "Photoshop, Canva, After Effects ve Figma ile çeşitli tasarım projeleri hazırladım. Estetik ve işlevi dengeleyen içerikler ürettim.",
          buttons: ["Canva","Photoshop","Premiere Pro"]
        },
        {
          title: "AI & Coding Experiments",
          desc: "Yapay zeka ve yazılım geliştirme alanında deneysel projeler yaparak sürekli öğrenmeye ve kendimi geliştirmeye odaklandım.",
          buttons: ["Python","Innovation","Machine"]
        },
        {
          title: "Web Design Projects",
          desc: "Modern, kullanıcı dostu ve tüm cihazlara uyumlu web siteleri tasarladım. Her piksel, ziyaretçiyi etkilemek için planlandı.",
          buttons: ["Responsive","Layout"]
        }
      ]
    }

  },
  en: {
    nav: ["About","Skills","Experience","Projects","Contact"],
    aboutTitle: "Hello, I'm Irfan Yiğit",
    aboutDesc: "I develop scalable applications using Python, JavaScript, and .NET",
    showProjects: "View My Projects",
    contactBtn: "Contact Me",
    locationExp: "📍 Kayseri / Melikgazi     🧑‍💻 4+ years experience",
    propertiesBtn: "Software • Web Development • Script",
    skillsTitle: "Skills",
    projectsTitle: "Projects",
    projectsFilters: ["All","Software","Python","Flutter","PHP"],
    contactFormTitle: "Contact Form",
    contactFormLabels: ["Name","Phone","E-mail","Message"],
    submitBtn: "Send",
    footer: "@  2025 Irfan Yiğit",

     aboutSection: {
      title: "About Me",
      desc: "I turn ideas into digital solutions, from Python to .NET.",
      focusTitle: "My Focus Areas",
      focusButtons: ["Web Applications","Arduino test app","Python","PHP projects"],
      educationTitle: "Education",
      educationList: ["Kayseri Vocational and Technical Anatolian High School - IT & Software Development"],
    },

    projectsSection: {
      title: "Projects",
      filters: ["All","Software","Python","Flutter","PHP"],
      cards: [
        {
          title: "Game Development",
          desc: "I developed educational and fun game projects using Gdevelop and Mblock. Each offers a unique story and experience.",
          buttons: ["Design","Logic","Creativity"]
        },
        {
          title: "Mobile Applications",
          desc: "I created simple yet functional mobile applications using Android Studio. They were designed with user experience in mind.",
          buttons: ["UI/UX","Responsive"]
        },
        {
          title: "Database Systems",
          desc: "I developed small-scale PHP and SQL database projects, focusing on secure and fast data management.",
          buttons: ["Android","Performance","UserFlow"]
        },
        {
          title: "Digital Design Works",
          desc: "I prepared various design projects with Photoshop, Canva, After Effects, and Figma, balancing aesthetics and functionality.",
          buttons: ["Canva","Photoshop","Premiere Pro"]
        },
        {
          title: "AI & Coding Experiments",
          desc: "I conducted experimental projects in AI and software development, focusing on continuous learning and self-improvement.",
          buttons: ["Python","Innovation","Machine"]
        },
        {
          title: "Web Design Projects",
          desc: "I designed modern, user-friendly, and fully responsive websites. Every pixel was planned to impress visitors.",
          buttons: ["Responsive","Layout"]
        }
    ]
    }


  }
};

const langBtn = document.querySelector(".lang-btn");

langBtn.addEventListener("click", () => {
  currentLang = currentLang === "tr" ? "en" : "tr";


  document.querySelectorAll(".header-container ul li a").forEach((a,i) => {
    a.textContent = translations[currentLang].nav[i];
  });

  document.querySelector(".short-about h1").innerHTML = translations[currentLang].aboutTitle;
  document.querySelector(".short-about p span").textContent = translations[currentLang].aboutDesc;
  document.querySelector(".show-projects a").textContent = translations[currentLang].showProjects;
  document.querySelector(".contact-button a").textContent = translations[currentLang].contactBtn;
  document.querySelector(".short-about p:last-of-type").textContent = translations[currentLang].locationExp;

  document.querySelector(".proporties button").textContent = translations[currentLang].propertiesBtn;

  document.querySelector("#skills h1").textContent = translations[currentLang].skillsTitle;

  document.querySelector(".contact-form h3").textContent = translations[currentLang].contactFormTitle;
  document.querySelectorAll(".contact-form label").forEach((label,i) => {
    label.textContent = translations[currentLang].contactFormLabels[i];
  });
  document.querySelector(".contact-form button[type='submit']").textContent = translations[currentLang].submitBtn;

  document.querySelector(".footer p").textContent = translations[currentLang].footer;

  langBtn.textContent = currentLang === "tr" ? "ENG" : "TR";

  document.querySelector(".about h2").textContent = translations[currentLang].aboutSection.title;
  document.querySelector(".about div p").textContent = translations[currentLang].aboutSection.desc;
  document.querySelector(".my-focus-areas h3").textContent = translations[currentLang].aboutSection.focusTitle;
  document.querySelectorAll(".my-focus-areas button").forEach((btn,i) => {
    btn.textContent = translations[currentLang].aboutSection.focusButtons[i];
  });
  document.querySelector(".education-div h3").textContent = translations[currentLang].aboutSection.educationTitle;
  document.querySelectorAll(".education-div ul li").forEach((li,i) => {
    li.textContent = translations[currentLang].aboutSection.educationList[i];
  });

  document.querySelector(".projects h1").textContent = translations[currentLang].projectsSection.title;

  document.querySelectorAll(".projects-headline button").forEach((btn,i) => {
    btn.textContent = translations[currentLang].projectsSection.filters[i];
  });

  document.querySelectorAll(".cards .card1").forEach((cardEl,i) => {
    const cardData = translations[currentLang].projectsSection.cards[i];
    if(!cardData) return;
    cardEl.querySelector("h3").textContent = cardData.title;
    cardEl.querySelector("p").textContent = cardData.desc;
    cardEl.querySelectorAll("button").forEach((btn,j) => {
      btn.textContent = cardData.buttons[j];
    });
  });
});







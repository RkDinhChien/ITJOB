// User data structure (simulated database)
let users = [];
let currentUser = null;

// Classes
class User {
    constructor(username, email, nativeLanguage, learningLanguage, level) {
        this.username = username;
        this.email = email;
        this.nativeLanguage = nativeLanguage;
        this.learningLanguage = learningLanguage;
        this.level = level;
        this.friends = [];
        this.vocabularyLists = [];
        this.progress = {
            vocabulary: 0,
            grammar: 0,
            pronunciation: 0
        };
    }
}

class VocabularyList {
    constructor(language, category) {
        this.language = language;
        this.category = category;
        this.words = [];
        this.created = new Date();
    }

    addWord(word, translation, example) {
        this.words.push({
            word,
            translation,
            example,
            learned: false,
            reviewCount: 0
        });
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Language selection handling
const languageSelects = document.querySelectorAll('.lang-select');
languageSelects.forEach(select => {
    select.addEventListener('change', function() {
        // Store selected languages in session
        sessionStorage.setItem('learning', languageSelects[0].value);
        sessionStorage.setItem('speaking', languageSelects[1].value);
    });
});

// Sticky navigation
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = '#ffffff';
        nav.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    } else {
        nav.style.background = '#ffffff';
        nav.style.boxShadow = 'none';
    }
});

// Active link highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Search functionality
const searchBtn = document.querySelector('.search-btn');
searchBtn.addEventListener('click', () => {
    const searchInput = document.querySelector('.search-box input').value;
    const category = document.querySelector('.search-box select').value;
    
    // Add your search logic here
    console.log('Searching for:', searchInput, 'in category:', category);
    // You can implement the actual search functionality as needed
});

// Simple form validation for login/signup (to be implemented)
const loginBtn = document.querySelector('.login-btn');
const signupBtn = document.querySelector('.signup-btn');

loginBtn.addEventListener('click', () => {
    // Add your login logic here
    console.log('Login clicked');
});

signupBtn.addEventListener('click', () => {
    // Add your signup logic here
    console.log('Signup clicked');
});
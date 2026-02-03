const { createApp } = Vue;

createApp({
    data() {
        return {
            // State untuk mobile menu dan sticky header
            mobileMenuOpen: false,
            isSticky: false,
            activeSection: 'home',
            hoveredProject: null,
            isSubmitting: false,
            
            // Menu items
            menuItems: [
                { id: 1, text: 'Home', link: '#home', section: 'home' },
                { id: 2, text: 'About', link: '#about', section: 'about' },
                { id: 3, text: 'Services', link: '#services', section: 'services' },
                { id: 4, text: 'Portfolio', link: '#portfolio', section: 'portfolio' },
                { id: 5, text: 'Partners', link: '#partners', section: 'partners' },
                { id: 6, text: 'Contact', link: '#contact', section: 'contact' }
            ],
            
            // Services data - DIUBAH: hapus cloud solutions
            services: [
                { 
                    id: 1, 
                    title: 'Web Development', 
                    icon: 'fas fa-code', 
                    description: 'Build modern, responsive websites and web applications using cutting-edge technologies. We create scalable solutions tailored to your business needs.' 
                },
                { 
                    id: 2, 
                    title: 'AI & Machine Learning', 
                    icon: 'fas fa-robot', 
                    description: 'Develop intelligent systems that automate processes, analyze data, and provide actionable insights to drive business decisions.' 
                },
                { 
                    id: 3, 
                    title: 'UI/UX Design', 
                    icon: 'fas fa-paint-brush', 
                    description: 'Create intuitive and engaging user interfaces that enhance user experience and drive customer satisfaction.' 
                },
                { 
                    id: 4, 
                    title: 'Mobile Development', 
                    icon: 'fas fa-mobile-alt', 
                    description: 'Develop cross-platform and native mobile applications for iOS and Android with focus on performance and user experience.' 
                }
            ],
            
            // Portfolio data - DIUBAH: tambah filter desktop
            portfolioFilters: [
                { id: 'all', name: 'All Projects' },
                { id: 'web', name: 'Web Development' },
                { id: 'mobile', name: 'Mobile Apps' },
                { id: 'ai', name: 'AI Systems' },
                { id: 'desktop', name: 'Desktop Apps' }
            ],
            activeFilter: 'all',
            projects: [
                { 
                    id: 1, 
                    name: 'KabarE Web', 
                    description: 'A comprehensive news platform for students and community to access campus-related information. Features include news management, forums, comments, voting, and personalized content recommendations with content moderation.',
                    category: 'Web Development',
                    technologies: ['PHP', 'Tailwind CSS', 'MySQL', 'JavaScript'],
                    color: '#3b82f6'
                },
                { 
                    id: 2, 
                    name: 'KabarE Mobile', 
                    description: 'Mobile news portal delivering latest updates, articles, and exclusive campus news through a user-friendly mobile interface.',
                    category: 'Mobile Apps',
                    technologies: ['Kotlin', 'Android', 'Firebase'],
                    color: '#8b5cf6'
                },
                { 
                    id: 3, 
                    name: 'MediaExplant Web', 
                    description: 'A digital media platform for student journalism and opinion pieces, providing a structured way to publish and manage journalistic content.',
                    category: 'Web Development',
                    technologies: ['PHP', 'Laravel', 'MySQL', 'Tailwind CSS'],
                    color: '#10b981'
                },
                { 
                    id: 4, 
                    name: 'MediaExplant Mobile', 
                    description: 'Mobile application allowing users to access news and exclusive content from the MediaExplant platform on mobile devices.',
                    category: 'Mobile Apps',
                    technologies: ['Flutter', 'Dart', 'Firebase'],
                    color: '#ef4444'
                },
                { 
                    id: 5, 
                    name: 'Dragon Fruit Grading', 
                    description: 'Computer vision-based automated system for grading dragon fruit quality based on size, shape, and color using machine learning algorithms.',
                    category: 'AI Systems',
                    technologies: ['Python', 'OpenCV', 'TensorFlow', 'Flask'],
                    color: '#f59e0b'
                },
                { 
                    id: 6, 
                    name: 'D-Kost', 
                    description: 'Desktop application for boarding house management built with Java, featuring comprehensive data management with OOP principles and GUI implementation.',
                    category: 'Desktop Apps',
                    technologies: ['Java', 'JavaFX', 'MySQL'],
                    color: '#6366f1'
                },
                { 
                    id: 7, 
                    name: 'Adek Web', 
                    description: 'Web application built with Laravel framework providing dietary management system with structured data organization and modern web interface.',
                    category: 'Web Development',
                    technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
                    color: '#14b8a6'
                },
                { 
                    id: 8, 
                    name: 'QR Device Manager', 
                    description: 'IoT device management system with mobile interface using React Native, Golang backend, and PostgreSQL database for efficient device tracking.',
                    category: 'Mobile Apps',
                    technologies: ['React Native', 'Golang', 'PostgreSQL', 'REST API'],
                    color: '#8b5cf6'
                },
                { 
                    id: 9, 
                    name: 'Visimala', 
                    description: 'Comprehensive laundry management system desktop application with inventory, customer, and transaction management features.',
                    category: 'Desktop Apps',
                    technologies: ['Java', 'JavaFX', 'MySQL'],
                    color: '#7c3aed'
                },
                { 
                    id: 10, 
                    name: 'AolehCita', 
                    description: 'Point-of-sale system for donut shop with inventory management, sales tracking, and reporting capabilities.',
                    category: 'Desktop Apps',
                    technologies: ['Java', 'JavaFX', 'MySQL'],
                    color: '#db2777'
                }
            ],
            
            // Partners data - DIUBAH: hanya UKPM Explant
            partners: [
                { id: 1, name: 'UKPM Explant' },
                { id: 2, name: 'Vita Laundry' },
                { id: 3, name: 'PT Bahari Samudra' }
            ],
            
            // Contact methods - DIUBAH: update kontak lebih profesional
            contactMethods: [
                { 
                    id: 1, 
                    name: 'WhatsApp', 
                    icon: 'fab fa-whatsapp', 
                    value: '+62 853 3674 4444', 
                    link: 'https://wa.me/6285336744444' 
                },
                { 
                    id: 2, 
                    name: 'Email', 
                    icon: 'fas fa-envelope', 
                    value: 'devmossteam@gmail.com', 
                    link: 'mailto:devmossteam@gmail.com' 
                },
                { 
                    id: 3, 
                    name: 'Instagram', 
                    icon: 'fab fa-instagram', 
                    value: '@devmoss.official', 
                    link: 'https://instagram.com/devmoss.official' 
                },
                { 
                    id: 4, 
                    name: 'LinkedIn', 
                    icon: 'fab fa-linkedin', 
                    value: 'DevMoss Digital', 
                    link: 'https://linkedin.com/company/devmoss' 
                }
            ],
            
            // Social links for footer - DIUBAH: lebih profesional
            socialLinks: [
                { id: 1, icon: 'fab fa-instagram', link: 'https://instagram.com/devmoss.official' },
                { id: 2, icon: 'fab fa-linkedin-in', link: 'https://linkedin.com/company/devmoss' },
                { id: 3, icon: 'fab fa-github', link: 'https://github.com/devmossteam' },
                { id: 4, icon: 'fab fa-twitter', link: 'https://twitter.com/devmoss' }
            ],
            
            // Contact form data
            contactForm: {
                name: '',
                email: '',
                subject: '',
                message: ''
            },
            
            // Current year for footer
            currentYear: new Date().getFullYear()
        }
    },
    
    computed: {
        // Filter portfolio items based on active filter
        filteredProjects() {
            if (this.activeFilter === 'all') {
                return this.projects;
            }
            return this.projects.filter(project => {
                // Normalize category for comparison
                const category = project.category.toLowerCase().replace(' apps', '').replace(' application', '');
                const filter = this.activeFilter.toLowerCase().replace(' apps', '').replace(' application', '');
                return category.includes(filter) || project.category.toLowerCase().includes(this.activeFilter.toLowerCase());
            });
        }
    },
    
    methods: {
        // Toggle mobile menu
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen;
        },
        
        // Set active filter for portfolio
        setActiveFilter(filter) {
            this.activeFilter = filter.id;
        },
        
        // Scroll to section smoothly
        scrollToSection(sectionId) {
            this.mobileMenuOpen = false;
            this.activeSection = sectionId;
            
            const element = document.getElementById(sectionId);
            if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        },
        
        // Handle contact form submission - DIUBAH: lebih profesional
        submitContactForm() {
            // Validate form
            if (!this.contactForm.name || !this.contactForm.email || !this.contactForm.message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            if (!this.validateEmail(this.contactForm.email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Show submitting state
            this.isSubmitting = true;
            
            // Simulate API call
            setTimeout(() => {
                // In real app, send to backend
                console.log('Contact form submitted:', this.contactForm);
                
                // Success message
                alert(`Thank you ${this.contactForm.name}! We've received your message and will respond within 24 hours.`);
                
                // Reset form
                this.contactForm = {
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                };
                
                this.isSubmitting = false;
            }, 1500);
        },
        
        // Email validation
        validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        },
        
        // Handle scroll events for sticky header and active section
        handleScroll() {
            // Sticky header
            this.isSticky = window.scrollY > 50;
            
            // Active section based on scroll position
            const sections = ['home', 'about', 'services', 'portfolio', 'partners', 'contact'];
            const scrollPosition = window.scrollY + 100;
            
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && scrollPosition >= section.offsetTop) {
                    this.activeSection = sections[i];
                    break;
                }
            }
        }
    },
    
    mounted() {
        // Add scroll event listener
        window.addEventListener('scroll', this.handleScroll);
        
        // Initial check for active section
        this.handleScroll();
        
        console.log('DevMoss Company Profile loaded successfully!');
    },
    
    beforeUnmount() {
        // Remove scroll event listener
        window.removeEventListener('scroll', this.handleScroll);
    }
}).mount('#app');
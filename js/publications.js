// Publication Data
        const publications = [
            {
                id: 1,
                title: "Adaptive Sim-to-Real Transfer for Robotic Manipulation",
                authors: "Alex Morgan, Jamie Lee, Kai Chen, Sarah Johnson, Robert Taylor",
                venue: "Conference on Neural Information Processing Systems (NeurIPS), 2023",
                links: [
                    { type: "pdf", url: "#" },
                    { type: "code", url: "#" },
                    { type: "project", url: "#" },
                    { type: "bibtex", url: "#" }
                ],
                tags: ["conference", "highlighted"],
                year: 2023
            },
            {
                id: 2,
                title: "Meta-Learning for Few-Shot Visual Navigation",
                authors: "Alex Morgan, David Kim, Elena Rodriguez",
                venue: "International Conference on Machine Learning (ICML), 2023",
                links: [
                    { type: "pdf", url: "#" },
                    { type: "code", url: "#" },
                    { type: "bibtex", url: "#" }
                ],
                tags: ["conference"],
                year: 2023
            },
            {
                id: 3,
                title: "Robust Reinforcement Learning with Latent State Representations",
                authors: "Alex Morgan, Michael Zhang, Lisa Wang, Thomas Brown",
                venue: "IEEE International Conference on Robotics and Automation (ICRA), 2023",
                links: [
                    { type: "pdf", url: "#" },
                    { type: "video", url: "#" },
                    { type: "bibtex", url: "#" }
                ],
                tags: ["conference", "highlighted"],
                year: 2023
            },
            {
                id: 4,
                title: "Generalizable Policy Learning from Video Demonstrations",
                authors: "Alex Morgan, Sophia Chen, James Wilson",
                venue: "arXiv preprint, 2023",
                links: [
                    { type: "pdf", url: "#" },
                    { type: "code", url: "#" },
                    { type: "blog", url: "#" }
                ],
                tags: ["preprint"],
                year: 2023
            },
            {
                id: 5,
                title: "Learning Hierarchical Skills for Long-Horizon Robot Tasks",
                authors: "Alex Morgan, Daniel Park, Olivia Martinez, William Davis",
                venue: "Robotics: Science and Systems (RSS), 2022",
                links: [
                    { type: "pdf", url: "#" },
                    { type: "code", url: "#" },
                    { type: "project", url: "#" }
                ],
                tags: ["conference"],
                year: 2022
            },
            {
                id: 6,
                title: "Self-Supervised 3D Scene Understanding for Autonomous Driving",
                authors: "Alex Morgan, Benjamin Clark, Grace Lee, Henry Wright",
                venue: "Conference on Computer Vision and Pattern Recognition (CVPR), 2022",
                links: [
                    { type: "pdf", url: "#" },
                    { type: "dataset", url: "#" },
                    { type: "bibtex", url: "#" }
                ],
                tags: ["conference", "highlighted"],
                year: 2022
            }
        ];
        
        // Render Publications
        const publicationList = document.getElementById('publicationList');
        
        function renderPublications(filter = 'all') {
            publicationList.innerHTML = '';
            
            let filteredPubs = publications;
            
            if (filter !== 'all') {
                filteredPubs = publications.filter(pub => pub.tags.includes(filter));
            }
            
            // Sort by year (newest first)
            filteredPubs.sort((a, b) => b.year - a.year);
            
            filteredPubs.forEach(pub => {
                const pubItem = document.createElement('div');
                pubItem.className = `publication-item ${pub.tags.includes('highlighted') ? 'highlighted' : ''}`;
                
                const linksHTML = pub.links.map(link => {
                    let icon, text;
                    
                    switch(link.type) {
                        case 'pdf':
                            icon = 'fa-file-pdf';
                            text = 'PDF';
                            break;
                        case 'code':
                            icon = 'fa-code';
                            text = 'Code';
                            break;
                        case 'project':
                            icon = 'fa-globe';
                            text = 'Project';
                            break;
                        case 'video':
                            icon = 'fa-video';
                            text = 'Video';
                            break;
                        case 'blog':
                            icon = 'fa-blog';
                            text = 'Blog';
                            break;
                        case 'dataset':
                            icon = 'fa-database';
                            text = 'Dataset';
                            break;
                        case 'bibtex':
                            icon = 'fa-quote-right';
                            text = 'BibTeX';
                            break;
                        default:
                            icon = 'fa-external-link-alt';
                            text = 'Link';
                    }
                    
                    return `<a href="${link.url}" class="pub-link"><i class="fas ${icon}"></i> ${text}</a>`;
                }).join('');
                
                pubItem.innerHTML = `
                    <div class="publication-title">${pub.title}</div>
                    <div class="publication-authors">${pub.authors}</div>
                    <div class="publication-venue">${pub.venue}</div>
                    <div class="publication-links">
                        ${linksHTML}
                    </div>
                `;
                
                publicationList.appendChild(pubItem);
            });
        }
        
        // Filter functionality
        const filterButtons = document.querySelectorAll('.filter-btn');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                const filter = button.getAttribute('data-filter');
                renderPublications(filter);
            });
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Initialize
        renderPublications();
        
        // Add fade-in animation to sections on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);
        
        // Observe all sections
        document.querySelectorAll('.section').forEach(section => {
            observer.observe(section);
        });
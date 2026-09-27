
        // Products Database
        const products = [
            {
                id: 1,
                name: "Wrapped roses",
                category: "bundles",
                price: 128.00,
                rating: 5.0,
                tag: "Romantic",
                image: "img/arrangcho.jpg",
                description: "12 long-stemmed Ecuadorian velvet crimson roses beautifully arranged in a glass vase, paired with our signature 14-inch Honey Plush Bear."
            },
            {
                id: 2,
                name: "Ecuadorian Crimson Roses",
                category: "flowers",
                price: 78.00,
                rating: 4.9,
                tag: "Romantic",
                image: "img/wrapped.jpg",
                description: "A timeless bouquet of 12 hand-selected deep red roses accented with fresh eucalyptus leaves."
            },
            {
                id: 3,
                name: "Classic Honey Plush Bear (14\")",
                category: "bears",
                price: 45.00,
                rating: 4.8,
                tag: "Get Well",
                image: "img/yellow.jpg",
                description: "Ultra-soft velvet fur bear with a classic satin bow tie. Filled with hypoallergenic plush fiber."
            },
            {
                id: 4,
                name: "Pastel Peony & Hydrangea Dream",
                category: "flowers",
                price: 92.00,
                rating: 5.0,
                tag: "Birthday",
                image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?fit=crop&w=800&q=80",
                description: "Soft pink peonies, sky blue hydrangeas, and white spray roses wrapped in silk paper."
            },
            {
                id: 5,
                name: "Giant Cream Velvet Bear (24\")",
                category: "bears",
                price: 85.00,
                rating: 4.9,
                tag: "Romantic",
                image: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?fit=crop&w=800&q=80",
                description: "An extra-large, ultra-huggable cream-colored teddy bear crafted for grand romantic gestures."
            },
            {
                id: 6,
                name: "Sunshine Lily & Chocolate Set",
                category: "bundles",
                price: 110.00,
                rating: 4.7,
                tag: "Congratulations",
                image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?fit=crop&w=800&q=80",
                description: "A bright yellow Asiatic lily bouquet paired with artisan Swiss dark chocolates and a small white plush bear."
            },
            {
                id: 7,
                name: "Pure White Gardenia & Lily Bouquet",
                category: "flowers",
                price: 84.00,
                rating: 4.8,
                tag: "Get Well",
                image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?fit=crop&w=800&q=80",
                description: "Elegant white lilies and fresh gardenias embodying purity, peace, and heartfelt sentiment."
            },
            {
                id: 8,
                name: "Vintage Bowtie Espresso Bear",
                category: "bears",
                price: 48.00,
                rating: 4.9,
                tag: "Birthday",
                image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?fit=crop&w=800&q=80",
                description: "Rich espresso brown teddy bear wearing an antique woven bowtie."
            }
        ];

        const decorations = [
            {
                id: 1,
                name: "Wrapped roses",
                category: "bundles",
                price: 128.00,
                rating: 5.0,
                tag: "Romantic",
                image: "img/arrangcho.jpg",
                description: "12 long-stemmed Ecuadorian velvet crimson roses beautifully arranged in a glass vase, paired with our signature 14-inch Honey Plush Bear."
            },
            {
                id: 2,
                name: "Ecuadorian Crimson Roses",
                category: "flowers",
                price: 78.00,
                rating: 4.9,
                tag: "Romantic",
                image: "img/wrapped.jpg",
                description: "A timeless bouquet of 12 hand-selected deep red roses accented with fresh eucalyptus leaves."
            },
            {
                id: 3,
                name: "Classic Honey Plush Bear (14\")",
                category: "bears",
                price: 45.00,
                rating: 4.8,
                tag: "Get Well",
                image: "img/yellow.jpg",
                description: "Ultra-soft velvet fur bear with a classic satin bow tie. Filled with hypoallergenic plush fiber."
            },
            {
                id: 4,
                name: "Pastel Peony & Hydrangea Dream",
                category: "flowers",
                price: 92.00,
                rating: 5.0,
                tag: "Birthday",
                image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?fit=crop&w=800&q=80",
                description: "Soft pink peonies, sky blue hydrangeas, and white spray roses wrapped in silk paper."
            },
            {
                id: 5,
                name: "Giant Cream Velvet Bear (24\")",
                category: "bears",
                price: 85.00,
                rating: 4.9,
                tag: "Romantic",
                image: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?fit=crop&w=800&q=80",
                description: "An extra-large, ultra-huggable cream-colored teddy bear crafted for grand romantic gestures."
            },
            {
                id: 6,
                name: "Sunshine Lily & Chocolate Set",
                category: "bundles",
                price: 110.00,
                rating: 4.7,
                tag: "Congratulations",
                image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?fit=crop&w=800&q=80",
                description: "A bright yellow Asiatic lily bouquet paired with artisan Swiss dark chocolates and a small white plush bear."
            },
            {
                id: 7,
                name: "Pure White Gardenia & Lily Bouquet",
                category: "flowers",
                price: 84.00,
                rating: 4.8,
                tag: "Get Well",
                image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?fit=crop&w=800&q=80",
                description: "Elegant white lilies and fresh gardenias embodying purity, peace, and heartfelt sentiment."
            },
            {
                id: 8,
                name: "Vintage Bowtie Espresso Bear",
                category: "bears",
                price: 48.00,
                rating: 4.9,
                tag: "Birthday",
                image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?fit=crop&w=800&q=80",
                description: "Rich espresso brown teddy bear wearing an antique woven bowtie."
            }
        ];


        // Custom Gift Builder Options
        const builderOptions = {
            flowers: [
                { id: 'b_f1', name: 'Crimson Rose Stem Bouquet', price: 65, img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?fit=crop&w=300&q=80' },
                { id: 'b_f2', name: 'Pastel Peony Dream', price: 75, img: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?fit=crop&w=300&q=80' },
                { id: 'b_f3', name: 'White Gardenia & Lily', price: 70, img: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?fit=crop&w=300&q=80' }
            ],
            bears: [
                { id: 'b_b1', name: '14" Honey Plush Bear', price: 40, img: 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?fit=crop&w=300&q=80' },
                { id: 'b_b2', name: '24" Giant Cream Bear', price: 75, img: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?fit=crop&w=300&q=80' },
                { id: 'b_b3', name: '14" Vintage Espresso Bear', price: 42, img: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?fit=crop&w=300&q=80' }
            ],
            extras: [
                { id: 'b_e1', name: 'Swiss Dark Truffles Box', price: 18, img: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?fit=crop&w=300&q=80' },
                { id: 'b_e2', name: 'Satin Rose Ribbon Wrap', price: 8, img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?fit=crop&w=300&q=80' },
                { id: 'b_e3', name: 'Handwritten Calligraphy Card', price: 6, img: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?fit=crop&w=300&q=80' }
            ]
        };

        // Cart State
        let cart = [];
        let customBoxSelection = { flower: null, bear: null, extra: null };

        function renderProducts(itemsToRender) {
            const grid = document.getElementById('products-grid');
            grid.innerHTML = itemsToRender.map(p => `
                <div class="glass-card rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300 border border-bloom-500/10 flex flex-col justify-between">
                    <div>
                        <div class="relative h-64 overflow-hidden bg-bloom-100">
                            <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                 onerror="this.src='https://placehold.co/600x600/f8f2eb/9e3b52?text=Bloom+%26+Bear'">
                            <span class="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-bloom-600 font-bold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                                ${p.tag}
                            </span>
                            <button onclick="openQuickView(${p.id})" class="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white/90 text-gray-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow hover:bg-bloom-500 hover:text-white">
                                <i class="fa-solid fa-eye text-xs"></i>
                            </button>
                        </div>
                        <div class="p-5">
                            <div class="flex items-center text-bloom-gold text-xs gap-1 mb-1">
                                <i class="fa-solid fa-star"></i>
                                <span class="text-gray-700 font-semibold ml-1">${p.rating}</span>
                            </div>
                            <h3 class="font-serif text-xl font-bold text-gray-900 group-hover:text-bloom-600 transition-colors">${p.name}</h3>
                            <p class="text-gray-500 text-xs mt-1 line-clamp-2 leading-relaxed">${p.description}</p>
                        </div>
                    </div>
                    <div class="px-5 pb-5 pt-2 flex items-center justify-between border-t border-gray-100/60 mt-auto">
                        <span class="font-serif text-2xl font-bold text-bloom-600">$${p.price.toFixed(2)}</span>
                        <button onclick="quickAddToCart(${p.id})" class="px-4 py-2 rounded-xl bg-bloom-500/10 text-bloom-600 font-semibold text-xs hover:bg-bloom-500 hover:text-white transition-all">
                            + Add to Cart
                        </button>
                    </div>
                </div>
            `).join('');
        }

        // Filtering Logic
        function setupFilters() {
            document.querySelectorAll('.cat-filter').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    document.querySelectorAll('.cat-filter').forEach(b => {
                        b.classList.remove('bg-bloom-500', 'text-white', 'shadow-md', 'shadow-bloom-500/20');
                        b.classList.add('bg-white', 'text-gray-600');
                    });
                    e.target.classList.add('bg-bloom-500', 'text-white', 'shadow-md', 'shadow-bloom-500/20');
                    e.target.classList.remove('bg-white', 'text-gray-600');

                    const cat = e.target.dataset.category;
                    if (cat === 'all') {
                        renderProducts(products);
                    } else {
                        renderProducts(products.filter(p => p.category === cat));
                    }
                });
            });

            // Search filter
            document.getElementById('search-input').addEventListener('input', (e) => {
                const term = e.target.value.toLowerCase();
                renderProducts(products.filter(p => p.name.toLowerCase().includes(term) || p.description.toLowerCase().includes(term)));
            });
        }

        function filterByTag(tag) {
            window.location.href = '#shop';
            renderProducts(products.filter(p => p.tag === tag));
        }

        function initBuilder() {
            const flowerGrid = document.getElementById('builder-flowers');
            const bearGrid = document.getElementById('builder-bears');
            const extraGrid = document.getElementById('builder-extras');

            if (flowerGrid) {
                flowerGrid.innerHTML = builderOptions.flowers.map(f => `
                    <div onclick="selectBuilderOption('flower', '${f.id}')" id="opt-${f.id}" class="builder-card cursor-pointer border border-gray-200 rounded-xl p-3 text-center hover:border-bloom-500 transition-all bg-white">
                        <img src="${f.img}" class="w-full h-20 object-cover rounded-lg mb-2">
                        <h4 class="text-xs font-bold text-gray-800">${f.name}</h4>
                        <span class="text-xs text-bloom-600 font-semibold">$${f.price}</span>
                    </div>
                `).join('');
            }
           
            if (flowerGrid) {
                bearGrid.innerHTML = builderOptions.bears.map(b => `
                    <div onclick="selectBuilderOption('bear', '${b.id}')" id="opt-${b.id}" class="builder-card cursor-pointer border border-gray-200 rounded-xl p-3 text-center hover:border-bloom-500 transition-all bg-white">
                        <img src="${b.img}" class="w-full h-20 object-cover rounded-lg mb-2">
                        <h4 class="text-xs font-bold text-gray-800">${b.name}</h4>
                        <span class="text-xs text-bloom-600 font-semibold">$${b.price}</span>
                    </div>
                `).join('');
            }

            if(extraGrid){
                extraGrid.innerHTML = builderOptions.extras.map(e => `
                    <div onclick="selectBuilderOption('extra', '${e.id}')" id="opt-${e.id}" class="builder-card cursor-pointer border border-gray-200 rounded-xl p-3 text-center hover:border-bloom-500 transition-all bg-white">
                        <img src="${e.img}" class="w-full h-20 object-cover rounded-lg mb-2">
                        <h4 class="text-xs font-bold text-gray-800">${e.name}</h4>
                        <span class="text-xs text-bloom-600 font-semibold">$${e.price}</span>
                    </div>
                `).join('');
                }
            }


        function selectBuilderOption(type, id) {
            const item = builderOptions[type + 's'].find(x => x.id === id);
            
            // Toggle selection
            if (customBoxSelection[type] && customBoxSelection[type].id === id) {
                customBoxSelection[type] = null;
                document.getElementById(`opt-${id}`).classList.remove('border-bloom-500', 'ring-2', 'ring-bloom-500/30', 'bg-bloom-50');
            } else {
                // Deselect previous in group
                builderOptions[type + 's'].forEach(x => {
                    const el = document.getElementById(`opt-${x.id}`);
                    if (el) el.classList.remove('border-bloom-500', 'ring-2', 'ring-bloom-500/30', 'bg-bloom-50');
                });
                
                customBoxSelection[type] = item;
                document.getElementById(`opt-${id}`).classList.add('border-bloom-500', 'ring-2', 'ring-bloom-500/30', 'bg-bloom-50');
            }

            updateBuilderSummary();
        }

        function updateBuilderSummary() {
            const summaryList = document.getElementById('builder-summary-list');
            const totalPriceEl = document.getElementById('builder-total-price');
            const addBtn = document.getElementById('add-custom-bundle-btn');

            let total = 0;
            let itemsHtml = '';

            if (customBoxSelection.flower) {
                total += customBoxSelection.flower.price;
                itemsHtml += `<div class="flex justify-between items-center py-1.5 border-b border-gray-100"><span class="text-gray-700">🌸 ${customBoxSelection.flower.name}</span><span class="font-semibold">$${customBoxSelection.flower.price}</span></div>`;
            }
            if (customBoxSelection.bear) {
                total += customBoxSelection.bear.price;
                itemsHtml += `<div class="flex justify-between items-center py-1.5 border-b border-gray-100"><span class="text-gray-700">🧸 ${customBoxSelection.bear.name}</span><span class="font-semibold">$${customBoxSelection.bear.price}</span></div>`;
            }
            if (customBoxSelection.extra) {
                total += customBoxSelection.extra.price;
                itemsHtml += `<div class="flex justify-between items-center py-1.5 border-b border-gray-100"><span class="text-gray-700">🎁 ${customBoxSelection.extra.name}</span><span class="font-semibold">$${customBoxSelection.extra.price}</span></div>`;
            }

            if (total === 0) {
                summaryList.innerHTML = `<p class="text-gray-400 italic text-center py-8">Select elements to build your box...</p>`;
                addBtn.disabled = true;
                addBtn.className = "w-full py-4 rounded-xl bg-gray-300 text-gray-500 font-medium transition-all flex items-center justify-center gap-2 cursor-not-allowed";
            } else {
                summaryList.innerHTML = itemsHtml;
                addBtn.disabled = false;
                addBtn.className = "w-full py-4 rounded-xl bg-bloom-500 text-white font-medium hover:bg-bloom-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-bloom-500/25";
            }

            totalPriceEl.textContent = `$${total.toFixed(2)}`;
        }
        
        document.getElementById('add-custom-bundle-btn')?.addEventListener('click', () => {
            
        
            const total = (customBoxSelection.flower?.price || 0) + (customBoxSelection.bear?.price || 0) + (customBoxSelection.extra?.price || 0);
            
            const customItem = {
                id: 'custom_' + Date.now(),
                name: "Custom Curated Gift Box",
                price: total,
                image: customBoxSelection.flower?.img || customBoxSelection.bear?.img,
                description: `Includes: ${customBoxSelection.flower ? customBoxSelection.flower.name : ''} ${customBoxSelection.bear ? '+ ' + customBoxSelection.bear.name : ''}`
            };

            addToCart(customItem);
            openCartDrawer();
        });

        function quickAddToCart(productId) {
            const p = products.find(x => x.id === productId);
            if (p) {
                addToCart(p);
                openCartDrawer();
            }
        }

        function addToCart(item) {
            const existing = cart.find(x => x.id === item.id);
            if (existing) {
                existing.qty += 1;
            } else {
                cart.push({ ...item, qty: 1 });
            }
            updateCartUI();
        }

        function updateCartQty(id, delta) {
            const item = cart.find(x => x.id === id);
            if (item) {
                item.qty += delta;
                if (item.qty <= 0) {
                    cart = cart.filter(x => x.id !== id);
                }
            }
            updateCartUI();
        }

        function updateCartUI() {
            const cartCount = document.getElementById('cart-count');
            const container = document.getElementById('cart-items-container');
            const subtotalEl = document.getElementById('cart-subtotal');
            const totalEl = document.getElementById('cart-total');
            const shippingProgressText = document.getElementById('shipping-progress-text');
            const shippingBar = document.getElementById('shipping-bar');

            const totalItems = cart.reduce((acc, curr) => acc + curr.qty, 0);
            cartCount.textContent = totalItems;

            const subtotal = cart.reduce((acc, curr) => acc + (curr.price * curr.qty), 0);
            const shipping = subtotal >= 100 || subtotal === 0 ? 0 : 12.00;
            const total = subtotal + shipping;

            // Free shipping threshold logic ($100)
            if (subtotal >= 100) {
                shippingProgressText.textContent = "🎉 You unlocked FREE Same-Day Shipping!";
                shippingBar.style.width = "100%";
            } else {
                const diff = 100 - subtotal;
                shippingProgressText.textContent = `Add $${diff.toFixed(2)} more for Free Same-Day Shipping!`;
                shippingBar.style.width = `${Math.min((subtotal / 100) * 100, 100)}%`;
            }

            if (cart.length === 0) {
                container.innerHTML = `<div class="text-center py-12 text-gray-400">
                    <i class="fa-solid fa-basket-shopping text-4xl mb-3 text-gray-300"></i>
                    <p class="text-sm">Your cart is currently empty.</p>
                </div>`;
            } else {
                container.innerHTML = cart.map(item => `
                    <div class="flex items-center gap-4 p-3 rounded-xl bg-bloom-100/60 border border-gray-100">
                        <img src="${item.image}" class="w-16 h-16 rounded-lg object-cover">
                        <div class="flex-1">
                            <h4 class="text-xs font-bold text-gray-900">${item.name}</h4>
                            <p class="text-xs text-bloom-600 font-serif font-bold mt-0.5">$${item.price.toFixed(2)}</p>
                            <div class="flex items-center gap-2 mt-2">
                                <button onclick="updateCartQty('${item.id}', -1)" class="w-5 h-5 rounded bg-white text-gray-700 flex items-center justify-center text-xs shadow-sm hover:bg-bloom-500 hover:text-white">-</button>
                                <span class="text-xs font-semibold px-1">${item.qty}</span>
                                <button onclick="updateCartQty('${item.id}', 1)" class="w-5 h-5 rounded bg-white text-gray-700 flex items-center justify-center text-xs shadow-sm hover:bg-bloom-500 hover:text-white">+</button>
                            </div>
                        </div>
                        <button onclick="updateCartQty('${item.id}', -999)" class="text-gray-400 hover:text-red-500 text-xs p-1">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                `).join('');
            }

            subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
            document.getElementById('cart-shipping').textContent = shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`;
            totalEl.textContent = `$${total.toFixed(2)}`;
        }

        // Cart Drawer Toggles
        function openCartDrawer() {
            const drawer = document.getElementById('cart-drawer');
            const panel = document.getElementById('cart-panel');
            drawer.classList.remove('opacity-0', 'pointer-events-none');
            panel.classList.remove('translate-x-full');
        }

        function closeCartDrawer() {
            const drawer = document.getElementById('cart-drawer');
            const panel = document.getElementById('cart-panel');
            drawer.classList.add('opacity-0', 'pointer-events-none');
            panel.classList.add('translate-x-full');
        }

        // Quick View Modal
        function openQuickView(productId) {
            const p = products.find(x => x.id === productId);
            if (!p) return;

            document.getElementById('modal-img').src = p.image;
            document.getElementById('modal-title').textContent = p.name;
            document.getElementById('modal-price').textContent = `$${p.price.toFixed(2)}`;
            document.getElementById('modal-desc').textContent = p.description;
            document.getElementById('modal-category').textContent = p.category;

            const modal = document.getElementById('quickview-modal');
            const content = document.getElementById('quickview-content');

            modal.classList.remove('opacity-0', 'pointer-events-none');
            content.classList.remove('scale-95');
            content.classList.add('scale-100');

            document.getElementById('modal-add-btn').onclick = () => {
                addToCart(p);
                closeQuickView();
                openCartDrawer();
            };
        }

        function closeQuickView() {
            const modal = document.getElementById('quickview-modal');
            const content = document.getElementById('quickview-content');
            modal.classList.add('opacity-0', 'pointer-events-none');
            content.classList.remove('scale-100');
            content.classList.add('scale-95');
        }

        function checkout() {
            if (cart.length === 0) {
                alert("Your cart is empty!");
                return;
            }
            alert("Thank you for your order! Proceeding to secure payment getaway...");
            cart = [];
            updateCartUI();
            closeCartDrawer();
        }

        // DOM Initialization
        window.addEventListener('DOMContentLoaded', () => {
            renderProducts(products);
            setupFilters();
            initBuilder();

            // Drawer listeners
            document.getElementById('cart-btn').addEventListener('click', openCartDrawer);
            document.getElementById('close-cart-btn').addEventListener('click', closeCartDrawer);
            document.getElementById('cart-backdrop')?.addEventListener('click', closeCartDrawer);
            // Modal listeners
            document.getElementById('close-quickview').addEventListener('click', closeQuickView);

            // Mobile menu toggle
            document.getElementById('mobile-menu-btn').addEventListener('click', () => {
                document.getElementById('mobile-menu').classList.toggle('hidden');
            });
            document.querySelectorAll('.mobile-link').forEach(link => {
                link.addEventListener('click', () => {
                    document.getElementById('mobile-menu').classList.add('hidden');
                });
            });
        });
    
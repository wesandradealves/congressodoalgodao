(function($){
    $(window).on("load",function(){
        let $this = $(this);

        $(this).scrollTop(0),
        $('body').removeClass('d-none');

        $('.banner-carousel').slick({
            arrows: false,
            autoplaySpeed: 2000,
            autoplay: true,
            dots: false,
            infinite: true,
            initialSlide: 0,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
        });          

        $('.gallery-carousel').slick({
            autoplay: true,
            autoplaySpeed: 2000,            
            arrows: false,
            dots: false,
            infinite: true,
            initialSlide: 1,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
        });  
        
        $('.testimonials-carousel').slick({
            adaptiveHeight: true,
            arrows: true,
            prevArrow: $('.testimonials-prev'),
            nextArrow: $('.testimonials-next'),
            dots: true,
            initialSlide: 0,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
        });   
        
        // $('.events-list').slick({
        //     arrows: false,
        //     dots: false,
        //     infinite: false,
        //     initialSlide: 0,
        //     speed: 300,
        //     slidesToShow: 1,
        //     mobileFirst: true,
        //     slidesToScroll: 1,
        //     centerMode: true,
        //     responsive: [
        //       {
        //         breakpoint: 1300,
        //         settings: {
        //           slidesToShow: 3
        //         }
        //       }
        //       // You can unslick at a given breakpoint now by adding:
        //       // settings: "unslick"
        //       // instead of a settings object
        //     ]
        // }), $('.events-list').slick('refresh');
        
        $('.tabs-carousel').slick({
            arrows: false,
            dots: false,
            infinite: false,
            initialSlide: 0,
            speed: 300,
            slidesToShow: 1,
            mobileFirst: true,
            slidesToScroll: 1,
            centerMode: true,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2
                }
              },                
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 4
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
        }); 

        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true
        })

        $(".mCustomScrollbar").mCustomScrollbar({
            axis:"x", // horizontal scrollbar,
            theme:"dark"
        }); 
        
        $(".mCustomScrollbar-y").mCustomScrollbar({
            axis:"y", // horizontal scrollbar,
            theme:"dark"
        });         
        
        $( "body" ).on( "click", ".accordion-item .title", function(e) {
            $(this).toggleClass('is-active'),
            $(this).find('.fa-solid').toggleClass('fa-plus fa-minus'),
            $(this).next().toggleClass('d-block d-none');
        });	 
        
        $( "body" ).on( "click", ".tab .tab-item .item-inner", function(e) {
            let panel = e.target.dataset.tax;

            $(this).closest('.tab').find('.active').not($(this).parent()).removeClass('active'),
            $(this).parent().addClass('active'),
            $(`.tab-content-row:not([data-tax='${panel}'])`).addClass('d-none').removeClass('d-block'),
            $(`.tab-content-row[data-tax='${panel}']`).addClass('d-block').removeClass('d-none'),
            $('.tabs-carousel').slick('refresh');
        });	         
    
        $( "body" ).on( "click", ".hamburger", function(e) {
            if(!$(this).closest('header').hasClass('sticky')) {
                $('.hamburger, .navigation.mobile').toggleClass('is-active');
            } else {
                $this.scrollTop(0),
                setTimeout(function () {
                    $('.hamburger, .navigation.mobile').toggleClass('is-active');
                }, 500);                
            }
        });	

        $( "body" ).on( "click", ".sidebar.blog:not(.sticky) input, .sidebar .close", function(e) {
            if(window.innerWidth <= 1200) {
                $(".sidebar.blog.sticky, body").toggleClass('is-active');
            }
        });	

        $( "body" ).on( "mouseover", ".event-card", function(e) {
            $(this).addClass('hover')
        }).on( "mouseleave", ".event-card", function(e) {
            $(this).removeClass('hover')
        });         
    
        $("header").before($("header").clone(true).addClass("sticky"));
        $(".sidebar.blog").before($(".sidebar.blog").clone(true).addClass("sticky"));
    
        $(window).on("scroll", function() {
            $(".sticky").toggleClass("stuck", ($(window).scrollTop() > 49));
            $(".is-active").removeClass('is-active')
        });
    
        let events = ['scroll', 'resize'];
    
        events.forEach(event => {
            $(window).on(event, function () {
                $(".is-active").removeClass('is-active')
            });	  
        });

        // -

        $( "body" ).on( "click", ".yu2fvl", function(e) {
            $.yu2fvl({ vid: e.target.dataset.id, open: true });
        });	    
        
        async function getFromApi(endpoint) {
            let result;
        
            try {
                result = await $.ajax({
                    url: endpoint,
                    type: 'GET',
                });
        
                return result;
            } catch (error) {
                console.error(error);
            }
        }        

        $( "body" ).on( "click", "[data-button='popup']", function(e) {
            let html = '<div class="d-flex flex-wrap align-items-stretch justify-content-between">';

            let post_type = e.target.dataset.post_type;
            let title = e.target.dataset.title;

            $(".spinner").toggleClass('d-none d-flex');

            let endpoint = post_type == "outras-edicoes" ? '/wp-json/acf/v3/options/options' : '/wp-json/wp/v2/'+post_type+'/'+e.target.dataset.id;
            
            $.get( endpoint, function(e) {
                let id = e.id;

                if(e.featured_media) {
                    getFromApi('/wp-json/wp/v2/media/' + e.featured_media).then((result) => {
                        $(".popup .placeholder").addClass("d-none");
                        $(".popup .thumbnail").toggleClass("d-none d-block");
                        $(".popup .thumbnail").attr("src", result.guid.rendered);
                    })
                }

                if(!e.type && post_type == "outras-edicoes") {
                    html += `
                    <div class="col-12 col-md-3 pe-md-4 mb-5 mb-md-0 text-center text-md-start">
                        <h3 class="d-block title text-uppercase">Outras<br/>Edições</h3>
                    </div>
                    <div class="col-12 col-md-9 ps-md-4">
                        <ul class="timeline mCustomScrollbar-y">`;
                            e.acf.timeline.forEach(item => {
                                html += `
                                    <li class="d-flex timeline-item align-items-start mb-3 pb-3">
                                        <p class="ano d-block">${item.ano}</p>
                                        <h3 class="title d-block flex-fill">
                                            ${item.titulo}
                                            <small class="subtitle d-block mt-2">${item.subtitulo}</small>
                                        </h3>
                                    </li>
                                `;
                            });
                        html += `</ul>`;
                    html += `</div>`;
                } else {
                    switch (e.type) {
                            case 'eventos-anteriores':
                                html += `
                                <div data-type="${e.type}" class="col-12 col-lg-3 pe-lg-4 mb-5 mb-lg-0 text-center text-lg-start">
                                    <img height="auto" width="167" alt="${e.title.rendered}" src="${e.acf.logo}" loading="lazy" class="img-fluid thumbnail d-block mb-4" />
                                    <h3 class="d-block title">${e.title.rendered}</h3>
                                    <p class="d-block text mb-4">${e.content.rendered.replace(/(<([^>]+)>)/gi, "")}</p>
                                    <a download href="${e.acf.pdf}" class="btn primary d-block m-auto ms-lg-0 me-lg-0 mb-4">VEJA A PROGRAMAÇão<br/>Desta edição</a>
                                    <a target="_blank" href="${e.acf.flickr}" class="d-flex align-items-center justify-content-center justify-content-lg-start flickr">Veja outras fotos <img class="ps-2" src="/wp-content/themes/cba/./img/flickr.png" /></a>
                                </div>
                                <div class="col-12 col-lg-9 ps-lg-4">
                                    <h4 class="d-block section-title mb-5 text-center">Números do <strong>${e.title.rendered}</strong></h4>`;
                                    if(e.acf.numeros) {
                                        html += `<ul class="powernumbers d-flex flex-wrap align-items-stretch">`;
                                            e.acf.numeros.forEach(item => {
                                                html += `
                                                    <li class="col-6 col-md-3 ps-2 pe-2 pb-4 text-center">
                                                        <p class="info d-block">${item.label}</p>
                                                        <p class="label d-block">${item.informacao}</p>
                                                    </li>
                                                `;
                                            });
                                        html += `</ul>`;
                                    }
    
                                    if(e.acf.video) {
                                        html += `
                                            <div class="video-wrapper">
                                                <i data-id="${e.acf.video}" class="fa-solid fa-play yu2fvl"></i>
                                                <img data-id="${e.acf.video}" class="yu2fvl d-block img-fluid video" src="https://i.ytimg.com/vi/${e.acf.video}/maxresdefault.jpg" alt="${e.title.rendered}" />
                                            </div>
                                        `;
                                    }

                                    if(e.acf.galeria) {
                                        html += `<ul class="gallery mt-4 d-flex flex-wrap align-items-stretch">`;
                                        e.acf.galeria.forEach(item => {
                                            html += `
                                                <li class="col-3 ps-2 pe-2 pb-4">
                                                    <a data-lightbox="${id}" href="${item}"><img height="146" width="100%" src="${item}" class="img-fluid gallery-item d-block" loading="lazy" /></a>
                                                </li>
                                            `;
                                        }); 
                                        html += `</ul>`;   
                                    }                                    
                                html += `</div>
                            `;
                            break;
                            case 'comissao' :
                            case 'palestrante':
                                html += `
                                    <div data-type="${e.type}" class="col-12 col-lg-3 pe-lg-4">          
                                        <div class="placeholder shimmer mb-4">
                                            <div class="faux-image-wrapper">
                                                <div class="faux-image"></div>
                                            </div>
                                        </div>                                                              
                                        <img src="${e.title.rendered}" loading="lazy" class="img-fluid thumbnail d-none mb-4" />
                                        <h3 class="d-block title">${e.title.rendered}</h3>`;
                                        if(e.acf.cargo) {
                                            html += `<p class="d-block text mb-4">${e.acf.cargo}</p>`;
                                        }
                                    html += `</div>
                                    <div class="col-12 col-lg-9 ps-lg-4 mt-4 mt-lg-0">
                                        <!-- <h4 class="d-block section-title mb-5"><strong>${e.acf.titulo_modal ? e.acf.titulo_modal : e.title.rendered}</strong></h4> -->
                                        <div class="text">
                                            ${e.content.rendered}
                                        </div>
                                    </div>
                                `;                                    
                                break;
                            case 'hotel':
                                html += `
                                    <div data-type="${e.type}" class="col-12 mb-5 d-flex align-items-stretch flex-wrap">   
                                        <div class="col-12 col-md-8 pe-md-5">       
                                            <h3 class="d-block title mb-3">${e.title.rendered}</h3>
                                            <p class="d-block text">Vagas disponíveis: ${e.acf.vagas_disponiveis ? '<i class="fa-solid fa-check"></i>' : ''}</p>`;
                                            
                                            if(e.acf.endereco) {
                                                html += `<ul class="d-block mt-4">`;
                                                    e.acf.endereco.forEach(item => {
                                                        html += `
                                                            <li class="d-block mb-4">
                                                                <p class="text"><i class="fa-solid fa-location-pin pe-3"></i> ${item.texto}</p>
                                                            </li>
                                                        `;
                                                    });
                                                html += `</ul>`;
                                            }                                            
                                            
                                            html += `<div class="text mt-4">
                                                ${e.content.rendered}
                                            </div>
                                            <div class="text mt-4">
                                                ${e.acf.descricao}
                                            </div>`;
                                    html += `
                                        </div>
                                        <div class="mt-4 mt-md-0 col-12 col-md-4">
                                            <div class="box">
                                                <h4 class="title">Faça agora<br/>sua reserva</h4>
                                                <p class="mt-3 mb-3 text">${e.acf.preco}</p>
                                                <a href="${e.acf.url}" class="btn primary">Fazer reserva</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">`;
                                        if(e.acf.galeria) {
                                            html += `<ul class="gallery d-flex align-items-stretch overflow-auto">`;
                                            e.acf.galeria.forEach(item => {
                                                html += `
                                                    <li class="me-4">
                                                        <a data-lightbox="${id}" href="${item}"><img src="${item}" class="img-fluid gallery-item d-block" /></a>
                                                    </li>
                                                `;
                                            }); 
                                            html += `</ul>`;   
                                        }                                         
                                    html += `</div>
                                `;                                    
                                break;        
                            case 'evento':
                                const palestra = e.acf.programacao[0].programacao.find((item) => item.titulo === title);
                                let palestrante = null;

                                if(palestra.palestrantes) {
                                    $(".popup .placeholder").removeClass('d-none').addClass('d-block');
                                    $(".popup .thumbnail").removeClass('d-block').addClass('d-none');

                                    getFromApi('/wp-json/wp/v2/palestrante/' + palestra.palestrantes).then((result) => {
                                        palestrante = result;

                                        if(result.featured_media) {
                                            getFromApi('/wp-json/wp/v2/media/' + result.featured_media).then((result) => {
                                                $(".popup #palestrante").html(`
                                                    ${palestrante.title.rendered}
                                                    <small class="d-block mt-2">${palestrante.acf.cargo}</small>
                                                `);
                                                $(".popup .placeholder").removeClass('d-block').addClass('d-none');
                                                $(".popup .thumbnail").removeClass('d-none').addClass('d-block').attr('src', result.guid.rendered);
                                            })
                                        }
                                    })
                                }


                                html += `
                                    <div data-type="${e.type}" class="col-12 col-lg-3 pe-lg-4">          
                                        <div class="placeholder shimmer mb-4">
                                            <div class="faux-image-wrapper">
                                                <div class="faux-image"></div>
                                            </div>
                                        </div>                                                              
                                        <img src="" loading="lazy" class="img-fluid thumbnail d-none mb-4" />
                                        <h3 id="palestrante" class="d-block title"></h3>
                                        <p class="text d-block mt-4"><i class="fa-regular fa-clock pe-2"></i> Das ${palestra.horario_inicial} às ${palestra.horario_final}</p>
                                        <p class="text d-block mt-2"><i class="fa-solid fa-door-closed pe-2"></i> ${palestra.sala}</p>
                                    `;
                                    html += `</div>
                                    <div class="col-12 col-lg-9 ps-lg-4 mt-5 pt-5 pt-lg-0 mt-lg-0">
                                        <h4 class="d-block section-title mb-5"><strong>${palestra.titulo}</strong></h4>
                                        <div class="text mt-4">
                                            ${palestra.descricao}
                                        </div>
                                    </div>
                                `;     
                                
                                
                                break;                          
                        default:
                            break;
                    }
                }

                html += '</div>';
            }).done(function() {
                $(".spinner").toggleClass('d-none d-flex'),
                $(".popup").toggleClass('d-none d-flex'),
                $(".popup-content").html(html);
            }); 
        });	       
        
        $( "body" ).on( "click", ".popup-close", function(e) {
            $(".popup").toggleClass('d-none d-flex') 
        });	
        
        setTimeout(function () {
            if (sessionStorage.getItem('name') !== "whatsappIconMessage") {
                $('.whatsapp-icon-message').addClass('active');
            }
        }, 12000);
    
        $('.whatsapp-icon-message-close').click(function () {
            sessionStorage.setItem('name', 'whatsappIconMessage');
            $('.whatsapp-icon-message').removeClass('active');
        });
    
        setTimeout(function() {
            $('#module-whatsapp').css('visibility', 'visible');
        }, 2000);
    
        $('.whatsapp-btn, [href*="https://api.whatsapp.com"]').click(function(e) {
            e.preventDefault();
    
            if ($('.whatsapp-btn').hasClass('active')) {
                $('.whatsapp-btn').addClass('not-active');
                $('.whatsapp-btn').removeClass('active');
                $('#module-whatsapp-container').removeClass('active');
                setTimeout(function() {
                    if (sessionStorage.getItem('name') !== "whatsappIconMessage") {
                        $('.whatsapp-icon-message').addClass('active');
                    }
                }, 2000);
            } else {
                $('.whatsapp-btn').addClass('active');
                $('.whatsapp-btn').removeClass('not-active');
                $('#module-whatsapp-container').addClass('active');
                $('.whatsapp-icon-message').removeClass('active');
            }
        });
    
        setTimeout(function() {
            $('#module-whatsapp').css('visibility', 'visible');
        }, 2000);
    
        var disableSubmit = false;
        
        jQuery('button.module-whatsapp-content-form-button').click(function() {
            jQuery('button.module-whatsapp-content-form-button').addClass("disabled");
            jQuery('button.module-whatsapp-content-form-button').text('INICIANDO...');
            if (disableSubmit == true) {
                return false;
            }
            disableSubmit = true;
            return true;
        })
        
        document.addEventListener('wpcf7submit', function(event) {
            jQuery('#' + event.detail.unitTag + ' button.module-whatsapp-content-form-button').removeClass("disabled");
            jQuery('#' + event.detail.unitTag + ' button.module-whatsapp-content-form-button').text('INICIAR CONVERSA');
            disableSubmit = false;
        }, false);            
    });
})(jQuery);
const mentores = [
    {
        nombre: 'Nico',
        edad: 29,
        imagen: 'https://i.postimg.cc/Y2vWzKJQ/34040eea-fbd9-4a60-8a61-6afba83464a8.jpg',
        tecnologias: ['HTML','CSS','JavaScript', 'NodeJS', 'ReactJS', 'React Native', 'VueJS'],
        modulo: 'JS'
    },
    {
        nombre: 'Lucre',
        edad: 28,
        imagen: 'https://assets.elanco.com/8e0bf1c2-1ae4-001f-9257-f2be3c683fb1/fca42f04-2474-4302-a238-990c8aebfe8c/Siamese_cat_1110x740.jpg',
        tecnologias: ['HTML','CSS','JavaScript', 'NodeJS', 'ReactJS', 'React Native'],
        modulo: 'JS'
    },
    {
        nombre: 'Fede',
        edad: 38,
        imagen: 'https://i.postimg.cc/HWvrrZnj/72c679cc-25d9-479b-b69d-e959118e3ae5.jpg',
        tecnologias: ['HTML','CSS','JavaScript', 'Java', 'VueJS'],
        modulo: 'JS'
    },
    {
        nombre: 'Cami',
        edad: 28,
        imagen: 'https://www.diarioveterinario.com/images/showid2/4315158?w=900',
        tecnologias: ['HTML','CSS','JavaScript', 'Bootstrap'],
        modulo: 'WEB'
    },
    {
        nombre: 'Kev',
        edad: 32,
        imagen: 'https://static.wixstatic.com/media/d1fede_4f753f4736604e4ebf85029b92c769c3~mv2.jpg/v1/fill/w_640,h_454,al_c,lg_1,q_80,enc_auto/d1fede_4f753f4736604e4ebf85029b92c769c3~mv2.jpg',
        tecnologias: ['HTML','CSS','JavaScript', 'React'],
        modulo: 'WEB'
    },
    {
        nombre: 'Flor',
        edad: 32,
        imagen: 'https://p4.wallpaperbetter.com/wallpaper/630/552/841/look-kitty-background-baby-wallpaper-preview.jpg',
        tecnologias: ['HTML','CSS','JavaScript', 'VueJS'],
        modulo: 'WEB'
    },
    {
        nombre: 'Sil',
        edad: 37,
        imagen: 'https://i.postimg.cc/s2MfSyNL/4eab67e8-8718-46ce-907c-f032b6c67388.jpg',
        tecnologias: ['HTML', 'CSS', 'Testing'],
        modulo: 'WEB'
    },
]
const frutas = [
    {
        id: 1,
        nombre: 'Manzana',
        foto: 'https://media.istockphoto.com/id/184276818/es/foto/manzana-red.jpg?s=612x612&w=0&k=20&c=BFD8ixD7eyXMm3aSVIdz1hUsLG-lX8Ig2HBr6IVJuzU=',
        colorPrincipal: 'rojo',
        esDulce: true,
        temporada: 'otoño',
        esImportada: false,
        stock: 150,
        precio: 80,
        descripcion: 'La manzana es una fruta deliciosa y jugosa. Es una excelente fuente de fibra y vitaminas.'
    },
    {
        id: 2,
        nombre: 'Banana',
        foto: 'https://www.semana.com/resizer/u-INT9wLmacPmolDokrINVUW5QA=/1920x0/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/LQYEQRID3REUJGNBB23BW2C3FY.jpg',
        colorPrincipal: 'amarillo',
        esDulce: true,
        temporada: 'todo el año',
        esImportada: true,
        stock: 200,
        precio: 120,
        descripcion: 'La banana es una fruta tropical muy popular. Es rica en potasio y energía.'
    },
    {
        id: 3,
        nombre: 'Naranja',
        foto: 'https://static.elcorreo.com/www/multimedia/201902/08/media/cortadas/GF0N1J31-U401131236871ktC-U70573831277euB-624x385@El%20Correo-ElCorreo.jpg',
        colorPrincipal: 'naranja',
        esDulce: true,
        temporada: 'invierno',
        esImportada: false,
        stock: 80,
        precio: 60,
        descripcion: 'La naranja es una fuente de vitamina C y antioxidantes. Ideal para el invierno.'
    },
    {
        id: 4,
        nombre: 'Uva',
        foto: 'https://www.lechepuleva.es/documents/13930/203222/uva_g.jpg/4ee0cd1b-f0d3-41cc-80b8-17e5a80b834a?t=1422618555000',
        colorPrincipal: 'morado',
        esDulce: true,
        temporada: 'verano',
        esImportada: false,
        stock: 120,
        precio: 150,
        descripcion: 'Las uvas son frutas pequeñas y jugosas. Se utilizan para hacer vino y son ricas en antioxidantes.'
    },
    {
        id: 5,
        nombre: 'Pera',
        foto: 'https://www.nutricionyentrenamiento.fit/images/alimento/248.jpg',
        colorPrincipal: 'verde',
        esDulce: true,
        temporada: 'invierno',
        esImportada: false,
        stock: 100,
        precio: 500,
        descripcion: 'Las peras son frutas dulces y jugosas. Son una buena fuente de fibra y minerales.'
    },
    {
        id: 6,
        nombre: 'Durazno',
        foto: 'https://www.recetasnestle.com.ar/sites/default/files/2022-01/propiedades-del-durazno.jpg',
        colorPrincipal: 'naranja',
        esDulce: true,
        temporada: 'verano',
        esImportada: false,
        stock: 90,
        precio: 90,
        descripcion: 'Los duraznos son frutas de verano con pulpa suave y sabrosa. Ideales para postres y ensaladas.'
    },
    {
        id: 7,
        nombre: 'Kiwi',
        foto: 'https://static.libertyprim.com/files/familles/kiwi-large.jpg?1569271790',
        colorPrincipal: 'verde',
        esDulce: true,
        temporada: 'primavera',
        esImportada: true,
        stock: 60,
        precio: 200,
        descripcion: 'Los kiwis son frutas exóticas y ricas en vitamina C. Tienen un sabor único y refrescante.'
    },
    {
        id: 8,
        nombre: 'Cereza',
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-XKAGlSwzpLKW_Zh0_8zUC1VQ1LBAvN2wHBphhZjeLhu6ebQZ5p6lfnYnkKn4BgHOrng&usqp=CAU',
        colorPrincipal: 'rojo',
        esDulce: true,
        temporada: 'verano',
        esImportada: false,
        stock: 40,
        precio: 300,
        descripcion: 'Las cerezas son frutas rojas y dulces. Se pueden disfrutar solas o en postres.'
    },
    {
        id: 9,
        nombre: 'Mango',
        foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Mango_-_single.jpg/640px-Mango_-_single.jpg',
        colorPrincipal: 'amarillo',
        esDulce: true,
        temporada: 'verano',
        esImportada: true,
        stock: 70,
        precio: 150,
        descripcion: 'Los mangos son frutas tropicales con un sabor dulce y jugoso. Son versátiles en la cocina.'
    },
    {
        id: 10,
        nombre: 'Coco',
        foto: 'https://www.cucinare.tv/wp-content/uploads/2020/11/Coco.jpg',
        colorPrincipal: 'marrón',
        esDulce: true,
        temporada: 'todo el año',
        esImportada: true,
        stock: 30,
        precio: 200,
        descripcion: 'El coco es una fruta tropical con pulpa cremosa. Se utiliza en muchas recetas y bebidas.'
    },
    {
        id: 11,
        nombre: 'Sandía',
        foto: 'https://5aldia.cl/wp-content/uploads/2018/03/sandia.jpg',
        colorPrincipal: 'verde',
        esDulce: true,
        temporada: 'verano',
        esImportada: false,
        stock: 55,
        precio: 70,
        descripcion: 'La sandía es una fruta refrescante y jugosa. Perfecta para días calurosos.'
    },
    {
        id: 12,
        nombre: 'Fresa',
        foto: 'https://libbys.es/wordpress/wp-content/uploads/2018/05/fresas.jpg',
        colorPrincipal: 'rojo',
        esDulce: true,
        temporada: 'primavera',
        esImportada: false,
        stock: 65,
        precio: 120,
        descripcion: 'Las fresas son pequeñas frutas rojas y dulces. Ideales para postres y meriendas.'
    },
    {
        id: 13,
        nombre: 'Limón',
        foto: 'https://cloudfront-us-east-1.images.arcpublishing.com/lanacionpy/QD2YIVIRZNFSBNVV5ED4OSUDJU.jpg',
        colorPrincipal: 'amarillo',
        esDulce: false,
        temporada: 'todo el año',
        esImportada: false,
        stock: 85,
        precio: 50,
        descripcion: 'El limón es cítrico y ácido. Se utiliza para dar sabor a muchas comidas y bebidas.'
    },
    {
        id: 14,
        nombre: 'Granada',
        foto: 'https://elpoderdelconsumidor.org/wp-content/uploads/2015/09/granada-roja.jpg',
        colorPrincipal: 'rojo',
        esDulce: true,
        temporada: 'otoño',
        esImportada: false,
        stock: 40,
        precio: 180,
        descripcion: 'La granada es una fruta con granos jugosos y dulces. Es rica en antioxidantes.'
    },
    {
        id: 15,
        nombre: 'Papaya',
        foto: 'https://exoticfruitbox.com/wp-content/uploads/2015/10/papaya-3-Exotic.jpg',
        colorPrincipal: 'naranja',
        esDulce: true,
        temporada: 'todo el año',
        esImportada: true,
        stock: 45,
        precio: 250,
        descripcion: 'La papaya es una fruta tropical con pulpa suave y dulce. Rica en vitamina C.'
    },
    {
        id: 16,
        nombre: 'Ananá',
        foto: 'https://granjaus.com/wp-content/uploads/2019/02/AA113-600x600.jpg',
        colorPrincipal: 'amarillo',
        esDulce: true,
        temporada: 'verano',
        esImportada: false,
        stock: 50,
        precio: 70,
        descripcion: 'El ananá es una fruta tropical con sabor agridulce. Se usa en cócteles y ensaladas.'
    },
    {
        id: 17,
        nombre: 'Mandarina',
        foto: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/10/04173718/mandarina-02.jpg',
        colorPrincipal: 'naranja',
        esDulce: true,
        temporada: 'invierno',
        esImportada: false,
        stock: 75,
        precio: 60,
        descripcion: 'La mandarina es cítrica y dulce. Fácil de pelar y comer como bocadillo.'
    },
    {
        id: 18,
        nombre: 'Higo',
        foto: 'https://frutasolivar.com/wp-content/uploads/2020/08/higos.jpg',
        colorPrincipal: 'morado',
        esDulce: true,
        temporada: 'verano',
        esImportada: false,
        stock: 55,
        precio: 120,
        descripcion: 'Los higos son frutas pequeñas y dulces. Se pueden consumir frescos o secos.'
    },
    {
        id: 19,
        nombre: 'Ciruela',
        foto: 'https://www.adelgar.es/wp-content/uploads/2015/04/ciruelas-_1.jpg',
        colorPrincipal: 'morado',
        esDulce: true,
        temporada: 'verano',
        esImportada: false,
        stock: 70,
        precio: 90,
        descripcion: 'Las ciruelas son frutas jugosas y dulces. Se utilizan para hacer mermeladas y postres.'
    },
    {
        id: 20,
        nombre: 'Pomelo',
        foto: 'https://www.gastronomiavasca.net/uploads/image/file/3421/pomelo_rosa.jpg',
        colorPrincipal: 'amarillo',
        esDulce: false,
        temporada: 'invierno',
        esImportada: false,
        stock: 60,
        precio: 70,
        descripcion: 'El pomelo es cítrico y ligeramente amargo. Se consume en ensaladas y jugos.'
    },
]
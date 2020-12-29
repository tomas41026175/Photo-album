const getPhotoData = ()=>{
        let photos = [
            {
                name: "photo1",
                url: "https://images.pexels.com/photos/207962/pexels-photo-207962.jpeg?cs=srgb&dl=pexels-pixabay-207962.jpg&fm=jpg",
                alt: "loading",
            },{
                name: "photo2",
                url: "https://i0.wp.com/img.hojenjen.com/uploads/2017/10/1506964794-4efdd2f969559e8b1c92e99f32ded48e.jpg?resize=1801%2C1200",
                alt: "loading",
            },    {
                name: "photo3",
                url: "data:image/jpeg;base64,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",
                alt: "loading",
            },    {
                name: "photo4",
                url: "https://cdn1-digiphoto.techbang.com/system/images/124901/original/7d4012268131717149af4e7369d07187.jpg?1548392388",
                alt: "loading",
            },    {
                name: "photo5",
                url: "https://cdn01.dcfever.com/articles/news/2018/04/180403_landscapetips_01.jpg",
                alt: "loading",
            },    {
                name: "photo6",
                url: "https://image.cache.storm.mg/styles/smg-800x533-fp/s3/media/image/2016/03/23/20160323-031359_U3927_M140622_78d2.jpg?itok=Hyo2d7Ei",
                alt: "loading",
            },
        ];

        let photo = "";
        for(i=0 ;i<photos.length;i++){
            photo += `<li class="col-12 col-md-6 col-xl-4"><div class="pic_title w-100 rounded-pill" style="background-color: rgba(207, 207, 209, 0.5)"><span>${photos[i].name}</span></div><img class="w-100 img-thumbnail img-fluid" src="${photos[i].url}" alt="${photos[i].alt}"></li>`
        }
        return album.innerHTML = photo;
    };

const cancelPhotoData=()=>{
    let clear = `<li></li>`
    return album.innerHTML = clear;
};
const changePutUrlBar = (e)=>{
    e.target.value = "";
}

let album = document.querySelector(".photo_album");

const btnCreate = document.querySelector(".btn-create");
btnCreate.addEventListener("click",getPhotoData);

const btnCancel = document.querySelector(".btn-cancel");
btnCancel.addEventListener("click",cancelPhotoData);

const putUrl = document.querySelector(".putimg-url")
putUrl.addEventListener("click,changePutUrlBar")
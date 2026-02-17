const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default:"https://in.images.search.yahoo.com/images/view;_ylt=Awrx.TstIJRpj6shdzK9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzgzNDhhNTBlYjI3MmY3YjBkZWVmNGM0OTNhN2UzY2FhBGdwb3MDMjUEaXQDYmluZw--?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3D%252Fimage%26type%3DE210IN826G0%26fr%3Dmcafee%26tt%3D%252Fimage3%26imgurl%3Dhttps%253A%252F%252Fwww.bing.com%252Fimages%252Fsearch%253Fview%253DdetailV2%2526ccid%253DYFGrV0Gu%2526id%253D0A0C5BEB9E33AFB7E99AE050CACC0A06CC927757%2526thid%253DOIP.YFGrV0GugxL6jG_ALP6ztwHaJ4%2526mediaurl%253Dhttps%253A%252F%252Fimages.pexels.com%252Fphotos%252F674010%252Fpexels-photo-674010.jpeg%253Fauto%253Dcompress%2526cs%253Dtinysrgb%2526w%253D1200%2526exph%253D1600%2526expw%253D1200%2526q%253D%252Fimage%2526ck%253DA4F7AD556006154D3D5B53F5C2A3C306%2526idpp%253Drc%2526idpview%253Dsingleimage%2526form%253Drc2idp%26turl%3Dhttps%253A%252F%252Fsp.yimg.com%252Fib%252Fth%252Fid%252FOIP.YFGrV0GugxL6jG_ALP6ztwHaJ4%253Fpid%253DApi%2526w%253D148%2526h%253D148%2526c%253D7%2526dpr%253D2%2526rs%253D1%26sigi%3DHOvFPw50neRe%26sigt%3DPa9B7U.iFijy%26sigit%3DzZKjGNZ9Bf5Y%26tab%3Dorganic%26ri%3D25&w=960&h=619&imgurl=cdn.pixabay.com%2Fphoto%2F2022%2F09%2F27%2F19%2F46%2Fai-generated-7483596_960_720.jpg&rurl=https%3A%2F%2Fpixabay.com%2Fphotos%2Fai-generated-landscape-nature-river-7483596%2F&size=250KB&p=%2Fimage&oid=8348a50eb272f7b0deef4c493a7e3caa&fr2=&fr=mcafee&tt=Ai+Generated+Landscape+Nature+-+Free+photo+on+Pixabay&b=0&ni=57&no=25&ts=&tab=organic&sigr=hnAjrNBET3Um&sigb=yaG9_rrztz0.&sigi=rHY8eH_GT3t2&sigt=JPMbPJalCbge&.crumb=kzOrwP3YRgQ&fr=mcafee&type=E210IN826G0",
        set: (v) =>  
         v ==="" 
        ?"https://in.images.search.yahoo.com/images/view;_ylt=Awrx.TstIJRpj6shdzK9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzgzNDhhNTBlYjI3MmY3YjBkZWVmNGM0OTNhN2UzY2FhBGdwb3MDMjUEaXQDYmluZw--?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3D%252Fimage%26type%3DE210IN826G0%26fr%3Dmcafee%26tt%3D%252Fimage3%26imgurl%3Dhttps%253A%252F%252Fwww.bing.com%252Fimages%252Fsearch%253Fview%253DdetailV2%2526ccid%253DYFGrV0Gu%2526id%253D0A0C5BEB9E33AFB7E99AE050CACC0A06CC927757%2526thid%253DOIP.YFGrV0GugxL6jG_ALP6ztwHaJ4%2526mediaurl%253Dhttps%253A%252F%252Fimages.pexels.com%252Fphotos%252F674010%252Fpexels-photo-674010.jpeg%253Fauto%253Dcompress%2526cs%253Dtinysrgb%2526w%253D1200%2526exph%253D1600%2526expw%253D1200%2526q%253D%252Fimage%2526ck%253DA4F7AD556006154D3D5B53F5C2A3C306%2526idpp%253Drc%2526idpview%253Dsingleimage%2526form%253Drc2idp%26turl%3Dhttps%253A%252F%252Fsp.yimg.com%252Fib%252Fth%252Fid%252FOIP.YFGrV0GugxL6jG_ALP6ztwHaJ4%253Fpid%253DApi%2526w%253D148%2526h%253D148%2526c%253D7%2526dpr%253D2%2526rs%253D1%26sigi%3DHOvFPw50neRe%26sigt%3DPa9B7U.iFijy%26sigit%3DzZKjGNZ9Bf5Y%26tab%3Dorganic%26ri%3D25&w=960&h=619&imgurl=cdn.pixabay.com%2Fphoto%2F2022%2F09%2F27%2F19%2F46%2Fai-generated-7483596_960_720.jpg&rurl=https%3A%2F%2Fpixabay.com%2Fphotos%2Fai-generated-landscape-nature-river-7483596%2F&size=250KB&p=%2Fimage&oid=8348a50eb272f7b0deef4c493a7e3caa&fr2=&fr=mcafee&tt=Ai+Generated+Landscape+Nature+-+Free+photo+on+Pixabay&b=0&ni=57&no=25&ts=&tab=organic&sigr=hnAjrNBET3Um&sigb=yaG9_rrztz0.&sigi=rHY8eH_GT3t2&sigt=JPMbPJalCbge&.crumb=kzOrwP3YRgQ&fr=mcafee&type=E210IN826G0"
        : v,
    }, 
    price : Number,
    location: String,
    country: String,
});
 
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
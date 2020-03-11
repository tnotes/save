const request = require('request-promise');
const cheerio = require('cheerio');
const get_uid = async username=>{
    try{
        let options = {
            url:'https://facebook.com/'+username,
            method:'GET',
            headers:{
                'user-agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36 OPR/66.0.3515.115'
            }
        };
        let responseHTML = await request(options);
        return responseHTML.match(/(?<=content\=\"fb\:\/\/profile\/+).*?(?=\")/gs)[0]
    }catch(e){
        return username;
    }
    

}
let get_fb_dtsg = async (id_post,cookie)=>{
    try{
        let options = {
            url:'https://facebook.com/'+id_post,
            method:'GET',
            headers:{
                'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36 OPR/66.0.3515.115',
                cookie
            }
        };
        let responseHTML = await request(options);
        return encodeURIComponent(responseHTML.match(/(?<=name\=\"fb\_dtsg\" value\=\"+).*?(?=\")/gs)[0]);
    }catch(e){
        throw 'Cookie hết hạn.';
    }
    
}
let uid_liker = async ({id_post,cookie,fb_dtsg})=>{
    var headers = {
        'authority': 'm.facebook.com',
        'origin': 'https://m.facebook.com',
        'x-requested-with': 'XMLHttpRequest',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36 OPR/66.0.3515.115',
        'x-response-format': 'JSONStream',
        'content-type': 'application/x-www-form-urlencoded',
        'accept': '*/*',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'accept-language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5',
        cookie
    };

    var dataString = 'm_sess=&fb_dtsg='+fb_dtsg+'&__csr=&__req=a&__ajax__=AYnx04eflb4e6FZb1pryyfzzomvBt_J6PVhEOVfAnWtW7wKOICr-kgc6_CNGD7BGvIbkIDNX400IpN9I9emnU3L3qz9MQ_I6ndHUIqqbiHz_YA&__a=AYnx04eflb4e6FZb1pryyfzzomvBt_J6PVhEOVfAnWtW7wKOICr-kgc6_CNGD7BGvIbkIDNX400IpN9I9emnU3L3qz9MQ_I6ndHUIqqbiHz_YA&__user='+cookie.match(/(?<=c\_user\=+).*?(?=\;)/gs)[0];

    var options = {
        url: 'https://m.facebook.com/ufi/reaction/profile/browser/fetch/?limit=1000&reaction_type=1&total_count=1000&ft_ent_identifier='+id_post,
        method: 'POST',
        headers: headers,
        body: dataString
    };


    let response = await request(options);
    let responseText = response.replace('for (;;);','');
    let {payload:{actions}} = JSON.parse(responseText);
    let $ = cheerio.load(actions[0].html);
    let result = [];
    $('div._1uja').each(async function(){
        let name = $(this).find('strong').text();
        let uid = (($(this).html().match(/(?<=add\_friend\.php\?id\=+).*?(?=\&)/gs) ? $(this).html().match(/(?<=add\_friend\.php\?id\=+).*?(?=\&)/gs) : $(this).html().match(/(?<=add\?subject\_id\=+).*?(?=\&)/gs)) || [null])[0];
        if(!uid) uid = await get_uid($(this).html().match(/(?<=href\=\"\/+).*?(?=\?)/gs)[0])
            result.push({name,uid})
    });
    return result;
};
module.exports = async (id_post,cookie)=>{
    let fb_dtsg = await get_fb_dtsg(id_post,cookie);
    let data = await uid_liker({cookie,id_post,fb_dtsg});
    return data;
    
};














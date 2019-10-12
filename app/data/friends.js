const friends = [
    {
        name: "Peter",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.redd.it%2Fmvcxmy8jru031.jpg&imgrefurl=https%3A%2F%2Fwww.reddit.com%2Fr%2Fmarvelstudios%2Fcomments%2Fbttuuq%2Fthe_glasses_would_have_worked_really_well_for%2F&docid=VbQkJzsvyCuDlM&tbnid=HcHNcNX4MbY1_M%3A&vet=10ahUKEwjo6s_DhpblAhWTr54KHbxQBE4QMwipASgrMCs..i&w=379&h=443&bih=836&biw=883&q=peter%20parker%20with%20glasses&ved=0ahUKEwjo6s_DhpblAhWTr54KHbxQBE4QMwipASgrMCs&iact=mrc&uact=8",
        scores: [
            "5",
            "1",
            "4",
            "4",
            "5",
            "1",
            "2",
            "5",
            "4",
            "1"
        ]
    },

    {
        name: "Thor",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FSOtS-OSrLxI%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DSOtS-OSrLxI&docid=DvpFz9JPm1IDKM&tbnid=9NBn_cVTecsutM%3A&vet=10ahUKEwjF25m8ipblAhXMPn0KHcTIC5MQMwjmAShLMEs..i&w=1280&h=720&bih=836&biw=883&q=thor%20suit%20infinity%20war&ved=0ahUKEwjF25m8ipblAhXMPn0KHcTIC5MQMwjmAShLMEs&iact=mrc&uact=8",
        scores: [
            "2",
            "2",
            "3",
            "1",
            "3",
            "2",
            "2",
            "2",
            "3",
            "3"
        ]
    },

    {
        name: "Peter",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.redd.it%2Fmvcxmy8jru031.jpg&imgrefurl=https%3A%2F%2Fwww.reddit.com%2Fr%2Fmarvelstudios%2Fcomments%2Fbttuuq%2Fthe_glasses_would_have_worked_really_well_for%2F&docid=VbQkJzsvyCuDlM&tbnid=HcHNcNX4MbY1_M%3A&vet=10ahUKEwjo6s_DhpblAhWTr54KHbxQBE4QMwipASgrMCs..i&w=379&h=443&bih=836&biw=883&q=peter%20parker%20with%20glasses&ved=0ahUKEwjo6s_DhpblAhWTr54KHbxQBE4QMwipASgrMCs&iact=mrc&uact=8",
        scores: [
            "2",
            "2",
            "3",
            "1",
            "3",
            "4",
            "2",
            "2",
            "3",
            "2"
        ]
    },

    {
        name: "Thor",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FSOtS-OSrLxI%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DSOtS-OSrLxI&docid=DvpFz9JPm1IDKM&tbnid=9NBn_cVTecsutM%3A&vet=10ahUKEwjF25m8ipblAhXMPn0KHcTIC5MQMwjmAShLMEs..i&w=1280&h=720&bih=836&biw=883&q=thor%20suit%20infinity%20war&ved=0ahUKEwjF25m8ipblAhXMPn0KHcTIC5MQMwjmAShLMEs&iact=mrc&uact=8",
        scores: [
            "5",
            "1",
            "4",
            "4",
            "5",
            "1",
            "2",
            "5",
            "4",
            "1"
        ]
    },

    {
        name: "Peter",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.redd.it%2Fmvcxmy8jru031.jpg&imgrefurl=https%3A%2F%2Fwww.reddit.com%2Fr%2Fmarvelstudios%2Fcomments%2Fbttuuq%2Fthe_glasses_would_have_worked_really_well_for%2F&docid=VbQkJzsvyCuDlM&tbnid=HcHNcNX4MbY1_M%3A&vet=10ahUKEwjo6s_DhpblAhWTr54KHbxQBE4QMwipASgrMCs..i&w=379&h=443&bih=836&biw=883&q=peter%20parker%20with%20glasses&ved=0ahUKEwjo6s_DhpblAhWTr54KHbxQBE4QMwipASgrMCs&iact=mrc&uact=8",
        scores: [
            "4",
            "4",
            "2",
            "3",
            "2",
            "2",
            "3",
            "2",
            "4",
            "5"
        ]
    },

    {
        name: "Tony",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2F9snfz2sQMFQ%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D9snfz2sQMFQ&docid=xmR3wlEN3jc_nM&tbnid=oGvuExwNtlblIM%3A&vet=10ahUKEwjCybuAipblAhV7CjQIHcObCOsQMwiNASgPMA8..i&w=1280&h=720&bih=836&biw=883&q=tony%20stark&ved=0ahUKEwjCybuAipblAhV7CjQIHcObCOsQMwiNASgPMA8&iact=mrc&uact=8",
        scores: [
            "4",
            "3",
            "4",
            "1",
            "5",
            "2",
            "5",
            "3",
            "1",
            "4"
        ]
    },

    {
        name: "Tony",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2F9snfz2sQMFQ%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D9snfz2sQMFQ&docid=xmR3wlEN3jc_nM&tbnid=oGvuExwNtlblIM%3A&vet=10ahUKEwjCybuAipblAhV7CjQIHcObCOsQMwiNASgPMA8..i&w=1280&h=720&bih=836&biw=883&q=tony%20stark&ved=0ahUKEwjCybuAipblAhV7CjQIHcObCOsQMwiNASgPMA8&iact=mrc&uact=8",
        scores: [
            "4",
            "3",
            "4",
            "1",
            "5",
            "2",
            "5",
            "3",
            "1",
            "4"
        ]
    },

    {
        name: "Peter",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fgarpedia%2Fimages%2F9%2F99%2FPeter_Parker.jpg%2Frevision%2Flatest%3Fcb%3D20190227053359&imgrefurl=https%3A%2F%2Fgarpedia.fandom.com%2Fwiki%2FPeter_Parker_(Earth_999)&docid=CEFfPCcx8_-CsM&tbnid=Q1y0xpndH-twrM%3A&vet=10ahUKEwjo6s_DhpblAhWTr54KHbxQBE4QMwitASgvMC8..i&w=602&h=452&bih=836&biw=883&q=peter%20parker%20with%20glasses&ved=0ahUKEwjo6s_DhpblAhWTr54KHbxQBE4QMwitASgvMC8&iact=mrc&uact=8",
        scores: [
            "3",
            "3",
            "4",
            "2",
            "2",
            "1",
            "3",
            "2",
            "2",
            "3"
        ]
    },

    {
        name: "Thor",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FSOtS-OSrLxI%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DSOtS-OSrLxI&docid=DvpFz9JPm1IDKM&tbnid=9NBn_cVTecsutM%3A&vet=10ahUKEwjF25m8ipblAhXMPn0KHcTIC5MQMwjmAShLMEs..i&w=1280&h=720&bih=836&biw=883&q=thor%20suit%20infinity%20war&ved=0ahUKEwjF25m8ipblAhXMPn0KHcTIC5MQMwjmAShLMEs&iact=mrc&uact=8",
        scores: [
            "5",
            "2",
            "2",
            "2",
            "4",
            "1",
            "3",
            "2",
            "5",
            "5"
        ]
    },

    {
        name: "Tony",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2F9snfz2sQMFQ%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D9snfz2sQMFQ&docid=xmR3wlEN3jc_nM&tbnid=oGvuExwNtlblIM%3A&vet=10ahUKEwjCybuAipblAhV7CjQIHcObCOsQMwiNASgPMA8..i&w=1280&h=720&bih=836&biw=883&q=tony%20stark&ved=0ahUKEwjCybuAipblAhV7CjQIHcObCOsQMwiNASgPMA8&iact=mrc&uact=8",
        scores: [
            "4",
            "2",
            "5",
            "1",
            "3",
            "2",
            "2",
            "1",
            "3",
            "2"
        ]
    },


];

module.exports = friends;
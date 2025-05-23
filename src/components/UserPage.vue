<script setup>

</script>
<template>
    <div class="text-white space-y-10 rounded-[24px] bg-[#1D1512] w-full h-[76%]">
        <div class="px-10 py-6 h-52 flex items-center bg-gradient-to-b from-[#1D1512]/20 to-[#312825]/100 space-x-7 ">
            <img class="rounded-full" width="160"
                src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-1/327906584_1623414034763055_2313595742443607128_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHU7kPK7H2yzZUnTlh8ZMxVOMNfpq35Qsw4w1-mrflCzMYLokSXxT9J2NllOm6moxIp2TS6fKMX1p8w3b7z9m_q&_nc_ohc=nRmSn2BIUxwQ7kNvwGlh4B8&_nc_oc=AdmeH6EkPvPHiDDMzv4fs5mYVufKYGAt-P-PW8-hxM6Qy6ipvVZoJnbJ0lMczr6MdDKbxbXhT1Bsy8lvwrKEGdAY&_nc_zt=24&_nc_ht=scontent.fhan2-4.fna&_nc_gid=lCIC4Bx56CiH104oBXlJ1Q&oh=00_AfJEry-lRiRTpncqdE8Ipt728bj62-uIybneG90y_Zv5NA&oe=682F775F"
                alt="">
            <div class="space-y-2">
                <p class="text-lg text-zinc-400">Hồ sơ</p>
                <h1 class="text-6xl font-bold">Đuông Dừa</h1>
                <p class="mt-1 text-lg text-zinc-400">? Playlist công khai • ??? đang theo dõi</p>
            </div>
        </div>

        <div class="px-10 overflow-auto scrollbar-style h-[calc(100vh-450px)]">
            <div>
                <h2 class="mb-4 text-lg font-semibold">Playlist công khai</h2>
                <div class="flex overflow-x-auto space-x-7 scrollbar-style">
                    <div v-for="i in 3" :key="i" class="flex-shrink-0 w-32">
                        <div class="w-full h-32 mb-2 rounded bg-zinc-700">


                        </div>
                        <p class="font-medium">Playlist#{{ i }}</p>
                        <p class="text-sm text-zinc-400">{{ i * 100 }} người theo dõi</p>
                    </div>
                </div>
            </div>

            <div class="mt-8">
                <h2 class="mb-4 text-lg font-semibold">Đang theo dõi</h2>
                <div class="flex overflow-x-auto space-x-7 scrollbar-style">
                    <div v-for="i in 4" :key="i" class="flex-shrink-0">
                        <div class="w-32 h-32 mb-5 rounded-full bg-zinc-700">


                        </div>
                        <p class="text-sm text-zinc-400"> Ca sĩ {{ i }}</p>

                    </div>

                </div>
            </div>

            <div class="mt-8">
                <h2 class="mb-4 text-lg font-semibold">Danh sách phát</h2>
                <div class="flex overflow-x-auto space-x-7 scrollbar-style">
                    <div v-for="i in 3" :key="i" class="flex-shrink-0 w-32 ">
                        <div class="w-full h-32 mb-2 rounded bg-zinc-700">


                        </div>
                        <p class="font-medium">Playlist#{{ i }}</p>
                        <p class="text-sm text-zinc-400">{{ i * 100 }} người theo dõi</p>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<style>
.scrollbar-style {
    scrollbar-width: medium;
    scrollbar-color: #BC4D15 transparent;
}
</style>
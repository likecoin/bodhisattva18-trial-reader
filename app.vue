<template>
  <div class="flex flex-col items-stretch flex-grow h-full">
    <header class="fixed z-10 border-b border-[#727272] p-4 top-0 inset-x-0 bg-[#E5DFD3]">
      <div class="flex justify-between items-center max-w-[768px] mx-auto">
        <UPopover :popper="{ placement: 'bottom-start' }">
          <UButton color="gray" variant="ghost" trailing-icon="i-heroicons-chevron-down-20-solid">
            <span class="text-[12px] md:text-[14px]">第一章</span><span class="text-[16px] md:text-[20px] font-serif">冰菩薩</span>
          </UButton>

          <template #panel>
            <div class="p-4">
              <div>
                <div class="text-[14px] font-[600]">免費試閱</div>
                <ul class="mt-[12px] text-[16px] font-serif [&>li]:border-b [&>li:first-child]:border-t [&>li]:py-2 [&>li]:border-[rgba(0,0,0,0.1)] [&_span]:text-[12px] [&_span]:font-sans">
                  <li><p><span>第一章</span> 冰菩薩 / Ice Bodhisattva</p></li>
                </ul>
              </div>
              <div class="mt-[32px]">
                <div class="text-[14px] font-[600]">購買內容</div>
                <ul class="mt-[12px] text-[16px] font-serif [&>li]:border-b [&>li:first-child]:border-t [&>li]:py-2 [&>li]:border-[rgba(0,0,0,0.1)] [&_span]:text-[12px] [&_span]:font-sans [&_p]:opacity-30">
                  <li><p><span>第二章</span> 泥菩薩/ Mud Bodhisattva</p></li>
                  <li><p><span>第三章</span> 花菩薩 / Flower Bodhisattva</p></li>
                  <li><p><span>第四章</span> 樹菩薩 / Tree Bodhisattva</p></li>
                  <li><p><span>第五章</span> 木菩薩 / Wood Bodhisattva</p></li>
                  <li><p><span>第六章</span> 光菩薩 / Light Bodhisattva</p></li>
                  <li><p><span>第七章</span> 影菩薩 / Shadow Bodhisattva</p></li>
                  <li><p><span>第八章</span> 風菩薩 / Wind Bodhisattva</p></li>
                  <li><p><span>第九章</span> 沙菩薩 / Sand Bodhisattva</p></li>
                  <li><p><span>第十章</span> 雲菩薩 / Cloud Bodhisattva</p></li>
                  <li><p><span>第十一章</span> 肉菩薩 / Flesh Bodhisattva</p></li>
                  <li><p><span>第十二章</span> 火菩薩 / Fire Bodhisattva</p></li>
                  <li><p><span>第十三章</span> 電菩薩 / Electric Bodhisattva</p></li>
                  <li><p><span>第十四章</span> 紙菩薩 / Paper Bodhisattva</p></li>
                  <li><p><span>第十五章</span> 金菩薩 / Gold Bodhisattva</p></li>
                  <li><p><span>第十六章</span> 膠菩薩 / Plastic Bodhisattva</p></li>
                  <li><p><span>第十七章</span> 疫菩薩 / Pandemic Bodhisattva</p></li>
                  <li><p><span>第十八章</span> 空菩薩 / Bodhisattva of Emptiness</p></li>
                </ul>
              </div>
            </div>
          </template>
        </UPopover>

        <div class="flex items-center gap-4">
          <UButton
            label="購買"
            icon="i-heroicons-shopping-bag"
            color="black"
            size="md"
            @click="handleClickPurchaseButton"
          />

          <UPopover :popper="{ placement: 'bottom-end' }">
            <UButton color="gray" icon="i-heroicons-bars-3" variant="ghost" />

            <template #panel>
              <div class="p-4">
                <UButton
                  :to="backButtonURL"
                  label="返回書頁"
                  icon="i-heroicons-arrow-uturn-left"
                  color="black"
                  variant="link"
                  :padded="false"
                />

                <hr class="mt-[8px] opacity-10 border-b border-black" />

                <div class="text-center mt-[24px]">
                  <p class="font-serif text-[20px]">菩薩 18 / Bodhisattva 18</p>
                  <div class="flex justify-between gap-4">
                    <p class="text-[12px] text-[black] opacity-50">董啟章</p>
                    <p class="text-[12px] text-[black] opacity-50">US$ 16 起</p>
                  </div>
                </div>

                <UButton
                  class="mt-[16px]"
                  label="購買電子書"
                  icon="i-heroicons-shopping-bag"
                  color="black"
                  size="lg"
                  block
                  @click="handleClickPurchaseButton"
                />
              </div>
            </template>
          </UPopover>
        </div>
      </div>
    </header>

    <main class="relative flex-grow py-[64px]">
      <div class="flex flex-col items-center w-full max-w-[768px] h-full mx-auto">
        <div
          class="relative w-full h-[60svh] max-h-[596px] bg-cover bg-bottom"
          :style="`background-image: linear-gradient(to bottom, transparent 80%, #E5DFD3), url(${illustration})`"
        />

        <div class="[&>p]:indent-[24pt] space-y-[24px] leading-[1.6] font-serif px-4">
          <h1 class="text-[28px] text-center mt-[24px]">冰菩薩 / Ice Bodhisattva</h1>
          <p>沒有人見過冰菩薩，甚至沒有人聽說過冰菩薩。但是，攀山者卻一心要尋找冰菩薩。他曾經在夢裡，瞥見過冰菩薩的聖容。在夢中，他沿著一條河追溯它的源頭——從寬闊的下游開始，逆流而上，直至高山上湍急的細流。在兩條急流的會合處，他看見水裡半浮半沉著一尊半雪白半透明的菩薩像。那形像在夢中一閃而過，殘留下來的只是白花花的波浪。</p>
          <p>自此他便立志要尋找冰菩薩的真身。他堅信冰菩薩一定是處於高海拔的冰封之地。他開始學習攀山，經過多年的艱苦歷練，成為了傑出的攀山者。他攀爬過世界上多個高山的頂峰，但是他一直找不到心中的冰菩薩。</p>
          <p>攀山者曾經跟同伴分享他的追求，但沒有人明白他。說到那個夢，有人說那只是普通的冰塊，有人說是一尾大魚，也有人說那是一具屍體。但怎樣說，也只是一個夢而已。後來攀山者就不再跟人說冰菩薩的事。</p>
          <p>這次攀山，他來到另一個高峰。他和其他隊員在陽光明媚的一天決定攻頂。可是，半途上天色驟然陰暗下來，並且刮起了大風，視野變得一片模糊。隊伍卡在中間，進退兩難。這時候，他抬頭望向頂峰，在猶如白浪翻騰的風雪中，看見了冰菩薩的巨大臉容。他忽然領悟，冰菩薩無疑就是整座山峰本身。他呼喚著冰菩薩，冰菩薩也以一聲巨響回應。命懸一線的他，頓即失去了知覺。</p>
          <p>攀山者醒來的時候，躺在營地的救護站內。早前的雪崩，埋葬了五名隊員，另外十數人受傷。攀山者受的傷不重，但是，他的心卻沒法平伏。他苦苦尋找多年的冰菩薩，原來是個毫無憐憫之心的害人的惡魔。晚上，他悄悄離開了營地，下山去了。</p>
          <p>走了一整晚，在天亮的時候，攀山者來到一條溪流旁邊，看見一間破敗的茅舍。他走進茅舍，想向屋主討些食物。只見茅舍裡有一個蓬頭垢面、滿臉鬍子的男人，在敲鑿著一塊與人等高的冰塊。那塊冰，呈現出一個站立的女子像。攀山者一驚，立即跪了下來。那形像，就是多年前他夢中所見的冰菩薩。</p>
          <p>鑿冰人把完成的菩薩像搬到茅舍外面，放在溪流旁邊的大石台上。然後，回到屋裡拿了幾個饅頭和一瓶羊奶，交給攀山者，並且囑咐他在溪邊守護著冰菩薩。鑿冰人隨即推著木頭車，到山上去了。</p>
          <p>攀山者坐在地上，一邊吃著饅頭，喝著羊奶，一邊凝望著眼前那夢寐以求的冰菩薩。冰菩薩有著女子的婀娜身姿，頭戴菩薩冠，身穿菩薩裙，肌膚半雪白半透明，修長的手腳似舞非舞，似動非動。肩上一朵含苞的冰蓮花，指尖一朵盛開的冰蓮花，腰際一朵凋謝的冰蓮花。那不就是夢中在白浪裡浮沉的冰菩薩嗎？攀山者不期然流下了眼淚。冰菩薩也流下了眼淚。</p>
          <p>太陽漸漸攀升，氣溫亦變得溫暖。在陽光下的冰菩薩開始慢慢溶解。從頭頂開始，臉面、脖子、肩膀、雙臂、身軀、下盤、雙腿，直至只剩下兩隻腳掌。解凍的冷水從石台上流到旁邊的溪裡，隨著溪水滾滾而下。也有一部分，隨著陽光的照射而升騰到空中。攀山者眼巴巴地望著消失中的冰菩薩，無法加以守護，急出更多的眼淚來了。</p>
          <p>黃昏時分，夕陽西下。石台上一滴水也不剩。攀山者還坐在旁邊，呆著，眼淚卻早已乾了。樹叢中傳來木頭車的聲音。鑿冰人的身影慢慢冒出，木頭車上以乾草蓋著另一塊冰。</p>
          <p class="mt-[48px]">No one had seen the Ice Bodhisattva, and no one had even heard of the Ice Bodhisattva. However, the Climber was determined to find the Ice Bodhisattva. He once caught a glimpse of the holy figure of the Ice Bodhisattva in his dream. In the dream, he traced the origin of a river, beginning at the vast flood plain and going upstream against the current, all the way to the steep and narrow upper course on the high mountains. At the confluence of the two rapids, he saw a half-white and half-transparent statue of a Bodhisattva, half-floating and half-sinking in the water. The figure flashed by in the dream, leaving behind only after-images of white waves.</p>
          <p>From then on, he was determined to find the physical incarnation of the Ice Bodhisattva. He firmly believed that the Ice Bodhisattva must be located in the frozen lands at high altitudes. He began to learn climbing, and after many years of hard training, he became an outstanding climber. He had climbed the peaks of many mountains in the world, but he had not found the Ice Bodhisattva in his heart.</p>
          <p>The Climber used to share his pursuit with his companions, but no one understood him. When hearing about the dream, some said it was just a block of ice, some said it was a big fish, and some even suggested it was a corpse. No matter what, it was just a dream. Later, the Climber stopped talking about the Ice Bodhisattva to others.</p>
          <p>This time, the Climber came to another peak. He and his team decided to make the summit attempt on a sunny day. However, halfway up, the sky suddenly darkened, a strong wind blew, and the visibility became blurred. The team was stuck in the middle, with difficulty moving forward or backward. At this moment, he looked up at the peak and saw the colossal countenance of the Ice Bodhisattva in the blizzard that looked like surging white waves. He suddenly realized that the Ice Bodhisattva was undoubtedly the mountain peak itself. He called out to the Ice Bodhisattva, and it responded with a thunderous sound. At the brink of life and death, he lost consciousness all of a sudden.</p>
          <p>When the Climber woke up, he was lying in a first aid station in the camp. An earlier avalanche had buried five team members, and more than ten others were injured. The injuries the Climber sustained were not severe, but his heart could not be calmed. The Ice Bodhisattva he had been searching for so painfully for many years turned out to be a ruthless and murderous demon. That night, he quietly left the camp and descended the mountain.</p>
          <p>After walking all night, the Climber came to a brook at dawn and saw a dilapidated thatched hut. He walked into the hut, intending to ask the owner for some food. Inside, there was a disheveled man with a full beard, chiseling a block of ice as tall as a person. The ice block was shaping into the figure of a standing woman. The Climber was shocked and immediately knelt down. That figure was the Ice Bodhisattva he had seen in his dream many years ago.</p>
          <p>The Ice Sculptor moved the completed statue of the Bodhisattva outside the hut and placed It on a large stone platform next to the brook. Then, he went back into the house, fetched a few steamed buns and a bottle of sheep’s milk, handed them to the Climber, and asked him to guard the Ice Bodhisattva by the stream. The Ice Sculptor then pushed his wooden cart and went up the mountain.</p>
          <p>The Climber sat on the ground, eating the steamed buns and drinking the sheep’s milk while staring at the Ice Bodhisattva he had been longing for in his dreams. The Ice Bodhisattva had the graceful posture of a woman, wearing a crown and a skirt. Her skin was half-white and half-transparent, her long arms and legs seemed to be dancing yet not dancing, moving yet not moving.</p>
          <p>There was an ice lotus bud on her shoulder, a blooming ice lotus at her fingertips, and a withered ice lotus at her waist. Wasn’t this the Ice Bodhisattva that was floating and sinking in the white waves in his dream? The Climber could not help but shed tears. The Ice Bodhisattva also shed tears.</p>
          <p>The sun gradually rose, and the temperature became warmer. Under the sunlight, the Ice Bodhisattva began to melt slowly. Starting from the top of her head, her face, neck, shoulders, arms, body, lower body, legs, until only two feet were left. The thawing cold water flowed from the stone platform into the adjacent brook, rolling downstream with the running water. A portion of it also evaporated into the air under the sunlight. Not being able to protect her, the Climber watched the disappearing Ice Bodhisattva with desperate eyes, and shed even more tears.</p>
          <p>At dusk, as the sun set in the west, there was not a drop of water left on the stone platform. The Climber was still sitting there, dazed, but his tears had long dried up. The sound of the wooden cart came from the bushes. The figure of the Ice Sculptor slowly appeared, and another block of ice covered with dry straw was lying on the wooden cart.</p>
        </div>

        <img
          class="rounded-[4px] [box-shadow:-2.35px_14px_21px_0px_rgba(0,_0,_0,_0.12)] mx-auto mt-[64px]"
          src="https://static.like.co/thumbnail/?url=https%3A%2F%2Farweave.net%2FdWBzG6862uxUFSQaI7MHTHJrH0U91mimqSS013ooEpk&width=200"
        />

        <div class="text-center mt-[12px]">
          <p class="font-serif text-[20px]">菩薩 18 / Bodhisattva 18</p>
          <p class="text-[12px] text-[black] opacity-50">董啟章</p>
        </div>
  
        <PurchaseOptionList class="mt-[24px]" />
      </div>
    </main>

    <UModal v-model="isPurchaseModalOpen">
      <UCard :ui="{ header: { base: 'flex justify-center items-center gap-2'} }">
        <template #header>
          <UIcon name="i-heroicons-shopping-bag" />
          購買電子書
        </template>

        <PurchaseOptionList />
      </UCard>
    </UModal>
  </div>
</template>

<script setup lang="ts">
import illustration from '~/assets/illustration.jpeg';

const title = '試閱 | 菩薩 18 / Bodhisattva 18 - 董啟章 | Liker Land';
const description = '試閱第一章 - 冰菩薩 / Ice Bodhisattva';

useHead({
  htmlAttrs: {
    class: 'h-full bg-slate-50',
    style: 'background-color: #E5DFD3; color: #333333;',
  },
  bodyAttrs: {
    class: 'h-full'
  },
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: "",
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;600&display=swap',
    },
  ],
  title,
  meta: [
    {
      name: 'description',
      content: description,
    },
    {
      property: 'og:title',
      content: title,
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:image',
      content: 'https://static.like.co/thumbnail/?url=https%3A%2F%2Farweave.net%2FdWBzG6862uxUFSQaI7MHTHJrH0U91mimqSS013ooEpk&width=400',
    },
    {
      property: 'og:url',
      content: 'https://books.liker.land/bodhisattva18/sample',
    },
  ],
});

const isPurchaseModalOpen = ref(false)

const route = useRoute();

const homePageURL = 'https://books.liker.land/bodhisattva18';

const backButtonURL = computed(() => {
  const query = new URLSearchParams(route.query as Record<string, string>);
  const qs = query.toString();
  return `${homePageURL}${qs ? `?${qs}` : ''}`;
});

function handleClickPurchaseButton() {
  isPurchaseModalOpen.value = true;
}
</script>

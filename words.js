// words.js 词库文件
const myWordBank = [
    { 
        id: 1, 
        word: "みやびやか", 
        kanji: "雅やか", 
        kana: "みやびやか", 
        meaning: "优雅，高雅，风雅",
        example_jp: "彼女はみやびやかな衣装を身にまとっていた。",
        example_cn: "她身穿优雅的服装。"
    },
    { 
        id: 2, 
        word: "くらます", 
        kanji: "晦ます / 眩ます", 
        kana: "くらます", 
        meaning: "隐藏，掩盖，欺骗",
        example_jp: "彼は借金を抱えたまま、行方をくらました。",
        example_cn: "他背负着债务，隐藏了行踪（下落不明）。"
    },
    { 
        id: 3, 
        word: "ややこしい", 
        kanji: "ややこしい", 
        kana: "ややこしい", 
        meaning: "复杂，麻烦，难办",
        example_jp: "人間関係がややこしい職場には行きたくない。",
        example_cn: "我不想去人际关系复杂的职场。"
    },
    { 
        id: 4, 
        word: "むっちり", 
        kanji: "むっちり", 
        kana: "むっちり", 
        meaning: "丰满，肉感，严实",
        example_jp: "赤ちゃんのむっちりとした腕が可愛い。",
        example_cn: "婴儿肉嘟嘟（丰满）的手臂很可爱。"
    },
    { 
        id: 5, 
        word: "そこら", 
        kanji: "其処ら", 
        kana: "そこら", 
        meaning: "那一带，附近，左右",
        example_jp: "鍵はそのそこらに置いたはずだが、見当たらない。",
        example_cn: "钥匙应该放在那一带了，但找不到。"
    },
    { 
        id: 6, 
        word: "おめかし", 
        kanji: "おめかし", 
        kana: "おめかし", 
        meaning: "打扮，修饰",
        example_jp: "彼女はパーティーのためにおめかしをした。",
        example_cn: "她为了聚会精心打扮了一番。"
    },
    { 
        id: 7, 
        word: "がつがつ", 
        kanji: "がつがつ", 
        kana: "がつがつ", 
        meaning: "贪婪，狼吞虎咽",
        example_jp: "三日間何も食べていなかったので、がつがつと料理を食べた。",
        example_cn: "因为三天没吃东西了，狼吞虎咽地吃起了饭菜。"
    },
    { 
        id: 8, 
        word: "ひらめき", 
        kanji: "閃き", 
        kana: "ひらめき", 
        meaning: "闪念，灵光一现",
        example_jp: "ふとした瞬間に、素晴らしいアイデアのひらめきがあった。",
        example_cn: "在不经意的瞬间，突然闪过一个极好的主意。"
    },
    { 
        id: 9, 
        word: "ちょきちょき", 
        kanji: "ちょきちょき", 
        kana: "ちょきちょき", 
        meaning: "咔嚓咔嚓（剪刀剪东西的声音）",
        example_jp: "美容師が髪をちょきちょきと切る音が聞こえる。",
        example_cn: "能听到理发师咔嚓咔嚓剪头发的声音。"
    },
    { 
        id: 10, 
        word: "にんまり", 
        kanji: "にんまり", 
        kana: "にんまり", 
        meaning: "满意地笑，窃笑",
        example_jp: "自分の計画通りに事が進み、彼はにんまりと笑った。",
        example_cn: "事情按自己的计划发展，他满意地笑了。"
    },
    { 
        id: 11, 
        word: "のそのそ", 
        kanji: "のそのそ", 
        kana: "のそのそ", 
        meaning: "迟缓，慢吞吞",
        example_jp: "大きな熊が森の中からのそのそと姿を現した。",
        example_cn: "一只大熊慢吞吞地从森林里现身了。"
    },
    { 
        id: 12, 
        word: "へこむ", 
        kanji: "凹む", 
        kana: "へこむ", 
        meaning: "凹陷，退缩，沮丧",
        example_jp: "試験に落ちて、すっかりへこんでしまった。",
        example_cn: "考试落榜了，彻底沮丧了。"
    },
    { 
        id: 13, 
        word: "もがく", 
        kanji: "踠く", 
        kana: "もがく", 
        meaning: "挣扎，焦急，拼命",
        example_jp: "借金を返そうと必死にもがいている。",
        example_cn: "为了还清债务正在拼命挣扎。"
    },
    { 
        id: 14, 
        word: "れんが", 
        kanji: "煉瓦", 
        kana: "れんが", 
        meaning: "砖，砖块",
        example_jp: "この建物は古いれんが造りだ。",
        example_cn: "这座建筑物是古老的砖瓦结构。"
    },
    { 
        id: 15, 
        word: "かさむ", 
        kanji: "嵩む", 
        kana: "かさむ", 
        meaning: "增多，增大（多指开销、利息等负担）",
        example_jp: "物価が上がり、生活費がかさむ一方だ。",
        example_cn: "物价上涨，生活费不断增加。"
    },
    { 
        id: 16, 
        word: "ぽろぽろ", 
        kanji: "ぽろぽろ", 
        kana: "ぽろぽろ", 
        meaning: "簌簌地（掉下），纷纷落下",
        example_jp: "悲しい映画を見て、涙がぽろぽろとこぼれた。",
        example_cn: "看了悲伤的电影，眼泪簌簌地落了下来。"
    },
    { 
        id: 17, 
        word: "にじみ出る", 
        kanji: "滲み出る", 
        kana: "にじみでる", 
        meaning: "渗出，流露，显露",
        example_jp: "彼の手紙には、妻への深い愛情がにじみ出ている。",
        example_cn: "他的信中流露出对妻子深厚的爱。"
    },
    { 
        id: 18, 
        word: "たらし込む", 
        kanji: "垂らし込む / 誑し込む", 
        kana: "たらしこむ", 
        meaning: "欺骗，诱骗，勾引",
        example_jp: "甘い言葉で女性をたらし込む詐欺師。",
        example_cn: "用甜言蜜语诱骗女性的骗子。"
    },
    { 
        id: 19, 
        word: "ならびに", 
        kanji: "並びに", 
        kana: "ならびに", 
        meaning: "以及，和（郑重书面语）",
        example_jp: "社長ならびに役員一同、心よりお詫び申し上げます。",
        example_cn: "总经理及全体董事，由衷地表示歉意。"
    },
    { 
        id: 20, 
        word: "くるむ", 
        kanji: "包む", 
        kana: "くるむ", 
        meaning: "包，裹",
        example_jp: "寒くないように、赤ん坊を毛布でくるんだ。",
        example_cn: "为了不让婴儿受凉，用毛毯把他裹了起来。"
    },
    { 
        id: 21, 
        word: "ばたばた", 
        kanji: "ばたばた", 
        kana: "ばたばた", 
        meaning: "慌慌张张，拍打，接连倒下",
        example_jp: "出発の準備で、朝からばたばたしている。",
        example_cn: "为了准备出发，从早上开始就忙得团团转。"
    },
    { 
        id: 22, 
        word: "すっぽかす", 
        kanji: "すっぽかす", 
        kana: "すっぽかす", 
        meaning: "爽约，放鸽子，置之不理",
        example_jp: "彼はデートの約束をすっぽかした。",
        example_cn: "他约会爽约（放了鸽子）了。"
    },
    { 
        id: 23, 
        word: "それでいて", 
        kanji: "其れで居て", 
        kana: "それでいて", 
        meaning: "尽管如此，可是",
        example_jp: "この仕事は給料が安い。それでいて責任は重い。",
        example_cn: "这份工作工资低。尽管如此，责任却很重。"
    },
    { 
        id: 24, 
        word: "さくら", 
        kanji: "偽客", 
        kana: "さくら", 
        meaning: "托儿（伪装的客人）",
        example_jp: "あの店に行列ができているが、半分はさくららしい。",
        example_cn: "那家店虽然排着长队，但据说一半是托儿。"
    },
    { 
        id: 25, 
        word: "もろい", 
        kanji: "脆い", 
        kana: "もろい", 
        meaning: "脆弱，易坏，易受感动",
        example_jp: "年を取って、すっかり涙もろくなった。",
        example_cn: "上了年纪，变得非常容易掉眼泪（脆弱）。"
    },
    { 
        id: 26, 
        word: "そろり", 
        kanji: "そろり", 
        kana: "そろり", 
        meaning: "轻轻地，缓慢地",
        example_jp: "赤ちゃんを起こさないように、そろりと部屋を出た。",
        example_cn: "为了不吵醒婴儿，蹑手蹑脚地走出了房间。"
    },
    { 
        id: 27, 
        word: "なぞらえる", 
        kanji: "準える", 
        kana: "なぞらえる", 
        meaning: "仿造，比拟，比作",
        example_jp: "人生をしばしば航海になぞらえることがある。",
        example_cn: "人们经常把人生比作航海。"
    },
    { 
        id: 28, 
        word: "ぼろ", 
        kanji: "襤褸", 
        kana: "ぼろ", 
        meaning: "破烂，缺点，破绽",
        example_jp: "言い訳をすればするほど、ぼろを出す結果になる。",
        example_cn: "越是辩解，结果越是露出破绽。"
    },
    { 
        id: 29, 
        word: "やけに", 
        kanji: "焼けに", 
        kana: "やけに", 
        meaning: "非常，极其（常伴随不寻常的感觉）",
        example_jp: "今日はやけに喉が渇く。",
        example_cn: "今天口渴得要命。"
    },
    { 
        id: 30, 
        word: "たらたら", 
        kanji: "たらたら", 
        kana: "たらたら", 
        meaning: "滴答滴答，喋喋不休，磨磨蹭蹭",
        example_jp: "不満をたらたらこぼす。",
        example_cn: "喋喋不休地发牢骚。"
    },
    { 
        id: 31, 
        word: "わざわざ", 
        kanji: "態々", 
        kana: "わざわざ", 
        meaning: "特意，专程",
        example_jp: "雨の中をわざわざお越しいただき、ありがとうございます。",
        example_cn: "感谢您冒雨特意前来。"
    },
    { 
        id: 32, 
        word: "ぎごちない", 
        kanji: "ぎごちない", 
        kana: "ぎごちない", 
        meaning: "笨拙，生硬，不自然",
        example_jp: "彼は英語を話す時、いつもぎごちない。",
        example_cn: "他说英语时总是很生硬。"
    },
    { 
        id: 33, 
        word: "あたふた", 
        kanji: "あたふた", 
        kana: "あたふた", 
        meaning: "慌慌张张，急急忙忙",
        example_jp: "突然の指名に、あたふたしてしまった。",
        example_cn: "突然被点名，弄得我慌慌张张的。"
    },
    { 
        id: 34, 
        word: "なだめる", 
        kanji: "宥める", 
        kana: "なだめる", 
        meaning: "劝慰，安抚，平息",
        example_jp: "怒っている客をなんとかしてなだめた。",
        example_cn: "想办法安抚了生气的客人。"
    },
    { 
        id: 35, 
        word: "あがめる", 
        kanji: "崇める", 
        kana: "あがめる", 
        meaning: "崇拜，尊敬",
        example_jp: "彼は村人から神のようにあがめられている。",
        example_cn: "他被村民们像神一样崇拜着。"
    },
    { 
        id: 36, 
        word: "さも", 
        kanji: "然も", 
        kana: "さも", 
        meaning: "仿佛，确实，非常",
        example_jp: "彼はさも知っているかのような顔をして話した。",
        example_cn: "他装出一副仿佛什么都知道的表情在说话。"
    },
    { 
        id: 37, 
        word: "さっと", 
        kanji: "さっと", 
        kana: "さっと", 
        meaning: "迅速地，一下子",
        example_jp: "自転車がさっと通り過ぎた。",
        example_cn: "自行车嗖地一下开过去了。"
    },
    { 
        id: 38, 
        word: "じくじく", 
        kanji: "じくじく", 
        kana: "じくじく", 
        meaning: "湿漉漉，渗水，隐隐作痛",
        example_jp: "雨で靴の中がじくじくしている。",
        example_cn: "因为下雨，鞋里湿漉漉的。"
    },
    { 
        id: 39, 
        word: "つるつる", 
        kanji: "つるつる", 
        kana: "つるつる", 
        meaning: "光滑，溜滑",
        example_jp: "道が凍ってつるつる滑る。",
        example_cn: "道路结冰了，非常滑。"
    },
    { 
        id: 40, 
        word: "やきもき", 
        kanji: "やきもき", 
        kana: "やきもき", 
        meaning: "焦虑，焦急，坐立不安",
        example_jp: "試験の結果がなかなか来なくてやきもきする。",
        example_cn: "考试结果迟迟没来，急得坐立不安。"
    },
    { 
        id: 41, 
        word: "こぞって", 
        kanji: "挙って", 
        kana: "こぞって", 
        meaning: "全部，全都",
        example_jp: "町の人はこぞって祭りに参加した。",
        example_cn: "镇上的人全都参加了祭典。"
    },
    { 
        id: 42, 
        word: "それにしては", 
        kanji: "其れにしては", 
        kana: "それにしては", 
        meaning: "照那样说来，（虽然...）却...",
        example_jp: "彼はアメリカに5年もいたが、それにしては英語が下手だ。",
        example_cn: "他在美国呆了5年，照理说英语应该不错，却很差。"
    },
    { 
        id: 43, 
        word: "かねがね", 
        kanji: "予々", 
        kana: "かねがね", 
        meaning: "以前，早就",
        example_jp: "先生のお名前はかねがね伺っております。",
        example_cn: "老师的大名，我早就久仰了。"
    },
    { 
        id: 44, 
        word: "いたたまれない", 
        kanji: "居堪れない", 
        kana: "いたたまれない", 
        meaning: "无地自容，待不下去",
        example_jp: "あまりの恥ずかしさに、その場にいたたまれなくなった。",
        example_cn: "因为太丢人了，在那个地方实在待不下去了。"
    },
    { 
        id: 45, 
        word: "じたばた", 
        kanji: "じたばた", 
        kana: "じたばた", 
        meaning: "挣扎，慌张，手忙脚乱",
        example_jp: "今さらじたばたしても始まらない。",
        example_cn: "事到如今再怎么挣扎也无济于事了。"
    },
    { 
        id: 46, 
        word: "びくとも", 
        kanji: "びくとも", 
        kana: "びくとも", 
        meaning: "丝毫（不动）",
        example_jp: "大風が吹いても、その木はびくともしない。",
        example_cn: "即使刮大风，那棵树也丝毫不动。"
    },
    { 
        id: 47, 
        word: "おびえる", 
        kanji: "怯える", 
        kana: "おびえる", 
        meaning: "害怕，胆怯，发怵",
        example_jp: "小鳥は大きな音におびえているようだった。",
        example_cn: "小鸟好像被巨大的声音吓坏了。"
    },
    { 
        id: 48, 
        word: "あえて", 
        kanji: "敢えて", 
        kana: "あえて", 
        meaning: "敢于，硬要，勉强",
        example_jp: "反対されるのはわかっているが、あえて提案する。",
        example_cn: "明知道会被反对，但我还是敢于提出这个建议。"
    },
    { 
        id: 49, 
        word: "てかてか", 
        kanji: "てかてか", 
        kana: "てかてか", 
        meaning: "发亮，油光闪亮",
        example_jp: "油で顔がてかてかしている。",
        example_cn: "脸上满是油，油光发亮的。"
    },
    { 
        id: 50, 
        word: "たくらむ", 
        kanji: "企む", 
        kana: "たくらむ", 
        meaning: "企图，图谋",
        example_jp: "彼は陰で何か悪いことをたくらんでいるらしい。",
        example_cn: "他好像在背地里图谋什么坏事。"
    },
{ 
        id: 51, 
        word: "うきうき", 
        kanji: "浮き浮き", 
        kana: "うきうき", 
        pos: "副词 / 自动词・サ变",
        meaning: "兴高采烈，欢欣雀跃",
        example_jp: "明日はデートなので、彼女はうきうきしている。",
        example_cn: "因为明天要约会，她显得兴高采烈。"
    },
    { 
        id: 52, 
        word: "へなへな", 
        kanji: "へなへな", 
        kana: "へなへな", 
        pos: "副词 / 形容动词 / 自动词・サ变",
        meaning: "软弱无力，瘫软",
        example_jp: "ショックな知らせを聞いて、へなへなと座り込んだ。",
        example_cn: "听到令人震惊的消息，瘫软地跌坐在地上。"
    },
    { 
        id: 53, 
        word: "むしゃくしゃ", 
        kanji: "むしゃくしゃ", 
        kana: "むしゃくしゃ", 
        pos: "副词 / 自动词・サ变",
        meaning: "心烦意乱，烦躁",
        example_jp: "上司に理不尽な怒られ方をして、むしゃくしゃする。",
        example_cn: "被上司无理地训斥了一顿，心里很烦躁。"
    },
    { 
        id: 54, 
        word: "〜じみる", 
        kanji: "〜染みる", 
        kana: "〜じみる", 
        pos: "接尾词 / 自动词・一段",
        meaning: "沾染…，带有…气息/倾向",
        example_jp: "彼の言うことは、いつも説教じみている。",
        example_cn: "他说的话总是带着说教的意味。"
    },
    { 
        id: 55, 
        word: "こじらせる", 
        kanji: "拗らせる", 
        kana: "こじらせる", 
        pos: "他动词・一段",
        meaning: "使复杂化，使恶化",
        example_jp: "風邪をこじらせて、肺炎になってしまった。",
        example_cn: "感冒恶化，变成了肺炎。"
    },
    { 
        id: 56, 
        word: "うらうら", 
        kanji: "麗らか / うらうら", 
        kana: "うらうら", 
        pos: "副词",
        meaning: "晴朗，和煦",
        example_jp: "春のうらうらとした陽気に誘われて散歩に出た。",
        example_cn: "被春日和煦的阳光吸引，出门散步了。"
    },
    { 
        id: 57, 
        word: "おっかない", 
        kanji: "おっかない", 
        kana: "おっかない", 
        pos: "形容词",
        meaning: "可怕，令人害怕",
        example_jp: "あの先生は怒ると本当におっかない。",
        example_cn: "那位老师发脾气时真的很可怕。"
    },
    { 
        id: 58, 
        word: "とどめる", 
        kanji: "留める / 止める", 
        kana: "とどめる", 
        pos: "他动词・一段",
        meaning: "保留，停留在...",
        example_jp: "被害を最小限にとどめるよう努力する。",
        example_cn: "努力将损失控制在最小限度。"
    },
    { 
        id: 59, 
        word: "はるか", 
        kanji: "遥か", 
        kana: "はるか", 
        pos: "形容动词 / 副词",
        meaning: "遥远",
        example_jp: "はるか遠くの山々に雪が積もっている。",
        example_cn: "遥远的群山上积着雪。"
    },
    { 
        id: 60, 
        word: "おおしけ", 
        kanji: "大時化", 
        kana: "おおしけ", 
        pos: "名词",
        meaning: "狂风巨浪",
        example_jp: "おおしけのため、漁船は港から出られなかった。",
        example_cn: "因为狂风巨浪，渔船无法出港。"
    },
    { 
        id: 61, 
        word: "よたよた", 
        kanji: "よたよた", 
        kana: "よたよた", 
        pos: "副词 / 自动词・サ变",
        meaning: "摇摇晃晃，步履蹒跚",
        example_jp: "お酒に酔って、よたよたと歩く。",
        example_cn: "喝醉了酒，走路摇摇晃晃的。"
    },
    { 
        id: 62, 
        word: "〜がましい", 
        kanji: "〜がましい", 
        kana: "〜がましい", 
        pos: "接尾词 / 形容词",
        meaning: "近似...，有...之嫌",
        example_jp: "押し付けがましい態度は嫌われる。",
        example_cn: "强加于人的态度会惹人讨厌。"
    },
    { 
        id: 63, 
        word: "じんわり", 
        kanji: "じんわり", 
        kana: "じんわり", 
        pos: "副词",
        meaning: "渐渐地，慢慢渗出",
        example_jp: "感動して、目に涙がじんわりと浮かんだ。",
        example_cn: "深受感动，眼泪渐渐在眼眶里打转。"
    },
    { 
        id: 64, 
        word: "わらび", 
        kanji: "蕨", 
        kana: "わらび", 
        pos: "名词",
        meaning: "蕨菜",
        example_jp: "春になると、山へわらびを採りに行く。",
        example_cn: "一到春天，就去山里采蕨菜。"
    },
    { 
        id: 65, 
        word: "いろは", 
        kanji: "伊呂波 / 色葉", 
        kana: "いろは", 
        pos: "名词",
        meaning: "入门，基础",
        example_jp: "仕事のいろはから丁寧に教える。",
        example_cn: "从工作的基础开始认真教起。"
    },
    { 
        id: 66, 
        word: "せかせる", 
        kanji: "急かせる", 
        kana: "せかせる", 
        pos: "他动词・一段",
        meaning: "催促",
        example_jp: "あまり人をせかせないでください。",
        example_cn: "请不要总是催促别人。"
    },
    { 
        id: 67, 
        word: "ねじれる", 
        kanji: "捩れる", 
        kana: "ねじれる", 
        pos: "自动词・一段",
        meaning: "扭曲，别扭",
        example_jp: "ネクタイがねじれていますよ。",
        example_cn: "你的领带扭曲了哦。"
    },
    { 
        id: 68, 
        word: "ずれ", 
        kanji: "ズレ / 擦れ", 
        kana: "ずれ", 
        pos: "名词",
        meaning: "偏差，错位",
        example_jp: "理想と現実の間に大きなずれがある。",
        example_cn: "理想与现实之间存在很大的偏差。"
    },
    { 
        id: 69, 
        word: "だるい", 
        kanji: "怠い", 
        kana: "だるい", 
        pos: "形容词",
        meaning: "慵懒，乏力",
        example_jp: "熱があって、体全体がだるい。",
        example_cn: "发烧了，全身乏力。"
    },
    { 
        id: 70, 
        word: "のめり込む", 
        kanji: "のめり込む / 滑り込む", 
        kana: "のめりこむ", 
        pos: "自动词・五段",
        meaning: "沉迷，陷入",
        example_jp: "彼はオンラインゲームに完全にのめり込んでいる。",
        example_cn: "他完全沉迷于网络游戏之中。"
    },
    { 
        id: 71, 
        word: "いかだ", 
        kanji: "筏", 
        kana: "いかだ", 
        pos: "名词",
        meaning: "木筏",
        example_jp: "木を組んでいかだを作り、川を下った。",
        example_cn: "把木头绑在一起做成木筏，顺流而下。"
    },
    { 
        id: 72, 
        word: "さびる", 
        kanji: "錆びる", 
        kana: "さびる", 
        pos: "自动词・一段",
        meaning: "生锈",
        example_jp: "雨ざらしにしておいた自転車がさびてしまった。",
        example_cn: "放在外面任凭风吹雨打的自行车生锈了。"
    },
    { 
        id: 73, 
        word: "おまけ", 
        kanji: "お負け / 御負け", 
        kana: "おまけ", 
        pos: "名词 / 自动词・サ变",
        meaning: "附赠品，减价",
        example_jp: "お菓子を買うと、可愛いおまけがついてくる。",
        example_cn: "买点心会附赠可爱的小赠品。"
    },
    { 
        id: 74, 
        word: "しばし", 
        kanji: "暫し", 
        kana: "しばし", 
        pos: "副词",
        meaning: "片刻，暂且",
        example_jp: "彼はその美しい景色を前に、しばし立ち止まった。",
        example_cn: "面对那美丽的景色，他停下了片刻的脚步。"
    },
    { 
        id: 75, 
        word: "とろとろ", 
        kanji: "とろとろ", 
        kana: "とろとろ", 
        pos: "副词 / 自动词・サ变",
        meaning: "浓稠，微火，昏昏欲睡",
        example_jp: "チーズがとろとろに溶けて美味しそうだ。",
        example_cn: "奶酪融化得十分浓稠，看起来很好吃。"
    },
    { 
        id: 76, 
        word: "そろい", 
        kanji: "揃い", 
        kana: "そろい", 
        pos: "名词 / 接尾词",
        meaning: "成套，齐全",
        example_jp: "家族でおそろいのTシャツを着て出かける。",
        example_cn: "一家人穿着成套的T恤出门。"
    },
    { 
        id: 77, 
        word: "したたか", 
        kanji: "強か / 健か", 
        kana: "したたか", 
        pos: "形容动词 / 副词",
        meaning: "极其，顽强，厉害",
        example_jp: "彼女は大人しそうに見えて、実はしたたかな女性だ。",
        example_cn: "她看起来很老实，实际上是个厉害（顽强）的女人。"
    },
    { 
        id: 78, 
        word: "どうやら", 
        kanji: "どうやら", 
        kana: "どうやら", 
        pos: "副词",
        meaning: "看来，总算",
        example_jp: "雲行きが怪しい。どうやら雨が降りそうだ。",
        example_cn: "天色阴沉，看来要下雨了。"
    },
    { 
        id: 79, 
        word: "もぎ取る", 
        kanji: "捥ぎ取る", 
        kana: "もぎとる", 
        pos: "他动词・五段",
        meaning: "夺取，强行摘下",
        example_jp: "敵からボールをもぎ取ってゴールを決めた。",
        example_cn: "从敌人那里夺下球并进了球。"
    },
    { 
        id: 80, 
        word: "しぶとい", 
        kanji: "しぶとい", 
        kana: "しぶとい", 
        pos: "形容词",
        meaning: "顽固，百折不挠",
        example_jp: "何度失敗してもしぶとく挑戦し続ける。",
        example_cn: "无论失败多少次，都百折不挠地继续挑战。"
    },
    { 
        id: 81, 
        word: "けなす", 
        kanji: "貶す", 
        kana: "けなす", 
        pos: "他动词・五段",
        meaning: "贬低，诽谤",
        example_jp: "他人の努力をけなすのは良くない。",
        example_cn: "贬低他人的努力是不好的。"
    },
    { 
        id: 82, 
        word: "ようこそ", 
        kanji: "ようこそ", 
        kana: "ようこそ", 
        pos: "感叹词",
        meaning: "欢迎",
        example_jp: "日本へようこそいらっしゃいました。",
        example_cn: "欢迎来到日本。"
    },
    { 
        id: 83, 
        word: "お参り", 
        kanji: "お参り / 御参り", 
        kana: "おまいり", 
        pos: "名词 / 自动词・サ变",
        meaning: "参拜",
        example_jp: "お正月には家族で神社にお参りに行く。",
        example_cn: "新年时和家人一起去神社参拜。"
    },
    { 
        id: 84, 
        word: "いとおしい", 
        kanji: "愛おしい", 
        kana: "いとおしい", 
        pos: "形容词",
        meaning: "值得怜爱，极其可爱",
        example_jp: "すやすやと眠る子供の顔がいとおしい。",
        example_cn: "孩子香甜入睡的脸庞真是惹人怜爱。"
    },
    { 
        id: 85, 
        word: "ひずみ", 
        kanji: "歪み", 
        kana: "ひずみ", 
        pos: "名词",
        meaning: "变形，不良影响",
        example_jp: "急激な経済成長が社会にひずみをもたらした。",
        example_cn: "急剧的经济增长给社会带来了不良影响。"
    },
    { 
        id: 86, 
        word: "かいつまむ", 
        kanji: "掻い摘む", 
        kana: "かいつまむ", 
        pos: "他动词・五段",
        meaning: "概括，简明扼要",
        example_jp: "要点だけをかいつまんでご説明します。",
        example_cn: "我只挑要点简明扼要地说明一下。"
    },
    { 
        id: 87, 
        word: "いちゃいちゃ", 
        kanji: "いちゃいちゃ", 
        kana: "いちゃいちゃ", 
        pos: "副词 / 自动词・サ变",
        meaning: "打情骂俏",
        example_jp: "人前でいちゃいちゃするのはやめてほしい。",
        example_cn: "希望你们不要在人前打情骂俏。"
    },
    { 
        id: 88, 
        word: "ほかほか", 
        kanji: "ほかほか", 
        kana: "ほかほか", 
        pos: "副词 / 形容动词 / 自动词・サ变",
        meaning: "热乎乎",
        example_jp: "炊きたてのほかほかご飯を食べる。",
        example_cn: "吃刚煮好的热乎乎的米饭。"
    },
    { 
        id: 89, 
        word: "いざという時", 
        kanji: "いざと言う時", 
        kana: "いざというとき", 
        pos: "名词 / 惯用语",
        meaning: "关键时刻，万一的时候",
        example_jp: "いざという時のために、非常食を用意しておく。",
        example_cn: "为了以防万一，准备好应急食品。"
    },
    { 
        id: 90, 
        word: "ひらめく", 
        kanji: "閃く", 
        kana: "ひらめく", 
        pos: "自动词・五段",
        meaning: "闪烁，闪念",
        example_jp: "いいアイデアが頭にひらめいた。",
        example_cn: "脑海中闪过一个好主意。"
    },
    { 
        id: 91, 
        word: "こんもり", 
        kanji: "こんもり", 
        kana: "こんもり", 
        pos: "副词 / 自动词・サ变",
        meaning: "茂密，隆起",
        example_jp: "木がこんもりと茂っている森の中に入る。",
        example_cn: "走入树木繁茂的森林。"
    },
    { 
        id: 92, 
        word: "ぼやける", 
        kanji: "ぼやける", 
        kana: "ぼやける", 
        pos: "自动词・一段",
        meaning: "模糊，发晕",
        example_jp: "霧で遠くの景色がぼやけて見える。",
        example_cn: "因为起雾，远处的景色看起来很模糊。"
    },
    { 
        id: 93, 
        word: "すっぽり", 
        kanji: "すっぽり", 
        kana: "すっぽり", 
        pos: "副词",
        meaning: "完全包住，整个套上",
        example_jp: "雪で町がすっぽりと覆われた。",
        example_cn: "小镇被大雪整个覆盖了。"
    },
    { 
        id: 94, 
        word: "おぞましい", 
        kanji: "悍ましい", 
        kana: "おぞましい", 
        pos: "形容词",
        meaning: "令人厌恶，极可怕的",
        example_jp: "その事件の詳細は、聞くもおぞましいものであった。",
        example_cn: "那起事件的细节，听起来都令人毛骨悚然。"
    },
    { 
        id: 95, 
        word: "やりくり", 
        kanji: "遣り繰り / やり繰り", 
        kana: "やりくり", 
        pos: "名词 / 他动词・サ变",
        meaning: "筹措，设法安排",
        example_jp: "少ない給料でなんとか家計をやりくりしている。",
        example_cn: "靠着微薄的工资想方设法维持家计。"
    },
    { 
        id: 96, 
        word: "〜がらみ", 
        kanji: "〜絡み", 
        kana: "〜がらみ", 
        pos: "接尾词",
        meaning: "与...有关，大概...",
        example_jp: "これは金銭がらみのトラブルのようだ。",
        example_cn: "这似乎是与金钱有关的纠纷。"
    },
    { 
        id: 97, 
        word: "ずっぷり", 
        kanji: "ずっぷり", 
        kana: "ずっぷり", 
        pos: "副词",
        meaning: "彻底，深深地（沉浸）",
        example_jp: "冷たい海の水にずっぷりと浸かる。",
        example_cn: "整个人完全浸泡在冰冷的海水中。"
    },
    { 
        id: 98, 
        word: "メンツ", 
        kanji: "面子", 
        kana: "メンツ", 
        pos: "名词",
        meaning: "面子，体面",
        example_jp: "ここで引き下がったらメンツが丸潰れだ。",
        example_cn: "如果在这里退缩的话，面子就全丢光了。"
    },
    { 
        id: 99, 
        word: "サラ金", 
        kanji: "サラ金", 
        kana: "サラきん", 
        pos: "名词",
        meaning: "上班族贷款（高利贷）",
        example_jp: "彼はギャンブルの借金でサラ金に手を出した。",
        example_cn: "他因为赌博欠债而借了高利贷。"
    },
    { 
        id: 100, 
        word: "ことごとく", 
        kanji: "悉く / 尽く", 
        kana: "ことごとく", 
        pos: "副词",
        meaning: "全部，统统",
        example_jp: "私の提案はことごとく却下された。",
        example_cn: "我的提案被统统驳回了。"
    },
{ 
        id: 101, 
        word: "がやがや", 
        kanji: "喧々 / がやがや", 
        kana: "がやがや", 
        pos: "副词 / 自动词・サ变",
        meaning: "喧闹，吵嚷",
        example_jp: "教室の中で生徒たちががやがやと騒いでいる。",
        example_cn: "学生们在教室里吵吵嚷嚷的。"
    },
    { 
        id: 102, 
        word: "ばね", 
        kanji: "発条 / 弾み", 
        kana: "ばね", 
        pos: "名词",
        meaning: "弹簧，发条，（身体的）弹性",
        example_jp: "失敗をばねにして、さらに頑張る。",
        example_cn: "将失败转化为动力（弹簧），更加努力。"
    },
    { 
        id: 103, 
        word: "あながち", 
        kanji: "強ち", 
        kana: "あながち", 
        pos: "副词",
        meaning: "（下接否定）未必，不一定，不见得",
        example_jp: "彼の意見もあながち間違っているとは言えない。",
        example_cn: "他的意见也未必可以说就是错的。"
    },
    { 
        id: 104, 
        word: "はらむ", 
        kanji: "孕む", 
        kana: "はらむ", 
        pos: "自动词・他动词・五段",
        meaning: "怀胎，包含，孕育",
        example_jp: "この計画は多くの危険をはらんでいる。",
        example_cn: "这个计划包含着许多危险。"
    },
    { 
        id: 105, 
        word: "もどかしい", 
        kanji: "擬かしい / 悶かしい", 
        kana: "もどかしい", 
        pos: "形容词",
        meaning: "令人焦急的，不耐烦的",
        example_jp: "言葉が通じなくてもどかしい思いをした。",
        example_cn: "因为语言不通而感到十分焦急。"
    },
    { 
        id: 106, 
        word: "うたた寝", 
        kanji: "転寝", 
        kana: "うたたね", 
        pos: "名词 / 自动词・サ变",
        meaning: "打盹，假寐",
        example_jp: "テレビを見ながらソファでうたた寝をしてしまった。",
        example_cn: "一边看电视一边在沙发上打了个盹。"
    },
    { 
        id: 107, 
        word: "くっきり", 
        kanji: "くっきり", 
        kana: "くっきり", 
        pos: "副词 / 自动词・サ变",
        meaning: "清清楚楚，鲜明",
        example_jp: "晴れた日には富士山がくっきりと見える。",
        example_cn: "晴天时能清楚地看到富士山。"
    },
    { 
        id: 108, 
        word: "のっそり", 
        kanji: "のっそり", 
        kana: "のっそり", 
        pos: "副词 / 自动词・サ变",
        meaning: "迟缓，慢吞吞",
        example_jp: "大きな男がのっそりと立ち上がった。",
        example_cn: "一个大块头男人慢吞吞地站了起来。"
    },
    { 
        id: 109, 
        word: "ずたずた", 
        kanji: "寸々", 
        kana: "ずたずた", 
        pos: "形容动词 / 名词",
        meaning: "破破烂烂，碎裂",
        example_jp: "手紙をずたずたに引き裂いた。",
        example_cn: "把信撕得粉碎。"
    },
    { 
        id: 110, 
        word: "いやに", 
        kanji: "嫌に", 
        kana: "いやに", 
        pos: "副词",
        meaning: "异常地，特别（多指不自然或奇怪的感觉）",
        example_jp: "今日はいやに静かだ。",
        example_cn: "今天出奇地安静。"
    },
    { 
        id: 111, 
        word: "ほんのり", 
        kanji: "ほんのり", 
        kana: "ほんのり", 
        pos: "副词 / 自动词・サ变",
        meaning: "微微，隐约",
        example_jp: "ほんのりと甘い香りが漂ってくる。",
        example_cn: "飘荡着微微的甜香。"
    },
    { 
        id: 112, 
        word: "うぬぼれ", 
        kanji: "自惚れ / 己惚れ", 
        kana: "うぬぼれ", 
        pos: "名词",
        meaning: "自大，自负",
        example_jp: "彼はうぬぼれが強い。",
        example_cn: "他非常自负。"
    },
    { 
        id: 113, 
        word: "へこたれる", 
        kanji: "凹垂れる", 
        kana: "へこたれる", 
        pos: "自动词・一段",
        meaning: "气馁，灰心，疲惫不堪",
        example_jp: "どんな困難にもへこたれない。",
        example_cn: "无论遇到什么困难都不气馁。"
    },
    { 
        id: 114, 
        word: "うなだれる", 
        kanji: "項垂れる", 
        kana: "うなだれる", 
        pos: "自动词・一段",
        meaning: "垂头丧气，低着头",
        example_jp: "試験に落ちて、がっかりしてうなだれる。",
        example_cn: "因为考试落榜而失望地垂头丧气。"
    },
    { 
        id: 115, 
        word: "ばさばさ", 
        kanji: "ばさばさ", 
        kana: "ばさばさ", 
        pos: "副词 / 形容动词 / 自动词・サ变",
        meaning: "干燥蓬松，（鸟类）拍打翅膀的声音",
        example_jp: "髪の毛が傷んでばさばさだ。",
        example_cn: "头发受损，变得干枯蓬松。"
    },
    { 
        id: 116, 
        word: "だらだら", 
        kanji: "だらだら", 
        kana: "だらだら", 
        pos: "副词 / 自动词・サ变",
        meaning: "滴滴答答，拖拖拉拉，冗长",
        example_jp: "休みの日をだらだらと過ごしてしまった。",
        example_cn: "拖拖拉拉地度过了休息日。"
    },
    { 
        id: 117, 
        word: "なれなれしい", 
        kanji: "馴れ馴れしい", 
        kana: "なれなれしい", 
        pos: "形容词",
        meaning: "狎昵的，过于亲密的，自来熟的",
        example_jp: "初対面なのになれなれしい態度をとる。",
        example_cn: "明明是初次见面，态度却过于亲昵。"
    },
    { 
        id: 118, 
        word: "でっぷり", 
        kanji: "でっぷり", 
        kana: "でっぷり", 
        pos: "副词 / 自动词・サ变",
        meaning: "胖乎乎，大腹便便",
        example_jp: "彼はでっぷりと太っている。",
        example_cn: "他胖乎乎的。"
    },
    { 
        id: 119, 
        word: "あけぼの", 
        kanji: "曙", 
        kana: "あけぼの", 
        pos: "名词",
        meaning: "黎明，拂晓",
        example_jp: "春はあけぼの。（枕草子）",
        example_cn: "春天最美是黎明。（选自《枕草子》）"
    },
    { 
        id: 120, 
        word: "がなり立てる", 
        kanji: "喚り立てる", 
        kana: "がなりたてる", 
        pos: "他动词・一段",
        meaning: "大声喧哗，大声吼叫",
        example_jp: "酔っ払いが大声でがなり立てている。",
        example_cn: "醉汉在扯着嗓子大声吼叫。"
    },
    { 
        id: 121, 
        word: "つれない", 
        kanji: "連れない / 伴無い", 
        kana: "つれない", 
        pos: "形容词",
        meaning: "冷淡的，薄情的",
        example_jp: "そんなつれないことを言わないでくれ。",
        example_cn: "别说那么冷淡的话。"
    },
    { 
        id: 122, 
        word: "ずきずき", 
        kanji: "ずきずき", 
        kana: "ずきずき", 
        pos: "副词 / 自动词・サ变",
        meaning: "阵痛，隐隐作痛",
        example_jp: "虫歯がずきずきと痛む。",
        example_cn: "蛀牙阵阵作痛。"
    },
    { 
        id: 123, 
        word: "やってのける", 
        kanji: "遣って退ける", 
        kana: "やってのける", 
        pos: "他动词・一段",
        meaning: "做完，成功完成（常指困难的事）",
        example_jp: "彼は困難な仕事を一人でやってのけた。",
        example_cn: "他独自一人干完了一项困难的工作。"
    },
    { 
        id: 124, 
        word: "おべっか", 
        kanji: "御平目 / 追従", 
        kana: "おべっか", 
        pos: "名词",
        meaning: "奉承，谄媚",
        example_jp: "上司におべっかを使って出世しようとする。",
        example_cn: "企图靠向上司拍马屁来出人头地。"
    },
    { 
        id: 125, 
        word: "かぐわしい", 
        kanji: "芳しい / 馨しい", 
        kana: "かぐわしい", 
        pos: "形容词",
        meaning: "芳香的，香甜的",
        example_jp: "かぐわしい花の香りが漂う。",
        example_cn: "飘荡着芳香的花气。"
    },
    { 
        id: 126, 
        word: "しわくちゃ", 
        kanji: "皺くちゃ", 
        kana: "しわくちゃ", 
        pos: "名词 / 形容动词",
        meaning: "满是皱纹，皱皱巴巴",
        example_jp: "洗濯した服がしわくちゃになってしまった。",
        example_cn: "洗过的衣服变得皱皱巴巴的。"
    },
    { 
        id: 127, 
        word: "かっきり", 
        kanji: "恰切り", 
        kana: "かっきり", 
        pos: "副词",
        meaning: "恰好，整（多用于时间、数量）",
        example_jp: "10時かっきりに到着した。",
        example_cn: "十点整到达了。"
    },
    { 
        id: 128, 
        word: "ぬめぬめ", 
        kanji: "滑々", 
        kana: "ぬめぬめ", 
        pos: "副词 / 自动词・サ变",
        meaning: "滑溜溜，黏糊糊",
        example_jp: "蛇の体がぬめぬめしている。",
        example_cn: "蛇的身体滑溜溜的。"
    },
    { 
        id: 129, 
        word: "びしっと", 
        kanji: "びしっと", 
        kana: "びしっと", 
        pos: "副词",
        meaning: "严厉地，整齐地，恰好",
        example_jp: "ルールを守らない部下をびしっと叱る。",
        example_cn: "严厉地训斥不遵守规则的部下。"
    },
    { 
        id: 130, 
        word: "わさわさ", 
        kanji: "わさわさ", 
        kana: "わさわさ", 
        pos: "副词 / 自动词・サ变",
        meaning: "摇动出声，心中不安，熙熙攘攘",
        example_jp: "人が多くてわさわさしている。",
        example_cn: "人很多，熙熙攘攘的。"
    },
    { 
        id: 131, 
        word: "とがめる", 
        kanji: "咎める", 
        kana: "とがめる", 
        pos: "自动词・他动词・一段",
        meaning: "责备，内疚，发炎",
        example_jp: "嘘をついたことで良心がとがめる。",
        example_cn: "因为撒谎而受到良心的谴责（内疚）。"
    },
    { 
        id: 132, 
        word: "こっくり", 
        kanji: "こっくり", 
        kana: "こっくり", 
        pos: "副词 / 自动词・サ变",
        meaning: "点头，打瞌睡",
        example_jp: "彼は納得したようにこっくりと頷いた。",
        example_cn: "他仿佛理解了似的点了点头。"
    },
    { 
        id: 133, 
        word: "とことんまで", 
        kanji: "到底まで", 
        kana: "とことんまで", 
        pos: "副词短语",
        meaning: "到底，直到最后",
        example_jp: "諦めずに、とことんまでやり抜く。",
        example_cn: "不放弃，坚持到底。"
    },
    { 
        id: 134, 
        word: "よちよち", 
        kanji: "よちよち", 
        kana: "よちよち", 
        pos: "副词 / 自动词・サ变",
        meaning: "步履蹒跚（多指幼儿等）",
        example_jp: "赤ちゃんがよちよち歩く。",
        example_cn: "婴儿步履蹒跚地走着。"
    },
    { 
        id: 135, 
        word: "めろめろ", 
        kanji: "滅茶滅茶 / めろめろ", 
        kana: "めろめろ", 
        pos: "形容动词 / 自动词・サ变",
        meaning: "软弱无力，痴迷，极度喜爱",
        example_jp: "初孫の可愛さにすっかりめろめろだ。",
        example_cn: "被第一个孙子的可爱迷得神魂颠倒。"
    },
    { 
        id: 136, 
        word: "みずみずしい", 
        kanji: "瑞々しい", 
        kana: "みずみずしい", 
        pos: "形容词",
        meaning: "水灵，娇嫩，新鲜",
        example_jp: "朝採れの野菜はみずみずしい。",
        example_cn: "早上刚采摘的蔬菜非常水灵。"
    },
    { 
        id: 137, 
        word: "いかにも", 
        kanji: "如何にも", 
        kana: "いかにも", 
        pos: "副词",
        meaning: "简直，的确，实在是",
        example_jp: "彼がいかにも言いそうなことだ。",
        example_cn: "简直就是他会说的话。"
    },
    { 
        id: 138, 
        word: "よみがえる", 
        kanji: "蘇る / 甦る", 
        kana: "よみがえる", 
        pos: "自动词・五段",
        meaning: "复苏，复活，死灰复燃",
        example_jp: "あの時の記憶が鮮やかに蘇る。",
        example_cn: "那时的记忆鲜明地复苏了。"
    },
    { 
        id: 139, 
        word: "ずかずか", 
        kanji: "ずかずか", 
        kana: "ずかずか", 
        pos: "副词",
        meaning: "冒冒失失，粗暴地（闯入等）",
        example_jp: "他人の部屋にノックもせずにずかずかと入ってくる。",
        example_cn: "连门都不敲就冒冒失失地闯进别人的房间。"
    },
    { 
        id: 140, 
        word: "しごく", 
        kanji: "至極 / 扱く", 
        kana: "しごく", 
        pos: "副词 / 他动词・五段",
        meaning: "极，最（至極） / 严厉训练，撸下（扱く）",
        example_jp: "それはしごく（至極）当然の意見だ。 / 新入生を厳しくしごく（扱く）。",
        example_cn: "那是极其理所当然的意见。 / 严厉地训练新生。"
    },
    { 
        id: 141, 
        word: "どうにかこうにか", 
        kanji: "如何にか斯うにか", 
        kana: "どうにかこうにか", 
        pos: "副词",
        meaning: "好歹，总算，勉勉强强",
        example_jp: "どうにかこうにか試験に合格した。",
        example_cn: "好歹算是通过了考试。"
    },
    { 
        id: 142, 
        word: "ちらっと", 
        kanji: "ちらっと", 
        kana: "ちらっと", 
        pos: "副词",
        meaning: "一闪，瞥见",
        example_jp: "彼が通り過ぎるのをちらっと見た。",
        example_cn: "瞥见他走了过去。"
    },
    { 
        id: 143, 
        word: "ギフト券", 
        kanji: "ギフト券", 
        kana: "ギフトけん", 
        pos: "名词",
        meaning: "礼品券",
        example_jp: "結婚のお祝いでギフト券をもらった。",
        example_cn: "作为结婚贺礼收到了礼品券。"
    },
    { 
        id: 144, 
        word: "のこぎり", 
        kanji: "鋸", 
        kana: "のこぎり", 
        pos: "名词",
        meaning: "锯子",
        example_jp: "のこぎりで木を切る。",
        example_cn: "用锯子锯木头。"
    },
    { 
        id: 145, 
        word: "おどおど", 
        kanji: "おどおど", 
        kana: "おどおど", 
        pos: "副词 / 自动词・サ变",
        meaning: "战战兢兢，提心吊胆",
        example_jp: "面接で緊張しておどおどする。",
        example_cn: "面试时紧张得战战兢兢。"
    },
    { 
        id: 146, 
        word: "てらてら", 
        kanji: "照ら照ら", 
        kana: "てらてら", 
        pos: "副词 / 自动词・サ变",
        meaning: "油光发亮",
        example_jp: "暑さで顔がてらてらと光っている。",
        example_cn: "因为炎热，脸上泛着油光。"
    },
    { 
        id: 147, 
        word: "たわいない", 
        kanji: "他愛ない", 
        kana: "たわいない", 
        pos: "形容词",
        meaning: "无聊的，幼稚的，微不足道的",
        example_jp: "たわいない冗談で笑い合う。",
        example_cn: "因为无聊的玩笑而相视大笑。"
    },
    { 
        id: 148, 
        word: "けだるい", 
        kanji: "気怠い", 
        kana: "けだるい", 
        pos: "形容词",
        meaning: "慵懒的，倦怠的",
        example_jp: "休み明けで少しけだるい気分だ。",
        example_cn: "刚休完假，感觉有些慵懒。"
    },
    { 
        id: 149, 
        word: "たった", 
        kanji: "只 / 唯", 
        kana: "たった", 
        pos: "副词",
        meaning: "仅仅，只",
        example_jp: "たった一つの命を大切にする。",
        example_cn: "珍惜仅仅一次的生命。"
    },
    { 
        id: 150, 
        word: "げらげら", 
        kanji: "げらげら", 
        kana: "げらげら", 
        pos: "副词 / 自动词・サ变",
        meaning: "哈哈大笑",
        example_jp: "テレビを見てげらげらと笑う。",
        example_cn: "看电视看得哈哈大笑。"
    },
{ 
        id: 151, 
        word: "すする", 
        kanji: "啜る", 
        kana: "すする", 
        pos: "他动词・五段",
        meaning: "吸，啜饮，抽泣",
        example_jp: "熱いお茶を音を立ててすする。",
        example_cn: "出声地吸溜着喝热茶。"
    },
    { 
        id: 152, 
        word: "しかるべき", 
        kanji: "然るべき", 
        kana: "しかるべき", 
        pos: "连体词",
        meaning: "适当的，应有的，理所当然的",
        example_jp: "問題があれば、しかるべき処置をとる。",
        example_cn: "如果存在问题，将采取适当的措施。"
    },
    { 
        id: 153, 
        word: "びっしょり", 
        kanji: "びっしょり", 
        kana: "びっしょり", 
        pos: "副词",
        meaning: "湿透",
        example_jp: "急な雨で、服がびっしょり濡れてしまった。",
        example_cn: "因为突如其来的雨，衣服完全湿透了。"
    },
    { 
        id: 154, 
        word: "じっくり", 
        kanji: "じっくり", 
        kana: "じっくり", 
        pos: "副词",
        meaning: "慢慢地，仔细地，不慌不忙地",
        example_jp: "将来のことについて、じっくり考える必要がある。",
        example_cn: "关于将来的事情，有必要仔细考虑。"
    },
    { 
        id: 155, 
        word: "ぶら下がる", 
        kanji: "ぶら下がる", 
        kana: "ぶらさがる", 
        pos: "自动词・五段",
        meaning: "悬挂，垂下，吊着",
        example_jp: "天井から綺麗なランプがぶら下がっている。",
        example_cn: "天花板上悬挂着一盏漂亮的灯。"
    },
    { 
        id: 156, 
        word: "〜ずくめ", 
        kanji: "〜尽くめ", 
        kana: "〜ずくめ", 
        pos: "接尾词",
        meaning: "清一色，全是，满是（多接在名词后）",
        example_jp: "今年は昇進や結婚など、良いことずくめの一年だった。",
        example_cn: "今年有升职和结婚等，是好事连连（全是好事）的一年。"
    },
    { 
        id: 157, 
        word: "にもかかわらず", 
        kanji: "にも拘らず", 
        kana: "にもかかわらず", 
        pos: "接续词 / 词组",
        meaning: "尽管如此，虽然...但是...",
        example_jp: "悪天候にもかかわらず、多くの人が集まった。",
        example_cn: "尽管天气不好，还是聚集了很多人。"
    },
    { 
        id: 158, 
        word: "ぴりぴり", 
        kanji: "ぴりぴり", 
        kana: "ぴりぴり", 
        pos: "副词 / 自动词・サ变",
        meaning: "刺痛，辣乎乎，神经高度紧张",
        example_jp: "試験前で、クラス中がぴりぴりしている。",
        example_cn: "考试前，整个班级都神经紧绷。"
    },
    { 
        id: 159, 
        word: "ちょこちょこ", 
        kanji: "ちょこちょこ", 
        kana: "ちょこちょこ", 
        pos: "副词",
        meaning: "频繁地，不时地，碎步走",
        example_jp: "彼は仕事の合間にちょこちょこお菓子を食べる。",
        example_cn: "他在工作间隙频繁地吃零食。"
    },
    { 
        id: 160, 
        word: "ちらほら", 
        kanji: "ちらほら", 
        kana: "ちらほら", 
        pos: "副词",
        meaning: "稀稀落落，星星点点，偶尔",
        example_jp: "桜の花がちらほら咲き始めた。",
        example_cn: "樱花开始稀稀落落地绽放了。"
    },
    { 
        id: 161, 
        word: "がさがさ", 
        kanji: "がさがさ", 
        kana: "がさがさ", 
        pos: "副词 / 形容动词 / 自动词・サ变",
        meaning: "干燥粗糙，沙沙作响",
        example_jp: "冬は手が乾燥してがさがさになる。",
        example_cn: "冬天手很干燥，变得十分粗糙。"
    },
    { 
        id: 162, 
        word: "ひしめく", 
        kanji: "犇めく", 
        kana: "ひしめく", 
        pos: "自动词・五段",
        meaning: "拥挤，喧闹",
        example_jp: "バーゲン会場には人がひしめいていた。",
        example_cn: "大特卖会场里挤满了人。"
    },
    { 
        id: 163, 
        word: "もってのほか", 
        kanji: "以ての外", 
        kana: "もってのほか", 
        pos: "名词 / 形容动词",
        meaning: "岂有此理，荒谬，绝对不行",
        example_jp: "親に暴力を振るうなど、もってのほかだ。",
        example_cn: "对父母施暴什么的，简直岂有此理。"
    },
    { 
        id: 164, 
        word: "どっしり", 
        kanji: "どっしり", 
        kana: "どっしり", 
        pos: "副词 / 自动词・サ变",
        meaning: "沉甸甸，稳重，庄重",
        example_jp: "彼はどっしりと構えて、少しも動じない。",
        example_cn: "他从容沉稳，丝毫没有动摇。"
    },
    { 
        id: 165, 
        word: "とかく", 
        kanji: "兎角", 
        kana: "とかく", 
        pos: "副词",
        meaning: "动辄，往往，总是（多带贬义）",
        example_jp: "人はとかく他人の欠点に目が行きがちだ。",
        example_cn: "人们往往容易关注他人的缺点。"
    },
    { 
        id: 166, 
        word: "ざく切り", 
        kanji: "ざく切り", 
        kana: "ざくぎり", 
        pos: "名词",
        meaning: "切成大块，粗切（指蔬菜等）",
        example_jp: "キャベツをざく切りにして鍋に入れる。",
        example_cn: "把卷心菜切成大块放入锅中。"
    },
    { 
        id: 167, 
        word: "なにがし", 
        kanji: "某", 
        kana: "なにがし", 
        pos: "代词",
        meaning: "某人，某物，某某",
        example_jp: "山田なにがしという人から電話がありました。",
        example_cn: "有个叫山田某某的人打来了电话。"
    },
    { 
        id: 168, 
        word: "そのもの", 
        kanji: "其の物", 
        kana: "そのもの", 
        pos: "名词 / 代词",
        meaning: "本身",
        example_jp: "彼女の存在そのものが皆を癒している。",
        example_cn: "她的存在本身就治愈了大家。"
    },
    { 
        id: 169, 
        word: "ぶかぶか", 
        kanji: "ぶかぶか", 
        kana: "ぶかぶか", 
        pos: "副词 / 形容动词 / 自动词・サ变",
        meaning: "（衣服、鞋子等）肥大，宽松",
        example_jp: "兄のお下がりなので、この服は私にはぶかぶかだ。",
        example_cn: "因为是哥哥穿下来的，这件衣服我穿太肥大了。"
    },
    { 
        id: 170, 
        word: "たたずまい", 
        kanji: "佇まい", 
        kana: "たたずまい", 
        pos: "名词",
        meaning: "氛围，姿态，容貌",
        example_jp: "古い街並みが昔のたたずまいを残している。",
        example_cn: "古老的街道依然保留着昔日的风貌。"
    },
    { 
        id: 171, 
        word: "わきまえる", 
        kanji: "弁える", 
        kana: "わきまえる", 
        pos: "他动词・一段",
        meaning: "辨别，明辨事理，懂规矩",
        example_jp: "自分の立場をわきまえて発言しなさい。",
        example_cn: "请弄清自己的立场再发言。"
    },
    { 
        id: 172, 
        word: "あだ名", 
        kanji: "渾名 / 仇名", 
        kana: "あだな", 
        pos: "名词",
        meaning: "绰号，外号",
        example_jp: "彼はクラスメイトから面白いあだ名で呼ばれている。",
        example_cn: "他被同班同学叫着有趣的外号。"
    },
    { 
        id: 173, 
        word: "ふんだんに", 
        kanji: "ふんだんに", 
        kana: "ふんだんに", 
        pos: "副词",
        meaning: "大量地，丰富地",
        example_jp: "イチゴをふんだんに使ったケーキ。",
        example_cn: "大量使用了草莓的蛋糕。"
    },
    { 
        id: 174, 
        word: "こき使う", 
        kanji: "扱き使う", 
        kana: "こきつかう", 
        pos: "他动词・五段",
        meaning: "苛使，随意驱使，使唤",
        example_jp: "新人を朝から晩までこき使うブラック企業。",
        example_cn: "从早到晚苛使新人的黑心企业。"
    },
    { 
        id: 175, 
        word: "くちばし", 
        kanji: "嘴", 
        kana: "くちばし", 
        pos: "名词",
        meaning: "鸟喙，嘴",
        example_jp: "カラスがくちばしでゴミ袋をつついている。",
        example_cn: "乌鸦正在用嘴啄垃圾袋。"
    },
    { 
        id: 176, 
        word: "いんちき", 
        kanji: "いんちき", 
        kana: "いんちき", 
        pos: "名词 / 形容动词",
        meaning: "骗人，弄虚作假，假货",
        example_jp: "あの占い師はいんちきだ。",
        example_cn: "那个占卜师是骗人的。"
    },
    { 
        id: 177, 
        word: "かいま見る", 
        kanji: "垣間見る", 
        kana: "かいまみる", 
        pos: "他动词・一段",
        meaning: "偷窥，略见一斑，窥见",
        example_jp: "彼の発言から、その深い教養をかいま見ることができる。",
        example_cn: "从他的发言中可以窥见他深厚的教养。"
    },
    { 
        id: 178, 
        word: "ぽっくり", 
        kanji: "ぽっくり", 
        kana: "ぽっくり", 
        pos: "副词",
        meaning: "突然去世（无痛苦地），折断貌",
        example_jp: "病気もせずに、ある日ぽっくりと逝ってしまった。",
        example_cn: "也没生病，某天就突然去世了。"
    },
    { 
        id: 179, 
        word: "あっけない", 
        kanji: "呆気ない", 
        kana: "あっけない", 
        pos: "形容词",
        meaning: "没意思，太快结束，不尽兴的",
        example_jp: "強い相手だと思っていたが、あっけない幕切れだった。",
        example_cn: "原以为是个强敌，结果结束得太草率（没意思）了。"
    },
    { 
        id: 180, 
        word: "そびえる", 
        kanji: "聳える", 
        kana: "そびえる", 
        pos: "自动词・一段",
        meaning: "耸立，峙立",
        example_jp: "街の中心に高層ビルがそびえている。",
        example_cn: "市中心耸立着高层建筑。"
    },
    { 
        id: 181, 
        word: "ちんけ", 
        kanji: "ちんけ", 
        kana: "ちんけ", 
        pos: "形容动词",
        meaning: "寒酸，低劣，微不足道",
        example_jp: "あんなちんけなプライドは捨ててしまえ。",
        example_cn: "把那种微不足道的自尊心扔掉吧。"
    },
    { 
        id: 182, 
        word: "よれよれ", 
        kanji: "よれよれ", 
        kana: "よれよれ", 
        pos: "形容动词 / 名词",
        meaning: "皱皱巴巴，破旧，老态龙钟",
        example_jp: "何年も着てよれよれになったTシャツ。",
        example_cn: "穿了好几年，变得皱皱巴巴的T恤。"
    },
    { 
        id: 183, 
        word: "おいて", 
        kanji: "於いて", 
        kana: "おいて", 
        pos: "连语",
        meaning: "在...（表示场所、时间、状况、领域等，多用于「〜において」）",
        example_jp: "会議は第一会議室において行われる。",
        example_cn: "会议将在第一会议室举行。"
    },
    { 
        id: 184, 
        word: "とどろく", 
        kanji: "轟く", 
        kana: "とどろく", 
        pos: "自动词・五段",
        meaning: "轰鸣，响彻，驰名",
        example_jp: "雷鳴が遠くに轟いている。",
        example_cn: "雷声在远处轰鸣。"
    },
    { 
        id: 185, 
        word: "きしきし", 
        kanji: "軋軋 / きしきし", 
        kana: "きしきし", 
        pos: "副词",
        meaning: "嘎吱嘎吱作响",
        example_jp: "古い木の床がきしきしと鳴る。",
        example_cn: "古老的木地板发出嘎吱嘎吱的声音。"
    },
    { 
        id: 186, 
        word: "やる気", 
        kanji: "遣る気", 
        kana: "やるき", 
        pos: "名词",
        meaning: "干劲，想要去做的意愿",
        example_jp: "褒められるとやる気が出る。",
        example_cn: "受到表扬就会有干劲。"
    },
    { 
        id: 187, 
        word: "かしましい", 
        kanji: "姦しい / 喧しい", 
        kana: "かしましい", 
        pos: "形容词",
        meaning: "吵闹，喧嚣",
        example_jp: "女三人寄ればかしましい。",
        example_cn: "三个女人一台戏（聚在一起就很吵闹）。"
    },
    { 
        id: 188, 
        word: "こぢんまり", 
        kanji: "小ぢんまり", 
        kana: "こぢんまり", 
        pos: "副词 / 自动词・サ变",
        meaning: "小巧玲珑，整洁紧凑",
        example_jp: "こぢんまりとしたアットホームなレストラン。",
        example_cn: "小巧而温馨的餐厅。"
    },
    { 
        id: 189, 
        word: "もだえる", 
        kanji: "悶える", 
        kana: "もだえる", 
        pos: "自动词・一段",
        meaning: "挣扎，痛苦，苦闷",
        example_jp: "激しい痛みに身をもだえる。",
        example_cn: "疼得身体直打滚（挣扎）。"
    },
    { 
        id: 190, 
        word: "ずる賢い", 
        kanji: "狡賢い", 
        kana: "ずるがしこい", 
        pos: "形容词",
        meaning: "狡猾，奸诈",
        example_jp: "あの商人はずる賢い手を使って儲けている。",
        example_cn: "那个商人用狡猾的手段赚钱。"
    },
    { 
        id: 191, 
        word: "てこ入れ", 
        kanji: "梃子入れ", 
        kana: "てこいれ", 
        pos: "名词 / 自动词・サ变",
        meaning: "扶植，支援，注资（多指为了挽救颓势）",
        example_jp: "赤字の事業にてこ入れをする。",
        example_cn: "对亏损的业务进行注资支援。"
    },
    { 
        id: 192, 
        word: "おびただしい", 
        kanji: "夥しい", 
        kana: "おびただしい", 
        pos: "形容词",
        meaning: "大量，非常多，厉害",
        example_jp: "事故現場にはおびただしい数の血痕が残っていた。",
        example_cn: "事故现场留有大量的血迹。"
    },
    { 
        id: 193, 
        word: "そそくさ", 
        kanji: "そそくさ", 
        kana: "そそくさ", 
        pos: "副词",
        meaning: "匆忙，慌张",
        example_jp: "用事が終わると、彼はそそくさと帰っていった。",
        example_cn: "事情一办完，他就匆匆忙忙地回去了。"
    },
    { 
        id: 194, 
        word: "もしくは", 
        kanji: "若しくは", 
        kana: "もしくは", 
        pos: "接续词",
        meaning: "或者，若是",
        example_jp: "日本語、もしくは英語で書類を提出してください。",
        example_cn: "请用日语或者英语提交文件。"
    },
    { 
        id: 195, 
        word: "やたら", 
        kanji: "矢鱈", 
        kana: "やたら", 
        pos: "副词 / 形容动词",
        meaning: "胡乱，非常，随便",
        example_jp: "今日はやたらに喉が渇く。",
        example_cn: "今天特别（非常）口渴。"
    },
    { 
        id: 196, 
        word: "かたつむり", 
        kanji: "蝸牛", 
        kana: "かたつむり", 
        pos: "名词",
        meaning: "蜗牛",
        example_jp: "雨上がりの葉っぱにかたつむりがいる。",
        example_cn: "雨后的叶子上有一只蜗牛。"
    },
    { 
        id: 197, 
        word: "しんみり", 
        kanji: "しんみり", 
        kana: "しんみり", 
        pos: "副词 / 自动词・サ变",
        meaning: "幽静，沉静，平心静气地",
        example_jp: "久しぶりに会った友人と、夜遅くまでしんみりと語り合った。",
        example_cn: "和久别重逢的朋友，心平气和地聊到了深夜。"
    },
    { 
        id: 198, 
        word: "かつかつ", 
        kanji: "かつかつ", 
        kana: "かつかつ", 
        pos: "副词",
        meaning: "勉勉强强，仅能维持",
        example_jp: "給料が安くて、毎月の生活がかつかつだ。",
        example_cn: "工资很低，每个月的生活都紧巴巴的。"
    },
    { 
        id: 199, 
        word: "かっちり", 
        kanji: "かっちり", 
        kana: "かっちり", 
        pos: "副词 / 自动词・サ变",
        meaning: "紧紧地，严丝合缝，准确无误",
        example_jp: "この蓋は瓶にかっちりとはまる。",
        example_cn: "这个盖子严丝合缝地扣在瓶子上。"
    },
    { 
        id: 200, 
        word: "ひたすら", 
        kanji: "只管 / 頓", 
        kana: "ひたすら", 
        pos: "副词 / 形容动词",
        meaning: "一味地，专心致志地",
        example_jp: "合格を目指して、ひたすら勉強する。",
        example_cn: "以合格为目标，一味地努力学习。"
    },
    { 
        id: 201, 
        word: "せわしい", 
        kanji: "忙しい", 
        kana: "せわしい", 
        pos: "イ形容词",
        meaning: "忙碌，不停息",
        example_jp: "年末は何かとせわしい。",
        example_cn: "年末总是这忙那忙的。"
    },
    { 
        id: 202, 
        word: "さして", 
        kanji: "然して / 敢して", 
        kana: "さして", 
        pos: "副词",
        meaning: "（后接否定）并不那么...，并不怎么...",
        example_jp: "その問題はさして重要ではない。",
        example_cn: "那个问题并没有那么重要。"
    },
    { 
        id: 203, 
        word: "へたへた", 
        kanji: "へたへた", 
        kana: "へたへた", 
        pos: "副词 / 自动词・サ变",
        meaning: "累得瘫倒在地；弯曲折断",
        example_jp: "マラソンを完走して、その場にへたへたと座り込んだ。",
        example_cn: "跑完马拉松后，累得瘫坐在原地。"
    },
    { 
        id: 204, 
        word: "げたげた", 
        kanji: "げたげた", 
        kana: "げたげた", 
        pos: "副词",
        meaning: "大声傻笑，格格地笑",
        example_jp: "彼女はテレビを見てげたげた笑っている。",
        example_cn: "她看着电视，格格地大笑。"
    },
    { 
        id: 205, 
        word: "どっさり", 
        kanji: "どっさり", 
        kana: "どっさり", 
        pos: "副词",
        meaning: "很多，大量",
        example_jp: "庭に落ち葉がどっさり積まっている。",
        example_cn: "院子里堆积了大量的落叶。"
    },
    { 
        id: 206, 
        word: "おろおろ", 
        kanji: "おろおろ", 
        kana: "おろおろ", 
        pos: "副词 / 自动词・サ变",
        meaning: "不知所措，慌慌张张，抽泣",
        example_jp: "突然の事故に、ただおろおろするばかりだった。",
        example_cn: "面对突发事故，只能不知所措地慌作一团。"
    },
    { 
        id: 207, 
        word: "まんざら", 
        kanji: "満更", 
        kana: "まんざら", 
        pos: "副词",
        meaning: "（后接否定）未必，不一定，并不完全",
        example_jp: "彼の提案もまんざら悪くない。",
        example_cn: "他的提案也未必就不好。"
    },
    { 
        id: 208, 
        word: "うろたえる", 
        kanji: "狼狽える", 
        kana: "うろたえる", 
        pos: "自动词・一段",
        meaning: "惊慌失措，慌张",
        example_jp: "予想外の質問にすっかりうろたえてしまった。",
        example_cn: "被意料之外的问题问得完全慌了神。"
    },
    { 
        id: 209, 
        word: "そよぐ", 
        kanji: "戦ぐ", 
        kana: "そよぐ", 
        pos: "自动词・五段",
        meaning: "微风吹拂，随风摇曳",
        example_jp: "風にススキがそよいでいる。",
        example_cn: "芒草在风中摇曳。"
    },
    { 
        id: 210, 
        word: "か弱い", 
        kanji: "か弱い", 
        kana: "かよわい", 
        pos: "イ形容词",
        meaning: "纤弱的，柔弱的",
        example_jp: "彼女はか弱い声で助けを求めた。",
        example_cn: "她用柔弱的声音呼救。"
    },
    { 
        id: 211, 
        word: "うぬぼれる", 
        kanji: "自惚れる", 
        kana: "うぬぼれる", 
        pos: "自动词・一段",
        meaning: "自负，骄傲，自我陶醉",
        example_jp: "彼女は自分が一番美しいとうぬぼれている。",
        example_cn: "她自负地认为自己是最美的。"
    },
    { 
        id: 212, 
        word: "ささやか", 
        kanji: "細やか", 
        kana: "ささやか", 
        pos: "ナ形容词",
        meaning: "微薄的，细小的，小规模的",
        example_jp: "家族でささやかなお祝いのパーティーを開いた。",
        example_cn: "家人一起办了个小规模的庆祝派对。"
    },
    { 
        id: 213, 
        word: "ゆるゆる", 
        kanji: "緩々", 
        kana: "ゆるゆる", 
        pos: "副词 / ナ形容词",
        meaning: "宽松，缓慢，慢腾腾",
        example_jp: "休日なので、家でゆるゆると過ごしている。",
        example_cn: "因为是休息日，所以在家慢腾腾地度过。"
    },
    { 
        id: 214, 
        word: "こまめ", 
        kanji: "小まめ", 
        kana: "こまめ", 
        pos: "ナ形容词",
        meaning: "勤快，勤奋，周到",
        example_jp: "健康のために、こまめに水分を補給する。",
        example_cn: "为了健康，勤补水。"
    },
    { 
        id: 215, 
        word: "くみ上げる", 
        kanji: "汲み上げる", 
        kana: "くみあげる", 
        pos: "他动词・一段",
        meaning: "打水，汲取；提拔，听取（意见等）",
        example_jp: "若手社員の意見を経営にくみ上げる。",
        example_cn: "在经营中听取并采纳年轻员工的意见。"
    },
    { 
        id: 216, 
        word: "コツ", 
        kanji: "骨", 
        kana: "こつ", 
        pos: "名词",
        meaning: "诀窍，窍门，要领",
        example_jp: "料理のコツを母に教わった。",
        example_cn: "向母亲请教了做菜的诀窍。"
    },
    { 
        id: 217, 
        word: "うずうず", 
        kanji: "うずうず", 
        kana: "うずうず", 
        pos: "副词 / 自动词・サ变",
        meaning: "心里发痒，迫不及待，跃跃欲试",
        example_jp: "早く新しいゲームで遊びたくて、うずうずしている。",
        example_cn: "想快点玩上新游戏，心里痒痒得迫不及待。"
    },
    { 
        id: 218, 
        word: "まちまち", 
        kanji: "区々", 
        kana: "まちまち", 
        pos: "名词 / ナ形容词",
        meaning: "形形色色，各不相同，意见不一",
        example_jp: "この問題に対する人の意見はまちまちだ。",
        example_cn: "人们对这个问题的意见各不相同。"
    },
    { 
        id: 219, 
        word: "ひたむき", 
        kanji: "直向き", 
        kana: "ひたむき", 
        pos: "ナ形容词",
        meaning: "一心一意，全神贯注",
        example_jp: "彼女のひたむきな努力が実を結んだ。",
        example_cn: "她一心一意的努力结出了果实。"
    },
    { 
        id: 220, 
        word: "つくづく", 
        kanji: "熟々", 
        kana: "つくづく", 
        pos: "副词",
        meaning: "仔细地，深切地，痛切地",
        example_jp: "自分の才能のなさをつくづく思い知らされた。",
        example_cn: "让我痛切地体会到了自己毫无才能。"
    },
    { 
        id: 221, 
        word: "でかい", 
        kanji: "でかい", 
        kana: "でかい", 
        pos: "イ形容词",
        meaning: "大，庞大（口语）",
        example_jp: "あの建物はとにかくでかい。",
        example_cn: "那栋建筑总之就是巨大。"
    },
    { 
        id: 222, 
        word: "くり抜く", 
        kanji: "刳り貫く", 
        kana: "くりぬく", 
        pos: "他动词・五段",
        meaning: "挖空，掏空",
        example_jp: "かぼちゃの中身をくり抜いて、ランタンを作る。",
        example_cn: "挖空南瓜的内心制作灯笼。"
    },
    { 
        id: 223, 
        word: "うかうか", 
        kanji: "うかうか", 
        kana: "うかうか", 
        pos: "副词 / 自动词・サ变",
        meaning: "漫不经心，疏忽大意",
        example_jp: "うかうかしていると、チャンスを逃してしまう。",
        example_cn: "要是漫不经心的话，就会错失良机。"
    },
    { 
        id: 224, 
        word: "はじける", 
        kanji: "弾ける", 
        kana: "はじける", 
        pos: "自动词・一段",
        meaning: "裂开，破裂；蹦跳",
        example_jp: "若さがはじけるような笑顔だ。",
        example_cn: "仿佛青春迸发般的笑容。"
    },
    { 
        id: 225, 
        word: "まばら", 
        kanji: "疎ら", 
        kana: "まばら", 
        pos: "ナ形容词",
        meaning: "稀疏，稀稀拉拉",
        example_jp: "早朝のバスは乗客もまばらだった。",
        example_cn: "清晨的公交车上乘客也稀稀拉拉的。"
    },
    { 
        id: 226, 
        word: "がりがり", 
        kanji: "がりがり", 
        kana: "がりがり", 
        pos: "ナ形容词 / 副词",
        meaning: "骨瘦如柴；咬牙切齿；嘎吱嘎吱响",
        example_jp: "彼は病気ですっかりがりがりになってしまった。",
        example_cn: "他因为生病变得瘦骨嶙峋了。"
    },
    { 
        id: 227, 
        word: "よりによって", 
        kanji: "選りに選って", 
        kana: "よりによって", 
        pos: "副词",
        meaning: "偏偏，挑来挑去偏偏",
        example_jp: "よりによってこんな忙しい日に風邪をひくなんて。",
        example_cn: "偏偏在这么忙的日子里感冒了。"
    },
    { 
        id: 228, 
        word: "たやすい", 
        kanji: "容易い", 
        kana: "たやすい", 
        pos: "イ形容词",
        meaning: "容易的，轻易的",
        example_jp: "その問題を解決するのはたやすいことではない。",
        example_cn: "解决那个问题并不是一件容易的事。"
    },
    { 
        id: 229, 
        word: "しゃきしゃき", 
        kanji: "しゃきしゃき", 
        kana: "しゃきしゃき", 
        pos: "副词 / 自动词・サ变",
        meaning: "脆生生；动作麻利，干脆",
        example_jp: "レタスのしゃきしゃきとした食感が好きだ。",
        example_cn: "我喜欢生菜清脆的口感。"
    },
    { 
        id: 230, 
        word: "〜びる", 
        kanji: "〜びる", 
        kana: "〜びる", 
        pos: "后缀 / 自动词・一段",
        meaning: "带有...样子，显得...（接在名词或词干后，如大人びる）",
        example_jp: "彼はすっかり大人びた顔つきになった。",
        example_cn: "他完全长成了一副大人的模样。"
    },
    { 
        id: 231, 
        word: "くさくさ", 
        kanji: "くさくさ", 
        kana: "くさくさ", 
        pos: "副词 / 自动词・サ变",
        meaning: "心情烦闷，郁闷",
        example_jp: "雨続きで気分がくさくさする。",
        example_cn: "阴雨连绵让人心情烦闷。"
    },
    { 
        id: 232, 
        word: "うっとうしい", 
        kanji: "鬱陶しい", 
        kana: "うっとうしい", 
        pos: "イ形容词",
        meaning: "烦闷，阴郁，沉闷；碍眼，烦人",
        example_jp: "梅雨のうっとうしい天気が続く。",
        example_cn: "梅雨季阴郁沉闷的天气还在持续。"
    },
    { 
        id: 233, 
        word: "つまむ", 
        kanji: "摘まむ / 撮む", 
        kana: "つまむ", 
        pos: "他动词・五段",
        meaning: "捏，夹；摘取；吃（一点），拈取",
        example_jp: "ひどい悪臭に思わず鼻をつまんだ。",
        example_cn: "恶臭难闻，不由得捏住了鼻子。"
    },
    { 
        id: 234, 
        word: "ずばり", 
        kanji: "ずばり", 
        kana: "ずばり", 
        pos: "副词",
        meaning: "一针见血地，直截了当地；一刀切下",
        example_jp: "専門家にずばり意見を聞いてみた。",
        example_cn: "直截了当地向专家征求了意见。"
    },
    { 
        id: 235, 
        word: "がくん", 
        kanji: "がくん", 
        kana: "がくん", 
        pos: "副词",
        meaning: "突然（减少、下降）；猛然折断或弯曲",
        example_jp: "モチベーションががくんと落ちた。",
        example_cn: "动力突然大幅下降。"
    },
    { 
        id: 236, 
        word: "ぼけ", 
        kanji: "惚け / 呆け", 
        kana: "ぼけ", 
        pos: "名词",
        meaning: "发呆，糊涂；迟钝",
        example_jp: "時差ぼけで頭が全然働かない。",
        example_cn: "受时差影响，大脑完全不转了。"
    },
    { 
        id: 237, 
        word: "よじ登る", 
        kanji: "攀じ登る", 
        kana: "よじのぼる", 
        pos: "他动词・五段",
        meaning: "攀登，爬上去",
        example_jp: "ロープを使って急な崖をよじ登る。",
        example_cn: "用绳索攀爬陡峭的悬崖。"
    },
    { 
        id: 238, 
        word: "しおれる", 
        kanji: "萎れる", 
        kana: "しおれる", 
        pos: "自动词・一段",
        meaning: "枯萎，凋谢；沮丧，气馁",
        example_jp: "水をやり忘れて、花がしおれてしまった。",
        example_cn: "忘了浇水，花枯萎了。"
    },
    { 
        id: 239, 
        word: "さながら", 
        kanji: "宛ら", 
        kana: "さながら", 
        pos: "副词",
        meaning: "宛如，仿佛，简直",
        example_jp: "その悲惨な光景は、さながら地獄絵図のようだった。",
        example_cn: "那悲惨的光景简直就像地狱绘卷一般。"
    },
    { 
        id: 240, 
        word: "とげとげ", 
        kanji: "刺々", 
        kana: "とげとげ", 
        pos: "名词",
        meaning: "多刺；尖酸刻薄",
        example_jp: "彼女の言い方はいつもとげとげしている。",
        example_cn: "她说话总是带刺（尖酸刻薄）。"
    },
    { 
        id: 241, 
        word: "びり", 
        kanji: "びり", 
        kana: "びり", 
        pos: "名词",
        meaning: "倒数第一，最后一名",
        example_jp: "徒競走でびりになった。",
        example_cn: "在赛跑中拿了倒数第一。"
    },
    { 
        id: 242, 
        word: "たるむ", 
        kanji: "弛む", 
        kana: "たるむ", 
        pos: "自动词・五段",
        meaning: "松弛，松懈",
        example_jp: "目標を達成して、少し気がたるんでいる。",
        example_cn: "达成目标后，神经稍微有些松懈了。"
    },
    { 
        id: 243, 
        word: "ずぶぬれ", 
        kanji: "ずぶ濡れ", 
        kana: "ずぶぬれ", 
        pos: "名词",
        meaning: "浑身湿透",
        example_jp: "突然の雨でずぶ濡れになった。",
        example_cn: "被突如其来的雨淋得浑身湿透。"
    },
    { 
        id: 244, 
        word: "ひとえに", 
        kanji: "偏に", 
        kana: "ひとえに", 
        pos: "副词",
        meaning: "完全，全凭，专心一意",
        example_jp: "今回の成功はひとえに皆様のおかげです。",
        example_cn: "这次的成功全凭大家的帮助。"
    },
    { 
        id: 245, 
        word: "にじむ", 
        kanji: "滲む", 
        kana: "にじむ", 
        pos: "自动词・五段",
        meaning: "渗出，晕开；流露",
        example_jp: "彼の言葉には怒りがにじんでいた。",
        example_cn: "他的话语中流露出了愤怒。"
    },
    { 
        id: 246, 
        word: "わざとらしい", 
        kanji: "態とらしい", 
        kana: "わざとらしい", 
        pos: "イ形容词",
        meaning: "做作的，不自然的，故意的",
        example_jp: "彼の態度はどこかわざとらしい。",
        example_cn: "他的态度总觉得有些做作。"
    },
    { 
        id: 247, 
        word: "ぎくぎく", 
        kanji: "ぎくぎく", 
        kana: "ぎくぎく", 
        pos: "副词 / 自动词・サ变",
        meaning: "动作僵硬，不自然；关系尴尬",
        example_jp: "喧嘩したため、二人の間がぎくぎくしている。",
        example_cn: "因为吵架了，两人之间的关系很尴尬。"
    },
    { 
        id: 248, 
        word: "くじく", 
        kanji: "挫く", 
        kana: "くじく", 
        pos: "他动词・五段",
        meaning: "扭伤；挫折，打击（锐气）",
        example_jp: "階段で足首をくじいてしまった。",
        example_cn: "在楼梯上扭伤了脚踝。"
    },
    { 
        id: 249, 
        word: "さえずる", 
        kanji: "囀る", 
        kana: "さえずる", 
        pos: "自动词・五段",
        meaning: "（鸟）鸣叫，啼啭；叽叽喳喳地说",
        example_jp: "森の中で小鳥がさえずっている。",
        example_cn: "小鸟在森林里欢快地啼叫。"
    },
    { 
        id: 250, 
        word: "いざとなると", 
        kanji: "いざとなれば / いざとなったら / いざとなると", 
        kana: "いざとなると", 
        pos: "连语",
        meaning: "一旦到了关键时刻，真到了紧要关头",
        example_jp: "普段は強気だが、いざとなると逃げ出してしまう。",
        example_cn: "平时很要强，但一到关键时刻就跑路了。"
    },
    { 
        id: 251, 
        word: "まくし立てる", 
        kanji: "捲し立てる", 
        kana: "まくしたてる", 
        pos: "他动词・一段",
        meaning: "喋喋不休，连珠炮似地说",
        example_jp: "彼女は怒りに任せて、相手のミスを激しくまくし立てた。",
        example_cn: "她任凭自己发怒，连珠炮似地激烈指责了对方的失误。"
    },
    { 
        id: 252, 
        word: "かかと", 
        kanji: "踵", 
        kana: "かかと", 
        pos: "名词",
        meaning: "脚后跟，鞋跟",
        example_jp: "長く歩いたので、靴の踵がすり減っている。",
        example_cn: "因为走了很长路，鞋的后跟磨损了。"
    },
    { 
        id: 253, 
        word: "こらえる", 
        kanji: "堪える", 
        kana: "こらえる", 
        pos: "他动词・一段",
        meaning: "忍耐，忍受，控制（感情）",
        example_jp: "激しい痛みを堪えて、最後まで走り抜いた。",
        example_cn: "强忍着剧痛，坚持跑到了最后。"
    },
    { 
        id: 254, 
        word: "とやかく", 
        kanji: "兎や角", 
        kana: "とやかく", 
        pos: "副词",
        meaning: "说三道四，横加指责",
        example_jp: "他人のプライバシーにとやかく言うべきではない。",
        example_cn: "不应该对他人的隐私说三道四。"
    },
    { 
        id: 255, 
        word: "まとめ", 
        kanji: "纏め", 
        kana: "まとめ", 
        pos: "名词",
        meaning: "总结，概括，汇总",
        example_jp: "会議の最後に、今日の議論の纏めを行う。",
        example_cn: "在会议最后，对今天的讨论进行总结。"
    },
    { 
        id: 256, 
        word: "はぐらかす", 
        kanji: "逸らかす", 
        kana: "はぐらかす", 
        pos: "他动词・五段",
        meaning: "岔开话题，搪塞，支吾过去",
        example_jp: "都合が悪くなると、彼はいつも話をはぐらかす。",
        example_cn: "一遇到不利的情况，他总是把话题岔开。"
    },
    { 
        id: 257, 
        word: "おとしめる", 
        kanji: "貶める", 
        kana: "おとしめる", 
        pos: "他动词・一段",
        meaning: "贬低，蔑视，使受屈辱",
        example_jp: "ライバルを貶めるような卑劣なやり方は許せない。",
        example_cn: "无法原谅那种贬低竞争对手的卑劣手段。"
    },
    { 
        id: 258, 
        word: "つぶら", 
        kanji: "円ら", 
        kana: "つぶら", 
        pos: "ナ形容词",
        meaning: "圆圆的（多指眼睛）",
        example_jp: "子犬が円らな瞳でこちらを見つめている。",
        example_cn: "小狗用圆圆的眼睛盯着这边看。"
    },
    { 
        id: 259, 
        word: "みだり", 
        kanji: "妄り", 
        kana: "みだり", 
        pos: "副词 / ナ形容词",
        meaning: "（多以「みだりに」的形式）胡乱，随便，无故",
        example_jp: "関係者以外、妄りに立ち入ることを禁ず。",
        example_cn: "非相关人员严禁擅自入内。"
    },
    { 
        id: 260, 
        word: "ぱくる", 
        kanji: "ぱくる", 
        kana: "ぱくる", 
        pos: "他动词・五段",
        meaning: "（俗语）偷窃；抄袭，剽窃；大口吃",
        example_jp: "他人のアイデアをぱくるのは泥棒と同じだ。",
        example_cn: "抄袭他人的想法和强盗无异。"
    },
    { 
        id: 261, 
        word: "めくる", 
        kanji: "捲る", 
        kana: "めくる", 
        pos: "他动词・五段",
        meaning: "翻（书页、日历等），掀起",
        example_jp: "毎朝起きると、まずカレンダーを捲る。",
        example_cn: "每天早上起床后，首先翻日历。"
    },
    { 
        id: 262, 
        word: "くまなく", 
        kanji: "隈なく", 
        kana: "くまなく", 
        pos: "副词",
        meaning: "到处，毫无保留地，不留死角地",
        example_jp: "失くした指輪を探して、部屋の中を隈なく探した。",
        example_cn: "为了找丢失的戒指，把房间里每个角落都找遍了。"
    },
    { 
        id: 263, 
        word: "そっぽ", 
        kanji: "外方", 
        kana: "そっぽ", 
        pos: "名词",
        meaning: "扭过脸去，不理睬",
        example_jp: "注意された子供は、怒ってそっぽを向いてしまった。",
        example_cn: "被警告的孩子生气地把脸扭向了一边。"
    },
    { 
        id: 264, 
        word: "ばらつき", 
        kanji: "ばらつき", 
        kana: "ばらつき", 
        pos: "名词",
        meaning: "参差不齐，不一致，分散",
        example_jp: "この工場で作られる製品は品質にばらつきがある。",
        example_cn: "这家工厂生产的产品质量参差不齐。"
    },
    { 
        id: 265, 
        word: "むなしい", 
        kanji: "空しい / 虚しい", 
        kana: "むなしい", 
        pos: "イ形容词",
        meaning: "空虚的，徒劳的，毫无意义的",
        example_jp: "必死の努力もむなしく、試合には負けてしまった。",
        example_cn: "拼死的努力也成了徒劳，输掉了比赛。"
    },
    { 
        id: 266, 
        word: "あっけらかん", 
        kanji: "呆気らかん", 
        kana: "あっけらかん", 
        pos: "副词 / 自动词・サ变",
        meaning: "满不在乎，若无其事；发呆",
        example_jp: "先生に激怒されたのに、彼はあっけらかんとしている。",
        example_cn: "明明被老师大骂了一顿，他却一副若无其事的样子。"
    },
    { 
        id: 267, 
        word: "やつれる", 
        kanji: "窶れる", 
        kana: "やつれる", 
        pos: "自动词・一段",
        meaning: "憔悴，消瘦",
        example_jp: "長期間の看病疲れで、彼女はすっかり窶れてしまった。",
        example_cn: "因为长时间看护病人的疲劳，她完全憔悴了。"
    },
    { 
        id: 268, 
        word: "にやにや", 
        kanji: "にやにや", 
        kana: "にやにや", 
        pos: "副词 / 自动词・サ变",
        meaning: "冷笑，嗤笑，不怀好意地笑",
        example_jp: "何を企んでいるのか、彼は一人でにやにや笑っている。",
        example_cn: "不知道在盘算什么，他一个人在不怀好意地偷偷笑。"
    },
    { 
        id: 269, 
        word: "しとやか", 
        kanji: "淑やか", 
        kana: "しとやか", 
        pos: "ナ形容词",
        meaning: "端庄，文雅，淑静",
        example_jp: "彼女の着物姿はとてもしとやかで美しい。",
        example_cn: "她穿和服的样子非常端庄美丽。"
    },
    { 
        id: 270, 
        word: "ぼつぼつ", 
        kanji: "勃々", 
        kana: "ぼつぼつ", 
        pos: "副词",
        meaning: "渐渐地；差不多该...；点点，起疱",
        example_jp: "すっかり暗くなってきたので、ぼつぼつ帰りましょう。",
        example_cn: "天已经全黑了，差不多该回去了吧。"
    },
    { 
        id: 271, 
        word: "ぐさり", 
        kanji: "ぐさり", 
        kana: "ぐさり", 
        pos: "副词",
        meaning: "猛力刺入貌；深深刺痛（内心）",
        example_jp: "彼の厳しい一言が、私の胸にぐさりと刺さった。",
        example_cn: "他严厉的一句话，深深刺痛了我的心。"
    },
    { 
        id: 272, 
        word: "ぽつぽつ", 
        kanji: "点々 / ぽつぽつ", 
        kana: "ぽつぽつ", 
        pos: "副词",
        meaning: "一点一点地（下雨）；渐渐地；稀稀拉拉",
        example_jp: "空が暗くなり、雨がぽつぽつと降り始めた。",
        example_cn: "天变暗了，雨滴答滴答地开始下了。"
    },
    { 
        id: 273, 
        word: "うば", 
        kanji: "姥", 
        kana: "うば", 
        pos: "名词",
        meaning: "老妇人，老奶奶",
        example_jp: "昔話にはよくお爺さんと姥（おばあさん）が登場する。",
        example_cn: "日本民间故事里经常出现老爷爷和老奶奶。"
    },
    { 
        id: 274, 
        word: "どっきり", 
        kanji: "どっきり", 
        kana: "どっきり", 
        pos: "副词 / 自动词・サ变",
        meaning: "吃惊，吓一跳",
        example_jp: "後ろから突然肩を叩かれて、どっきりした。",
        example_cn: "突然被人从后面拍了一下肩膀，吓了一跳。"
    },
    { 
        id: 275, 
        word: "〜ぶる", 
        kanji: "〜振る", 
        kana: "〜ぶる", 
        pos: "后缀 / 自动词・五段",
        meaning: "装作...的样子，摆出...的架子（接在名词或形容词词干后）",
        example_jp: "彼はたいして実力もないのに、いつも偉ぶっている。",
        example_cn: "他明明没什么实力，却总是摆出一副了不起的架子。"
    },
    { 
        id: 276, 
        word: "かなわない", 
        kanji: "叶わない / 敵わない", 
        kana: "かなわない", 
        pos: "イ形容词 / 连语",
        meaning: "敌不过，比不上；受不了，吃不消",
        example_jp: "彼の圧倒的な語学力には到底敵わない。",
        example_cn: "对于他压倒性的语言能力，我是无论如何也比不上的。"
    },
    { 
        id: 277, 
        word: "よろける", 
        kanji: "蹌踉ける", 
        kana: "よろける", 
        pos: "自动词・一段",
        meaning: "踉跄，打趔趄，站立不稳",
        example_jp: "石につまずいて、思わずよろけた。",
        example_cn: "被石头绊了一下，不由得打了个趔趄。"
    },
    { 
        id: 278, 
        word: "ねっとり", 
        kanji: "ねっとり", 
        kana: "ねっとり", 
        pos: "副词 / 自动词・サ变",
        meaning: "黏糊糊的，口感黏糯；态度黏人",
        example_jp: "このアイスはねっとりとした濃厚な食感が特徴だ。",
        example_cn: "这款冰淇淋以黏糯浓郁的口感为特征。"
    },
    { 
        id: 279, 
        word: "つるす", 
        kanji: "吊（る）す", 
        kana: "つるす", 
        pos: "他动词・五段",
        meaning: "悬挂，吊挂",
        example_jp: "夏の風物詩として、窓辺に風鈴を吊るす。",
        example_cn: "作为夏天的风物诗，在窗边挂上风铃。"
    },
    { 
        id: 280, 
        word: "ねじまがる", 
        kanji: "捻じ曲がる", 
        kana: "ねじまがる", 
        pos: "自动词・五段",
        meaning: "弯曲，扭曲；（事实等）被歪曲",
        example_jp: "真実がねじ曲がって報道されるのは恐ろしいことだ。",
        example_cn: "真相被歪曲报道是一件可怕的事情。"
    },
    { 
        id: 281, 
        word: "わいわい", 
        kanji: "わいわい", 
        kana: "わいわい", 
        pos: "副词",
        meaning: "吵吵嚷嚷，闹哄哄地",
        example_jp: "居酒屋で仲間たちとわいわい騒いでストレスを発散する。",
        example_cn: "在居酒屋和朋友们吵吵嚷嚷地发泄压力。"
    },
    { 
        id: 282, 
        word: "すたすた", 
        kanji: "すたすた", 
        kana: "すたすた", 
        pos: "副词",
        meaning: "急匆匆地走，头也不回地快步走",
        example_jp: "彼は怒った顔で、挨拶もせずにすたすたと歩き去った。",
        example_cn: "他一脸怒容，连招呼都不打就急匆匆地走开了。"
    },
    { 
        id: 283, 
        word: "もつれる", 
        kanji: "縺れる", 
        kana: "もつれる", 
        pos: "自动词・一段",
        meaning: "纠缠，缠结；（舌头等）打结，不灵便",
        example_jp: "大勢の前でスピーチをした時、緊張して舌がもつれた。",
        example_cn: "在众人面前演讲时，紧张得舌头都打结了。"
    },
    { 
        id: 284, 
        word: "くだくだしい", 
        kanji: "管々しい", 
        kana: "くだくだしい", 
        pos: "イ形容词",
        meaning: "冗长，啰嗦，絮叨",
        example_jp: "くだくだしい説明は省いて、単刀直入に結論を言ってください。",
        example_cn: "请省去冗长啰嗦的说明，单刀直入地说结论吧。"
    },
    { 
        id: 285, 
        word: "そもそも", 
        kanji: "抑", 
        kana: "そもそも", 
        pos: "副词 / 连词",
        meaning: "究竟，原本，说起来",
        example_jp: "そもそも、この無謀な計画には最初から無理があった。",
        example_cn: "说起来，这个鲁莽的计划从一开始就不切实际。"
    },
    { 
        id: 286, 
        word: "めらめら", 
        kanji: "めらめら", 
        kana: "めらめら", 
        pos: "副词",
        meaning: "熊熊燃烧貌；（情绪）激烈燃起",
        example_jp: "ライバルの成功を見て、彼の心に嫉妬の炎がめらめらと燃え上がった。",
        example_cn: "看到对手的成功，他心中嫉妒的怒火熊熊燃烧起来。"
    },
    { 
        id: 287, 
        word: "えぐみ", 
        kanji: "蘞味", 
        kana: "えぐみ", 
        pos: "名词",
        meaning: "涩味，涩口（尤指刺嗓子的味道）",
        example_jp: "このタケノコはアク抜きが不十分で、少しえぐみがある。",
        example_cn: "这个竹笋去涩不到位，稍微有些涩口。"
    },
    { 
        id: 288, 
        word: "しょんぼり", 
        kanji: "しょんぼり", 
        kana: "しょんぼり", 
        pos: "副词 / 自动词・サ变",
        meaning: "无精打采，垂头丧气",
        example_jp: "試合に負けて、彼はしょんぼりして家に帰ってきた。",
        example_cn: "因为输了比赛，他垂头丧气地回到了家。"
    },
    { 
        id: 289, 
        word: "ぼちぼち", 
        kanji: "ぼちぼち", 
        kana: "ぼちぼち", 
        pos: "副词",
        meaning: "渐渐地；差不多该...（同ぼつぼつ，多用于关西及口语）",
        example_jp: "準備ができたので、ぼちぼち作業を始めようか。",
        example_cn: "准备工作做好了，差不多该开始干活了吧。"
    },
    { 
        id: 290, 
        word: "ときめく", 
        kanji: "時めく / 悸く", 
        kana: "ときめく", 
        pos: "自动词・五段",
        meaning: "心跳，激动，心动；得势",
        example_jp: "憧れの俳優を目の前にして、胸が激しくときめいた。",
        example_cn: "面对憧憬的演员，内心激动得砰砰直跳。"
    },
    { 
        id: 291, 
        word: "こびりつく", 
        kanji: "こびり付く", 
        kana: "こびりつく", 
        pos: "自动词・五段",
        meaning: "牢牢粘附，附着，无法消除",
        example_jp: "カレーの汚れが鍋の底にこびり付いて取れない。",
        example_cn: "咖喱的污渍牢牢粘在锅底洗不掉。"
    },
    { 
        id: 292, 
        word: "もてなし", 
        kanji: "持て成し", 
        kana: "もてなし", 
        pos: "名词",
        meaning: "款待，招待，服务",
        example_jp: "旅館のスタッフの温かいお持て成しに感動した。",
        example_cn: "被旅馆员工温暖的款待所感动。"
    },
    { 
        id: 293, 
        word: "めそめそ", 
        kanji: "めそめそ", 
        kana: "めそめそ", 
        pos: "副词 / 自动词・サ变",
        meaning: "抽泣，暗自落泪，懦弱软弱",
        example_jp: "少し怒られたくらいで、いつまでもめそめそ泣いているんじゃない。",
        example_cn: "不过是被稍微说了两句，不要一直抽抽搭搭地哭个没完。"
    },
    { 
        id: 294, 
        word: "はびこる", 
        kanji: "蔓延る", 
        kana: "はびこる", 
        pos: "自动词・五段",
        meaning: "蔓延，丛生；猖獗，横行",
        example_jp: "手入れをしていない庭に、雑草がすっかり蔓延っている。",
        example_cn: "在缺乏打理的院子里，杂草已经完全蔓延开来。"
    },
    { 
        id: 295, 
        word: "くらくら", 
        kanji: "くらくら", 
        kana: "くらくら", 
        pos: "副词 / 自动词・サ变",
        meaning: "眩晕，头晕眼花；（水）沸腾貌",
        example_jp: "急に立ち上がった瞬間、めまいで頭がくらくらした。",
        example_cn: "猛地站起来的瞬间，一阵目眩觉得头晕眼花。"
    },
    { 
        id: 296, 
        word: "ざっくり", 
        kanji: "ざっくり", 
        kana: "ざっくり", 
        pos: "副词 / 自动词・サ变",
        meaning: "粗略地，大体上；大口劈开",
        example_jp: "詳細なデータはないが、ざっくりと計算したところ予算内に収まりそうだ。",
        example_cn: "虽然没有详细数据，但粗略计算了一下，似乎能控制在预算内。"
    },
    { 
        id: 297, 
        word: "あらかじめ", 
        kanji: "予め", 
        kana: "あらかじめ", 
        pos: "副词",
        meaning: "预先，提前，事先",
        example_jp: "会議を欠席される場合は、予め担当者までご連絡ください。",
        example_cn: "如需缺席会议，请事先联系负责人。"
    },
    { 
        id: 298, 
        word: "すぼむ", 
        kanji: "窄む", 
        kana: "すぼむ", 
        pos: "自动词・五段",
        meaning: "收缩，变窄，聚拢",
        example_jp: "突然の強風で、さしていた傘が窄んでしまった。",
        example_cn: "由于突然的强风，撑着的伞收缩了起来。"
    },
    { 
        id: 299, 
        word: "ちくちく", 
        kanji: "ちくちく", 
        kana: "ちくちく", 
        pos: "副词 / 自动词・サ变",
        meaning: "刺痛，扎人；只言片语地讽刺",
        example_jp: "このセーターは毛が直接肌に触れるとちくちくする。",
        example_cn: "这件毛衣的毛直接接触皮肤的话会有些刺痛。"
    },
    { 
        id: 300, 
        word: "かささぎ", 
        kanji: "鵲", 
        kana: "かささぎ", 
        pos: "名词",
        meaning: "喜鹊",
        example_jp: "七夕の夜、鵲が天の川に橋を架けるという伝説がある。",
        example_cn: "传说在七夕之夜，喜鹊会在银河上架起一座桥。"
    },
    { 
        id: 301, 
        word: "すり身", 
        kanji: "擂り身", 
        kana: "すりみ", 
        pos: "名词",
        meaning: "（鱼、肉等）捣碎的肉泥",
        example_jp: "魚のすり身を揚げて、さつま揚げを作る。",
        example_cn: "把鱼肉泥油炸，做成炸鱼饼。"
    },
    { 
        id: 302, 
        word: "すがる", 
        kanji: "縋る", 
        kana: "すがる", 
        pos: "自动词・五段",
        meaning: "依靠，依赖，搂住，抓住",
        example_jp: "最後の希望に縋る思いで、彼に助けを求めた。",
        example_cn: "抱着抓住最后一丝希望的想法，向他求助。"
    },
    { 
        id: 303, 
        word: "おぼろげ", 
        kanji: "朧げ", 
        kana: "おぼろげ", 
        pos: "ナ形容词",
        meaning: "模糊，朦胧，隐约",
        example_jp: "幼い頃の記憶がおぼろげに蘇ってきた。",
        example_cn: "儿时的记忆隐隐约约地苏醒了。"
    },
    { 
        id: 304, 
        word: "へろへろ", 
        kanji: "へろへろ", 
        kana: "へろへろ", 
        pos: "副词 / ナ形容词",
        meaning: "筋疲力尽，软弱无力",
        example_jp: "猛暑の中を一日中歩き回って、もうへろへろだ。",
        example_cn: "在酷暑中走了一整天，已经筋疲力尽了。"
    },
    { 
        id: 305, 
        word: "やり遂げる", 
        kanji: "遣り遂げる", 
        kana: "やりとげる", 
        pos: "他动词・一段",
        meaning: "完成到底，坚持做完",
        example_jp: "どんな困難があっても、与えられた任務はやり遂げる。",
        example_cn: "无论遇到什么困难，都要把交给的任务完成到底。"
    },
    { 
        id: 306, 
        word: "ぼたぼた", 
        kanji: "ぼたぼた", 
        kana: "ぼたぼた", 
        pos: "副词",
        meaning: "（水滴等）吧嗒吧嗒地直往下滴",
        example_jp: "濡れた髪から水がぼたぼたと落ちている。",
        example_cn: "水从湿漉漉的头发上吧嗒吧嗒地滴下来。"
    },
    { 
        id: 307, 
        word: "おっとり", 
        kanji: "おっとり", 
        kana: "おっとり", 
        pos: "副词 / 自动词・サ变",
        meaning: "稳重，大方，不慌不忙",
        example_jp: "彼女は常におっとりしていて、少しも慌てない。",
        example_cn: "她总是稳重大方，一点也不慌张。"
    },
    { 
        id: 308, 
        word: "うねうね", 
        kanji: "蜿蜿", 
        kana: "うねうね", 
        pos: "副词 / 自动词・サ变",
        meaning: "蜿蜒，弯弯曲曲",
        example_jp: "山の中をうねうねと続く道をドライブする。",
        example_cn: "驾车行驶在山里蜿蜒曲折的道路上。"
    },
    { 
        id: 309, 
        word: "ほっぺた", 
        kanji: "頰っぺた", 
        kana: "ほっぺた", 
        pos: "名词",
        meaning: "脸颊，腮帮子（口语）",
        example_jp: "あまりの美味しさに、ほっぺたが落ちそうだ。",
        example_cn: "好吃得简直要掉下巴（脸颊掉下来）了。"
    },
    { 
        id: 310, 
        word: "ぐっと", 
        kanji: "ぐっと", 
        kana: "ぐっと", 
        pos: "副词",
        meaning: "一口气地；更加；感动地；用力地",
        example_jp: "冷たいビールをぐっと飲み干した。",
        example_cn: "把冰镇啤酒一口气喝光了。"
    },
    { 
        id: 311, 
        word: "すこぶる", 
        kanji: "頗る", 
        kana: "すこぶる", 
        pos: "副词",
        meaning: "非常，极其（多用于积极意义）",
        example_jp: "昨日はよく眠れたので、今日はすこぶる体調が良い。",
        example_cn: "昨天睡得很好，所以今天身体状况极佳。"
    },
    { 
        id: 312, 
        word: "じりじり", 
        kanji: "じりじり", 
        kana: "じりじり", 
        pos: "副词 / 自动词・サ变",
        meaning: "（太阳）毒辣；焦急，不耐烦；步步逼近",
        example_jp: "返事が来なくて、じりじりしながら待っている。",
        example_cn: "没收到回复，正焦急地等待着。"
    },
    { 
        id: 313, 
        word: "よろよろ", 
        kanji: "よろよろ", 
        kana: "よろよろ", 
        pos: "副词 / 自动词・サ变",
        meaning: "步履蹒跚，摇摇晃晃",
        example_jp: "怪我をした彼は、よろよろと立ち上がった。",
        example_cn: "受了伤的他，摇摇晃晃地站了起来。"
    },
    { 
        id: 314, 
        word: "なぜか", 
        kanji: "何故か", 
        kana: "なぜか", 
        pos: "副词",
        meaning: "不知为何，总觉得",
        example_jp: "今日はなぜか胸騒ぎがする。",
        example_cn: "今天不知为何心里有些不安。"
    },
    { 
        id: 315, 
        word: "おろか", 
        kanji: "疎か", 
        kana: "おろか", 
        pos: "ナ形容词",
        meaning: "敷衍，马虎；（接「〜はおろか」）别说...连...",
        example_jp: "彼は怪我で、走ることはおろか歩くことすらできない。",
        example_cn: "他因为受伤，别说跑了，连走路都不行。"
    },
    { 
        id: 316, 
        word: "がんがん", 
        kanji: "がんがん", 
        kana: "がんがん", 
        pos: "副词 / 自动词・サ变",
        meaning: "（头）剧痛；当当响；猛烈地，毫不客气地",
        example_jp: "二日酔いで頭ががんがんする。",
        example_cn: "宿醉惹得头痛欲裂。"
    },
    { 
        id: 317, 
        word: "もぞもぞ", 
        kanji: "もぞもぞ", 
        kana: "もぞもぞ", 
        pos: "副词 / 自动词・サ变",
        meaning: "蠢动，蠕动；（因不安等）坐立不安，乱动",
        example_jp: "布団の中で虫がもぞもぞ動いているような気がした。",
        example_cn: "感觉被子里好像有虫子在蠕动。"
    },
    { 
        id: 318, 
        word: "ゆすぐ", 
        kanji: "濯ぐ", 
        kana: "ゆすぐ", 
        pos: "他动词・五段",
        meaning: "漱（口），涮洗，漂洗",
        example_jp: "歯を磨いた後、水で口をゆすぐ。",
        example_cn: "刷牙后，用水漱口。"
    },
    { 
        id: 319, 
        word: "どんより", 
        kanji: "どんより", 
        kana: "どんより", 
        pos: "副词 / 自动词・サ变",
        meaning: "阴沉，浑浊，阴霾",
        example_jp: "空はどんよりと曇り、今にも雨が降りそうだ。",
        example_cn: "天空阴沉沉的，眼看就要下雨了。"
    },
    { 
        id: 320, 
        word: "うだうだ", 
        kanji: "うだうだ", 
        kana: "うだうだ", 
        pos: "副词 / 自动词・サ变",
        meaning: "啰里啰嗦，闲扯；无所事事",
        example_jp: "休日は家でうだうだして過ごすことが多い。",
        example_cn: "休息日大多在家里无所事事地度过。"
    },
    { 
        id: 321, 
        word: "おおむね", 
        kanji: "概ね", 
        kana: "おおむね", 
        pos: "副词 / 名词",
        meaning: "大致，大体上，大概",
        example_jp: "工事はおおむね予定通りに進行している。",
        example_cn: "工程大体上正按计划进行。"
    },
    { 
        id: 322, 
        word: "ありとあらゆる", 
        kanji: "有りとあらゆる", 
        kana: "ありとあらゆる", 
        pos: "连体词",
        meaning: "所有的一切，各种各样的",
        example_jp: "解決のために、ありとあらゆる手段を尽くした。",
        example_cn: "为了解决问题，穷尽了一切手段。"
    },
    { 
        id: 323, 
        word: "ぼそぼそ", 
        kanji: "ぼそぼそ", 
        kana: "ぼそぼそ", 
        pos: "副词 / 自动词・サ变",
        meaning: "小声嘟哝；（食物）干巴巴，难以下咽",
        example_jp: "彼は自信がないのか、いつもぼそぼそと話す。",
        example_cn: "他不知道是不是没自信，说话总是小声嘟哝。"
    },
    { 
        id: 324, 
        word: "どろどろ", 
        kanji: "どろどろ", 
        kana: "どろどろ", 
        pos: "副词 / ナ形容词",
        meaning: "黏糊糊，融化貌；沾满泥；（关系）复杂，纠葛",
        example_jp: "アイスクリームが溶けてどろどろになった。",
        example_cn: "冰淇淋融化变得黏糊糊的了。"
    },
    { 
        id: 325, 
        word: "やましい", 
        kanji: "疚しい", 
        kana: "やましい", 
        pos: "イ形容词",
        meaning: "内疚，问心有愧，亏心",
        example_jp: "やましいところがないなら、堂々としていればいい。",
        example_cn: "如果没有问心有愧的地方，堂堂正正的就好。"
    },
    { 
        id: 326, 
        word: "ひいき", 
        kanji: "贔屓", 
        kana: "ひいき", 
        pos: "名词 / 他动词・サ变",
        meaning: "偏爱，袒护，特别关照",
        example_jp: "店長は特定のアルバイトだけを贔屓している。",
        example_cn: "店长只偏袒特定的兼职员工。"
    },
    { 
        id: 327, 
        word: "はざま", 
        kanji: "狭間", 
        kana: "はざま", 
        pos: "名词",
        meaning: "缝隙，山谷；夹缝，过渡期",
        example_jp: "生と死の狭間を彷徨った末、奇跡的に回復した。",
        example_cn: "在生与死的夹缝中徘徊之后，奇迹般地康复了。"
    },
    { 
        id: 328, 
        word: "ぼきぼき", 
        kanji: "ぼきぼき", 
        kana: "ぼきぼき", 
        pos: "副词",
        meaning: "（折断粗硬物或关节的）嘎吧嘎吧声",
        example_jp: "背伸びをして、関節をぼきぼきと鳴らした。",
        example_cn: "伸了个懒腰，关节发出嘎吧嘎吧的响声。"
    },
    { 
        id: 329, 
        word: "こぐ", 
        kanji: "漕ぐ", 
        kana: "こぐ", 
        pos: "他动词・五段",
        meaning: "划（船），蹬（自行车），荡（秋千）",
        example_jp: "向かい風の中、必死に自転車のペダルを漕いだ。",
        example_cn: "在迎面风中，拼命地蹬着自行车的踏板。"
    },
    { 
        id: 330, 
        word: "とりあえず", 
        kanji: "取り敢えず", 
        kana: "とりあえず", 
        pos: "副词",
        meaning: "总之，暂且，首先",
        example_jp: "今後のことは後で考えるとして、取り敢えずビールで乾杯しよう。",
        example_cn: "以后的事情以后再想，总之先用啤酒干杯吧。"
    },
    { 
        id: 331, 
        word: "〜まみれ", 
        kanji: "〜塗れ", 
        kana: "〜まみれ", 
        pos: "后缀",
        meaning: "沾满...，浑身是...（多接消极事物，如血、汗、泥、借金）",
        example_jp: "泥まみれになってボールを追いかけた。",
        example_cn: "弄得浑身是泥去追赶球。"
    },
    { 
        id: 332, 
        word: "それなり", 
        kanji: "其れ成り", 
        kana: "それなり", 
        pos: "名词 / 副词",
        meaning: "与之相称，恰如其分，也就那样",
        example_jp: "安いカメラだが、それなりの写真は撮れる。",
        example_cn: "虽然是便宜的相机，但也能拍出过得去的照片。"
    },
    { 
        id: 333, 
        word: "ほとり", 
        kanji: "辺 / 畔", 
        kana: "ほとり", 
        pos: "名词",
        meaning: "边，畔，附近（多指水边）",
        example_jp: "湖のほとりにある静かなホテルに泊まった。",
        example_cn: "住在了湖畔的一家安静的酒店里。"
    },
    { 
        id: 334, 
        word: "きくらげ", 
        kanji: "木耳", 
        kana: "きくらげ", 
        pos: "名词",
        meaning: "黑木耳",
        example_jp: "中華スープにきくらげを入れて食感を良くする。",
        example_cn: "在中华汤里加入黑木耳以改善口感。"
    },
    { 
        id: 335, 
        word: "すがすがしい", 
        kanji: "清々しい", 
        kana: "すがすがしい", 
        pos: "イ形容词",
        meaning: "清爽，神清气爽，爽快",
        example_jp: "早朝の森を散歩するのは、とても清々しい気分だ。",
        example_cn: "清晨在森林里散步，感觉非常神清气爽。"
    },
    { 
        id: 336, 
        word: "しっぽり", 
        kanji: "しっぽり", 
        kana: "しっぽり", 
        pos: "副词 / 自动词・サ变",
        meaning: "静静地（下雨）；柔情蜜意，情意缠绵",
        example_jp: "夫婦水入らずで、温泉旅館でしっぽりと過ごす。",
        example_cn: "只有夫妻二人，在温泉旅馆情意绵绵地度过。"
    },
    { 
        id: 337, 
        word: "いそいそ", 
        kanji: "急々", 
        kana: "いそいそ", 
        pos: "副词 / 自动词・サ变",
        meaning: "兴冲冲地，欢欣雀跃地",
        example_jp: "彼はデートの約束があるらしく、いそいそと出かけていった。",
        example_cn: "他好像有约会，兴冲冲地出门去了。"
    },
    { 
        id: 338, 
        word: "さほど", 
        kanji: "然程", 
        kana: "さほど", 
        pos: "副词",
        meaning: "（后接否定）并不那么，不太...",
        example_jp: "今年の冬は、例年に比べてさほど寒くない。",
        example_cn: "今年的冬天和往年相比没那么冷。"
    },
    { 
        id: 339, 
        word: "いたしかたない", 
        kanji: "致し方無い", 
        kana: "いたしかたない", 
        pos: "イ形容词",
        meaning: "没有办法，无可奈何",
        example_jp: "天候不良によるフライトのキャンセルは致し方ないことだ。",
        example_cn: "由于天气恶劣导致航班取消，这也是无可奈何的事。"
    },
    { 
        id: 340, 
        word: "すりつぶす", 
        kanji: "擂り潰す", 
        kana: "すりつぶす", 
        pos: "他动词・五段",
        meaning: "捣碎，研碎；消耗殆尽",
        example_jp: "ごまをすりつぶして、料理の風味を増す。",
        example_cn: "把芝麻研碎，增加菜肴的风味。"
    },
    { 
        id: 341, 
        word: "てんで", 
        kanji: "転で", 
        kana: "てんで", 
        pos: "副词",
        meaning: "（后接否定）完全不，根本不；非常",
        example_jp: "彼の言い訳はてんで話にならない。",
        example_cn: "他的借口简直完全说不通。"
    },
    { 
        id: 342, 
        word: "ありふれる", 
        kanji: "有り触れる", 
        kana: "ありふれる", 
        pos: "自动词・一段",
        meaning: "常见，不稀奇，司空见惯",
        example_jp: "これはどこにでもある、ごくありふれた花です。",
        example_cn: "这是哪里都有的、极其普通的花。"
    },
    { 
        id: 343, 
        word: "こずえ", 
        kanji: "梢", 
        kana: "こずえ", 
        pos: "名词",
        meaning: "树梢",
        example_jp: "木々の梢が風に揺れている。",
        example_cn: "树梢在风中摇曳。"
    },
    { 
        id: 344, 
        word: "はかない", 
        kanji: "儚い", 
        kana: "はかない", 
        pos: "イ形容词",
        meaning: "短暂的，无常的，虚幻的",
        example_jp: "セミの命は短く、はかないものだ。",
        example_cn: "蝉的生命短暂而无常。"
    },
    { 
        id: 345, 
        word: "ぼける", 
        kanji: "惚ける / 呆ける", 
        kana: "ぼける", 
        pos: "自动词・一段",
        meaning: "迟钝，糊涂；（颜色、记忆等）模糊",
        example_jp: "祖父は最近、少し頭がぼけてきたようだ。",
        example_cn: "祖父最近脑子好像有点糊涂了。"
    },
    { 
        id: 346, 
        word: "すばしこい", 
        kanji: "素早しこい / 捷い", 
        kana: "すばしこい", 
        pos: "イ形容词",
        meaning: "敏捷，灵敏，麻利",
        example_jp: "小鳥はすばしこく枝から枝へと飛び移った。",
        example_cn: "小鸟敏捷地从一个树枝飞到了另一个树枝。"
    },
    { 
        id: 347, 
        word: "じわっと", 
        kanji: "じわっと", 
        kana: "じわっと", 
        pos: "副词",
        meaning: "慢慢地渗出，逐渐地",
        example_jp: "感動的な映画を見て、涙がじわっと溢れてきた。",
        example_cn: "看了感人的电影，眼泪慢慢地涌了出来。"
    },
    { 
        id: 348, 
        word: "やりて", 
        kanji: "遣り手", 
        kana: "やりて", 
        pos: "名词",
        meaning: "能干的人，手腕高明的人",
        example_jp: "彼女は業界でも有名な遣り手のビジネスウーマンだ。",
        example_cn: "她是在业界也很有名的能干的女强人。"
    },
    { 
        id: 349, 
        word: "たもと", 
        kanji: "袂", 
        kana: "たもと", 
        pos: "名词",
        meaning: "和服的袖兜；旁边，边缘",
        example_jp: "別れ際、涙を拭って橋の袂で立ち尽くした。",
        example_cn: "临别时，擦着眼泪在桥头呆呆地站了很久。"
    },
    { 
        id: 350, 
        word: "どかどか", 
        kanji: "どかどか", 
        kana: "どかどか", 
        pos: "副词",
        meaning: "（脚步沉重）咚咚地；许多人吵吵嚷嚷地拥入",
        example_jp: "男たちが土足のまま、部屋にどかどかと上がり込んできた。",
        example_cn: "男人们穿着鞋，吵吵嚷嚷地闯进了房间。"
    },
    { 
        id: 351, 
        word: "にぎわう", 
        kanji: "賑わう", 
        kana: "にぎわう", 
        pos: "自动词・五段",
        meaning: "热闹，拥挤，繁荣",
        example_jp: "週末の商店街は多くの買い物客で賑わっている。",
        example_cn: "周末的商业街因为众多购物客而显得十分热闹。"
    },
    { 
        id: 352, 
        word: "なおさら", 
        kanji: "尚更", 
        kana: "なおさら", 
        pos: "副词",
        meaning: "更加，越发",
        example_jp: "誰でも褒められれば嬉しいが、努力した後なら尚更だ。",
        example_cn: "不管是谁被夸奖都会高兴，努力之后被夸奖就更是如此了。"
    },
    { 
        id: 353, 
        word: "すくすく", 
        kanji: "すくすく", 
        kana: "すくすく", 
        pos: "副词",
        meaning: "茁壮成长貌",
        example_jp: "子供たちは自然に囲まれてすくすくと育っている。",
        example_cn: "孩子们在自然环境的环抱下茁壮成长。"
    },
    { 
        id: 354, 
        word: "たくましい", 
        kanji: "逞しい", 
        kana: "たくましい", 
        pos: "イ形容词",
        meaning: "健壮的，强壮的；意志坚强的，顽强的",
        example_jp: "逆境にも負けない、たくましい精神力を持っている。",
        example_cn: "拥有即使身处逆境也不服输的顽强精神力。"
    },
    { 
        id: 355, 
        word: "すさむ", 
        kanji: "荒む", 
        kana: "すさむ", 
        pos: "自动词・五段",
        meaning: "荒废；（心情、生活、风纪等）变得颓废、粗野",
        example_jp: "仕事のストレスで、最近少し生活が荒んでいる。",
        example_cn: "因为工作的压力，最近生活有些颓废。"
    },
    { 
        id: 356, 
        word: "すり合わせる", 
        kanji: "摺り合わせる", 
        kana: "すりあわせる", 
        pos: "他动词・一段",
        meaning: "相互磨合；核对、沟通并调整（分歧等）",
        example_jp: "両社の意見をすり合わせて、妥協点を見出す。",
        example_cn: "互相沟通调整两家公司的意见，找出妥协点。"
    },
    { 
        id: 357, 
        word: "ちなみに", 
        kanji: "因みに", 
        kana: "ちなみに", 
        pos: "接续词",
        meaning: "顺便提一下，附带说明",
        example_jp: "明日の集合時間は8時です。因みに、朝食は各自で済ませてください。",
        example_cn: "明天集合时间是8点。顺便提一下，请各自解决早餐。"
    },
    { 
        id: 358, 
        word: "きっぱり", 
        kanji: "きっぱり", 
        kana: "きっぱり", 
        pos: "副词 / 自动词・サ变",
        meaning: "断然，干脆，斩钉截铁地",
        example_jp: "彼はその理不尽な要求をきっぱりと断った。",
        example_cn: "他断然拒绝了那个无理的要求。"
    },
    { 
        id: 359, 
        word: "どもる", 
        kanji: "吃る", 
        kana: "どもる", 
        pos: "自动词・五段",
        meaning: "结巴，口吃",
        example_jp: "極度に緊張して、スピーチで少し吃ってしまった。",
        example_cn: "因为极度紧张，演讲时稍微有些结巴了。"
    },
    { 
        id: 360, 
        word: "はしゃぐ", 
        kanji: "燥ぐ", 
        kana: "はしゃぐ", 
        pos: "自动词・五段",
        meaning: "欢闹，喧闹，得意忘形",
        example_jp: "遠足の前日で、子供たちは嬉しくてはしゃいでいる。",
        example_cn: "郊游的前一天，孩子们高兴得欢闹不已。"
    },
    { 
        id: 361, 
        word: "どしどし", 
        kanji: "どしどし", 
        kana: "どしどし", 
        pos: "副词",
        meaning: "接连不断地；毫不客气地，毫无顾忌地",
        example_jp: "質問がある方は、どしどし発言してください。",
        example_cn: "有问题的各位，请毫不客气地发言。"
    },
    { 
        id: 362, 
        word: "かぶれる", 
        kanji: "気触れる", 
        kana: "かぶれる", 
        pos: "自动词・一段",
        meaning: "起斑疹，过敏；深受...影响，着迷（多含贬义）",
        example_jp: "海外の文化にすっかり気触れて帰ってきた。",
        example_cn: "深受海外文化影响（洋气十足地）回来了。"
    },
    { 
        id: 363, 
        word: "しとしと", 
        kanji: "しとしと", 
        kana: "しとしと", 
        pos: "副词",
        meaning: "（静静地）淅淅沥沥地",
        example_jp: "朝から春の雨がしとしとと降っている。",
        example_cn: "从早上开始，春雨就淅淅沥沥地下着。"
    },
    { 
        id: 364, 
        word: "おののく", 
        kanji: "戦く", 
        kana: "おののく", 
        pos: "自动词・五段",
        meaning: "战栗，发抖，打哆嗦",
        example_jp: "あまりの恐怖に体が戦いた。",
        example_cn: "因为过度恐惧，身体不由得发抖。"
    },
    { 
        id: 365, 
        word: "どうかすると", 
        kanji: "どうかすると", 
        kana: "どうかすると", 
        pos: "副词",
        meaning: "弄不好，有时候可能会...",
        example_jp: "どうかすると、今年の冬は例年より寒くなるかもしれない。",
        example_cn: "弄不好今年冬天可能会比往年更冷。"
    },
    { 
        id: 366, 
        word: "やりこなす", 
        kanji: "遣り熟す", 
        kana: "やりこなす", 
        pos: "他动词・五段",
        meaning: "顺利完成，轻松应对，妥善处理",
        example_jp: "これほど難しい業務を一人で遣り熟すとは立派だ。",
        example_cn: "能一个人顺利完成这么繁重的业务，真了不起。"
    },
    { 
        id: 367, 
        word: "へらへら", 
        kanji: "へらへら", 
        kana: "へらへら", 
        pos: "副词 / 自动词・サ变",
        meaning: "傻笑，干笑；轻浮，喋喋不休",
        example_jp: "怒られているのに、彼はへらへらと笑っている。",
        example_cn: "明明在挨骂，他却还在轻浮地傻笑。"
    },
    { 
        id: 368, 
        word: "かきまわす", 
        kanji: "掻き回す", 
        kana: "かきまわす", 
        pos: "他动词・五段",
        meaning: "搅拌；翻弄；扰乱，搅乱",
        example_jp: "勝手な行動でチームの輪を掻き回さないでほしい。",
        example_cn: "希望你不要用任性的行为扰乱团队的和谐。"
    },
    { 
        id: 369, 
        word: "おもんぱかる", 
        kanji: "慮る", 
        kana: "おもんぱかる", 
        pos: "他动词・五段",
        meaning: "仔细考虑，慎重思量，体谅",
        example_jp: "相手の立場を慮って、発言を控える。",
        example_cn: "体谅对方的立场，控制了自己的发言。"
    },
    { 
        id: 370, 
        word: "せかせか", 
        kanji: "せかせか", 
        kana: "せかせか", 
        pos: "副词 / 自动词・サ变",
        meaning: "慌慌张张，急急忙忙",
        example_jp: "彼はいつもせかせかしていて、落ち着きがない。",
        example_cn: "他总是慌慌张张的，静不下心来。"
    },
    { 
        id: 371, 
        word: "ゆとり", 
        kanji: "ゆとり", 
        kana: "ゆとり", 
        pos: "名词",
        meaning: "宽裕，余地，余裕",
        example_jp: "経済的なゆとりがないと、心にもゆとりがなくなる。",
        example_cn: "如果没有经济上的宽裕，心里也会失去从容。"
    },
    { 
        id: 372, 
        word: "ぞんざい", 
        kanji: "ぞんざい", 
        kana: "ぞんざい", 
        pos: "ナ形容词",
        meaning: "草率，马虎，粗鲁",
        example_jp: "客に対して、そんなぞんざいな言葉遣いをしてはいけない。",
        example_cn: "对客人不能用那种粗鲁的语言。"
    },
    { 
        id: 373, 
        word: "こんがり", 
        kanji: "こんがり", 
        kana: "こんがり", 
        pos: "副词",
        meaning: "烤得恰到好处，微焦",
        example_jp: "パンがこんがりと良い色に焼けた。",
        example_cn: "面包烤出了恰到好处的微焦色。"
    },
    { 
        id: 374, 
        word: "あでやか", 
        kanji: "艶やか", 
        kana: "あでやか", 
        pos: "ナ形容词",
        meaning: "艳丽，娇艳，美丽动人",
        example_jp: "彼女は艶やかな着物姿でパーティーに現れた。",
        example_cn: "她身着艳丽的和服出现在派对上。"
    },
    { 
        id: 375, 
        word: "すぱすぱ", 
        kanji: "すぱすぱ", 
        kana: "すぱすぱ", 
        pos: "副词",
        meaning: "（切东西）干净利落；大口吸烟貌",
        example_jp: "彼はヘビースモーカーで、タバコをすぱすぱ吸う。",
        example_cn: "他是个老烟枪，吧嗒吧嗒地大口抽烟。"
    },
    { 
        id: 376, 
        word: "むしる", 
        kanji: "毟る", 
        kana: "むしる", 
        pos: "他动词・五段",
        meaning: "拔，揪，撕去（毛发、草等）",
        example_jp: "庭の雑草を一本一本丁寧に毟る。",
        example_cn: "把院子里的杂草一根一根地仔细拔掉。"
    },
    { 
        id: 377, 
        word: "ゆさゆさ", 
        kanji: "ゆさゆさ", 
        kana: "ゆさゆさ", 
        pos: "副词",
        meaning: "大幅度摇晃貌",
        example_jp: "地震で大きな木がゆさゆさと揺れた。",
        example_cn: "因为地震，大树猛烈地摇晃着。"
    },
    { 
        id: 378, 
        word: "ねだる", 
        kanji: "強請る", 
        kana: "ねだる", 
        pos: "他动词・五段",
        meaning: "死乞白赖地求，央求",
        example_jp: "子供におもちゃを買ってほしいと強請られた。",
        example_cn: "被孩子央求着要买玩具。"
    },
    { 
        id: 379, 
        word: "さめ", 
        kanji: "鮫", 
        kana: "さめ", 
        pos: "名词",
        meaning: "鲨鱼",
        example_jp: "海で鮫に遭遇してパニックになった。",
        example_cn: "在海里遇到鲨鱼，陷入了恐慌。"
    },
    { 
        id: 380, 
        word: "たどりつく", 
        kanji: "辿り着く", 
        kana: "たどりつく", 
        pos: "自动词・五段",
        meaning: "好不容易走到，历尽艰辛到达",
        example_jp: "道に迷いながらも、何とか目的地に辿り着いた。",
        example_cn: "虽然迷了路，但总算好不容易到达了目的地。"
    },
    { 
        id: 381, 
        word: "しんどい", 
        kanji: "辛労い", 
        kana: "しんどい", 
        pos: "イ形容词",
        meaning: "吃力的，费力的，疲惫的（口语）",
        example_jp: "毎日の満員電車での通勤は、本当にしんどい。",
        example_cn: "每天挤满员电车通勤，真的非常辛苦。"
    },
    { 
        id: 382, 
        word: "とろける", 
        kanji: "蕩ける", 
        kana: "とろける", 
        pos: "自动词・一段",
        meaning: "融化，溶化；心神迷乱，被迷住",
        example_jp: "口の中でチーズがとろける。",
        example_cn: "奶酪在嘴里融化。"
    },
    { 
        id: 383, 
        word: "やんわり", 
        kanji: "やんわり", 
        kana: "やんわり", 
        pos: "副词",
        meaning: "委婉地，柔软地，温和地",
        example_jp: "相手を傷つけないように、やんわりと誘いを断った。",
        example_cn: "为了不伤害对方，委婉地拒绝了邀请。"
    },
    { 
        id: 384, 
        word: "おかえし", 
        kanji: "お返し", 
        kana: "おかえし", 
        pos: "名词",
        meaning: "回礼，报答；找头",
        example_jp: "お祝いをいただいたので、心ばかりのお返しを送った。",
        example_cn: "收到了贺礼，所以送了一点薄礼作为回礼。"
    },
    { 
        id: 385, 
        word: "いたわる", 
        kanji: "労る", 
        kana: "いたわる", 
        pos: "他动词・五段",
        meaning: "慰劳，体恤，怜惜",
        example_jp: "長年働き続けた父を労って、旅行に連れて行った。",
        example_cn: "为了慰劳常年辛苦工作的父亲，带他去旅行了。"
    },
    { 
        id: 386, 
        word: "あらかた", 
        kanji: "粗方", 
        kana: "あらかた", 
        pos: "副词",
        meaning: "大部分，基本上，大约",
        example_jp: "引っ越しの荷造りは、あらかた終わった。",
        example_cn: "搬家的打包工作基本上完成了。"
    },
    { 
        id: 387, 
        word: "つやつや", 
        kanji: "艶々", 
        kana: "つやつや", 
        pos: "副词 / 自动词・サ变",
        meaning: "光滑，油亮亮，有光泽",
        example_jp: "彼女の髪は、手入れが行き届いていてつやつやだ。",
        example_cn: "她的头发保养得很周到，非常油亮。"
    },
    { 
        id: 388, 
        word: "ゆらゆら", 
        kanji: "ゆらゆら", 
        kana: "ゆらゆら", 
        pos: "副词 / 自动词・サ变",
        meaning: "轻轻摇晃，摇摇晃晃",
        example_jp: "水面に映った月がゆらゆらと揺れている。",
        example_cn: "水面上倒映的月亮在轻轻地摇晃着。"
    },
    { 
        id: 389, 
        word: "ひとまず", 
        kanji: "一先ず", 
        kana: "ひとまず", 
        pos: "副词",
        meaning: "暂且，姑且，首先",
        example_jp: "雨も止んだし、ひとまず家に戻ろう。",
        example_cn: "雨也停了，姑且先回家吧。"
    },
    { 
        id: 390, 
        word: "いやいや", 
        kanji: "嫌々", 
        kana: "いやいや", 
        pos: "副词",
        meaning: "勉强地，不情愿地",
        example_jp: "彼は上司の命令で、嫌々ながら残業を引き受けた。",
        example_cn: "他在上司的命令下，极不情愿地接下了加班的活。"
    },
    { 
        id: 391, 
        word: "ぐらつく", 
        kanji: "ぐらつく", 
        kana: "ぐらつく", 
        pos: "自动词・五段",
        meaning: "摇晃，不稳定；动摇",
        example_jp: "虫歯になって、歯がぐらつく。",
        example_cn: "蛀牙了，牙齿摇晃。"
    },
    { 
        id: 392, 
        word: "ふやける", 
        kanji: "ふやける", 
        kana: "ふやける", 
        pos: "自动词・一段",
        meaning: "泡软，泡胀",
        example_jp: "お湯に長く浸かりすぎて、指先がふやけてしまった。",
        example_cn: "在热水里泡了太久，手指尖都泡胀了。"
    },
    { 
        id: 393, 
        word: "しんなり", 
        kanji: "しんなり", 
        kana: "しんなり", 
        pos: "副词 / 自动词・サ变",
        meaning: "柔软，软塌塌，蔫",
        example_jp: "玉ねぎがしんなりするまで炒める。",
        example_cn: "把洋葱炒到变软。"
    },
    { 
        id: 394, 
        word: "ばらす", 
        kanji: "ばらす", 
        kana: "ばらす", 
        pos: "他动词・五段",
        meaning: "拆散；泄露（秘密）；变卖",
        example_jp: "絶対に秘密にするから、本当のことをばらしてくれ。",
        example_cn: "我绝对保密，请把真相泄露（告诉）给我吧。"
    },
    { 
        id: 395, 
        word: "ちらっと / ちらりと", 
        kanji: "ちらり", 
        kana: "ちらっと", 
        pos: "副词",
        meaning: "一闪，瞥见；略微听到",
        example_jp: "その噂は、ちらっと聞いたことがある。",
        example_cn: "那个传闻，我略微听到过一点。"
    },
    { 
        id: 396, 
        word: "いとしい", 
        kanji: "愛しい", 
        kana: "いとしい", 
        pos: "イ形容词",
        meaning: "惹人怜爱的，可爱的，令人爱慕的",
        example_jp: "すやすや眠る子供の顔が何ともいとしい。",
        example_cn: "安睡中孩子的脸庞真是惹人怜爱。"
    },
    { 
        id: 397, 
        word: "しかしながら", 
        kanji: "しかしながら", 
        kana: "しかしながら", 
        pos: "接续词",
        meaning: "然而，可是，不过（比しかし更正式）",
        example_jp: "努力は認める。しかしながら、結果が全ての世界だ。",
        example_cn: "我认可你的努力。然而，这是一个结果决定一切的世界。"
    },
    { 
        id: 398, 
        word: "たじたじ", 
        kanji: "たじたじ", 
        kana: "たじたじ", 
        pos: "副词 / 自动词・サ变",
        meaning: "招架不住，退缩，畏缩",
        example_jp: "記者たちの鋭い質問に、政治家もたじたじだった。",
        example_cn: "面对记者们尖锐的提问，政治家也有些招架不住了。"
    },
    { 
        id: 399, 
        word: "おこし", 
        kanji: "お越し", 
        kana: "おこし", 
        pos: "名词",
        meaning: "（尊敬语）光临，到来",
        example_jp: "本日はお忙しい中、お越しいただきありがとうございます。",
        example_cn: "感谢您今天百忙之中光临。"
    },
    { 
        id: 400, 
        word: "おみや", 
        kanji: "お宮", 
        kana: "おみや", 
        pos: "名词",
        meaning: "神社（美化语）",
        example_jp: "お正月には、家族揃って近くのお宮に初詣に出かける。",
        example_cn: "新的一年，全家会一起去附近的神社进行初次参拜。"
    },
    { 
        id: 401, 
        word: "ねじ", 
        kanji: "螺子", 
        kana: "ねじ", 
        pos: "名词",
        meaning: "螺丝",
        example_jp: "ドライバーでねじをしっかり締める。",
        example_cn: "用螺丝刀把螺丝拧紧。"
    },
    { 
        id: 402, 
        word: "きっちり", 
        kanji: "きっちり", 
        kana: "きっちり", 
        pos: "副词 / 自动词・サ变",
        meaning: "严丝合缝地，整整齐齐地，准确地",
        example_jp: "スーツをきっちりと着こなして面接に向かった。",
        example_cn: "把西装穿得整整齐齐去参加面试。"
    },
    { 
        id: 403, 
        word: "おせっかい", 
        kanji: "お節介", 
        kana: "おせっかい", 
        pos: "名词 / ナ形容词",
        meaning: "多管闲事，瞎操心",
        example_jp: "ありがたいが、少しお節介なアドバイスだった。",
        example_cn: "虽然很感谢，但这建议多少有点多管闲事了。"
    },
    { 
        id: 404, 
        word: "よもや", 
        kanji: "よもや", 
        kana: "よもや", 
        pos: "副词",
        meaning: "（后接否定推测）难道，万万没想到",
        example_jp: "よもや彼が我々を裏切るとは思わなかった。",
        example_cn: "万万没想到他竟然会背叛我们。"
    },
    { 
        id: 405, 
        word: "ださい", 
        kanji: "ださい", 
        kana: "ださい", 
        pos: "イ形容词",
        meaning: "土气，俗气，不入流（口语）",
        example_jp: "そのネクタイのデザインは少しださいね。",
        example_cn: "那条领带的设计有点土气啊。"
    },
    { 
        id: 406, 
        word: "すっぱり", 
        kanji: "すっぱり", 
        kana: "すっぱり", 
        pos: "副词",
        meaning: "干脆地，彻底地（切断、戒除等）",
        example_jp: "健康のために、タバコをすっぱりとやめた。",
        example_cn: "为了健康，干脆地把烟戒了。"
    },
    { 
        id: 407, 
        word: "ばりばり", 
        kanji: "ばりばり", 
        kana: "ばりばり", 
        pos: "副词 / ナ形容词",
        meaning: "干劲十足地，拼命地；撕裂声",
        example_jp: "彼は新しいプロジェクトでばりばり働いている。",
        example_cn: "他在新项目中干劲十足地工作着。"
    },
    { 
        id: 408, 
        word: "しどろもどろ", 
        kanji: "しどろもどろ", 
        kana: "しどろもどろ", 
        pos: "名词 / ナ形容词",
        meaning: "语无伦次，结结巴巴",
        example_jp: "痛いところを突かれ、彼の弁解はしどろもどろになった。",
        example_cn: "被戳到痛处，他的辩解变得语无伦次起来。"
    },
    { 
        id: 409, 
        word: "ぎょっと", 
        kanji: "ぎょっと", 
        kana: "ぎょっと", 
        pos: "副词 / 自动词・サ变",
        meaning: "大吃一惊，吓一跳",
        example_jp: "暗闇から突然猫が飛び出してきて、ぎょっとした。",
        example_cn: "猫突然从黑暗中窜出来，把我吓了一跳。"
    },
    { 
        id: 410, 
        word: "しのぐ", 
        kanji: "凌ぐ", 
        kana: "しのぐ", 
        pos: "他动词・五段",
        meaning: "忍受，顶住，熬过；超过，超越",
        example_jp: "前作を凌ぐ素晴らしい映画だった。",
        example_cn: "这是一部超越了前作的精彩电影。"
    },
    { 
        id: 411, 
        word: "たしなむ", 
        kanji: "嗜む", 
        kana: "たしなむ", 
        pos: "他动词・五段",
        meaning: "爱好，喜好；谨慎，节制",
        example_jp: "休日はお茶や生け花を嗜む。",
        example_cn: "休息日喜爱品茶和插花。"
    },
    { 
        id: 412, 
        word: "ちょっこり", 
        kanji: "ちょっこり", 
        kana: "ちょっこり", 
        pos: "副词",
        meaning: "稍微，一小点儿",
        example_jp: "疲れたので、ちょっこり休ませてください。",
        example_cn: "我累了，请让我稍微休息一下。"
    },
    { 
        id: 413, 
        word: "いっそ", 
        kanji: "いっそ", 
        kana: "いっそ", 
        pos: "副词",
        meaning: "索性，干脆",
        example_jp: "修理代が高いなら、いっそ新しいものを買おう。",
        example_cn: "如果修理费很贵，干脆买个新的吧。"
    },
    { 
        id: 414, 
        word: "ぴんと", 
        kanji: "ぴんと", 
        kana: "ぴんと", 
        pos: "副词",
        meaning: "紧紧地（绷着）；猛然领悟（ぴんとくる）",
        example_jp: "彼の説明を聞いても、いまいちぴんとこなかった。",
        example_cn: "听了他的解释，也没有立刻恍然大悟。"
    },
    { 
        id: 415, 
        word: "おさん", 
        kanji: "お産", 
        kana: "おさん", 
        pos: "名词",
        meaning: "分娩，生育",
        example_jp: "彼女は初めてのお産を控えて不安そうだ。",
        example_cn: "她即将面临第一次分娩，显得有些不安。"
    },
    { 
        id: 416, 
        word: "かすか", 
        kanji: "微か", 
        kana: "かすか", 
        pos: "ナ形容词",
        meaning: "微弱，隐隐约约",
        example_jp: "遠くから微かな波の音が聞こえる。",
        example_cn: "从远处传来隐隐约约的海浪声。"
    },
    { 
        id: 417, 
        word: "がぶがぶ", 
        kanji: "がぶがぶ", 
        kana: "がぶがぶ", 
        pos: "副词",
        meaning: "咕咚咕咚地（大口喝水）",
        example_jp: "喉が渇いていたので、水をがぶがぶと飲んだ。",
        example_cn: "因为口渴，咕咚咕咚地喝了很多水。"
    },
    { 
        id: 418, 
        word: "かきたてる", 
        kanji: "掻き立てる", 
        kana: "かきたてる", 
        pos: "他动词・一段",
        meaning: "挑起，煽动，唤起（情感等）",
        example_jp: "そのニュースは人々の不安を掻き立てた。",
        example_cn: "那则新闻唤起了人们的不安。"
    },
    { 
        id: 419, 
        word: "おれい", 
        kanji: "お礼", 
        kana: "おれい", 
        pos: "名词",
        meaning: "感谢，谢礼，报酬",
        example_jp: "手伝ってくれたお礼に、食事をご馳走する。",
        example_cn: "为了感谢你的帮忙，我请你吃饭。"
    },
    { 
        id: 420, 
        word: "むっくり", 
        kanji: "むっくり", 
        kana: "むっくり", 
        pos: "副词 / 自动词・サ变",
        meaning: "猛然起身貌；胖乎乎貌",
        example_jp: "彼はベッドからむっくりと起き上がった。",
        example_cn: "他从床上猛地坐了起来。"
    },
    { 
        id: 421, 
        word: "ろくに", 
        kanji: "碌に", 
        kana: "ろくに", 
        pos: "副词",
        meaning: "（后接否定）没能好好地，未充分地",
        example_jp: "忙しくて、ろくに睡眠もとれていない。",
        example_cn: "忙得都没能好好睡一觉。"
    },
    { 
        id: 422, 
        word: "たるみ", 
        kanji: "弛み", 
        kana: "たるみ", 
        pos: "名词",
        meaning: "松弛，下垂，松懈",
        example_jp: "年齢とともに肌のたるみが気になり始めた。",
        example_cn: "随着年龄增长，开始在意皮肤的松弛了。"
    },
    { 
        id: 423, 
        word: "ものものしい", 
        kanji: "物々しい", 
        kana: "ものものしい", 
        pos: "イ形容词",
        meaning: "戒备森严的，夸张的，威严的",
        example_jp: "事件現場には警察官が集まり、物々しい雰囲気に包まれていた。",
        example_cn: "案发现场聚集了警察，被戒备森严的气氛笼罩着。"
    },
    { 
        id: 424, 
        word: "ちょろちょろ", 
        kanji: "ちょろちょろ", 
        kana: "ちょろちょろ", 
        pos: "副词 / 自动词・サ变",
        meaning: "（水）细流貌，涓涓；四处乱窜",
        example_jp: "岩の隙間から水がちょろちょろと流れ出ている。",
        example_cn: "水从岩石缝隙中涓涓流出。"
    },
    { 
        id: 425, 
        word: "もたもた", 
        kanji: "もたもた", 
        kana: "もたもた", 
        pos: "副词 / 自动词・サ变",
        meaning: "慢吞吞，磨蹭，不麻利",
        example_jp: "もたもたしていると、電車に乗り遅れるよ。",
        example_cn: "再磨磨蹭蹭的，就要赶不上电车了哦。"
    },
    { 
        id: 426, 
        word: "ぞくぞく", 
        kanji: "ぞくぞく", 
        kana: "ぞくぞく", 
        pos: "副词 / 自动词・サ变",
        meaning: "发冷，打寒战；激动，兴奋地发抖",
        example_jp: "風邪の引き始めなのか、寒気で体がぞくぞくする。",
        example_cn: "可能是刚感冒，身体一阵阵发冷打寒战。"
    },
    { 
        id: 427, 
        word: "ちゃんぽん", 
        kanji: "ちゃんぽん", 
        kana: "ちゃんぽん", 
        pos: "名词 / 他动词・サ变",
        meaning: "掺和，混合；长崎杂烩面",
        example_jp: "ビールと日本酒をちゃんぽんにして飲んで、悪酔いした。",
        example_cn: "把啤酒和日本酒掺着喝，结果酩酊大醉。"
    },
    { 
        id: 428, 
        word: "おせじ", 
        kanji: "お世辞", 
        kana: "おせじ", 
        pos: "名词",
        meaning: "奉承话，客套话，恭维",
        example_jp: "彼はお世辞抜きで、本当に優秀なプログラマーだ。",
        example_cn: "抛开客套话不谈，他真的是个非常优秀的程序员。"
    },
    { 
        id: 429, 
        word: "ゆえに", 
        kanji: "故に", 
        kana: "ゆえに", 
        pos: "连词",
        meaning: "因此，所以（多用于书面语或逻辑推导）",
        example_jp: "我思う、故に我在り。",
        example_cn: "我思故我在。"
    },
    { 
        id: 430, 
        word: "たんぱくしつ", 
        kanji: "蛋白質", 
        kana: "たんぱくしつ", 
        pos: "名词",
        meaning: "蛋白质",
        example_jp: "筋肉を作るためには、蛋白質の摂取が欠かせない。",
        example_cn: "为了增加肌肉，摄取蛋白质是必不可少的。"
    },
    { 
        id: 431, 
        word: "しょっちゅう", 
        kanji: "しょっちゅう", 
        kana: "しょっちゅう", 
        pos: "副词",
        meaning: "经常，总是，屡次（口语）",
        example_jp: "あの二人はしょっちゅう喧嘩をしている。",
        example_cn: "那两个人总是吵架。"
    },
    { 
        id: 432, 
        word: "くしゃくしゃ", 
        kanji: "くしゃくしゃ", 
        kana: "くしゃくしゃ", 
        pos: "副词 / ナ形容词",
        meaning: "皱巴巴，起皱",
        example_jp: "ポケットからくしゃくしゃになったレシートが出てきた。",
        example_cn: "从口袋里掏出了皱巴巴的收据。"
    },
    { 
        id: 433, 
        word: "つんのめる", 
        kanji: "つんのめる", 
        kana: "つんのめる", 
        pos: "自动词・一段",
        meaning: "猛烈往前倾倒，栽倒",
        example_jp: "石につまずいて、前に大きくつんのめった。",
        example_cn: "被石头绊了一下，狠狠地朝前栽了过去。"
    },
    { 
        id: 434, 
        word: "そよそよ", 
        kanji: "そよそよ", 
        kana: "そよそよ", 
        pos: "副词",
        meaning: "微风轻轻吹拂貌",
        example_jp: "春の風がそよそよと吹いていて心地よい。",
        example_cn: "春风轻轻吹拂，感觉很舒服。"
    },
    { 
        id: 435, 
        word: "まばゆい", 
        kanji: "目映い / 眩い", 
        kana: "まばゆい", 
        pos: "イ形容词",
        meaning: "耀眼，光彩夺目",
        example_jp: "ステージ上の彼女は、まばゆいばかりの美しさだった。",
        example_cn: "舞台上的她，美丽得光彩夺目。"
    },
    { 
        id: 436, 
        word: "めきめき", 
        kanji: "めきめき", 
        kana: "めきめき", 
        pos: "副词",
        meaning: "显著地，迅速地（进步、成长）",
        example_jp: "毎日練習したおかげで、日本語がめきめきと上達した。",
        example_cn: "多亏了每天练习，日语水平有了显著的提高。"
    },
    { 
        id: 437, 
        word: "それはさておき", 
        kanji: "それはさておき", 
        kana: "それはさておき", 
        pos: "连语 / 连词",
        meaning: "闲话休题，言归正传，暂且不提",
        example_jp: "雑談はさておき、本題に入りましょう。",
        example_cn: "闲聊暂且不提，我们进入正题吧。"
    },
    { 
        id: 438, 
        word: "こねる", 
        kanji: "捏ねる", 
        kana: "こねる", 
        pos: "他动词・一段",
        meaning: "揉合，捏合；强词夺理（理屈をこねる）",
        example_jp: "小麦粉に水を加えてよくこねる。",
        example_cn: "在面粉中加水并充分揉合。"
    },
    { 
        id: 439, 
        word: "しめた", 
        kanji: "しめた", 
        kana: "しめた", 
        pos: "感叹词",
        meaning: "太好了！正中下怀！",
        example_jp: "ライバルがミスをした。しめた、これで勝てる！",
        example_cn: "对手失误了。太好了，这样就能赢了！"
    },
    { 
        id: 440, 
        word: "そぎおとす", 
        kanji: "削ぎ落とす", 
        kana: "そぎおとす", 
        pos: "他动词・五段",
        meaning: "削去，剔除，精简（多余的部分）",
        example_jp: "無駄な装飾を削ぎ落とした、シンプルなデザインが良い。",
        example_cn: "我喜欢那种剔除了多余装饰、简约的设计。"
    },
    { 
        id: 441, 
        word: "ちまちま", 
        kanji: "ちまちま", 
        kana: "ちまちま", 
        pos: "副词 / 自动词・サ变",
        meaning: "小气，格局小；小巧，零碎",
        example_jp: "そんなちまちましたことにこだわっていないで、もっと大局を見ろ。",
        example_cn: "别在那种小肚鸡肠的琐事上纠结，要看大局。"
    },
    { 
        id: 442, 
        word: "しっくり", 
        kanji: "しっくり", 
        kana: "しっくり", 
        pos: "副词 / 自动词・サ变",
        meaning: "合适，融洽，对路（しっくりくる）",
        example_jp: "この靴は自分の足にしっくりこない。",
        example_cn: "这双鞋穿在我的脚上感觉不太合适。"
    },
    { 
        id: 443, 
        word: "きっかり", 
        kanji: "きっかり", 
        kana: "きっかり", 
        pos: "副词",
        meaning: "恰好，正好（指时间、数量的精确）",
        example_jp: "約束のきっかり5分前に到着した。",
        example_cn: "在约定的时间恰好提前5分钟到达了。"
    },
    { 
        id: 444, 
        word: "てっきり", 
        kanji: "てっきり", 
        kana: "てっきり", 
        pos: "副词",
        meaning: "（自以为）一定，无疑是（后多接发现自己弄错的状况）",
        example_jp: "てっきり今日は休みだと思っていたのに、出勤日だった。",
        example_cn: "我本以为今天一定放假，没想到却是工作日。"
    },
    { 
        id: 445, 
        word: "くつろぐ", 
        kanji: "寛ぐ", 
        kana: "くつろぐ", 
        pos: "自动词・五段",
        meaning: "放松，休息，随便（不拘束）",
        example_jp: "休日は家でゆっくりくつろぐのが好きだ。",
        example_cn: "我喜欢休息日在家里悠闲地放松。"
    },
    { 
        id: 446, 
        word: "うつむく", 
        kanji: "俯く", 
        kana: "うつむく", 
        pos: "自动词・五段",
        meaning: "低下头，垂下目光",
        example_jp: "叱られた子供は、黙って下をうつむいた。",
        example_cn: "被训斥的孩子默默地低下了头。"
    },
    { 
        id: 447, 
        word: "かすかす", 
        kanji: "かすかす", 
        kana: "かすかす", 
        pos: "副词 / ナ形容词",
        meaning: "勉勉强强，刚刚够；干巴巴的",
        example_jp: "合格点にはかすかす届いた。",
        example_cn: "勉勉强强达到了及格线。"
    },
    { 
        id: 448, 
        word: "げんなり", 
        kanji: "げんなり", 
        kana: "げんなり", 
        pos: "副词 / 自动词・サ变",
        meaning: "厌烦，腻烦，失望泄气",
        example_jp: "上司の長い自慢話には、すっかりげんなりした。",
        example_cn: "对上司冗长的自吹自擂彻底感到厌烦了。"
    },
    { 
        id: 449, 
        word: "くじびき", 
        kanji: "籤引き", 
        kana: "くじびき", 
        pos: "名词",
        meaning: "抽签，抓阄",
        example_jp: "順番はくじ引きで公平に決めましょう。",
        example_cn: "顺序就用抽签来公平决定吧。"
    },
    { 
        id: 450, 
        word: "ありがち", 
        kanji: "有り勝ち", 
        kana: "ありがち", 
        pos: "ナ形容词",
        meaning: "常有的，常见的（多指消极情况）",
        example_jp: "それは初心者にありがちなミスだ。",
        example_cn: "那是初学者常犯的错误。"
    },
    { 
        id: 451, 
        word: "おふくろ", 
        kanji: "お袋", 
        kana: "おふくろ", 
        pos: "名词",
        meaning: "老妈，母亲（多为男性对别人称呼自己的母亲）",
        example_jp: "久しぶりに実家に帰り、お袋の味を楽しんだ。",
        example_cn: "久违地回了趟老家，品尝了老妈做的饭菜。"
    },
    { 
        id: 452, 
        word: "ずぶずぶ", 
        kanji: "ずぶずぶ", 
        kana: "ずぶずぶ", 
        pos: "副词",
        meaning: "深深陷入（泥沼等）貌；（关系）深陷其中无法自拔",
        example_jp: "雨上がりのぬかるみに足がずぶずぶと沈んだ。",
        example_cn: "脚深深地陷进了雨后的烂泥里。"
    },
    { 
        id: 453, 
        word: "ばてる", 
        kanji: "ばてる", 
        kana: "ばてる", 
        pos: "自动词・一段",
        meaning: "精疲力尽，累得半死",
        example_jp: "連日の猛暑で、すっかりばててしまった。",
        example_cn: "连日的酷暑，让人彻底精疲力尽了。"
    },
    { 
        id: 454, 
        word: "やりなおす", 
        kanji: "遣り直す", 
        kana: "やりなおす", 
        pos: "他动词・五段",
        meaning: "重做，重新来过",
        example_jp: "データが消えてしまったので、最初から遣り直すしかない。",
        example_cn: "数据都丢了，只能从头重做。"
    },
    { 
        id: 455, 
        word: "ごしごし", 
        kanji: "ごしごし", 
        kana: "ごしごし", 
        pos: "副词",
        meaning: "使劲擦洗貌",
        example_jp: "床の汚れをブラシでごしごしとこすり落とす。",
        example_cn: "用刷子使劲把地板上的污垢擦掉。"
    },
    { 
        id: 456, 
        word: "すやすや", 
        kanji: "すやすや", 
        kana: "すやすや", 
        pos: "副词",
        meaning: "安详地熟睡貌",
        example_jp: "赤ちゃんがベビーベッドですしやすやと眠っている。",
        example_cn: "婴儿在婴儿床上安详地睡着。"
    },
    { 
        id: 457, 
        word: "でっちあげる", 
        kanji: "捏ち上げる", 
        kana: "でっちあげる", 
        pos: "他动词・一段",
        meaning: "捏造，伪造，无中生有",
        example_jp: "彼は自分のミスを隠すために、嘘の理由を捏ち上げた。",
        example_cn: "为了掩盖自己的失误，他捏造了虚假的理由。"
    },
    { 
        id: 458, 
        word: "ぶちこわす", 
        kanji: "打ち壊す / ぶち壊す", 
        kana: "ぶちこわす", 
        pos: "他动词・五段",
        meaning: "打坏，砸碎；搞糟，糟蹋（气氛、计划等）",
        example_jp: "彼の無神経な一言が、せっかくの雰囲気をぶち壊した。",
        example_cn: "他那毫不在意的一句话，把好不容易营造的气氛给破坏了。"
    },
    { 
        id: 459, 
        word: "どたばた", 
        kanji: "どたばた", 
        kana: "どたばた", 
        pos: "副词 / 自动词・サ变",
        meaning: "脚步重重地乱跑；慌乱，手忙脚乱",
        example_jp: "引っ越しの準備で、一日中どたばたしていた。",
        example_cn: "因为准备搬家，一整天都在手忙脚乱。"
    },
    { 
        id: 460, 
        word: "ぼこぼこ", 
        kanji: "ぼこぼこ", 
        kana: "ぼこぼこ", 
        pos: "副词 / ナ形容词",
        meaning: "坑坑洼洼；水冒泡声；被揍得很惨",
        example_jp: "台風の後で、道路がぼこぼこになっている。",
        example_cn: "台风过后，道路变得坑坑洼洼的。"
    },
    { 
        id: 461, 
        word: "ちょっきり", 
        kanji: "ちょっきり", 
        kana: "ちょっきり", 
        pos: "副词",
        meaning: "恰好，正合适（时间、金钱等，口语）",
        example_jp: "レジで千円ちょっきり支払った。",
        example_cn: "在收银台付了刚好一千日元。"
    },
    { 
        id: 462, 
        word: "がちがち", 
        kanji: "がちがち", 
        kana: "がちがち", 
        pos: "副词 / ナ形容词",
        meaning: "（冻得）打寒战，牙齿打架；硬邦邦；极度紧张",
        example_jp: "初めてのプレゼンで、がちがちに緊張してしまった。",
        example_cn: "第一次做发表，紧张得浑身僵硬。"
    },
    { 
        id: 463, 
        word: "ぼってり", 
        kanji: "ぼってり", 
        kana: "ぼってり", 
        pos: "副词 / 自动词・サ变",
        meaning: "厚重；胖乎乎",
        example_jp: "絵の具をぼってりと厚く塗る。",
        example_cn: "把颜料厚厚地涂抹上去。"
    },
    { 
        id: 464, 
        word: "やりがい", 
        kanji: "遣り甲斐", 
        kana: "やりがい", 
        pos: "名词",
        meaning: "做的价值，干劲",
        example_jp: "大変な仕事だが、それだけに遣り甲斐がある。",
        example_cn: "虽然是项辛苦的工作，但正因如此才有干的价值。"
    },
    { 
        id: 465, 
        word: "いじる", 
        kanji: "弄る", 
        kana: "いじる", 
        pos: "他动词・五段",
        meaning: "摆弄，拨弄；随意改动；捉弄",
        example_jp: "会議中もスマホばかり弄っているのは失礼だ。",
        example_cn: "开会时还一直摆弄智能手机是很失礼的。"
    },
    { 
        id: 466, 
        word: "まとも", 
        kanji: "正面 / 真面", 
        kana: "まとも", 
        pos: "名词 / ナ形容词",
        meaning: "正经的，像样的，认真的；正面",
        example_jp: "彼が怒るのは当然だ。まともな人間なら誰でも怒る。",
        example_cn: "他生气是理所当然的。只要是个正经人都会生气。"
    },
    { 
        id: 467, 
        word: "くすぐる", 
        kanji: "擽る", 
        kana: "くすぐる", 
        pos: "他动词・五段",
        meaning: "挠痒痒；逗乐；撩拨，引起",
        example_jp: "子供の脇腹をくすぐって笑わせる。",
        example_cn: "挠孩子的咯吱窝逗他笑。"
    },
    { 
        id: 468, 
        word: "ぷりぷり", 
        kanji: "ぷりぷり", 
        kana: "ぷりぷり", 
        pos: "副词 / 自动词・サ变",
        meaning: "气鼓鼓地发怒；（食物等）富有弹性貌",
        example_jp: "新鮮なエビは食感がぷりぷりしていて美味しい。",
        example_cn: "新鲜的虾口感很有弹性，非常好吃。"
    },
    { 
        id: 469, 
        word: "ちびちび", 
        kanji: "ちびちび", 
        kana: "ちびちび", 
        pos: "副词",
        meaning: "一点一点地（喝、吃、花钱）",
        example_jp: "高いお酒なので、毎日ちびちびと飲んでいる。",
        example_cn: "因为是很贵的酒，所以每天只一点一点地喝。"
    },
    { 
        id: 470, 
        word: "こなれる", 
        kanji: "熟れる", 
        kana: "こなれる", 
        pos: "自动词・一段",
        meaning: "（食物）消化；变得熟练，运用自如；（文章等）自然圆滑",
        example_jp: "彼の翻訳は、日本語がよく熟れていて読みやすい。",
        example_cn: "他的翻译，日语表达得非常自然圆润，很容易读。"
    },
    { 
        id: 471, 
        word: "あしからず", 
        kanji: "悪しからず", 
        kana: "あしからず", 
        pos: "副词",
        meaning: "请不要见怪，请多包涵",
        example_jp: "ご希望には添えませんので、悪しからずご了承ください。",
        example_cn: "无法满足您的要求，请多包涵并予以谅解。"
    },
    { 
        id: 472, 
        word: "けたけた", 
        kanji: "けたけた", 
        kana: "けたけた", 
        pos: "副词",
        meaning: "咯咯地傻笑，轻浮地笑",
        example_jp: "あの二人は授業中ずっとけたけた笑っていてうるさい。",
        example_cn: "那两个人上课时一直咯咯地笑，真吵。"
    },
    { 
        id: 473, 
        word: "やりとおす", 
        kanji: "遣り通す", 
        kana: "やりとおす", 
        pos: "他动词・五段",
        meaning: "贯彻到底，坚持做完",
        example_jp: "一度決めた目標は、最後まで遣り通すつもりだ。",
        example_cn: "一旦定下的目标，我打算贯彻到底。"
    },
    { 
        id: 474, 
        word: "かすみ", 
        kanji: "霞 / 翳み", 
        kana: "かすみ", 
        pos: "名词",
        meaning: "云霞，雾气；视力模糊",
        example_jp: "疲労のせいで、目のかすみがひどい。",
        example_cn: "由于疲劳，视力模糊得很严重。"
    },
    { 
        id: 475, 
        word: "むちむち", 
        kanji: "むちむち", 
        kana: "むちむち", 
        pos: "副词 / 自动词・サ变",
        meaning: "丰满，胖乎乎",
        example_jp: "赤ちゃんの腕はむちむちしていて可愛い。",
        example_cn: "婴儿的手臂胖乎乎的很可爱。"
    },
    { 
        id: 476, 
        word: "ひょうたん", 
        kanji: "瓢箪", 
        kana: "ひょうたん", 
        pos: "名词",
        meaning: "葫芦",
        example_jp: "瓢箪から駒が出る（思いがけないことが起こるたとえ）。",
        example_cn: "葫芦里跑出马（比喻发生意想不到的事，弄假成真）。"
    },
    { 
        id: 477, 
        word: "まだしも", 
        kanji: "未だしも", 
        kana: "まだしも", 
        pos: "副词",
        meaning: "（接在“〜なら”后）...的话还可以，...的话倒还算...",
        example_jp: "一回の遅刻ならまだしも、無断欠勤は許されない。",
        example_cn: "迟到一次倒还勉强可以接受，但无故旷工是绝对不被允许的。"
    },
    { 
        id: 478, 
        word: "ごそごそ", 
        kanji: "ごそごそ", 
        kana: "ごそごそ", 
        pos: "副词 / 自动词・サ变",
        meaning: "窸窸窣窣的声音",
        example_jp: "暗闇の中で何かがごそごそと動く音がした。",
        example_cn: "黑暗中传来什么东西窸窸窣窣挪动的声音。"
    },
    { 
        id: 479, 
        word: "はらはら", 
        kanji: "はらはら", 
        kana: "はらはら", 
        pos: "副词 / 自动词・サ变",
        meaning: "担心，捏一把汗；（树叶、眼泪）簌簌地落下",
        example_jp: "綱渡りのパフォーマンスを見て、はらはらした。",
        example_cn: "看着走钢丝的表演，真让人捏一把汗。"
    },
    { 
        id: 480, 
        word: "しゃぶる", 
        kanji: "しゃぶる", 
        kana: "しゃぶる", 
        pos: "他动词・五段",
        meaning: "放进嘴里舔，吮吸",
        example_jp: "赤ちゃんが指をしゃぶっている。",
        example_cn: "婴儿正在吮吸手指。"
    },
    { 
        id: 481, 
        word: "へりくだる", 
        kanji: "謙る", 
        kana: "へりくだる", 
        pos: "自动词・五段",
        meaning: "谦逊，谦卑",
        example_jp: "彼は有能だが、常に謙った態度を崩さない。",
        example_cn: "他虽然很有能力，但始终保持着谦卑的态度。"
    },
    { 
        id: 482, 
        word: "かたくな", 
        kanji: "頑な", 
        kana: "かたくな", 
        pos: "ナ形容词",
        meaning: "顽固，固执",
        example_jp: "何度説得しても、彼は頑なに意見を変えなかった。",
        example_cn: "无论劝说多少次，他都顽固地不肯改变意见。"
    },
    { 
        id: 483, 
        word: "ずるずる", 
        kanji: "ずるずる", 
        kana: "ずるずる", 
        pos: "副词",
        meaning: "拖延，拖拖拉拉；滑动；吸溜声",
        example_jp: "結論が出ないまま、会議がずるずると長引いている。",
        example_cn: "迟迟得不出结论，会议拖拖拉拉地延长着。"
    },
    { 
        id: 484, 
        word: "ダブる", 
        kanji: "ダブる", 
        kana: "だぶる", 
        pos: "自动词・五段",
        meaning: "重复，重叠（源自double）",
        example_jp: "予定がダブってしまい、どちらかを断らなければならない。",
        example_cn: "日程安排重复了，必须推掉其中一个。"
    },
    { 
        id: 485, 
        word: "とぼける", 
        kanji: "惚ける / 恍ける", 
        kana: "とぼける", 
        pos: "自动词・一段",
        meaning: "装傻，佯装不知；滑稽可笑",
        example_jp: "証拠があるのに、彼は「知らない」ととぼけた。",
        example_cn: "明明有证据，他却装傻说“不知道”。"
    },
    { 
        id: 486, 
        word: "まぶた", 
        kanji: "瞼 / 目蓋", 
        kana: "まぶた", 
        pos: "名词",
        meaning: "眼睑，眼皮",
        example_jp: "徹夜明けで、眠くて重い瞼をこすった。",
        example_cn: "熬了通宵，揉了揉困倦沉重的眼皮。"
    },
    { 
        id: 487, 
        word: "そそる", 
        kanji: "そそる", 
        kana: "そそる", 
        pos: "他动词・五段",
        meaning: "引起，勾起，激发（感情、欲望等）",
        example_jp: "カレーのスパイシーな香りが食欲をそそる。",
        example_cn: "咖喱的辛香勾起了食欲。"
    },
    { 
        id: 488, 
        word: "ねぎらう", 
        kanji: "労う / 犒う", 
        kana: "ねぎらう", 
        pos: "他动词・五段",
        meaning: "慰劳，犒劳",
        example_jp: "プロジェクトの終了後、社長が社員の労をねぎらった。",
        example_cn: "项目结束后，社长慰劳了员工们的辛勤付出。"
    },
    { 
        id: 489, 
        word: "ぞろぞろ", 
        kanji: "ぞろぞろ", 
        kana: "ぞろぞろ", 
        pos: "副词",
        meaning: "络绎不绝，一个接一个地",
        example_jp: "映画館から観客がぞろぞろと出てきた。",
        example_cn: "观众从电影院里络绎不绝地走了出来。"
    },
    { 
        id: 490, 
        word: "かばう", 
        kanji: "庇う", 
        kana: "かばう", 
        pos: "他动词・五段",
        meaning: "庇护，袒护，保护",
        example_jp: "彼は自分の責任を認めず、部下をかばいもしなかった。",
        example_cn: "他既不承认自己的责任，也没有袒护部下。"
    },
    { 
        id: 491, 
        word: "まぐれあたり", 
        kanji: "紛れ当たり", 
        kana: "まぐれあたり", 
        pos: "名词",
        meaning: "瞎猫碰上死耗子，侥幸猜中/命中",
        example_jp: "試験で難しい問題が解けたのは、ただの紛れ当たりだ。",
        example_cn: "考试时做出了难题，纯粹只是瞎猫碰上死耗子侥幸猜中的。"
    },
    { 
        id: 492, 
        word: "へま", 
        kanji: "へま", 
        kana: "へま", 
        pos: "名词 / ナ形容词",
        meaning: "失误，搞砸，蠢事",
        example_jp: "大切な取引先の前で、とんだへまをやらかしてしまった。",
        example_cn: "在重要的客户面前，犯下了一个大失误。"
    },
    { 
        id: 493, 
        word: "こなす", 
        kanji: "熟す", 
        kana: "こなす", 
        pos: "他动词・五段",
        meaning: "熟练运用；妥善处理，完成；消化",
        example_jp: "彼は日々大量の業務を効率よくこなしている。",
        example_cn: "他每天都在高效地处理着大量的业务。"
    },
    { 
        id: 494, 
        word: "ぐんなり", 
        kanji: "ぐんなり", 
        kana: "ぐんなり", 
        pos: "副词 / 自动词・サ变",
        meaning: "筋疲力尽；软塌塌",
        example_jp: "あまりの暑さに、植物もぐんなりしている。",
        example_cn: "由于太热了，植物也都软塌塌地蔫了。"
    },
    { 
        id: 495, 
        word: "だくだく", 
        kanji: "だくだく", 
        kana: "だくだく", 
        pos: "副词",
        meaning: "（汗水等）大量涌出貌",
        example_jp: "全力で走ったので、汗がだくだくと流れている。",
        example_cn: "因为拼尽全力奔跑，汗水像流水一样往下淌。"
    },
    { 
        id: 496, 
        word: "まとまり", 
        kanji: "纏まり", 
        kana: "まとまり", 
        pos: "名词",
        meaning: "连贯性，头绪，统一，结论",
        example_jp: "彼のスピーチはまとまりがなく、何を言いたいのか分からなかった。",
        example_cn: "他的演讲毫无逻辑和连贯性，不知道想说什么。"
    },
    { 
        id: 497, 
        word: "うじうじ", 
        kanji: "うじうじ", 
        kana: "うじうじ", 
        pos: "副词 / 自动词・サ变",
        meaning: "迟疑不决，扭扭捏捏",
        example_jp: "いつまでも過去の失敗をうじうじと悩んでも仕方がない。",
        example_cn: "一直对过去的失败扭扭捏捏地懊恼下去也没用。"
    },
    { 
        id: 498, 
        word: "ダフや", 
        kanji: "ダフ屋", 
        kana: "ダフや", 
        pos: "名词",
        meaning: "黄牛党（倒卖入场券的人）",
        example_jp: "コンサート会場の前でダフ屋がチケットを売っていた。",
        example_cn: "在演唱会会场前，黄牛党正在倒卖门票。"
    },
    { 
        id: 499, 
        word: "とっさ", 
        kanji: "咄嗟", 
        kana: "とっさ", 
        pos: "名词",
        meaning: "瞬间，刹那（多接「に/の」）",
        example_jp: "飛んできたボールを咄嗟に避けた。",
        example_cn: "瞬间躲开了飞来的球。"
    },
    { 
        id: 500, 
        word: "はかりごと", 
        kanji: "謀", 
        kana: "はかりごと", 
        pos: "名词",
        meaning: "计谋，阴谋",
        example_jp: "敵を欺くための謀を巡らす。",
        example_cn: "策划欺骗敌人的计谋。"
    },
    { 
        id: 501, 
        word: "おめおめ", 
        kanji: "おめおめ", 
        kana: "おめおめ", 
        pos: "副词",
        meaning: "恬不知耻地，厚颜无耻地",
        example_jp: "よくもおめおめと私の前に顔を出せたものだ。",
        example_cn: "亏你还能恬不知耻地出现在我面前。"
    },
    { 
        id: 502, 
        word: "じきに", 
        kanji: "直に", 
        kana: "じきに", 
        pos: "副词",
        meaning: "马上，不久，立刻",
        example_jp: "にわか雨だから、じきに止むだろう。",
        example_cn: "因为是阵雨，应该不久就会停吧。"
    },
    { 
        id: 503, 
        word: "ほどく", 
        kanji: "解く", 
        kana: "ほどく", 
        pos: "他动词・五段",
        meaning: "解开，拆开（绳子、缝线等）",
        example_jp: "プレゼントの包みのリボンをほどく。",
        example_cn: "解开礼物包装上的丝带。"
    },
    { 
        id: 504, 
        word: "さえずり", 
        kanji: "囀り", 
        kana: "さえずり", 
        pos: "名词",
        meaning: "鸟鸣，叽叽喳喳的叫声；喋喋不休",
        example_jp: "早朝、小鳥のさえずりで目が覚めた。",
        example_cn: "清晨，被小鸟的鸣叫声唤醒。"
    },
    { 
        id: 505, 
        word: "しょげる", 
        kanji: "悄気る", 
        kana: "しょげる", 
        pos: "自动词・一段",
        meaning: "沮丧，颓丧，气馁",
        example_jp: "試合に負けて、すっかりしょげている。",
        example_cn: "比赛输了，变得十分沮丧。"
    },
    { 
        id: 506, 
        word: "けらけら", 
        kanji: "けらけら", 
        kana: "けらけら", 
        pos: "副词",
        meaning: "咯咯地笑（多指轻浮或毫无顾忌地笑）",
        example_jp: "彼女はテレビを見てけらけら笑っている。",
        example_cn: "她看着电视，咯咯地笑个不停。"
    },
    { 
        id: 507, 
        word: "まごつく", 
        kanji: "まごつく", 
        kana: "まごつく", 
        pos: "自动词・五段",
        meaning: "张皇失措，不知所措，徘徊",
        example_jp: "初めての場所で道に迷い、まごついてしまった。",
        example_cn: "在第一次去的地方迷了路，张皇失措。"
    },
    { 
        id: 508, 
        word: "やっつける", 
        kanji: "遣っ付ける", 
        kana: "やっつける", 
        pos: "他动词・一段",
        meaning: "打败，干掉；赶完（工作），收拾",
        example_jp: "今日中にこの書類の山をやっつけてしまおう。",
        example_cn: "今天之内要把这堆文件赶完（收拾掉）。"
    },
    { 
        id: 509, 
        word: "はんなり", 
        kanji: "はんなり", 
        kana: "はんなり", 
        pos: "副词 / 自动词・サ变",
        meaning: "（京都方言）华丽而有品位，明亮而高雅",
        example_jp: "彼女は着物をはんなりと着こなしている。",
        example_cn: "她把和服穿得高雅而极具韵味。"
    },
    { 
        id: 510, 
        word: "かしこまる", 
        kanji: "畏まる", 
        kana: "かしこまる", 
        pos: "自动词・五段",
        meaning: "恭敬，拘谨；谨遵吩咐",
        example_jp: "「かしこまりました」とウェイターは深く一礼した。",
        example_cn: "服务员深深地鞠了一躬说道：“遵命（我知道了）”。"
    },
    { 
        id: 511, 
        word: "きっしり", 
        kanji: "きっしり", 
        kana: "きっしり", 
        pos: "副词",
        meaning: "紧紧地，满满当当（同ぎっしり）",
        example_jp: "箱の中に本がきっしりと詰まっている。",
        example_cn: "箱子里满满当当地塞满了书。"
    },
    { 
        id: 512, 
        word: "ぱくぱく", 
        kanji: "ぱくぱく", 
        kana: "ぱくぱく", 
        pos: "副词 / 自动词・サ变",
        meaning: "大口大口吃；（嘴巴）一张一合",
        example_jp: "金魚が水面で口をぱくぱくさせている。",
        example_cn: "金鱼在水面上一张一合地吧嗒着嘴。"
    },
    { 
        id: 513, 
        word: "びら", 
        kanji: "片 / ビラ", 
        kana: "びら", 
        pos: "名词",
        meaning: "传单，海报；（花等）瓣，片",
        example_jp: "駅前でアルバイト募集のビラ（片）を配っている。",
        example_cn: "在车站前发招募兼职的传单。"
    },
    { 
        id: 514, 
        word: "すかすか", 
        kanji: "すかすか", 
        kana: "すかすか", 
        pos: "副词 / ナ形容词",
        meaning: "空隙多，稀稀拉拉；空洞，干瘪",
        example_jp: "この大根は水分が抜けて、中がすかすかだ。",
        example_cn: "这根萝卜水分流失，里面空心干瘪了。"
    },
    { 
        id: 515, 
        word: "わなわな", 
        kanji: "わなわな", 
        kana: "わなわな", 
        pos: "副词",
        meaning: "（因恐惧、愤怒或寒冷而）哆嗦，颤抖",
        example_jp: "激しい怒りで、唇がわなわなと震えた。",
        example_cn: "因为极度的愤怒，嘴唇不停地颤抖。"
    },
    { 
        id: 516, 
        word: "うざい", 
        kanji: "うざい", 
        kana: "うざい", 
        pos: "イ形容词",
        meaning: "烦人，碍眼（うざったい的略语，年轻人用语）",
        example_jp: "あの先生は説教が多くて少しうざい。",
        example_cn: "那个老师总是说教，有点烦人。"
    },
    { 
        id: 517, 
        word: "でかでか", 
        kanji: "でかでか", 
        kana: "でかでか", 
        pos: "副词",
        meaning: "极大，硕大无比，格外显眼",
        example_jp: "新聞の１面にでかでかと彼の写真が載った。",
        example_cn: "报纸的头版头条硕大无比地刊登了他的照片。"
    },
    { 
        id: 518, 
        word: "よぎる", 
        kanji: "過る", 
        kana: "よぎる", 
        pos: "自动词・五段",
        meaning: "（在脑海、眼前）闪过，掠过",
        example_jp: "一瞬、最悪の事態が頭を過った。",
        example_cn: "最坏的情况在脑海中一闪而过。"
    },
    { 
        id: 519, 
        word: "えくぼ", 
        kanji: "笑窪 / 靨", 
        kana: "えくぼ", 
        pos: "名词",
        meaning: "酒窝",
        example_jp: "彼女は笑うと可愛いえくぼができる。",
        example_cn: "她笑起来会有可爱的酒窝。"
    },
    { 
        id: 520, 
        word: "ねじまわし", 
        kanji: "螺子回し", 
        kana: "ねじまわし", 
        pos: "名词",
        meaning: "螺丝刀",
        example_jp: "ドライバー（螺子回し）を使って家具を組み立てる。",
        example_cn: "使用螺丝刀组装家具。"
    },
    { 
        id: 521, 
        word: "どかん", 
        kanji: "どかん", 
        kana: "どかん", 
        pos: "副词",
        meaning: "轰隆（爆炸声）；猛然，突然大声",
        example_jp: "遠くで花火がどかんと音を立てて打ち上がった。",
        example_cn: "远处轰隆一声，升起了烟花。"
    },
    { 
        id: 522, 
        word: "ぱくり", 
        kanji: "ぱくり", 
        kana: "ぱくり", 
        pos: "副词 / 名词",
        meaning: "大口吃貌；剽窃，抄袭（名词用法）",
        example_jp: "そのデザインは、有名なブランドのぱくりだ。",
        example_cn: "那个设计是抄袭知名品牌的。"
    },
    { 
        id: 523, 
        word: "ぼっと", 
        kanji: "ぼっと", 
        kana: "ぼっと", 
        pos: "副词 / 自动词・サ变",
        meaning: "发呆（同ぼうっと）；猛然燃烧；脸红",
        example_jp: "恥ずかしさで顔がぼっと赤くなった。",
        example_cn: "因为害羞，脸腾地一下红了。"
    },
    { 
        id: 524, 
        word: "かこつける", 
        kanji: "託ける", 
        kana: "かこつける", 
        pos: "他动词・一段",
        meaning: "借口，托辞",
        example_jp: "彼は病気に託けて、面倒な仕事を断った。",
        example_cn: "他借口生病，推掉了麻烦的工作。"
    },
    { 
        id: 525, 
        word: "ひきにげ", 
        kanji: "轢き逃げ", 
        kana: "ひきにげ", 
        pos: "名词",
        meaning: "交通肇事逃逸",
        example_jp: "轢き逃げ事件の目撃者を探している。",
        example_cn: "正在寻找肇事逃逸事件的目击者。"
    },
    { 
        id: 526, 
        word: "やりぬく", 
        kanji: "遣り抜く", 
        kana: "やりぬく", 
        pos: "他动词・五段",
        meaning: "坚持到底，干到底",
        example_jp: "どんなに困難な任務でも、最後まで遣り抜く覚悟だ。",
        example_cn: "无论多么困难的任务，都准备坚持到底。"
    },
    { 
        id: 527, 
        word: "くぐる", 
        kanji: "潜る", 
        kana: "くぐる", 
        pos: "自动词・五段",
        meaning: "钻过，穿过；潜入（水中）；钻空子",
        example_jp: "法網を潜って不正な取引を行う。",
        example_cn: "钻法律的空子进行不正当交易。"
    },
    { 
        id: 528, 
        word: "いかなる", 
        kanji: "如何なる", 
        kana: "いかなる", 
        pos: "连体词",
        meaning: "任何的，无论怎样的",
        example_jp: "如何なる理由があろうとも、暴力は許されない。",
        example_cn: "无论有何种理由，暴力都是不被允许的。"
    },
    { 
        id: 529, 
        word: "なんか", 
        kanji: "なんか", 
        kana: "なんか", 
        pos: "副助词 / 副词",
        meaning: "（など的口语）之类的；（なぜか的口语）总觉得",
        example_jp: "今日はなんか嫌な予感がする。",
        example_cn: "今天总觉得有种不祥的预感。"
    },
    { 
        id: 530, 
        word: "つねる", 
        kanji: "抓る", 
        kana: "つねる", 
        pos: "他动词・五段",
        meaning: "掐，拧",
        example_jp: "これが夢ではないかと、自分の頬を抓ってみた。",
        example_cn: "为了确认这不是梦，掐了一下自己的脸颊。"
    },
    { 
        id: 531, 
        word: "みなぎる", 
        kanji: "漲る", 
        kana: "みなぎる", 
        pos: "自动词・五段",
        meaning: "充满，洋溢（水、力量、斗志等）",
        example_jp: "選手の目には、勝利への闘志が漲っていた。",
        example_cn: "选手的眼中洋溢着求胜的斗志。"
    },
    { 
        id: 532, 
        word: "ひょっこり", 
        kanji: "ひょっこり", 
        kana: "ひょっこり", 
        pos: "副词",
        meaning: "突然，出乎意料地出现",
        example_jp: "街角で、昔の友人とひょっこり出会った。",
        example_cn: "在街角突然偶遇了老朋友。"
    },
    { 
        id: 533, 
        word: "とんだ", 
        kanji: "とんだ", 
        kana: "とんだ", 
        pos: "连体词",
        meaning: "意想不到的，出乎意料的（多指灾难、糟糕的事情）",
        example_jp: "旅行中に財布を盗まれるとは、とんだ災難だった。",
        example_cn: "旅行途中钱包被偷，真是飞来横祸。"
    },
    { 
        id: 534, 
        word: "あかぎれ", 
        kanji: "皹 / 皸", 
        kana: "あかぎれ", 
        pos: "名词",
        meaning: "（皮肤干裂出血的）皲裂",
        example_jp: "冬の厳しい寒さで、手にひどいあかぎれができた。",
        example_cn: "因为冬天严寒，手上严重皲裂了。"
    },
    { 
        id: 535, 
        word: "とっておき", 
        kanji: "取って置き", 
        kana: "とっておき", 
        pos: "名词",
        meaning: "珍藏，压箱底的宝贝，留作备用",
        example_jp: "大事なお客様のために、取って置きのワインを開けた。",
        example_cn: "为了重要的客人，打开了珍藏的葡萄酒。"
    },
    { 
        id: 536, 
        word: "きらめく", 
        kanji: "煌めく", 
        kana: "きらめく", 
        pos: "自动词・五段",
        meaning: "闪耀，辉煌",
        example_jp: "夜空に無数の星が煌めいている。",
        example_cn: "夜空中有无数星星在闪耀。"
    },
    { 
        id: 537, 
        word: "あやかる", 
        kanji: "肖る", 
        kana: "あやかる", 
        pos: "自动词・五段",
        meaning: "效仿，沾光，借光",
        example_jp: "彼の成功にあやかって、私も事業を始めたい。",
        example_cn: "我想沾沾他成功的运气，自己也开始创业。"
    },
    { 
        id: 538, 
        word: "ぐずつく", 
        kanji: "愚図つく", 
        kana: "ぐずつく", 
        pos: "自动词・五段",
        meaning: "磨蹭，拖拉；（天气）阴晴不定",
        example_jp: "週末は雨が降ったり止んだりと、ぐずついた天気になるそうだ。",
        example_cn: "听说周末会是时雨时停的阴沉天气。"
    },
    { 
        id: 539, 
        word: "がっくり", 
        kanji: "がっくり", 
        kana: "がっくり", 
        pos: "副词 / 自动词・サ变",
        meaning: "颓丧，灰心丧气；突然无力（垂下头）",
        example_jp: "不合格の通知を受け取って、がっくりと肩を落とした。",
        example_cn: "收到不合格的通知书，颓丧地耷拉下了肩膀。"
    },
    { 
        id: 540, 
        word: "ちりとり", 
        kanji: "塵取り", 
        kana: "ちりとり", 
        pos: "名词",
        meaning: "簸箕",
        example_jp: "ほうきでゴミを集めて、ちり取りで受ける。",
        example_cn: "用扫帚扫起垃圾，用簸箕接住。"
    },
    { 
        id: 541, 
        word: "しこしこ", 
        kanji: "しこしこ", 
        kana: "しこしこ", 
        pos: "副词 / 自动词・サ变",
        meaning: "筋道，有嚼劲",
        example_jp: "このうどんは麺がしこしこしていて美味しい。",
        example_cn: "这乌冬面的面条很有嚼劲，非常好吃。"
    },
    { 
        id: 542, 
        word: "がっしり", 
        kanji: "がっしり", 
        kana: "がっしり", 
        pos: "副词 / 自动词・サ变",
        meaning: "健壮，牢固，结实",
        example_jp: "彼はスポーツマンらしく、がっしりとした体格をしている。",
        example_cn: "他有着运动员般健壮的体格。"
    },
    { 
        id: 543, 
        word: "ぺろり", 
        kanji: "ぺろり", 
        kana: "ぺろり", 
        pos: "副词",
        meaning: "一口吃光；（轻薄地）吐舌头",
        example_jp: "お腹が空いていたので、大盛りのラーメンをぺろりと平らげた。",
        example_cn: "因为肚子饿了，一大碗拉面一口气就吃光了。"
    },
    { 
        id: 544, 
        word: "くじ", 
        kanji: "籤", 
        kana: "くじ", 
        pos: "名词",
        meaning: "签，彩票",
        example_jp: "商店街の福引きで、一等の籤を引いた。",
        example_cn: "在商业街的抽奖中，抽中了一等奖的签。"
    },
    { 
        id: 545, 
        word: "たどる", 
        kanji: "辿る", 
        kana: "たどる", 
        pos: "他动词・五段",
        meaning: "沿着走，追寻；走向（某种局势，多为消极）",
        example_jp: "会社の経営状態は、悪化の一途を辿っている。",
        example_cn: "公司的经营状况正不断走向恶化。"
    },
    { 
        id: 546, 
        word: "ひっきりなしに", 
        kanji: "引っ切り無しに", 
        kana: "ひっきりなしに", 
        pos: "副词",
        meaning: "接连不断地，连绵不绝地",
        example_jp: "事務所の電話がひっきりなしに鳴っている。",
        example_cn: "事务所的电话接连不断地响着。"
    },
    { 
        id: 547, 
        word: "おだてる", 
        kanji: "煽てる", 
        kana: "おだてる", 
        pos: "他动词・一段",
        meaning: "煽动，怂恿，奉承，捧",
        example_jp: "彼は少し煽てられると、すぐに木に登るタイプだ。",
        example_cn: "他是那种稍微被奉承两句就会得意忘形的人（戴高帽）。"
    },
    { 
        id: 548, 
        word: "すりばち", 
        kanji: "擂り鉢", 
        kana: "すりばち", 
        pos: "名词",
        meaning: "研钵，擂钵",
        example_jp: "擂り鉢でごまを細かくすりつぶす。",
        example_cn: "在研钵里把芝麻细细地研碎。"
    },
    { 
        id: 549, 
        word: "もめる", 
        kanji: "揉める", 
        kana: "もめる", 
        pos: "自动词・一段",
        meaning: "起纠纷，发生争执",
        example_jp: "遺産の分配を巡って、親族間で激しく揉めている。",
        example_cn: "围绕遗产分配，亲属之间发生了激烈的争执。"
    },
    { 
        id: 550, 
        word: "おまけに", 
        kanji: "お負けに", 
        kana: "おまけに", 
        pos: "接续词",
        meaning: "而且，再加上（同その上）",
        example_jp: "道に迷い、おまけに雨まで降ってきた。",
        example_cn: "迷了路，而且还下起雨来了。"
    },
    { 
        id: 551, 
        word: "ごまかす", 
        kanji: "誤魔化す", 
        kana: "ごまかす", 
        pos: "他动词・五段",
        meaning: "蒙混，欺骗，敷衍，掩饰",
        example_jp: "彼は都合が悪くなると、いつも笑って誤魔化す。",
        example_cn: "他一遇到不利的情况，总是用笑来敷衍掩饰。"
    },
    { 
        id: 552, 
        word: "とんとん拍子", 
        kanji: "とんとん拍子", 
        kana: "とんとんびょうし", 
        pos: "名词",
        meaning: "顺顺利利，势如破竹",
        example_jp: "両社の交渉はとんとん拍子に進み、契約が成立した。",
        example_cn: "两家公司的谈判进展得十分顺利，最终达成了合约。"
    },
    { 
        id: 553, 
        word: "きしむ", 
        kanji: "軋む", 
        kana: "きしむ", 
        pos: "自动词・五段",
        meaning: "吱嘎作响；（关系等）产生摩擦，不和",
        example_jp: "些細な誤解から、二人の関係が軋み始めた。",
        example_cn: "因为微小的误解，两人之间的关系开始产生摩擦。"
    },
    { 
        id: 554, 
        word: "ぐさぐさ", 
        kanji: "ぐさぐさ", 
        kana: "ぐさぐさ", 
        pos: "副词",
        meaning: "猛烈刺入貌；深深刺痛（内心）",
        example_jp: "彼女の厳しい批判が、心にぐさぐさと刺さった。",
        example_cn: "她严厉的批评深深地刺痛了我的心。"
    },
    { 
        id: 555, 
        word: "あぜ", 
        kanji: "畦 / 畔", 
        kana: "あぜ", 
        pos: "名词",
        meaning: "田埂",
        example_jp: "夕暮れ時、田んぼの畦道をのんびりと歩く。",
        example_cn: "黄昏时分，悠闲地走在水田的田埂上。"
    },
    { 
        id: 556, 
        word: "けちくさい", 
        kanji: "けち臭い", 
        kana: "けちくさい", 
        pos: "イ形容词",
        meaning: "小气，吝啬，俗气",
        example_jp: "数百円のことで文句を言うなんて、けち臭い男だ。",
        example_cn: "就因为几百日元抱怨不停，真是个小气的男人。"
    },
    { 
        id: 557, 
        word: "すすぐ", 
        kanji: "雪ぐ / 濯ぐ / 漱ぐ", 
        kana: "すすぐ", 
        pos: "他动词・五段",
        meaning: "洗雪（耻辱）；洗刷，漂洗；漱口",
        example_jp: "今度の大会で優勝して、前回の汚名を雪ぎたい。",
        example_cn: "想在这次大会上夺冠，洗雪上次的污名。"
    },
    { 
        id: 558, 
        word: "けたたましい", 
        kanji: "けたたましい", 
        kana: "けたたましい", 
        pos: "イ形容词",
        meaning: "尖锐刺耳，嘈杂的，惊人的",
        example_jp: "深夜にけたたましいサイレンの音が鳴り響いた。",
        example_cn: "深夜里响起了尖锐刺耳的警笛声。"
    },
    { 
        id: 559, 
        word: "もじもじ", 
        kanji: "もじもじ", 
        kana: "もじもじ", 
        pos: "副词 / 自动词・サ变",
        meaning: "扭扭捏捏，忸怩，迟疑不决",
        example_jp: "彼女は恥ずかしそうに、もじもじしながらうつむいていた。",
        example_cn: "她似乎很害羞，扭扭捏捏地低着头。"
    },
    { 
        id: 560, 
        word: "ちかちか", 
        kanji: "ちかちか", 
        kana: "ちかちか", 
        pos: "副词 / 自动词・サ变",
        meaning: "光闪烁貌；刺眼，晃眼",
        example_jp: "細かい文字をずっと見ていたので、目がちかちかする。",
        example_cn: "一直盯着小字看，眼睛直冒金星（刺痛晃眼）。"
    },
    { 
        id: 561, 
        word: "なぞる", 
        kanji: "なぞる", 
        kana: "なぞる", 
        pos: "他动词・五段",
        meaning: "描摹，照着写；遵循（先例等）",
        example_jp: "ただ先例をなぞるだけでは、新しいものは生み出せない。",
        example_cn: "仅仅照搬先例，是创造不出新事物的。"
    },
    { 
        id: 562, 
        word: "しくしく", 
        kanji: "しくしく", 
        kana: "しくしく", 
        pos: "副词",
        meaning: "（女性、儿童）低声抽泣；（胃齿等）隐隐作痛",
        example_jp: "ストレスのせいか、朝から胃がしくしく痛む。",
        example_cn: "不知是不是压力的缘故，从早上起胃就隐隐作痛。"
    },
    { 
        id: 563, 
        word: "とげ", 
        kanji: "刺", 
        kana: "とげ", 
        pos: "名词",
        meaning: "刺；（言语中带的）刺",
        example_jp: "彼女の言い方には、いつもどこか刺がある。",
        example_cn: "她说话的方式总觉得哪里带有锋芒（带刺）。"
    },
    { 
        id: 564, 
        word: "すしづめ", 
        kanji: "鮨詰め", 
        kana: "すしづめ", 
        pos: "名词",
        meaning: "像沙丁鱼罐头般拥挤不堪",
        example_jp: "朝の通勤電車は鮨詰めで、身動きがとれない。",
        example_cn: "早上的通勤电车拥挤不堪，连动都动不了。"
    },
    { 
        id: 565, 
        word: "ごりごり", 
        kanji: "ごりごり", 
        kana: "ごりごり", 
        pos: "副词 / ナ形容词",
        meaning: "刮擦声，硬邦邦的声音；态度强硬，顽固",
        example_jp: "彼はごりごりの保守派で、改革には絶対に反対する。",
        example_cn: "他是个十足的顽固保守派，绝对反对改革。"
    },
    { 
        id: 566, 
        word: "いつとなく", 
        kanji: "いつとなく", 
        kana: "いつとなく", 
        pos: "副词",
        meaning: "不知不觉间",
        example_jp: "語り合っているうちに、いつとなく夜が明けていた。",
        example_cn: "在互相交谈之中，不知不觉天已经亮了。"
    },
    { 
        id: 567, 
        word: "もたらす", 
        kanji: "齎す", 
        kana: "もたらす", 
        pos: "他动词・五段",
        meaning: "带来，造成（好坏结果皆可）",
        example_jp: "この技術革新は、業界に大きな変化をもたらすだろう。",
        example_cn: "这项技术革新想必会给业界带来巨大的变化。"
    },
    { 
        id: 568, 
        word: "おむつ", 
        kanji: "おむつ", 
        kana: "おむつ", 
        pos: "名词",
        meaning: "尿布，纸尿裤",
        example_jp: "赤ちゃんのおむつを替えてから出かける。",
        example_cn: "给婴儿换好尿布后再出门。"
    },
    { 
        id: 569, 
        word: "ありきたり", 
        kanji: "在り来たり", 
        kana: "ありきたり", 
        pos: "名词 / ナ形容词",
        meaning: "常见的，普通的，老一套的",
        example_jp: "ありきたりの言葉では、この感謝の気持ちは伝えられない。",
        example_cn: "用那些老套普通的语言，无法传达这份感谢之情。"
    },
    { 
        id: 570, 
        word: "がさつ", 
        kanji: "がさつ", 
        kana: "がさつ", 
        pos: "ナ形容词",
        meaning: "粗野，粗鲁，毛躁，不细心",
        example_jp: "彼はがさつな性格で、よく物を壊してしまう。",
        example_cn: "他性格毛躁，经常把东西弄坏。"
    },
    { 
        id: 571, 
        word: "ピンからキリまで", 
        kanji: "ピンからキリまで", 
        kana: "ピンからキリまで", 
        pos: "连语",
        meaning: "从头到尾，形形色色，好坏参差不齐",
        example_jp: "同じようなバッグでも、値段はピンからキリまである。",
        example_cn: "就算是差不多的包，价格也是千差万别。"
    },
    { 
        id: 572, 
        word: "おたち", 
        kanji: "お立ち", 
        kana: "おたち", 
        pos: "名词",
        meaning: "（尊他语）出发，动身",
        example_jp: "明日は何時のお立ちになりますか。",
        example_cn: "您明天几点动身出发？"
    },
    { 
        id: 573, 
        word: "ふてぶてしい", 
        kanji: "ふてぶてしい", 
        kana: "ふてぶてしい", 
        pos: "イ形容词",
        meaning: "厚颜无耻的，满不在乎的",
        example_jp: "何度注意されても反省しない、ふてぶてしい態度だ。",
        example_cn: "不管被警告多少次都不反省，真是厚颜无耻的态度。"
    },
    { 
        id: 574, 
        word: "かたかた", 
        kanji: "かたかた", 
        kana: "かたかた", 
        pos: "副词",
        meaning: "咔哒咔哒响（坚硬物体碰撞声）",
        example_jp: "強風で窓ガラスがかたかたと音を立てている。",
        example_cn: "因为强风，窗玻璃发出咔哒咔哒的声响。"
    },
    { 
        id: 575, 
        word: "すんなり", 
        kanji: "すんなり", 
        kana: "すんなり", 
        pos: "副词 / 自动词・サ变",
        meaning: "顺利地，轻易地；苗条，修长",
        example_jp: "反対されるかと思ったが、案外すんなりと賛成してもらえた。",
        example_cn: "本以为会被反对，没想到出乎意料地顺利得到了赞成。"
    },
    { 
        id: 576, 
        word: "こせこせ", 
        kanji: "こせこせ", 
        kana: "こせこせ", 
        pos: "副词 / 自动词・サ变",
        meaning: "心胸狭窄，小气，局促",
        example_jp: "細かいことばかり気にして、こせこせ生きるのは嫌だ。",
        example_cn: "只在意鸡毛蒜皮的小事，我讨厌这种局促小气的生活方式。"
    },
    { 
        id: 577, 
        word: "つっけんどん", 
        kanji: "突っ慳貪", 
        kana: "つっけんどん", 
        pos: "ナ形容词",
        meaning: "态度冷酷，生硬，不客气",
        example_jp: "店員につっけんどんな態度を取られ、不愉快だった。",
        example_cn: "店员态度生硬冷酷，让人觉得很不愉快。"
    },
    { 
        id: 578, 
        word: "くぼむ", 
        kanji: "凹む / 窪む", 
        kana: "くぼむ", 
        pos: "自动词・五段",
        meaning: "凹陷，塌陷",
        example_jp: "疲れが溜まっているのか、目がくぼんでいる。",
        example_cn: "可能是因为疲劳累积，眼睛都凹陷了。"
    },
    { 
        id: 579, 
        word: "ぴっちり", 
        kanji: "ぴっちり", 
        kana: "ぴっちり", 
        pos: "副词",
        meaning: "严丝合缝，紧绷",
        example_jp: "乾燥を防ぐために、容器の蓋をぴっちりと閉める。",
        example_cn: "为了防止干燥，把容器的盖子严丝合缝地盖紧。"
    },
    { 
        id: 580, 
        word: "あやめる", 
        kanji: "危める / 殺める", 
        kana: "あやめる", 
        pos: "他动词・一段",
        meaning: "（委婉语）杀害",
        example_jp: "いかなる理由があろうとも、人の命を危めることは許されない。",
        example_cn: "无论有何种理由，杀害他人性命都是不可饶恕的。"
    },
    { 
        id: 581, 
        word: "じわじわ", 
        kanji: "じわじわ", 
        kana: "じわじわ", 
        pos: "副词",
        meaning: "缓缓地，一步步地，逐渐地",
        example_jp: "新しい宣伝の効果がじわじわと表れてきた。",
        example_cn: "新宣传的效果逐渐地显现出来了。"
    },
    { 
        id: 582, 
        word: "こだわる", 
        kanji: "拘る", 
        kana: "こだわる", 
        pos: "自动词・五段",
        meaning: "拘泥，执着，讲究",
        example_jp: "彼は素材にひどく拘って料理を作る。",
        example_cn: "他做菜对食材极其讲究。"
    },
    { 
        id: 583, 
        word: "ひときわ", 
        kanji: "一際", 
        kana: "ひときわ", 
        pos: "副词",
        meaning: "格外，尤其，分外",
        example_jp: "夜空の中で、あの星が一際明るく輝いている。",
        example_cn: "在夜空中，那颗星闪烁得格外明亮。"
    },
    { 
        id: 584, 
        word: "しかるに", 
        kanji: "然るに", 
        kana: "しかるに", 
        pos: "接续词",
        meaning: "（正式书面语）尽管如此，然而，可是",
        example_jp: "法は全ての人に平等であるべきだ。然るに、現実はどうだろうか。",
        example_cn: "法律理应对所有人平等。然而，现实又是如何呢？"
    },
    { 
        id: 585, 
        word: "もしかすると", 
        kanji: "若しかすると", 
        kana: "もしかすると", 
        pos: "副词",
        meaning: "（后多接かもしれない等）也许，说不定",
        example_jp: "もしかすると、今日の会議は中止になるかもしれない。",
        example_cn: "说不定今天的会议可能会被取消。"
    },
    { 
        id: 586, 
        word: "どうにか", 
        kanji: "どうにか", 
        kana: "どうにか", 
        pos: "副词",
        meaning: "总算，好歹；设法（解决）",
        example_jp: "苦労したが、どうにか締め切りに間に合った。",
        example_cn: "虽然很辛苦，但总算赶上了截止日期。"
    },
    { 
        id: 587, 
        word: "どっぷり", 
        kanji: "どっぷり", 
        kana: "どっぷり", 
        pos: "副词",
        meaning: "完全浸没；深深沉浸，无法自拔",
        example_jp: "休日には、好きなゲームの世界にどっぷりと浸かる。",
        example_cn: "在休息日，完全沉浸在喜欢的游戏世界里。"
    },
    { 
        id: 588, 
        word: "なじる", 
        kanji: "詰る", 
        kana: "なじる", 
        pos: "他动词・五段",
        meaning: "责备，诘问，责难",
        example_jp: "約束を破った相手を激しく詰った。",
        example_cn: "激烈地责备了违背约定的对方。"
    },
    { 
        id: 589, 
        word: "いささか", 
        kanji: "聊か / 些か", 
        kana: "いささか", 
        pos: "副词",
        meaning: "（正式）略微，稍微，多少有些",
        example_jp: "彼の今回の発言には、いささか問題があるように思える。",
        example_cn: "我觉得他这次的发言多少有些问题。"
    },
    { 
        id: 590, 
        word: "ぶれる", 
        kanji: "ぶれる", 
        kana: "ぶれる", 
        pos: "自动词・一段",
        meaning: "（照片等）模糊，晃动；（方针、立场）动摇",
        example_jp: "彼の政治的な信念は、状況が変わっても決してぶれない。",
        example_cn: "即使情况改变，他的政治信念也绝对不会动摇。"
    },
    { 
        id: 591, 
        word: "しなびる", 
        kanji: "萎びる", 
        kana: "しなびる", 
        pos: "自动词・一段",
        meaning: "枯萎，干瘪",
        example_jp: "冷蔵庫の奥で野菜がしなびていた。",
        example_cn: "蔬菜在冰箱深处都干瘪枯萎了。"
    },
    { 
        id: 592, 
        word: "うめく", 
        kanji: "呻く", 
        kana: "うめく", 
        pos: "自动词・五段",
        meaning: "呻吟，低声叹息",
        example_jp: "怪我人はあまりの痛さに低く呻いた。",
        example_cn: "伤者因为太痛而低声呻吟。"
    },
    { 
        id: 593, 
        word: "げっそり", 
        kanji: "げっそり", 
        kana: "げっそり", 
        pos: "副词 / 自动词・サ变",
        meaning: "（急剧）消瘦；颓丧，大失所望",
        example_jp: "楽しみにしていたイベントが中止になり、すっかりげっそりした。",
        example_cn: "期待已久的活动被取消，感到彻底大失所望。"
    },
    { 
        id: 594, 
        word: "くすぶる", 
        kanji: "燻る", 
        kana: "くすぶる", 
        pos: "自动词・五段",
        meaning: "冒烟；（不满等）未平息；郁郁不得志",
        example_jp: "市民の間に政府への不満が燻っている。",
        example_cn: "市民之间对政府的不满情绪仍在积聚（未平息）。"
    },
    { 
        id: 595, 
        word: "ぼやく", 
        kanji: "ぼやく", 
        kana: "ぼやく", 
        pos: "自动词・五段",
        meaning: "嘟哝，发牢骚，抱怨",
        example_jp: "彼は酒を飲むと、いつも仕事の愚痴をぼやく。",
        example_cn: "他一喝酒，就总是抱怨工作上的牢骚。"
    },
    { 
        id: 596, 
        word: "まばたき", 
        kanji: "瞬き", 
        kana: "まばたき", 
        pos: "名词 / 自动词・サ变",
        meaning: "眨眼",
        example_jp: "驚きのあまり、瞬きをするのも忘れて見入っていた。",
        example_cn: "由于太过惊讶，连眨眼都忘了，死死盯着看。"
    },
    { 
        id: 597, 
        word: "うっとり", 
        kanji: "うっとり", 
        kana: "うっとり", 
        pos: "副词 / 自动词・サ变",
        meaning: "入迷，陶醉，出神",
        example_jp: "彼女の美しいピアノの演奏に、観客はうっとりと聞き入った。",
        example_cn: "观众陶醉地倾听着她优美的钢琴演奏。"
    },
    { 
        id: 598, 
        word: "さらけだす", 
        kanji: "曝け出す", 
        kana: "さらけだす", 
        pos: "他动词・五段",
        meaning: "彻底暴露，和盘托出",
        example_jp: "自分の弱さを他人に曝け出すのは勇気がいる。",
        example_cn: "将自己的软弱彻底暴露给他人是需要勇气的。"
    },
    { 
        id: 599, 
        word: "あつらえる", 
        kanji: "誂える", 
        kana: "あつらえる", 
        pos: "他动词・一段",
        meaning: "定制，定做",
        example_jp: "就職祝いに、自分の体型に合ったスーツを誂えた。",
        example_cn: "作为就职的庆祝，定做了一套合身的西服。"
    },
    { 
        id: 600, 
        word: "まぐれ", 
        kanji: "紛れ", 
        kana: "まぐれ", 
        pos: "名词",
        meaning: "碰巧，侥幸，偶然",
        example_jp: "あんな強い相手に勝てたのは、実力ではなく全くの紛れだ。",
        example_cn: "能战胜那么强的对手，不是靠实力，完全是出于侥幸。"
    },
    { 
        id: 601, 
        word: "じれったい", 
        kanji: "焦れったい", 
        kana: "じれったい", 
        pos: "イ形容词",
        meaning: "焦躁的，令人心急的，惹人烦的",
        example_jp: "彼ののろのろした仕事ぶりには、本当に焦れったくなる。",
        example_cn: "他那慢吞吞的工作态度，真让人急躁。"
    },
    { 
        id: 602, 
        word: "のこのこ", 
        kanji: "のこのこ", 
        kana: "のこのこ", 
        pos: "副词",
        meaning: "漫不经心地，毫不介意地（出现），恬不知耻地",
        example_jp: "散々迷惑をかけておいて、よくものこのこ顔を出せたものだ。",
        example_cn: "添了那么多麻烦，亏你还能恬不知耻地露面。"
    },
    { 
        id: 603, 
        word: "ドタキャン", 
        kanji: "土壇場でキャンセル", 
        kana: "どたきゃん", 
        pos: "名词 / 他动词・サ变",
        meaning: "事到临头取消，临时爽约（口语缩略）",
        example_jp: "楽しみにしていたデートをドタキャンされてしまった。",
        example_cn: "期待已久的约会竟然被临时取消了。"
    },
    { 
        id: 604, 
        word: "にやり", 
        kanji: "にやり", 
        kana: "にやり", 
        pos: "副词",
        meaning: "窃笑，冷笑，得意地笑",
        example_jp: "計画がうまくいったのを確認して、彼はにやりと笑った。",
        example_cn: "确认计划顺利进行后，他得意地暗自窃笑。"
    },
    { 
        id: 605, 
        word: "ずらずら", 
        kanji: "ずらずら", 
        kana: "ずらずら", 
        pos: "副词",
        meaning: "一连串地，长篇大论地",
        example_jp: "言い訳ばかりをずらずらと並べ立てる。",
        example_cn: "一连串地罗列出一大堆借口。"
    },
    { 
        id: 606, 
        word: "するする", 
        kanji: "するする", 
        kana: "するする", 
        pos: "副词",
        meaning: "顺畅地，平滑地，动作敏捷地",
        example_jp: "猿が木をするすると登っていく。",
        example_cn: "猴子敏捷顺畅地爬上了树。"
    },
    { 
        id: 607, 
        word: "おとも", 
        kanji: "お供", 
        kana: "おとも", 
        pos: "名词 / 自动词・サ变",
        meaning: "陪伴，随从，伴随物",
        example_jp: "社長の海外出張にお供する。",
        example_cn: "陪同社长去海外出差。"
    },
    { 
        id: 608, 
        word: "ぎすぎす", 
        kanji: "ぎすぎす", 
        kana: "ぎすぎす", 
        pos: "副词 / 自动词・サ变",
        meaning: "（人际关系）冷漠，生硬，不融洽；干瘦",
        example_jp: "あの職場は人間関係がぎすぎすしていて、居心地が悪い。",
        example_cn: "那个职场的人际关系非常冷漠生硬，让人待得不舒服。"
    },
    { 
        id: 609, 
        word: "のどか", 
        kanji: "長閑", 
        kana: "のどか", 
        pos: "ナ形容词",
        meaning: "悠闲，宁静，风和日丽",
        example_jp: "晴れた休日に、公園でのどかな時間を過ごす。",
        example_cn: "在晴朗的休息日，在公园里度过了悠闲宁静的时光。"
    },
    { 
        id: 610, 
        word: "きらびやか", 
        kanji: "煌びやか", 
        kana: "きらびやか", 
        pos: "ナ形容词",
        meaning: "华丽，灿烂夺目，辉煌",
        example_jp: "彼女はきらびやかなドレスを着てパーティーに参加した。",
        example_cn: "她穿着华丽夺目的礼服参加了派对。"
    },
    { 
        id: 611, 
        word: "おぼつかない", 
        kanji: "覚束ない", 
        kana: "おぼつかない", 
        pos: "イ形容词",
        meaning: "靠不住，没希望；含糊不清，不稳（脚步等）",
        example_jp: "病み上がりで、まだ足取りがおぼつかない。",
        example_cn: "大病初愈，脚步还不太稳健。"
    },
    { 
        id: 612, 
        word: "しくじる", 
        kanji: "しくじる", 
        kana: "しくじる", 
        pos: "自动词・五段",
        meaning: "失败，搞砸；因过失被解雇",
        example_jp: "入試でしくじって、浪人することになった。",
        example_cn: "入学考试搞砸了，只能复读。"
    },
    { 
        id: 613, 
        word: "さらさら", 
        kanji: "さらさら", 
        kana: "さらさら", 
        pos: "副词 / ナ形容词",
        meaning: "潺潺（水声）；沙沙响；极其顺畅；（后接否定）丝毫，一点也不",
        example_jp: "彼の髪は手入れがされていて、さらさらだ。",
        example_cn: "他的头发保养得很好，非常柔顺。"
    },
    { 
        id: 614, 
        word: "しっとり", 
        kanji: "しっとり", 
        kana: "しっとり", 
        pos: "副词 / 自动词・サ变",
        meaning: "湿润；平静，柔和，沉着",
        example_jp: "この化粧水をつけると、肌がしっとりする。",
        example_cn: "涂上这款化妆水后，肌肤会变得湿润。"
    },
    { 
        id: 615, 
        word: "ちぐはぐ", 
        kanji: "ちぐはぐ", 
        kana: "ちぐはぐ", 
        pos: "名词 / ナ形容词",
        meaning: "不一致，不协调，不对头",
        example_jp: "二人の意見はちぐはぐで、なかなか結論が出ない。",
        example_cn: "两人的意见不一致，迟迟得不出结论。"
    },
    { 
        id: 616, 
        word: "うつろ", 
        kanji: "空ろ / 虚ろ", 
        kana: "うつろ", 
        pos: "名词 / ナ形容词",
        meaning: "空洞，空虚，发呆，神志不清",
        example_jp: "ショックのあまり、彼女はうつろな目で宙を見つめていた。",
        example_cn: "因为过于震惊，她用空洞的眼神注视着半空。"
    },
    { 
        id: 617, 
        word: "よそもの", 
        kanji: "余所者", 
        kana: "よそもの", 
        pos: "名词",
        meaning: "外乡人，外人，局外人",
        example_jp: "この村では、余所者はなかなか受け入れてもらえない。",
        example_cn: "在这个村子里，外乡人很难被接纳。"
    },
    { 
        id: 618, 
        word: "いざ", 
        kanji: "いざ", 
        kana: "いざ", 
        pos: "感叹词 / 副词",
        meaning: "（决心做某事时）那么，一旦",
        example_jp: "いざという時のために、貯金をしておく。",
        example_cn: "为了以防万一（一旦到了关键时刻），要存点钱。"
    },
    { 
        id: 619, 
        word: "みっちり", 
        kanji: "みっちり", 
        kana: "みっちり", 
        pos: "副词",
        meaning: "充分地，严格地，满满地",
        example_jp: "試験前に、先生からみっちりと指導を受けた。",
        example_cn: "考试前，受到了老师严格充分的指导。"
    },
    { 
        id: 620, 
        word: "ぱさつく", 
        kanji: "ぱさつく", 
        kana: "ぱさつく", 
        pos: "自动词・五段",
        meaning: "干巴巴，干燥无光泽",
        example_jp: "このパンは古くて、少しぱさついている。",
        example_cn: "这个面包放久了，稍微有些干巴巴的。"
    },
    { 
        id: 621, 
        word: "ほくほく", 
        kanji: "ほくほく", 
        kana: "ほくほく", 
        pos: "副词 / 自动词・サ变",
        meaning: "（刚出锅）热气腾腾，松软；暗自欢喜",
        example_jp: "焼きたてのほくほくしたサツマイモを食べる。",
        example_cn: "吃刚烤好的热腾腾松软的红薯。"
    },
    { 
        id: 622, 
        word: "おてあげ", 
        kanji: "お手上げ", 
        kana: "おてあげ", 
        pos: "名词",
        meaning: "束手无策，毫无办法，投降",
        example_jp: "パソコンが完全に壊れてしまい、もうお手上げだ。",
        example_cn: "电脑彻底坏了，实在束手无策了。"
    },
    { 
        id: 623, 
        word: "もはや", 
        kanji: "最早", 
        kana: "もはや", 
        pos: "副词",
        meaning: "已经，事到如今（同もう、すでに）",
        example_jp: "被害は拡大しており、もはや一刻の猶予も許されない。",
        example_cn: "损失正在扩大，事到如今已刻不容缓。"
    },
    { 
        id: 624, 
        word: "ぴんぴん", 
        kanji: "ぴんぴん", 
        kana: "ぴんぴん", 
        pos: "副词 / 自动词・サ变",
        meaning: "活蹦乱跳，健壮",
        example_jp: "祖父は９０歳になったが、まだぴんぴんしている。",
        example_cn: "祖父虽然90岁了，但依然十分健朗。"
    },
    { 
        id: 625, 
        word: "さめざめ", 
        kanji: "さめざめ", 
        kana: "さめざめ", 
        pos: "副词",
        meaning: "潸然泪下，默默流泪",
        example_jp: "悲報を聞いて、彼女はさめざめと泣いた。",
        example_cn: "听到噩耗，她潸然泪下。"
    },
    { 
        id: 626, 
        word: "もりもり", 
        kanji: "もりもり", 
        kana: "もりもり", 
        pos: "副词",
        meaning: "兴致勃勃；食欲旺盛；精力充沛地鼓起",
        example_jp: "育ち盛りの子供がご飯をもりもり食べる。",
        example_cn: "正在长身体的孩子旺盛地大口吃饭。"
    },
    { 
        id: 627, 
        word: "ねちねち", 
        kanji: "ねちねち", 
        kana: "ねちねち", 
        pos: "副词 / 自动词・サ变",
        meaning: "黏糊糊；喋喋不休，纠缠不休",
        example_jp: "済んだことをいつまでもねちねちと文句を言うな。",
        example_cn: "已经过去的事，不要总是喋喋不休地抱怨。"
    },
    { 
        id: 628, 
        word: "ゆがめる", 
        kanji: "歪める", 
        kana: "ゆがめる", 
        pos: "他动词・一段",
        meaning: "弄歪；歪曲（事实等）",
        example_jp: "事実を歪めて報道するのは、メディアとして許されない。",
        example_cn: "歪曲事实进行报道，作为媒体是不被允许的。"
    },
    { 
        id: 629, 
        word: "かんかん", 
        kanji: "かんかん", 
        kana: "かんかん", 
        pos: "副词 / ナ形容词",
        meaning: "大发雷霆，勃然大怒；当当响；烈日当空",
        example_jp: "約束を破ってしまい、父はかんかんに怒っている。",
        example_cn: "因为我违背了约定，父亲勃然大怒。"
    },
    { 
        id: 630, 
        word: "さくさく", 
        kanji: "さくさく", 
        kana: "さくさく", 
        pos: "副词 / 自动词・サ变",
        meaning: "脆生生（口感）；麻利地，顺利地（工作等）",
        example_jp: "新しいパソコンは、動作がさくさくしていて快適だ。",
        example_cn: "新电脑运行非常顺畅麻利，用起来很舒服。"
    },
    { 
        id: 631, 
        word: "グリーンしゃ", 
        kanji: "グリーン車", 
        kana: "グリーンしゃ", 
        pos: "名词",
        meaning: "绿色车厢（JR列车的头等座/软座厢）",
        example_jp: "長旅なので、少し奮発してグリーン車に乗った。",
        example_cn: "因为是长途旅行，所以稍微多花点钱坐了头等车厢。"
    },
    { 
        id: 632, 
        word: "こくこく", 
        kanji: "こくこく", 
        kana: "こくこく", 
        pos: "副词",
        meaning: "咕咚咕咚（喝水）；频频点头",
        example_jp: "先生の話を聞きながら、生徒たちはこくこくと頷いた。",
        example_cn: "听着老师的话，学生们频频点头。"
    },
    { 
        id: 633, 
        word: "ちゃらちゃら", 
        kanji: "ちゃらちゃら", 
        kana: "ちゃらちゃら", 
        pos: "副词 / 自动词・サ变",
        meaning: "叮当响（金属碰撞）；轻浮，花哨",
        example_jp: "彼はちゃらちゃらした服装で面接にやってきた。",
        example_cn: "他穿着花里胡哨（轻浮）的衣服来参加面试了。"
    },
    { 
        id: 634, 
        word: "なぎさ", 
        kanji: "渚", 
        kana: "なぎさ", 
        pos: "名词",
        meaning: "水滨，海滩，岸边",
        example_jp: "夕暮れ時、波の音を聞きながら渚を歩いた。",
        example_cn: "黄昏时分，听着海浪声漫步在海滩上。"
    },
    { 
        id: 635, 
        word: "ざらざら", 
        kanji: "ざらざら", 
        kana: "ざらざら", 
        pos: "副词 / ナ形容词",
        meaning: "粗糙，不光滑",
        example_jp: "冬場は乾燥して、肌がざらざらになりやすい。",
        example_cn: "冬天空气干燥，皮肤容易变得粗糙。"
    },
    { 
        id: 636, 
        word: "ひがむ", 
        kanji: "僻む", 
        kana: "ひがむ", 
        pos: "自动词・五段",
        meaning: "乖僻，偏执，感到委屈，抱有偏见",
        example_jp: "他人の成功をいちいち僻んでいても仕方がない。",
        example_cn: "对别人的成功一一感到委屈嫉妒也是没用的。"
    },
    { 
        id: 637, 
        word: "すっくり", 
        kanji: "すっくり", 
        kana: "すっくり", 
        pos: "副词",
        meaning: "笔直地站立，挺拔",
        example_jp: "彼女はバレリーナのように、背筋をすっくりと伸ばして立っていた。",
        example_cn: "她像芭蕾舞演员一样，背脊笔挺地站着。"
    },
    { 
        id: 638, 
        word: "おばけ", 
        kanji: "お化け", 
        kana: "おばけ", 
        pos: "名词",
        meaning: "妖怪，幽灵；异常巨大（的事物）",
        example_jp: "畑で驚くほど大きなお化けカボチャがとれた。",
        example_cn: "地里收获了一个大得惊人的巨型南瓜。"
    },
    { 
        id: 639, 
        word: "あべこべ", 
        kanji: "あべこべ", 
        kana: "あべこべ", 
        pos: "名词 / ナ形容词",
        meaning: "颠倒，相反",
        example_jp: "慌てていたので、靴下をあべこべに履いてしまった。",
        example_cn: "因为慌张，把袜子穿反了。"
    },
    { 
        id: 640, 
        word: "ぎゅっと", 
        kanji: "ぎゅっと", 
        kana: "ぎゅっと", 
        pos: "副词",
        meaning: "紧紧地，用力地",
        example_jp: "迷子にならないように、子供の手をぎゅっと握った。",
        example_cn: "为了不走散，紧紧地握住了孩子的手。"
    },
    { 
        id: 641, 
        word: "ばれる", 
        kanji: "ばれる", 
        kana: "ばれる", 
        pos: "自动词・一段",
        meaning: "暴露，泄露，被识破",
        example_jp: "隠していたへそくりが、妻にばれてしまった。",
        example_cn: "藏着的私房钱被妻子发现了（暴露了）。"
    },
    { 
        id: 642, 
        word: "しわしわ", 
        kanji: "皺々", 
        kana: "しわしわ", 
        pos: "副词 / ナ形容词",
        meaning: "满是皱纹，起皱",
        example_jp: "洗濯物をそのままにしておいたら、しわしわになってしまった。",
        example_cn: "洗好的衣服就那么放着，结果变得全是皱褶了。"
    },
    { 
        id: 643, 
        word: "こじれる", 
        kanji: "拗れる", 
        kana: "こじれる", 
        pos: "自动词・一段",
        meaning: "（病情）恶化；（事情、关系等）别扭，复杂化",
        example_jp: "風邪がこじれて、肺炎になってしまった。",
        example_cn: "感冒恶化，结果引发了肺炎。"
    },
    { 
        id: 644, 
        word: "もって", 
        kanji: "以て", 
        kana: "もって", 
        pos: "格助词",
        meaning: "（文言）用，以；因为；以此，到此",
        example_jp: "本日の営業は午後五時を以て終了させていただきます。",
        example_cn: "今天的营业到下午五点为止（结束）。"
    },
    { 
        id: 645, 
        word: "むさい", 
        kanji: "むさい", 
        kana: "むさい", 
        pos: "イ形容词",
        meaning: "肮脏的，邋遢的，令人不快的",
        example_jp: "何日も風呂に入っていない、むさい格好で出歩く。",
        example_cn: "好几天没洗澡，打扮得邋邋遢遢地在外面走。"
    },
    { 
        id: 646, 
        word: "かきみだす", 
        kanji: "掻き乱す", 
        kana: "かきみだす", 
        pos: "他动词・五段",
        meaning: "扰乱，打乱，使混乱",
        example_jp: "彼の突然の発言が、会議の進行を掻き乱した。",
        example_cn: "他突然的发言扰乱了会议的进行。"
    },
    { 
        id: 647, 
        word: "じとじと", 
        kanji: "じとじと", 
        kana: "じとじと", 
        pos: "副词 / 自动词・サ变",
        meaning: "湿漉漉，潮湿",
        example_jp: "梅雨の季節は、毎日じとじとしていて不快だ。",
        example_cn: "梅雨季节每天都潮湿阴冷，感觉很不舒服。"
    },
    { 
        id: 648, 
        word: "ちょくちょく", 
        kanji: "ちょくちょく", 
        kana: "ちょくちょく", 
        pos: "副词",
        meaning: "时常，往往，常常",
        example_jp: "彼は出張で、ちょくちょく海外へ行っている。",
        example_cn: "他因为出差，常常去海外。"
    },
    { 
        id: 649, 
        word: "はまる", 
        kanji: "嵌まる", 
        kana: "はまる", 
        pos: "自动词・五段",
        meaning: "嵌入，吻合；掉进，陷入；热衷，入迷",
        example_jp: "最近、新しいスマートフォンゲームにすっかり嵌まっている。",
        example_cn: "最近完全迷上了新的智能手机游戏。"
    },
    { 
        id: 650, 
        word: "たゆみなく", 
        kanji: "弛みなく", 
        kana: "たゆみなく", 
        pos: "副词",
        meaning: "毫不松懈地，不屈不挠地",
        example_jp: "目標達成に向けて、弛みなく努力を続ける。",
        example_cn: "为了达成目标，毫不松懈地继续努力。"
    },
    { 
        id: 651, 
        word: "あんぐり", 
        kanji: "あんぐり", 
        kana: "あんぐり", 
        pos: "副词",
        meaning: "（因惊讶等）张大嘴巴发呆貌",
        example_jp: "予想外の結末に、観客は口をあんぐりと開けていた。",
        example_cn: "面对出乎意料的结局，观众们惊讶得张大了嘴巴。"
    },
    { 
        id: 652, 
        word: "とっさに", 
        kanji: "咄嗟に", 
        kana: "とっさに", 
        pos: "副词",
        meaning: "瞬间，下意识地，立刻",
        example_jp: "子供が飛び出してきたので、とっさにブレーキを踏んだ。",
        example_cn: "因为有小孩子冲了出来，我下意识地踩了刹车。"
    },
    { 
        id: 653, 
        word: "まして", 
        kanji: "況して / 増して", 
        kana: "まして", 
        pos: "副词",
        meaning: "何况，况且，更不用说（多搭配否定）",
        example_jp: "大人でも解けない問題だ。まして子供には無理だろう。",
        example_cn: "这是连大人都解不开的问题。何况是小孩，肯定做不到吧。"
    },
    { 
        id: 654, 
        word: "むずむず", 
        kanji: "むずむず", 
        kana: "むずむず", 
        pos: "副词 / 自动词・サ变",
        meaning: "发痒；心里发痒（想做某事按捺不住）",
        example_jp: "早く新しいパソコンを使いたくて、手がむずむずする。",
        example_cn: "想早点用上新电脑，手痒得按捺不住。"
    },
    { 
        id: 655, 
        word: "ざくざく", 
        kanji: "ざくざく", 
        kana: "ざくざく", 
        pos: "副词 / 自动词・サ变",
        meaning: "踩砂石声；粗略切碎（蔬菜）；金币碰撞声（财源滚滚）",
        example_jp: "キャベツを包丁でざくざくと切る。",
        example_cn: "用菜刀把卷心菜咔嚓咔嚓地粗略切碎。"
    },
    { 
        id: 656, 
        word: "さまよう", 
        kanji: "さ迷う / 彷徨う", 
        kana: "さまよう", 
        pos: "自动词・五段",
        meaning: "徘徊，流浪；（生死线上）挣扎",
        example_jp: "事故に遭い、生死の境を彷徨った。",
        example_cn: "遭遇事故，在生死线上徘徊挣扎。"
    },
    { 
        id: 657, 
        word: "みぞれ", 
        kanji: "霙", 
        kana: "みぞれ", 
        pos: "名词",
        meaning: "雨夹雪",
        example_jp: "冷たい雨が、やがて霙に変わった。",
        example_cn: "冰冷的雨不久后变成了雨夹雪。"
    },
    { 
        id: 658, 
        word: "くすぐったい", 
        kanji: "擽ったい", 
        kana: "くすぐったい", 
        pos: "イ形容词",
        meaning: "痒痒的；（受人夸奖时）难为情，不好意思",
        example_jp: "皆の前で褒められて、少しくすぐったい気分だ。",
        example_cn: "在大家面前受到表扬，感觉有点不好意思。"
    },
    { 
        id: 659, 
        word: "ばらまく", 
        kanji: "ばら撒く / ばら蒔く", 
        kana: "ばらまく", 
        pos: "他动词・五段",
        meaning: "撒，到处散布（钱财、传闻等）",
        example_jp: "彼は根拠のない噂を社内にばら撒いている。",
        example_cn: "他在公司内部到处散布毫无根据的谣言。"
    },
    { 
        id: 660, 
        word: "せっかち", 
        kanji: "せっかち", 
        kana: "せっかち", 
        pos: "名词 / ナ形容词",
        meaning: "性急，急躁",
        example_jp: "彼はせっかちな性格で、人の話が終わる前に話し始める。",
        example_cn: "他性格急躁，别人话还没说完他就开始说了。"
    },
    { 
        id: 661, 
        word: "もやもや", 
        kanji: "もやもや", 
        kana: "もやもや", 
        pos: "副词 / 自动词・サ变",
        meaning: "烟雾弥漫貌；（心情、记忆等）朦胧，郁闷，无法释怀",
        example_jp: "言いたいことを我慢したので、心にもやもやが残った。",
        example_cn: "因为把想说的话憋了回去，心里一直郁结难解。"
    },
    { 
        id: 662, 
        word: "こだわり", 
        kanji: "拘り", 
        kana: "こだわり", 
        pos: "名词",
        meaning: "拘泥，讲究，执着",
        example_jp: "この店のコーヒーは、豆の焙煎に強いこだわりがある。",
        example_cn: "这家店的咖啡，在咖啡豆的烘焙上有着极高的讲究。"
    },
    { 
        id: 663, 
        word: "ひょっとしたら", 
        kanji: "ひょっとしたら", 
        kana: "ひょっとしたら", 
        pos: "副词",
        meaning: "（后接「かもしれない」等）说不定，也许",
        example_jp: "ひょっとしたら、今日のテストは満点かもしれない。",
        example_cn: "说不定，今天的考试也许能拿满分。"
    },
    { 
        id: 664, 
        word: "おたおた", 
        kanji: "おたおた", 
        kana: "おたおた", 
        pos: "副词 / 自动词・サ变",
        meaning: "惊慌失措，手忙脚乱",
        example_jp: "突然のトラブルに、ただおたおたするばかりだった。",
        example_cn: "面对突发的麻烦，只能手忙脚乱不知所措。"
    },
    { 
        id: 665, 
        word: "そっちのけ", 
        kanji: "其方退け", 
        kana: "そっちのけ", 
        pos: "名词",
        meaning: "抛开不管，置之不理（多以「〜をそっちのけで」形式出现）",
        example_jp: "子供は宿題をそっちのけでゲームに夢中になっている。",
        example_cn: "孩子把作业抛到九霄云外，沉迷于游戏。"
    },
    { 
        id: 666, 
        word: "はげわし", 
        kanji: "禿鷲", 
        kana: "はげわし", 
        pos: "名词",
        meaning: "秃鹫",
        example_jp: "サバンナで禿鷲が獲物を狙っている。",
        example_cn: "在非洲大草原上，秃鹫正在盯着猎物。"
    },
    { 
        id: 667, 
        word: "あやふや", 
        kanji: "あやふや", 
        kana: "あやふや", 
        pos: "ナ形容词",
        meaning: "含糊其辞，模棱两可，不明确",
        example_jp: "質問に対して、あやふやな返事しかできなかった。",
        example_cn: "面对提问，只能做出模棱两可的回答。"
    },
    { 
        id: 668, 
        word: "ぎざぎざ", 
        kanji: "ぎざぎざ", 
        kana: "ぎざぎざ", 
        pos: "名词 / ナ形容词",
        meaning: "锯齿状，犬牙交错",
        example_jp: "葉の縁がぎざぎざになっている植物。",
        example_cn: "叶子边缘呈锯齿状的植物。"
    },
    { 
        id: 669, 
        word: "こたつ", 
        kanji: "炬燵 / 火燵", 
        kana: "こたつ", 
        pos: "名词",
        meaning: "被炉",
        example_jp: "冬はこたつでみかんを食べるのが最高だ。",
        example_cn: "冬天在被炉里吃橘子是最棒的。"
    },
    { 
        id: 670, 
        word: "ひりひり", 
        kanji: "ひりひり", 
        kana: "ひりひり", 
        pos: "副词 / 自动词・サ变",
        meaning: "（皮肤擦伤、烧伤或吃辣等引起的）刺痛，火辣辣地痛",
        example_jp: "日焼けで背中がひりひりと痛む。",
        example_cn: "因为晒伤，背部火辣辣地痛。"
    },
    { 
        id: 671, 
        word: "たんまり", 
        kanji: "たんまり", 
        kana: "たんまり", 
        pos: "副词",
        meaning: "很多，颇多（多指金钱）",
        example_jp: "宝くじが当たって、たんまりと儲けた。",
        example_cn: "中了彩票，赚了一大笔钱。"
    },
    { 
        id: 672, 
        word: "くみとる", 
        kanji: "汲み取る", 
        kana: "くみとる", 
        pos: "他动词・五段",
        meaning: "打水，舀出；推测，体察，理解（他人的心情）",
        example_jp: "部下の不満を汲み取って、職場環境を改善する。",
        example_cn: "体察部下的不满，并改善职场环境。"
    },
    { 
        id: 673, 
        word: "よって", 
        kanji: "依って / 因って", 
        kana: "よって", 
        pos: "接续词",
        meaning: "因此，所以（正式书面语）",
        example_jp: "本日は大雪である。よって、会議は延期とする。",
        example_cn: "今日下大雪。因此，会议延期。"
    },
    { 
        id: 674, 
        word: "しがみつく", 
        kanji: "しがみ付く", 
        kana: "しがみつく", 
        pos: "自动词・五段",
        meaning: "紧紧抱住，死死抓住不放",
        example_jp: "子供が母親の足にしがみついて泣いている。",
        example_cn: "孩子紧紧抱住母亲的腿在哭泣。"
    },
    { 
        id: 675, 
        word: "むくむく", 
        kanji: "むくむく", 
        kana: "むくむく", 
        pos: "副词",
        meaning: "（云烟）滚滚升起；（想法、欲望）涌起；胖乎乎",
        example_jp: "彼への疑念がむくむくと湧き上がってきた。",
        example_cn: "对他的疑虑源源不断地涌上心头。"
    },
    { 
        id: 676, 
        word: "はばかる", 
        kanji: "憚る", 
        kana: "はばかる", 
        pos: "他动词・五段",
        meaning: "顾忌，怕人知道；有所畏惧",
        example_jp: "人目も憚らず、大声で泣き出した。",
        example_cn: "毫不在意旁人的目光，毫无顾忌地大声哭了起来。"
    },
    { 
        id: 677, 
        word: "かかりつけ", 
        kanji: "掛かり付け", 
        kana: "かかりつけ", 
        pos: "名词",
        meaning: "经常就诊的（医生等），常去的",
        example_jp: "体調が悪いので、かかりつけの医者に診てもらう。",
        example_cn: "因为身体不舒服，去看了经常就诊的家庭医生。"
    },
    { 
        id: 678, 
        word: "かねて", 
        kanji: "予て / 兼ねて", 
        kana: "かねて", 
        pos: "副词",
        meaning: "事先，早先，以前（多以「かねてから」的形式出现）",
        example_jp: "その噂は、かねてから聞いておりました。",
        example_cn: "那个传闻，我早先就有所耳闻。"
    },
    { 
        id: 679, 
        word: "ばか〜", 
        kanji: "馬鹿〜", 
        kana: "ばか〜", 
        pos: "接头词",
        meaning: "出奇地，超乎寻常地（极度强调）",
        example_jp: "この店のカレーはばかでかい（馬鹿でかい）ことで有名だ。",
        example_cn: "这家店的咖喱以出奇的大份而闻名。"
    },
    { 
        id: 680, 
        word: "ねぎらい", 
        kanji: "労い / 犒い", 
        kana: "ねぎらい", 
        pos: "名词",
        meaning: "慰劳，犒赏，感谢",
        example_jp: "社長から、社員に向けてねぎらいの言葉があった。",
        example_cn: "社长对员工们说了几句慰劳的话。"
    },
    { 
        id: 681, 
        word: "やられる", 
        kanji: "やられる", 
        kana: "やられる", 
        pos: "动词（受身形）",
        meaning: "被打败；被干掉；遭受（灾害、诈骗）；受不了",
        example_jp: "巧妙な手口の詐欺にすっかりやられてしまった。",
        example_cn: "被手法巧妙的诈骗给彻底骗了。"
    },
    { 
        id: 682, 
        word: "すらり", 
        kanji: "すらり", 
        kana: "すらり", 
        pos: "副词",
        meaning: "身材修长貌；顺利地，毫无阻碍地",
        example_jp: "彼女はすらりとした足がとても美しい。",
        example_cn: "她那修长的双腿非常漂亮。"
    },
    { 
        id: 683, 
        word: "うつぶせ", 
        kanji: "俯せ", 
        kana: "うつぶせ", 
        pos: "名词",
        meaning: "趴着，俯卧，脸朝下",
        example_jp: "マッサージを受けるため、ベッドにうつ伏せになる。",
        example_cn: "为了接受按摩，在床上趴了下来。"
    },
    { 
        id: 684, 
        word: "どうにも", 
        kanji: "どうにも", 
        kana: "どうにも", 
        pos: "副词",
        meaning: "（后接否定）怎么也（无计可施）；无论如何也",
        example_jp: "渋滞に巻き込まれ、今の時間からはどうにも間に合わない。",
        example_cn: "被卷入堵车，从现在的时间来看怎么也赶不上了。"
    },
    { 
        id: 685, 
        word: "もくろむ", 
        kanji: "目論む", 
        kana: "もくろむ", 
        pos: "他动词・五段",
        meaning: "企图，策划，图谋，盘算",
        example_jp: "彼は社長の座を奪おうと目論んでいる。",
        example_cn: "他正企图夺取社长的宝座。"
    },
    { 
        id: 686, 
        word: "もとより", 
        kanji: "元より", 
        kana: "もとより", 
        pos: "副词",
        meaning: "本来就；（接「〜はもとより」）不用说...连...",
        example_jp: "外見は元より、性格も素晴らしい人だ。",
        example_cn: "外貌自不必说，性格也是极好的人。"
    },
    { 
        id: 687, 
        word: "べらべら", 
        kanji: "べらべら", 
        kana: "べらべら", 
        pos: "副词",
        meaning: "口若悬河地，滔滔不绝地；轻率地泄密",
        example_jp: "他人の秘密をべらべらと喋るべきではない。",
        example_cn: "不应该把别人的秘密滔滔不绝地到处乱说。"
    },
    { 
        id: 688, 
        word: "もてはやす", 
        kanji: "持て囃す", 
        kana: "もてはやす", 
        pos: "他动词・五段",
        meaning: "极力称赞，捧场，追捧",
        example_jp: "その作家は若者たちの間でもてはやされている。",
        example_cn: "那位作家在年轻人中备受追捧。"
    },
    { 
        id: 689, 
        word: "かれこれ", 
        kanji: "彼此", 
        kana: "かれこれ", 
        pos: "副词",
        meaning: "这个那个；不知不觉，差不多（时间、数量等）",
        example_jp: "彼と知り合って、かれこれ十年になる。",
        example_cn: "和他认识差不多有十年了。"
    },
    { 
        id: 690, 
        word: "しなやか", 
        kanji: "しなやか", 
        kana: "しなやか", 
        pos: "ナ形容词",
        meaning: "柔韧，柔软，优美，婀娜",
        example_jp: "体操選手のしなやかな身のこなしに魅了された。",
        example_cn: "被体操运动员柔韧优美的身段迷住了。"
    },
    { 
        id: 691, 
        word: "すぼめる", 
        kanji: "窄める", 
        kana: "すぼめる", 
        pos: "他动词・一段",
        meaning: "收缩，弄窄；合拢；耸肩（肩をすぼめる）",
        example_jp: "雨が止んだので、傘をすぼめた。",
        example_cn: "雨停了，所以收起了伞。"
    },
    { 
        id: 692, 
        word: "くだくだ", 
        kanji: "くだくだ", 
        kana: "くだくだ", 
        pos: "副词",
        meaning: "啰里啰嗦，冗长乏味",
        example_jp: "終わったことをいつまでもくだくだ言うな。",
        example_cn: "过去的事情不要一直啰里啰嗦地说个没完。"
    },
    { 
        id: 693, 
        word: "なんと", 
        kanji: "なんと", 
        kana: "なんと", 
        pos: "副词",
        meaning: "多么，何等（表示惊叹）；竟然",
        example_jp: "なんと美しい景色なのだろう。",
        example_cn: "多么美丽的景色啊。"
    },
    { 
        id: 694, 
        word: "ありのまま", 
        kanji: "有りの儘", 
        kana: "ありのまま", 
        pos: "名词 / 副词",
        meaning: "如实，按原样，不加掩饰",
        example_jp: "事件の状況をありのままに警察に話した。",
        example_cn: "把案件的情况如实地向警察讲述了。"
    },
    { 
        id: 695, 
        word: "ことによると", 
        kanji: "ことによると", 
        kana: "ことによると", 
        pos: "副词",
        meaning: "（后接推测词「かもしれない」等）可能，或许",
        example_jp: "ことによると、来月は海外出張になるかもしれない。",
        example_cn: "可能下个月要去海外出差。"
    },
    { 
        id: 696, 
        word: "すぼまる", 
        kanji: "窄まる", 
        kana: "すぼまる / つぼまる", 
        pos: "自动词・五段",
        meaning: "变窄，收缩，聚拢",
        example_jp: "このズボンは、足首に向かって裾がすぼまっている。",
        example_cn: "这条裤子的裤腿向脚踝处收窄。"
    },
    { 
        id: 697, 
        word: "のけぞる", 
        kanji: "仰け反る", 
        kana: "のけぞる", 
        pos: "自动词・五段",
        meaning: "向后仰；（因惊讶、大笑等）后仰",
        example_jp: "突然の大きな音に驚いて、のけぞってしまった。",
        example_cn: "被突然的巨响吓了一跳，身子向后仰了过去。"
    },
    { 
        id: 698, 
        word: "〜ぐるみ", 
        kanji: "〜ぐるみ", 
        kana: "〜ぐるみ", 
        pos: "后缀",
        meaning: "全...，举...（连同整体在内）",
        example_jp: "この地域では、町ぐるみで防犯対策に取り組んでいる。",
        example_cn: "在这个地区，全镇都在共同致力于防范对策。"
    },
    { 
        id: 699, 
        word: "にわかあめ", 
        kanji: "俄雨", 
        kana: "にわかあめ", 
        pos: "名词",
        meaning: "阵雨，骤雨",
        example_jp: "出かけようとしたら、にわか雨が降ってきた。",
        example_cn: "正要出门时，突然下起了阵雨。"
    },
    { 
        id: 700, 
        word: "いぶかしい", 
        kanji: "訝しい", 
        kana: "いぶかしい", 
        pos: "イ形容词",
        meaning: "可疑的，令人怀疑的，奇怪的",
        example_jp: "彼の行動には、どうも訝しい点がある。",
        example_cn: "他的行动总是让人觉得有些可疑之处。"
    },
    { 
        id: 701, 
        word: "さわさわ", 
        kanji: "さわさわ", 
        kana: "さわさわ", 
        pos: "副词",
        meaning: "（风吹树叶等的）沙沙声；心情爽朗",
        example_jp: "風が吹いて、木々の葉がさわさわと音を立てた。",
        example_cn: "风吹过，树叶发出沙沙的声响。"
    },
    { 
        id: 702, 
        word: "どさどさ", 
        kanji: "どさどさ", 
        kana: "どさどさ", 
        pos: "副词",
        meaning: "（沉重物品大量落下的）扑通扑通，哗啦哗啦",
        example_jp: "トラックから荷物をどさどさと下ろす。",
        example_cn: "把货物从卡车上哗啦哗啦地大量卸下来。"
    },
    { 
        id: 703, 
        word: "ぞろり", 
        kanji: "ぞろり", 
        kana: "ぞろり", 
        pos: "副词",
        meaning: "（衣服等）拖长貌；华丽，光彩照人",
        example_jp: "彼女はぞろりとしたドレスを着て現れた。",
        example_cn: "她穿着一袭华丽拖地的长裙出现了。"
    },
    { 
        id: 704, 
        word: "それゆえ", 
        kanji: "其れ故", 
        kana: "それゆえ", 
        pos: "接续词",
        meaning: "因此，所以（多用于书面语）",
        example_jp: "彼は誠実である。其れ故、誰からも信頼されている。",
        example_cn: "他很诚实。因此，受到了所有人的信赖。"
    },
    { 
        id: 705, 
        word: "もしかして", 
        kanji: "若しかして", 
        kana: "もしかして", 
        pos: "副词",
        meaning: "莫非，难道（后常接疑问或推测）",
        example_jp: "もしかして、私に嘘をついているのではないですか。",
        example_cn: "难道说，你是不是在对我撒谎？"
    },
    { 
        id: 706, 
        word: "またがる", 
        kanji: "跨がる", 
        kana: "またがる", 
        pos: "自动词・五段",
        meaning: "跨越，横跨；骑（马等）；拖延，跨及（时间、领域）",
        example_jp: "このプロジェクトは数年に跨がる大規模なものだ。",
        example_cn: "这个项目是横跨数年的大规模项目。"
    },
    { 
        id: 707, 
        word: "もさもさ", 
        kanji: "もさもさ", 
        kana: "もさもさ", 
        pos: "副词 / 自动词・サ变",
        meaning: "毛发浓密杂乱；动作迟钝，慢吞吞",
        example_jp: "髪を切っていないので、頭がもさもさしている。",
        example_cn: "因为没剪头发，脑袋上杂乱蓬松的。"
    },
    { 
        id: 708, 
        word: "こぎつける", 
        kanji: "漕ぎ着ける", 
        kana: "こぎつける", 
        pos: "自动词・一段",
        meaning: "好不容易达到（某种目标或阶段）",
        example_jp: "苦労の末、ついに契約に漕ぎ着けた。",
        example_cn: "历经辛苦，终于成功签订了合约。"
    },
    { 
        id: 709, 
        word: "ゆがむ", 
        kanji: "歪む", 
        kana: "ゆがむ", 
        pos: "自动词・五段",
        meaning: "歪斜，扭曲；（心理、思想）不端正",
        example_jp: "強い圧力がかかって、鉄の枠が歪んでしまった。",
        example_cn: "受到强压，铁框扭曲变形了。"
    },
    { 
        id: 710, 
        word: "だぶだぶ", 
        kanji: "だぶだぶ", 
        kana: "だぶだぶ", 
        pos: "副词 / ナ形容词",
        meaning: "肥大，宽松（衣服）；液体满溢晃动",
        example_jp: "兄のお下がりなので、このズボンはだぶだぶだ。",
        example_cn: "因为是哥哥穿旧传下来的，所以这条裤子很肥大。"
    },
    { 
        id: 711, 
        word: "うんざり", 
        kanji: "うんざり", 
        kana: "うんざり", 
        pos: "副词 / 自动词・サ变",
        meaning: "厌烦，腻烦，倒胃口",
        example_jp: "毎日のように同じ料理を出されて、すっかりうんざりした。",
        example_cn: "每天都端出一样的菜，彻底倒胃口了。"
    },
    { 
        id: 712, 
        word: "ねた", 
        kanji: "ねた / ネタ", 
        kana: "ねた", 
        pos: "名词",
        meaning: "（新闻、小说的）素材，话题；证据；（寿司的）配料",
        example_jp: "明日のスピーチのネタ（話題）が思いつかない。",
        example_cn: "想不出明天演讲的素材（话题）。"
    },
    { 
        id: 713, 
        word: "たかが", 
        kanji: "高が", 
        kana: "たかが", 
        pos: "副词",
        meaning: "充其量，顶多，只不过（含有轻视意味）",
        example_jp: "高が一度の失敗で、そんなに落ち込むことはない。",
        example_cn: "只不过是一次失败，没必要那么失落。"
    },
    { 
        id: 714, 
        word: "さばさば", 
        kanji: "さばさば", 
        kana: "さばさば", 
        pos: "副词 / 自动词・サ变",
        meaning: "性格爽朗，直率；心情舒畅",
        example_jp: "彼女はさばさばした性格で、誰とでもすぐに打ち解ける。",
        example_cn: "她性格爽朗直率，跟谁都能马上熟络起来。"
    },
    { 
        id: 715, 
        word: "さぞ", 
        kanji: "嘸", 
        kana: "さぞ", 
        pos: "副词",
        meaning: "（后接推测词）想必，一定",
        example_jp: "こんなに立派な家を建てるなんて、さぞ苦労されたことでしょう。",
        example_cn: "能建起这么气派的房子，想必吃了不少苦吧。"
    },
    { 
        id: 716, 
        word: "ちやほや", 
        kanji: "ちやほや", 
        kana: "ちやほや", 
        pos: "副词 / 他动词・サ变",
        meaning: "溺爱，奉承，捧场",
        example_jp: "彼女は周りの男性からちやほやされて育った。",
        example_cn: "她在周围男性的奉承和捧场中长大。"
    },
    { 
        id: 717, 
        word: "さもないと", 
        kanji: "然もないと", 
        kana: "さもないと", 
        pos: "接续词",
        meaning: "不然的话，否则（同そうしないと）",
        example_jp: "早く出発しよう。さもないと終電に乗り遅れるぞ。",
        example_cn: "快点出发吧。否则赶不上末班车了。"
    },
    { 
        id: 718, 
        word: "ひいては", 
        kanji: "延いては", 
        kana: "ひいては", 
        pos: "副词",
        meaning: "进而，不仅...甚至...，推而广之",
        example_jp: "個人の努力が、ひいては社会全体の発展に繋がる。",
        example_cn: "个人的努力，进而会联系到整个社会的发展。"
    },
    { 
        id: 719, 
        word: "いかに", 
        kanji: "如何に", 
        kana: "いかに", 
        pos: "副词",
        meaning: "如何，怎样；（接「ても」等）无论多么",
        example_jp: "いかに困難な状況であっても、決して諦めない。",
        example_cn: "无论处于多么困难的状况，也绝不放弃。"
    },
    { 
        id: 720, 
        word: "ちゃらける", 
        kanji: "ちゃらける", 
        kana: "ちゃらける", 
        pos: "自动词・一段",
        meaning: "开玩笑，戏弄，轻浮",
        example_jp: "真面目な話をしているのだから、ちゃらけるのはやめなさい。",
        example_cn: "在说正经事呢，别开玩笑（态度轻浮）了。"
    },
    { 
        id: 721, 
        word: "ぱさぱさ", 
        kanji: "ぱさぱさ", 
        kana: "ぱさぱさ", 
        pos: "副词 / ナ形容词",
        meaning: "干巴巴，松散，无光泽",
        example_jp: "このパンは水分が飛んで、ぱさぱさしている。",
        example_cn: "这块面包水分流失，干巴巴的。"
    },
    { 
        id: 722, 
        word: "しゃれる", 
        kanji: "洒落る", 
        kana: "しゃれる", 
        pos: "自动词・一段",
        meaning: "别致，时髦，俏皮；开玩笑",
        example_jp: "彼はいつも洒落た服を着ている。",
        example_cn: "他总是穿着时髦别致的衣服。"
    },
    { 
        id: 723, 
        word: "くにゃくにゃ / ぐにゃぐにゃ", 
        kanji: "くにゃくにゃ / ぐにゃぐにゃ", 
        kana: "くにゃくにゃ", 
        pos: "副词 / ナ形容词",
        meaning: "软绵绵，弯弯曲曲，扭曲貌",
        example_jp: "熱でプラスチックの定規がぐにゃぐにゃに曲がった。",
        example_cn: "因为高温，塑料尺子被烤得软绵绵地弯曲了。"
    },
    { 
        id: 724, 
        word: "くすくす", 
        kanji: "くすくす", 
        kana: "くすくす", 
        pos: "副词",
        meaning: "窃笑，偷笑",
        example_jp: "私の失敗を見て、女子社員たちがくすくす笑っている。",
        example_cn: "看到我的失误，女员工们在偷偷地笑。"
    },
    { 
        id: 725, 
        word: "せせらぎ", 
        kanji: "せせらぎ", 
        kana: "せせらぎ", 
        pos: "名词",
        meaning: "浅滩；潺潺流水声",
        example_jp: "川のせせらぎを聞きながら、静かに目を閉じる。",
        example_cn: "一边听着河水的潺潺声，一边静静地闭上眼睛。"
    },
    { 
        id: 726, 
        word: "でれでれ", 
        kanji: "でれでれ", 
        kana: "でれでれ", 
        pos: "副词 / 自动词・サ变",
        meaning: "色迷迷，讨好貌；松懈，懒散",
        example_jp: "綺麗な女性を前にして、でれでれしている。",
        example_cn: "在美女面前，色迷迷地献殷勤。"
    },
    { 
        id: 727, 
        word: "ぱらぱら", 
        kanji: "ぱらぱら", 
        kana: "ぱらぱら", 
        pos: "副词 / 自动词・サ变",
        meaning: "淅淅沥沥；哗啦哗啦（翻书）；稀稀拉拉",
        example_jp: "本屋で雑誌をぱらぱらと立ち読みする。",
        example_cn: "在书店里哗啦哗啦地翻着杂志站着看。"
    },
    { 
        id: 728, 
        word: "ひょいと", 
        kanji: "ひょいと", 
        kana: "ひょいと", 
        pos: "副词",
        meaning: "轻松地，轻易地；突然",
        example_jp: "彼は重い荷物をひょいと持ち上げた。",
        example_cn: "他轻而易举地举起了沉重的行李。"
    },
    { 
        id: 729, 
        word: "ねじまげる", 
        kanji: "捻じ曲げる", 
        kana: "ねじまげる", 
        pos: "他动词・一段",
        meaning: "弄弯，扭曲；歪曲（事实等）",
        example_jp: "自己都合で事実を捻じ曲げて解釈してはいけない。",
        example_cn: "不能为了自身的方便而歪曲事实进行解释。"
    },
    { 
        id: 730, 
        word: "もろに", 
        kanji: "もろに", 
        kana: "もろに", 
        pos: "副词",
        meaning: "直接地，迎面，彻底地",
        example_jp: "台風の影響をもろに受けて、家屋が倒壊した。",
        example_cn: "直接受到了台风的冲击，房屋倒塌了。"
    },
    { 
        id: 731, 
        word: "ほっそり", 
        kanji: "ほっそり", 
        kana: "ほっそり", 
        pos: "副词 / 自动词・サ变",
        meaning: "纤细，瘦削",
        example_jp: "彼女はほっそりとした体つきをしている。",
        example_cn: "她体态纤细苗条。"
    },
    { 
        id: 732, 
        word: "おかみさん", 
        kanji: "お上さん", 
        kana: "おかみさん", 
        pos: "名词",
        meaning: "老板娘，房东太太，老板的妻子",
        example_jp: "旅館のお上さんが笑顔で出迎えてくれた。",
        example_cn: "旅馆的老板娘满面笑容地出来迎接。"
    },
    { 
        id: 733, 
        word: "あくどい", 
        kanji: "あくどい", 
        kana: "あくどい", 
        pos: "イ形容词",
        meaning: "恶毒的，奸诈的；（颜色、味道）过于浓艳，刺眼",
        example_jp: "消費者を騙すようなあくどい商法は許せない。",
        example_cn: "无法原谅那种欺骗消费者的奸诈商业手段。"
    },
    { 
        id: 734, 
        word: "ないがしろ", 
        kanji: "蔑ろ", 
        kana: "ないがしろ", 
        pos: "名词",
        meaning: "无视，轻视，怠慢（多接「にする」）",
        example_jp: "目上の人を蔑ろにするような態度は良くない。",
        example_cn: "怠慢（轻视）长辈的态度是不好的。"
    },
    { 
        id: 735, 
        word: "どんぞこ", 
        kanji: "どん底", 
        kana: "どんぞこ", 
        pos: "名词",
        meaning: "最底层，极度深渊（多指极差的境遇）",
        example_jp: "人生のどん底を味わったが、そこから這い上がった。",
        example_cn: "体会过人生的最谷底，但又从那里爬了上来。"
    },
    { 
        id: 736, 
        word: "とがる", 
        kanji: "尖る", 
        kana: "とがる", 
        pos: "自动词・五段",
        meaning: "尖锐；（神经等）敏锐；过敏，神经质；声音尖锐",
        example_jp: "鉛筆の先が鋭く尖っている。",
        example_cn: "铅笔的笔尖削得非常尖锐。"
    },
    { 
        id: 737, 
        word: "おろそか", 
        kanji: "疎か", 
        kana: "おろそか", 
        pos: "ナ形容词",
        meaning: "疏忽，草率，马虎（多接「にする」）",
        example_jp: "アルバイトに夢中で、学業を疎かにしてしまった。",
        example_cn: "沉迷于打工，结果疏忽了学业。"
    },
    { 
        id: 738, 
        word: "いじいじ", 
        kanji: "いじいじ", 
        kana: "いじいじ", 
        pos: "副词 / 自动词・サ变",
        meaning: "畏缩，踌躇，不爽快",
        example_jp: "いつまでもいじいじ悩んでいないで、はっきり言え。",
        example_cn: "别一直扭扭捏捏地烦恼，有话直说。"
    },
    { 
        id: 739, 
        word: "ちらちら", 
        kanji: "ちらちら", 
        kana: "ちらちら", 
        pos: "副词 / 自动词・サ变",
        meaning: "雪花飘飘；火光闪烁；时不时地瞥（看）",
        example_jp: "彼はこちらの様子をちらちらと窺っている。",
        example_cn: "他正在时不时地瞥眼观察我们这边的情况。"
    },
    { 
        id: 740, 
        word: "どきっと", 
        kanji: "どきっと", 
        kana: "どきっと", 
        pos: "副词 / 自动词・サ变",
        meaning: "（因突然惊吓、喜悦等）心头一惊",
        example_jp: "図星を指されて、思わずどきっとした。",
        example_cn: "被说中心事，不由得心头一惊。"
    },
    { 
        id: 741, 
        word: "はばたく", 
        kanji: "羽撃く / 翔く", 
        kana: "はばたく", 
        pos: "自动词・五段",
        meaning: "振翅高飞；大展宏图",
        example_jp: "若者たちには、世界へ向けて大きく翔いてほしい。",
        example_cn: "希望年轻人们能向着世界展翅高飞（大展宏图）。"
    },
    { 
        id: 742, 
        word: "くどくど", 
        kanji: "くどくど", 
        kana: "くどくど", 
        pos: "副词",
        meaning: "啰啰嗦嗦，絮絮叨叨",
        example_jp: "終わったミスをくどくどと責め立てる。",
        example_cn: "对已经发生的失误啰啰嗦嗦地责备个没完。"
    },
    { 
        id: 743, 
        word: "かつて", 
        kanji: "曽て", 
        kana: "かつて", 
        pos: "副词",
        meaning: "曾经，以前；（后接否定）从未",
        example_jp: "ここは曽て、多くの人で賑わう繁華街だった。",
        example_cn: "这里曾经是一条熙熙攘攘的繁华街道。"
    },
    { 
        id: 744, 
        word: "おっちょこちょい", 
        kanji: "おっちょこちょい", 
        kana: "おっちょこちょい", 
        pos: "名词 / ナ形容词",
        meaning: "冒失鬼，粗心大意，轻浮",
        example_jp: "彼は本当におっちょこちょいで、よく忘れ物をする。",
        example_cn: "他真是个冒失鬼，经常忘东西。"
    },
    { 
        id: 745, 
        word: "もったいらしい", 
        kanji: "勿体らしい", 
        kana: "もったいらしい", 
        pos: "イ形容词",
        meaning: "煞有介事，故弄玄虚，装模作样",
        example_jp: "勿体らしい態度で、なかなか結論を言わない。",
        example_cn: "摆出一副故弄玄虚的架势，迟迟不说结论。"
    },
    { 
        id: 746, 
        word: "すねる", 
        kanji: "拗ねる", 
        kana: "すねる", 
        pos: "自动词・一段",
        meaning: "闹别扭，乖僻",
        example_jp: "おもちゃを買ってもらえず、子供が拗ねている。",
        example_cn: "因为没给买玩具，孩子正在闹别扭。"
    },
    { 
        id: 747, 
        word: "たたずむ", 
        kanji: "佇む", 
        kana: "たたずむ", 
        pos: "自动词・五段",
        meaning: "伫立，长时间站立",
        example_jp: "海辺に一人佇み、夕日を眺める。",
        example_cn: "独自伫立在海边，眺望夕阳。"
    },
    { 
        id: 748, 
        word: "がっちり", 
        kanji: "がっちり", 
        kana: "がっちり", 
        pos: "副词 / 自动词・サ变",
        meaning: "结实，牢固；精明，不吃亏",
        example_jp: "彼はがっちりした体格で、スポーツマンらしい。",
        example_cn: "他体格结实，很有运动员的风范。"
    },
    { 
        id: 749, 
        word: "とぼとぼ", 
        kanji: "とぼとぼ", 
        kana: "とぼとぼ", 
        pos: "副词",
        meaning: "蹒跚，步履艰难，没精打采地走",
        example_jp: "試合に負けて、とぼとぼと家路についた。",
        example_cn: "比赛输了，没精打采地走在回家的路上。"
    },
    { 
        id: 750, 
        word: "やるせない", 
        kanji: "遣る瀬無い", 
        kana: "やるせない", 
        pos: "イ形容词",
        meaning: "排遣不开，郁闷，凄凉，无奈",
        example_jp: "彼の悲しい生い立ちを聞いて、遣る瀬無い気持ちになった。",
        example_cn: "听到他悲惨的身世，我感到一阵凄凉与无奈。"
    },
    { 
        id: 751, 
        word: "おつかい", 
        kanji: "お使い", 
        kana: "おつかい", 
        pos: "名词",
        meaning: "跑腿，去买东西（多指派小孩或下属去）",
        example_jp: "母に頼まれて、近くのスーパーまでお使いに行った。",
        example_cn: "受母亲嘱托，去附近的超市跑了趟腿。"
    },
    { 
        id: 752, 
        word: "ひょっとして", 
        kanji: "ひょっとして", 
        kana: "ひょっとして", 
        pos: "副词",
        meaning: "（后接推测）难道说，莫非，万一",
        example_jp: "ひょっとして、私の言ったことで怒っているの？",
        example_cn: "难道说，你因为我说的话生气了吗？"
    },
    { 
        id: 753, 
        word: "がくがく", 
        kanji: "がくがく", 
        kana: "がくがく", 
        pos: "副词 / 自动词・サ变",
        meaning: "（因恐惧、疲劳引起关节）发抖，打哆嗦；（连接处）松动",
        example_jp: "高いところに立つと、恐怖で膝ががくがくした。",
        example_cn: "站在高处，吓得膝盖直打哆嗦（腿发软）。"
    },
    { 
        id: 754, 
        word: "なよなよ", 
        kanji: "なよなよ", 
        kana: "なよなよ", 
        pos: "副词 / 自动词・サ变",
        meaning: "软弱无力，纤弱，（态度）缺乏阳刚之气",
        example_jp: "彼はなよなよしていて、頼りない印象を受ける。",
        example_cn: "他总是软弱无力的样子，给人一种靠不住的印象。"
    },
    { 
        id: 755, 
        word: "つけつけ", 
        kanji: "つけつけ", 
        kana: "つけつけ", 
        pos: "副词",
        meaning: "（说话态度）带刺地，毫不客气地，生硬顶撞",
        example_jp: "親の心配に対して、反抗期の息子はつけつけと言い返した。",
        example_cn: "面对父母的担心，处于叛逆期的儿子毫不客气地顶撞了回去。"
    },
    { 
        id: 756, 
        word: "ちりちり", 
        kanji: "ちりちり", 
        kana: "ちりちり", 
        pos: "副词 / 自动词・サ变",
        meaning: "卷曲状（毛发）；烧焦蜷缩；铃声细碎",
        example_jp: "火に近づきすぎて、髪の毛がちりちりに焦げてしまった。",
        example_cn: "靠火太近，头发都烧焦卷曲了。"
    },
    { 
        id: 757, 
        word: "さざなみ", 
        kanji: "細波 / 小波 / 漣", 
        kana: "さざなみ", 
        pos: "名词",
        meaning: "微波，涟漪；（人心的）微小动摇，小风波",
        example_jp: "静かな湖面に、風がさざ波を立てている。",
        example_cn: "微风在平静的湖面上吹起阵阵涟漪。"
    },
    { 
        id: 758, 
        word: "なるたけ", 
        kanji: "成る丈", 
        kana: "なるたけ", 
        pos: "副词",
        meaning: "（同なるべく的口语）尽量，尽可能",
        example_jp: "健康のために、なるたけ野菜を食べるようにしている。",
        example_cn: "为了健康，我尽量多吃蔬菜。"
    },
    { 
        id: 759, 
        word: "あっさり", 
        kanji: "あっさり", 
        kana: "あっさり", 
        pos: "副词 / 自动词・サ变",
        meaning: "清淡的；轻易地，干脆地",
        example_jp: "長年の悩みが、彼のひとことであっさりと解決した。",
        example_cn: "多年的烦恼，被他的一句话轻易地解决了。"
    },
    { 
        id: 760, 
        word: "ずけずけ", 
        kanji: "ずけずけ", 
        kana: "ずけずけ", 
        pos: "副词",
        meaning: "毫不顾忌地（触碰痛处、直言不讳），唐突",
        example_jp: "他人のプライバシーにずけずけと踏み込むのは失礼だ。",
        example_cn: "毫不顾忌地干涉他人的隐私是很失礼的。"
    },
    { 
        id: 761, 
        word: "うっすら", 
        kanji: "うっすら", 
        kana: "うっすら", 
        pos: "副词",
        meaning: "隐隐约约，微微，薄薄地",
        example_jp: "朝起きると、庭にうっすらと雪が積もっていた。",
        example_cn: "早晨起床时，院子里积了薄薄的一层雪。"
    },
    { 
        id: 762, 
        word: "すりかえる", 
        kanji: "掏り替える / すり替える", 
        kana: "すりかえる", 
        pos: "他动词・一段",
        meaning: "偷偷调换，掉包；偷换（概念），转移（话题）",
        example_jp: "都合が悪くなると、彼はすぐに論点をすり替える。",
        example_cn: "一遇到不利的情况，他马上就会偷换论点（转移话题）。"
    },
    { 
        id: 763, 
        word: "ひそか", 
        kanji: "密か", 
        kana: "ひそか", 
        pos: "ナ形容词",
        meaning: "秘密地，暗中（多作「密かに」）",
        example_jp: "ライバルの失敗を密かに喜んでしまった。",
        example_cn: "暗中为竞争对手的失败感到高兴。"
    },
    { 
        id: 764, 
        word: "どうのこうの", 
        kanji: "どうのこうの", 
        kana: "どうのこうの", 
        pos: "连语",
        meaning: "说这说那，指手画脚（多含不满情绪）",
        example_jp: "他人のやり方にどうのこうの口出しするべきではない。",
        example_cn: "不应该对他人的做法说三道四（指手画脚）。"
    },
    { 
        id: 765, 
        word: "みすぼらしい", 
        kanji: "見窄らしい", 
        kana: "みすぼらしい", 
        pos: "イ形容词",
        meaning: "破旧的，寒酸的，衣衫褴褛的",
        example_jp: "彼は一流企業の社長なのに、なぜかみすぼらしい格好をしている。",
        example_cn: "他明明是一流企业的社长，却不知为何打扮得很寒酸。"
    },
    { 
        id: 766, 
        word: "あたかも", 
        kanji: "恰も / 宛も", 
        kana: "あたかも", 
        pos: "副词",
        meaning: "宛如，简直好像（常与「～かのように」呼应）",
        example_jp: "彼はその事件を、あたかも自分が体験したかのように語った。",
        example_cn: "他讲述那个事件时，简直就像自己亲身体验过一样。"
    },
    { 
        id: 767, 
        word: "つかつか", 
        kanji: "つかつか", 
        kana: "つかつか", 
        pos: "副词",
        meaning: "（不顾气氛、毫不迟疑地）径直走向前",
        example_jp: "怒った客が、店長のところへつかつかと歩み寄った。",
        example_cn: "愤怒的客人毫不迟疑地径直走向了店长。"
    },
    { 
        id: 768, 
        word: "つぶやく", 
        kanji: "呟く", 
        kana: "つぶやく", 
        pos: "自动词・五段",
        meaning: "嘟哝，喃喃自语，小声嘀咕",
        example_jp: "「どうしてこうなるんだ」と、彼は小さく呟いた。",
        example_cn: "他小声嘟哝着：“为什么会变成这样”。"
    },
    { 
        id: 769, 
        word: "ほどよい", 
        kanji: "程好い", 
        kana: "ほどよい", 
        pos: "イ形容词",
        meaning: "恰到好处，适度",
        example_jp: "健康を維持するためには、程好い運動が必要だ。",
        example_cn: "为了维持健康，适度的运动是必要的。"
    },
    { 
        id: 770, 
        word: "おしめり", 
        kanji: "お湿り", 
        kana: "おしめり", 
        pos: "名词",
        meaning: "（久旱后的）及时雨",
        example_jp: "農作物にとって、今日の雨は恵みのお湿りとなった。",
        example_cn: "对农作物来说，今天的雨成了一场恩赐的及时雨。"
    },
    { 
        id: 771, 
        word: "むさくるしい", 
        kanji: "むさ苦しい", 
        kana: "むさくるしい", 
        pos: "イ形容词",
        meaning: "肮脏的，杂乱无章的（使人看了不舒服）",
        example_jp: "男ばかりのむさ苦しい部屋に、彼女を呼ぶわけにはいかない。",
        example_cn: "我怎么能把她叫到这种全是男人、杂乱肮脏的房间里来呢。"
    },
    { 
        id: 772, 
        word: "すさまじい", 
        kanji: "凄まじい", 
        kana: "すさまじい", 
        pos: "イ形容词",
        meaning: "可怕的，惊人的，猛烈的",
        example_jp: "凄まじい勢いで炎が燃え広がり、家を飲み込んだ。",
        example_cn: "火焰以惊人的势头蔓延开来，吞噬了房屋。"
    },
    { 
        id: 773, 
        word: "くぐりぬける", 
        kanji: "潜り抜ける", 
        kana: "くぐりぬける", 
        pos: "他动词・一段",
        meaning: "钻过去，穿过去；挣脱（困境），闯过",
        example_jp: "会社の倒産という危機を、社員一丸となって潜り抜けた。",
        example_cn: "员工们团结一致，闯过了公司破产的危机。"
    },
    { 
        id: 774, 
        word: "いかほど", 
        kanji: "如何ほど", 
        kana: "いかほど", 
        pos: "副词 / 名词",
        meaning: "（书面/客套语）多少（同どのくらい）",
        example_jp: "ご心痛は如何ほどかと、お察しいたします。",
        example_cn: "我能体谅您内心有多么的悲痛（心痛有多少）。"
    }，
];

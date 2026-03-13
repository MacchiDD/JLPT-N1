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
];
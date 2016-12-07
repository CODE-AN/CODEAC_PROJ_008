// Movepage.js
function moveto_top(){
		$('.loading_screen').css('opacity','1');
		$('.windows8').css('opacity','1');
		$('.loading_screen').textillate({loop: true,minDisplayTime: 700,in:{effect:'fadeInLeftBig'},out: {effect:'fadeOutRight'}});
		$('body').css('overflow-y','hidden');
		setTimeout(function(){$('.panel-main').css('text-align','center');},4999);
		setTimeout(function(){$('.panel-main').css('padding-left','0px');},4999);
		setTimeout(function(){$('.panel-main').css('padding-bottom','24%');},4999);
		//setTimeout(function(){$('.panel-main').css('text-align','center');},4999);
		setTimeout(function(){
			$('.page_top').html("<h1>コードで、あなたの未来を描く。</h1>");
			$('.panel-main').html("<h2>デジタルを学ぶ。デジタルで学ぶ。</h2><h2>インターネットが大好きなあなたのための、通信制高校です。</h2><br>学校法人信学会で新たな仲間と、インターネットを活用し自分のペースで高校卒業をめざします。<br><br>これからの社会で活躍するために、プログラミングの基礎も学びます。<br><br>自分の好きを活かして、「こんなアプリがあったらな」「こんなゲームが作れたら」と、<br>自らのアイディアを形にする。新しいタイプの学校です。<br><br>今はまったくプログラミングができなくても大丈夫。<br>気のあう仲間と「進学に向け勉強してみたい」「インターネットやコンピュターを学んでみたい」<br>新入生・転入生のみなさん、コードアカデミー高校であなたの未来を描いてみませんか。<br><br><a class='twitter-timeline' data-lang='ja' data-width='700' data-height='520' data-theme='dark' href='https://twitter.com/jp_code'>Tweets by jp_code</a> <script async src='http://platform.twitter.com/widgets.js' charset='utf-8'></script><br><br><br><br>Create by「15BF2005／ayumu nakamura」2016 Preview build.");
		},5000);
		setTimeout(function(){$('body').css('background-image','url(img/top_01.jpg)');},5002);
		setTimeout(function(){$('.loading_screen').css('opacity','0');},5003);
		setTimeout(function(){$('.windows8').css('opacity','0');},5003);
		setTimeout(function(){$('body').css('overflow-y','visible');},5200);
}

function moveto_guide(){
		$('.loading_screen').css('opacity','1');
		$('.windows8').css('opacity','1');
		$('.loading_screen').textillate({loop: true,minDisplayTime: 700,in:{effect:'fadeInLeftBig'},out: {effect:'fadeOutRight'}});
		$('body').css('overflow-y','hidden');
		setTimeout(function(){$('.panel-main').css('text-align','left');},4999);
		setTimeout(function(){$('.panel-main').css('padding-left','15%');},4999);
		setTimeout(function(){$('.panel-main').css('padding-bottom','20%');},4999);
		setTimeout(function(){
			$('.page_top').html("<h1>未来を変える、もう一つの新しい道。</h1>");
			$('.panel-main').html("<h2>学校の特色</h2><br><br><font color='#0B614B'><h3>新しい仲間と学ぶ、もうひとつの道。</h3></font><br>デジタルが好きな仲間と、コ−ド（プログラム）の基礎を学ぶことで、新たな未来を切り拓いていきます。<br>当校では、コード（プログラミング）学習を必修とし、基礎を学び、自分のプロジェクトを持って、<br>アプリやWEBサービス、ゲーム等自らのアイディアを形にすることができる人を育てていきます。さらに進学に向けて挑戦してみたい人を応援します。<br>ネットやパソコン、アプリやゲームに興味のあり、新しい仲間とチャレンジをしてみたい、みなさんのための学校です。<br><iframe width='560' height='315' src='https://www.youtube.com/embed/jrnQMsJ667g' frameborder='0' allowfullscreen></iframe><br><font color='#088A68'><h2>特色１.「パソコンやネット好きな仲間と出会える！」ってホントですか？</h2></font><br><img src='img/guide_02.jpg'/><br>はい、本当です。<br>コード学習を特色とする当校では、インターネットやプログラミング、最新のテックなどに興味がある生徒が集まりますので、共通の話題も多く、<br>一生を通じて付き合える仲間とで出会うことができるでしょう。<br>またプログラミングを通して年齢の異なるメンターとの出会いも、将来の進路選択の大きなきっかけになると思います。<br><br><img src='img/guide_03.jpg'/><br><font color='#088A68'><h2>特色２.「プログラミングを学びながら、高校卒業資格が取れる！」ってホントですか？</h2></font><img src='img/guide_04.jpg'/><br><br>はい、本当です。<br>当校では通信制高校として英語や社会といった普通科目も学習しながら、３年間で普通高校を卒業することができます。<br>他校からの転校生や編入生などは前籍高校の修得単位を生かして、前籍高校と合わせて計３年間で卒業することもできますので、まずはお気軽にお問い合わせください。<br>また本校の特色として全体の講座のうち、約3分の1をプログラミング学習に当てています。しかも高校卒業と専門学校のWスクールではなく、当校は高校の正課として学習できます。<br>プログラミングは初めてという方も、安心して学び始められるカリキュラムですので、インターネットやパソコンが大好き！というみなさんはにはぴったりです。<br><br><img src='img/guide_05.jpg'/><br>また、IT企業などで活躍しているエンジニアのゲスト講義や、IT企業との共同プロジェクトを通した学びが、自分の将来を考えるヒントになることでしょう。<br>コード学習については<a href='#' onclick='moveto_code();'>こちら</a>もご覧ください。<br><font color='#088A68'><h2>特色３.「インターネットが教室だから、自分のペースで学べる！」ってホントですか？</h2></font><br><img src='img/guide_03.jpg'/><br>はい、本当です。<br>通信制高校では自宅での添削課題（レポート）が、学習の基本になります。日常の学習はインターネット上のクラスルームを活用して、自宅にいながら行います。<br>メディア視聴学習や添削課題の作成・提出もインターネットでOK。さらに、ネット上でディスカッションをしたり、生徒間のコミュニケーションをとることもでき、仲間と一緒に学ぶ環境を実現しています。<br><br><img src='img/guide_07.jpg'/><br>様々な理由で、毎日学校に通うことができない生徒でも、ネット環境さえあれば、いつでもどこでも自分のペースで学ぶことができ、3年間で高校を卒業することができます。<br>また、高校時代からインターネットを使いこなし、人とつながりながら学んでいくというスキルは、これからの社会では大きなアドバンテージとなることでしょう。<br><font color='#088A68'><h2>特色４.「大学などへの進学指導も万全！」ってホントですか？</h2></font><br><img src='img/guide_08.jpg'/><br>はい、本当です。<br>当校を卒業した後の進路は、「プログラマーとして就職」「アプリ開発などで起業（自分で会社を作ること）」の他に、「大学や専門学校への進学」も目指すことができます。<br>コードアカデミー高等学校を運営している学校法人信学会は大学受験予備校（駿台提携上田予備学校）も設置しており、<br>文系理系を問わず大学進学の指導ノウハウも万全ですので、進学志望のみなさんもご安心ください。<br>・<a href='https://yobi.shingakukai.or.jp/'>信学会 駿台提携予備学校</a><br><br><img src='img/guide_09.jpg'/><br><br>進学希望の生徒向けに高校授業とは別に、予備校のノウハウが詰まったオリジナルの「受験学習講座」も用意しています。<br><a href='#' onclick='moveto_dream();'>★コードアカデミー高校生の進路体験談はこちら</a><br>また、「中学校学習に不安」がある生徒向けの補習講座もあります。<br><img src='img/guide_10.png'/><br><font color='#088A68'><h2>特色５.「スクーリングは年2回の参加でOK！」ってホントですか？</h2></font><br><img src='img/guide_11.jpg'/><br>はい、本当です。<br>当校では普段の学習は自宅でインターネットで行い、学習の理解を深めるための授業は年2回（夏と冬）合宿型の集中スクーリング形式で行いますので、<br>仕事や不登校など様々な理由で毎日登校することができない方でも、高校を卒業しやすくなっています。<br>また、スクーリングは長野県上田市の本校で行います。自然豊かな信州でのスクーリングは高校生活の良い思い出になることでしょう。<br>　スクーリングの様子は→　<a href='#' onclick='moveto_news();'>こちら</a><br>本校では自由登校日も設けていますので、登校してレポート学習に取り組む生徒もいます。<br><br><img src='img/guide_12.jpg'/><br><br><h1>入学案内</h1><font color='#0B614B'><h2>本校の入学対象者</h2></font><br>本校の教育区域にお住まいの以下の方が対象です。<br>［新入学］・中学校卒業見込みの方／・中学卒業した後、高校に入学していない方<br>［転入学］・現在他の高校に在籍中で、転校してくる方<br>［編入学］・すでに高校を退学している方<br>*本校の教育区域に現在居住または、居住可能な方となります。詳しくは学校までお問い合わせください。<br><font color='#0B614B'><h2>入学試験</h2></font><br>当校の入学選考は書類審査で行います。学科試験はありません。入学時点でのプログラミング技術は問いませんので、初めての方でもご安心ください。<br>詳しくは生徒募集要項をご確認ください。　生徒募集要項の請求はこちらから→ <a href='#' onclick='moveto_contact();'>「お問い合わせ・資料請求」</a><br><font color='#0B614B'><h2>入学時期</h2></font><br>【転入学は随時】受け付け<br>【新入学・編入学】は４月と１０月が受け入れ時期です<br>◆２０１６年１０月入学生の出願期間<br>出願受付　２０１６年８月２５日〜９月　３日<br>出願受付　２０１６年９月１５日〜９月２５日<br>◆２０１７年４月入学生の出願期間<br>出願受付　２０１７年１月１２日〜１月２４日<br>出願受付　２０１７年２月　６日〜２月１７日<br>出願受付　２０１７年３月　１日〜３月１３日<br>出願受付　２０１７年３月２１日〜４月　４日<br><font color='#0B614B'><h2>定員</h2></font><br>定員240人　　各学年80人相当の少人数教育を行っています。<br><font color='#0B614B'><h2>学費</h2></font><br>授業料が1単位あたり10,000円（年間25単位の履修だと250,000円／年）教育充実費が50,000円／年、教材費が履修科目あたり3,000円となっています。入学金100,000円。<br>（例）年間の学費例<br>①　授業料　　  250,000円／年（1単位10,000円✕25単位履修の場合）<br>②　教育充実費　50,000円／年<br>③　教材費　　　30,000円／年（１履修科目3,000円✕10科目履修の場合）<br>計　　　  330,000円／年<br><h3>※当校では自校で教育を行っていますので、高校卒業にあたり、別途サポート校代、スクーリング代や、専門学校へのWスクール代などは必要ありません。</h3><br>詳しくは生徒募集要項でご確認ください。資料請求はこちら→<a href='#' onclick='moveto_contact();'>「資料請求・お問い合せ」</a><br><font color='#0B614B'><h2>学費の補助</h2></font>学費の補助に「高等学校就学支援金制度」というものがあります。ご家庭の高校教育費の負担を軽くしようと作られた国の制度です。<br>国から1履修単位あたり4,812円の学費補助があります。たとえば年間25単位履修した場合（25単位×4812円＝120,300円の補助）が基本例です。<br>また、世帯収入による市町村民税の所得割額によって補助額が1.5倍、または2倍になる場合もあります。国の制度のため、平成26年度分にから所得制限がつくように変更になりました。<br>詳しくは学校までお問い合わせください。<br><font color='#0B614B'><h2>学習環境</h2></font><br>当校ではインターネットでのやり取りを基本としているため、パソコンおよびインターネット回線の用意をお願いしてます。<br>同等なものをお持ちの場合は購入の必要はありません。ご不明な場合はお気軽にお問い合わせください。<br>・パソコン（Apple社製のノート型パソコン推奨）MacBook ／MacBookAir／MacBookPro等<br>・プリンター（A4出力可、スキャナ機能付き）<br><br><font color='#0B614B'><h2>資料請求・個別相談のご案内</h2></font><br><img src='img/guide_13.jpg'/><br>お一人おひとり、状況は様々かと思います。<br>コードアカデミー高等学校の入学に関心がある方（生徒、保護者、先生など）は、まずはお気軽に「個別相談」にお申込みください。<br>学習方法や、転校による習得済み単位、体調、など個々の状況に応じてご説明させていただきます。<br>上田、長野、東京のいずれかの会場にお越しいただくか、電話や、テレビ電話での相談も可能です。<br>資料請求や個別相談は、下の「こちらから」よりご連絡いただくか、お電話（0268-75-7877）で、お気軽にご連絡ください。<br><br><h2>資料請求・個別相談はお気軽に！</h2><br><a href='#' onclick='moveto_contact();'>こちらから</a><br><br><br><br>Create by「15BF2005／ayumu nakamura」2016 Preview build.");
		},5000);
		setTimeout(function(){$('body').css('background-image','url(img/guide_01.jpg)');},5002);
		setTimeout(function(){$('.loading_screen').css('opacity','0');},5003);
		setTimeout(function(){$('.windows8').css('opacity','0');},5003);
		setTimeout(function(){$('body').css('overflow-y','visible');},5200);
}

function moveto_schoolloc(){
		$('.loading_screen').css('opacity','1');
		$('.windows8').css('opacity','1');
		$('.loading_screen').textillate({loop: true,minDisplayTime: 700,in:{effect:'fadeInLeftBig'},out: {effect:'fadeOutRight'}});
		setTimeout(function(){$('.panel-main').css('text-align','left');},4999);
		setTimeout(function(){$('.panel-main').css('padding-left','15%');},4999);
		setTimeout(function(){$('.panel-main').css('padding-bottom','20%');},4999);
		$('body').css('overflow-y','hidden');
		setTimeout(function(){
			$('.page_top').html("<h1>長野県を拠点とする学校法人信学会が運営</h1>");
			$('.panel-main').html("<h1>学園案内・施設</h1><br><br><font color='#0B614B'><h2>当校は長野県を拠点とする学校法人信学会が運営しています</h2></font><br><img src='img/schoolloc_09.jpg'/><br><br>学校法人信学会（事務局：長野市南県町、理事長：市川雅朗）は長野県をベースにした学校法人です。<br>1953年に教育事業を開始し、現在ではグループ全体で教職員約800名、在籍する幼児・生徒・学生数は1万6千名を数え、大学以外の学校法人では日本最大級となっています。<br>関係法人には、駅伝や高校野球でも有名な佐久長聖中学・高等学校もあり、グループ全体で21園の幼稚園及び保育園から3校の予備校まで幅広く教育事業を行っています。<br>コードアカデミー高等学校はこの信学会が運営する学校法人立の学校なので、安心して学ぶことができます。信学会について詳しくは、下のリンクよりご覧ください。<br>・<a href='http://shingakukai.or.jp/wp-content/uploads/sites/101/2014/04/shingakukai2014web-m.pdf'>学校法人信学会　沿革 （PDFファイルが開きます）</a><br>・<a href='https://shingakukai.or.jp/'>学校法人信学会ウェブサイト</a><br>・<a href='http://shingakukai.or.jp/companydata/'>学校法人信学会が運営する施設およびサービス一覧</a><br><font color='#0B614B'><h1>＜施設設備＞</h1></font><font color='#0B614B'><h2>高校校舎</h2></font><br><img src='img/schoolloc_02.jpg'/><br><font color='#0B614B'><h2>高校昇降口</h2></font><br><img src='img/schoolloc_03.jpg'/><br><font color='#0B614B'><h2>高校教室</h2></font><br><img src='img/schoolloc_04.jpg'/><br><font color='#0B614B'><h2>高校スクーリング</h2></font><br><img src='img/schoolloc_05.jpg'/><br><font color='#0B614B'><h2>高校保健室</h2></font><br><img src='img/schoolloc_06.jpg'/><br><font color='#0B614B'><h2>生徒サポート</h2></font><br><img src='img/schoolloc_07.jpg'/><br><font color='#0B614B'><h2>高校カウンセリング室</h2></font><br><img src='img/schoolloc_08.jpg'/><br><font color='#0B614B'><h2>保護者の皆様</h2></font><br><img src='img/schoolloc_09.png'/><br>１９５３年に創立した学校法人信学会が最初に設立した学校は高校入試につまずき、中学浪人をしてしまった子どもたちのための学校でした。<br>１５歳という多感な時期の子どもたちが家にいるような心持ちで、学びに没頭できようにと「ホームスクール」という名をつけました。<br>それから６０余年、様々な理由で学校に通えない子どもたちは全国で約１２万人にものぼります。<br>本当にちょっとしたきっかけで誰もが学校に通えなくなるのが現代です。ではそんな子どもたちには能力がないということは決してありません。<br>いえ逆に既存の学校という枠に窮屈なくらいの才能をもっているかもしれません。<br>たとえ一度つまずいてしまった子どもたちでも、もう一度やり直せる。当校は最新のインターネットを活用し自分のペースで学びながら高校を卒業することができます。<br>また、通信制高校の学びを活かし、これからの時代の必須スキルとしてのプログラミングの基礎を学び、社会でやりがいをもって自立していける。<br>いやそれどころか、当校でプログラミングを学んだ子どもたちが日本をリードしていくのではと考えています。<br>大切なお子さんのこと、それぞれ志望状況は異なるかと思います。お一人おひとり状況をお聞きしながらご相談に応じます。<br>まずはお気軽に下記のリンクよりお問い合わせください。<br><br>・高校案内＞<a href='#' onclick='moveto_guide();'>学校の特色</a><br>・ご質問等はこちらからどうぞ＞<a href='#' onclick='moveto_contact();'>お問い合わせ</a><br><br><font color='#0B614B'><h1>学校法人 進学会</h1></font><br>〒380-0836 長野県長野市南県町1003<br>TEL 026-228-5588<br><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3201.05980371737!2d138.18015300472348!3d36.64901188775486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601d86e8fe572cb1%3A0x61b78fbebe3656d0!2z44CSMzgxLTAwMDAg6ZW36YeO55yM6ZW36YeO5biC5Y2X6ZW36YeO5Y2X55yM55S677yR77yQ77yQ77yT!5e0!3m2!1sja!2sjp!4v1481106474266' width='600' height='450' frameborder='0' style='border:0' allowfullscreen></iframe><br><font color='#0B614B'><h1>コードアカデミー高等学校 本校</h1></font><br>〒386-0012 長野県上田市中央1-2-21<br>TEL 0268-75-7877<br><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3211.4739309535385!2d138.24869339994382!3d36.39772729819135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601dbcd992fd7bcf%3A0xd89f063436285f1e!2z44CSMzg2LTAwMTIg6ZW36YeO55yM5LiK55Sw5biC5Lit5aSu77yR5LiB55uu77yS4oiS77yS77yR!5e0!3m2!1sja!2sjp!4v1481106776474' width='600' height='450' frameborder='0' style='border:0' allowfullscreen></iframe><br><br><br><br>Create by「15BF2005／ayumu nakamura」2016 Preview build.");
		},5000);
		setTimeout(function(){$('body').css('background-image','url(img/schoolloc_01.jpg)');},5002);
		setTimeout(function(){$('.loading_screen').css('opacity','0');},5003);
		setTimeout(function(){$('.windows8').css('opacity','0');},5003);
		setTimeout(function(){$('body').css('overflow-y','visible');},5200);
}

function moveto_parent(){
		$('.loading_screen').css('opacity','1');
		$('.windows8').css('opacity','1');
		$('.loading_screen').textillate({loop: true,minDisplayTime: 700,in:{effect:'fadeInLeftBig'},out: {effect:'fadeOutRight'}});
		setTimeout(function(){$('.panel-main').css('text-align','left');},4999);
		setTimeout(function(){$('.panel-main').css('padding-left','15%');},4999);
		setTimeout(function(){$('.panel-main').css('padding-bottom','20%');},4999);
		$('body').css('overflow-y','hidden');
		setTimeout(function(){
			$('.page_top').html("<h1>友と学ぶ自立への道</h1>");
			$('.panel-main').html("<font color='#0B614B'><h1>保護者のみなさま</h1></font><br>通信制高校に通う生徒は年々増え、現在、全国で18万人を超えています。様々な特性をもった生徒たちが、自分にあったペースで学び、<br>自分の「好き」を活かして将来の自立につなげていく場がここにあります。<br>【自分のペースで学びたい】<br>【進学にむけて挑戦してみたい】<br>【好きなコンピュータを活かして将来につなげていきたい】<br>そんな子どもたちが集う学校です<br><font color='#0B614B'><h2>読み書きそろばん から  読み書きそろばん「プログラミング」へ</h2><br></font><br>コードアカデミー高等学校は、「デジタルで学ぶ」「デジタルを学ぶ」をコンセプトに、これからの時代を活躍するためのスキルとしてプログラミングの基礎を学びます。<br>普段触れているスマートフォンアプリやインターネットといったものへの理解を深めるとともに、実務としても教養としてもプログラミング（コード）的思考を理解することにより、<br>柔軟かつ幅広い思考力が身についた実生活での諸問題の解決力を持つ人間を育みます。<br><img src='img/parent_02.png'/><br><br><i>＜これからの時代に必要とされる基礎教養＞</i><br><font color='#0B614B'><h2>プログラミング学習で、これからの時代にますます必須とされる”論理的思考”を鍛える<br>〜なぜ、プログラミングなのか〜</h2></font><br>なぜ、今プログラミングを学ぶのでしょうか。総務省は『プログラミング人材育成のあり方に関する調査研究報告書』(2015年6月)で、<br>プログラミングに関する教育がもたらす効果として次のリストに挙げられているメリットを紹介しています。<br>すなわち、プログラミング（コード）が書けるというのは、プログラミング学習におけるメリットの一部に過ぎず、創造力や課題解決力、論理的思考力の向上など、<br>プログラミング学習が学習者に及ぼす応用的スキルは多岐にわたります。<br>このような意味でも、中等高等教育といった基礎知識を習得する時期においてプログラミングを学ぶことは、子どもたちの将来に外せないものになっています。<br><font color='#0B614B'><a href='http://www.soumu.go.jp/main_content/000361429.pdf'>プログラミングに関する教育の効果（総務省研究報告書）</a></font><br><img src='img/parent_03.jpg'/><br>・創造力の向上<br>・課題解決力の向上<br>・表現力の向上<br>・論理的思考力の向上<br>・意欲(内発的動機づけ効果)の向上<br>・コーディング・プログラミングスキルの向上<br>・コンピュータの原理<br>「学説または有識者の意見」より抜粋<br>日本を含む各国でプログラミングの必修化が実施・検討されているなど、教育効果の重要性がますます認知されつつあるプログラミング学習。<br><br><b>でも、親がわからないプログラミングを子供に学ばせるのはちょっと・・・<br>周りに学んでいる人がいないために自室に引きこもってパソコンばかりやっている・・・</b><br><font color='#0B614B'><h2>コードアカデミー高等学校は、読み書きそろばんプログラミングの学習を重視したうえで、<br>通信制高校ならではのサポートを追求している学校です。</h2></font><br>コードアカデミー高等学校が重視しているポイント<br><br>① <b>基礎教養×専門的な知識／技術</b><br>コードアカデミー高等学校では普通科の高校として幅広く基礎教養としての知識を学ぶ一方で、好きなコンピュータについて深い知識や技術への学びを深めていくことをサポートします。<br><img src='img/parent_04.jpg'/><br><br>②<b>通信制高校ならではの社会とのつながり<br><h3>よくあるご質問「通信制高校だと人と関わらない生活になるのでは？」</h3></b><br>保護者の方から寄せられるご質問の一つに、通信制高校では家に篭って社会とのつながりをもたなくなるのではないかという相談を受けます。<br>コードアカデミー高校では通信制の特性を活かし、IT系企業の特別講座や企業訪問といった課外活動を行っています。<br>また、時間を決めて各自が好きな勉強に取り組むクラスルームや、週に一度の社会で活躍するエンジニアとの交流タイムなど積極的な交流をはかっています。<br><img src='img/parent_05.jpg'/><br><br><b>③ ICTを活用した双方向コミュニケーション</b><br><br>コードアカデミー高等学校のキャンパスはインターネット上にあります。<br>人と繋がりながらの双方向の学びを高校時代に習得していくことは将来社会で活躍してくための大きなアドバンテージになっていくことでしょう。<br><img src='img/parent_06.jpg'/><br><br><b>④少人数の個別カリキュラム学習</b><br><img src='img/parent_07.png'/><br>＊好きを活かした個別カリキュラムが学習への動機<br>＊気の合う仲間とクラスルームで学習<br>＊一人ひとりの事情に合わせた学習計画モデル<br><br>全日制高校でも、周りの生徒の目を気にしていたり、先生が忙しそうで話しかけづらかったりで、先生と対話の時間をしっかりできている生徒は意外と少ないのではないでしょうか。<br>コードアカデミー高等学校では、学校の教室で黒板に向かって教える、というように一方向の教育ではなく、<br>インターネット上のクラスルームを活用した「コミュニケーション」を重視した運営を行っています。<br>このような徹底した個人カリキュラムを維持していくために、通信制にも関わらず1学年の定員を80名という少人数に抑えています。<img src='img/parent_08.jpg'/><br><br><b>⑤「学割」の使用と「生徒証」</b><br>当校は学校教育法で規定される高等学校ですので、全日制高校と同じく「学割」を使用することができます。スクーリングや遠方への受験の際の移動などに利用できます。<br>また入学後、身分証明として「生徒証」も発行されますのでご安心ください。<br><img src='img/parent_09.jpg'/><br><br><br><br>Create by「15BF2005／ayumu nakamura」2016 Preview build.");
		},5000);
		setTimeout(function(){$('body').css('background-image','url(img/parent_01.jpg)');},5002);
		setTimeout(function(){$('.loading_screen').css('opacity','0');},5003);
		setTimeout(function(){$('.windows8').css('opacity','0');},5003);
		setTimeout(function(){$('body').css('overflow-y','visible');},5200);
}

function moveto_dream(){
		$('.loading_screen').css('opacity','1');
		$('.windows8').css('opacity','1');
		$('.loading_screen').textillate({loop: true,minDisplayTime: 700,in:{effect:'fadeInLeftBig'},out: {effect:'fadeOutRight'}});
		setTimeout(function(){$('.panel-main').css('text-align','left');},4999);
		setTimeout(function(){$('.panel-main').css('padding-left','15%');},4999);
		setTimeout(function(){$('.panel-main').css('padding-bottom','20%');},4999);
		$('body').css('overflow-y','hidden');
		setTimeout(function(){
			$('.page_top').html("<h1>コードアカデミー高等学校で進学対策</h1>");
			$('.panel-main').html("<h1>生徒の進路体験談</h1><br><font color='#0B614B'><h2>★慶應義塾大学　総合政策学部　合格！</h2></font><br><img src='img/dream_02.jpg'/><br><br><font size='2'>【この進路を選んだ理由は？】<br>大学に行こうと真剣に考え始めたのは3年生になってからでした。 それまでは高校を卒業したらプログラマーとして生きていくつもりでしたが、 <br>これまでの経験をいかして大学で学んでいけば、それ以上のことができる可能性があるじゃないかと思い大学に進学することを決めました。<br>そして大学は、行くなら慶應義塾大学のSFC一択でした。慶應義塾大学のSFCに行くか、もし行かないならプログラマーとして仕事をしていこうと思っていました。<br>大学では新しい教育の可能性について研究していきたいと思っています。<br><br>【大学入試にむけての取り組みは？】<br>志望理由書を書くにあたり、まずは自分自身を振り返りました。自分は普通の高校に行った人とは違う生き方をしている、通信制高校で学びながら社会にも出て働いている。<br>自分の経験から不登校を経験した子どもたちでも社会に出て自立していくという道があって、それを実現するにはどうすれば良いのかと考えていたので、それをまとめてみました。<br>これは3年生の初め頃から考えていたことです。 僕だけだったら、そんなことは考えなかったかもしれないですが、<br>学校の友人や、それ以外にも周りに同じような生き方をしている友人と出会い、考えが深まっていきました。<br>実はそういう高校生って、一つのコミュニティに集まる習性があってまずSNSで繋がる。 そしてだんだんそこから、共通の友達が増えていって、同世代や年下の人とはそうやって繋がっていく。<br>やはり志望理由書を書いて、実際に面接試験を受けてみて思ったのは、自分が“本気”で思っていることじゃないと、書いちゃダメじゃないかと思いました。<br>思っていないことを書いても面接で見透かされてしまいます。<br><br><img src='img/dream_03.jpg'/><br><br>【大学に合格して】<br>コードアカデミー高校の先生方には、本当に感謝しています。大学入試にあたり、様々なアドバイスをいただいたこともそうですが、<br>何より普段の高校生活では、自分が好きなことをやることを応援していただいたことです。何事も否定せずに肯定して話を聞いてくれたことがとっても嬉しかった。<br>学校に行く機会は全日制高校と比べて少ないけれど、日々のネットでの交流もあり本当に支えになりました。 他の同級生や後輩もそうですし、何よりコードアカデミー高校がなかったらまだ何もしなかったと思います。<br> 僕は中学校時代に不登校を経験し中学卒業してからも1年間自宅に引きこもっていました。でも今は、過去にあったことは、全て肯定できます。<br>実際に慶應義塾大学の面接試験でも不登校のことやコードアカデミー高等学校での高校生活から学んだことを話しました。<br>その経験から将来取り組みたいことが認められて合格したということが全てだと思います。本当にありがとうございました。<br></font><br><font color='#0B614B'><h2>★立正大学　地球環境科学部　合格！</h2></font><br>コードアカデミー高校へは地元の公立高校から転校してきました。前籍高校では体調の関係で毎日通うことが難しく、コードアカデミー高校ならインターネットを活用しながら<br>自分のペースで学習できると聞き転校してきました。<br>また、コードアカデミー高校を運営する学校法人信学会は大学受験予備校を運営するなど進学指導の定評は知っていたので、将来的に大学への進学を考えていた私にはそれも大きかったかもしれません。<br><br><font size='2'>【この進路を選んだ理由は？】<br>実は私もともと宇宙天気に興味を持っていたんです。「宇宙天気」って何？って感じですよね（笑）。太陽フレアの影響による宇宙天気というものがあることを知ったのは中学３年のころで、コードアカデミー高校に転校してからは<br>宇宙天気のサイトを毎日調べるようになりました。<br>太陽フレアの影響が地球におよび大規模停電とかの災害になることがあることがあるんです。そのための対策や、広い意味では自然災害も含めた大規模災害対策とかに将来取り組んでみたいと思ったからです。<br>そこで担任の先生に相談してこの進路を決めました。進路を決めてからはそこに向けてのどのように学習の準備をしていけばいいかなど先生のアドバイスが頼りになりました。本当にありがとうございました。<br><br>【後輩へのアドバイスは？】<br>　もちろん高校から出る課題レポートなどの勉強しっかりやるのも大事だけど、高校生活を通して自分で使える特技を一つもつことが大事だと思う。そうすれば大学の推薦入試や就職でも活かせて有利になるし。<br>だから高校在学中にこれは絶対やるぞというものを一つ決めると良いと思う。私は全日制の高校からコードアカデミー高等学校に転校してきて、通信制高校だからこそ全日制高校ではできないことを絶対やろうと決めました。<br>私の場合は宇宙天気に興味があったので、大学で行われる関連する講演会や学会にもたくさん参加したし、高校生ながら学会で発表もしました。その時の緊張と比べたら大学入試の方が緊張しなかったくらい（笑）。<br>今になって思えば私は通信制高校向きだったかもと思います。「好きなこと」をとことんできるこれがコードアカデミー高校の本当に良いところなので。<br></font><h1>駿台提携 信学会予備校 - コードアカデミー専用コース - 開設</h1><br><font color='#0B614B'><h2>進学を希望するコードアカデミー高校生には、駿台提携予備校 「信学会」 がサポート。</h2></font><br><b>通信制高校に通って大学進学は可能なのだろうか？</b>そんな悩みを抱える保護者の方も多数いらっしゃいます。コードアカデミー高等学校では、<br>生徒の希望を尊重し多様な進路への送り出し用意をしています。<br>得意のプログラミングを活かした、就職や起業の他に、進学指導体制も万全です。<br>その中でも大学を進学する生徒に関しては、長野県にて最大の進学実績を誇る学校法人信学会とコラボした、コードアカデミー生専用の進学対策を用意しております。<br>現在は一口に大学入試と言っても、<br>プログラミング能力を生かしたAO入試、推薦入試、センター利用入試など多様な選択肢が取り揃えられており、一人で情報収集をするのは至難の技となっているのが現状です。<br>コードアカデミー生の特徴を生かした上で、これまでの受験科目のみに捉われない、より多角的な視点から、一人一人にあった進路相談、学習指導を行っていきます。<br><br>詳細は<a href='#' onclick='moveto_contact();'>お問い合わせ</a>まで！<br><br><font color='#0B614B'><h2>駿台提携　信学会予備学校の合格実績</h2></font><img src='img/dream_04.png'/><br>・東京大学 　9名<br>・京都大学 　7名<br>・難関国立大 　68名<br>・医学部医学科　 33名<br>・国公立大 　509名<br>・早慶上理 　123名<br>・MARCH 　410名<br><br>（2016年度実績）<br><br>信学会予備学校の詳細は<a href='http://yobi.shingakukai.or.jp/'>＜こちら＞</a><br><br><font color='#0B614B'><h2>コードアカデミー専用コース特典</h2></font><br>・信学会駿台提携予備校一年間プランの入学金免除<br>・各種講習 割引特典<br>など<br><br>詳しくは<a href='#' onclick='moveto_contact();'>お問い合わせ</a>ください<br><br><font color='#0B614B'><h2>大学進学用のオンライン特別講座『ソーシャル予備校」</h2></font><br>インターネットを利用して、オンラインで大学進学用の学習に取り組みたい生徒には、高校の授業とは別に大学進学用のオンライン講座も用意しています。<br><img src='img/guide_10.png'/><br><br><font color='#0B614B'><h2>自分の苦手科目の補強をしたい『オンライン個別塾PASS』</h2></font><br>進学に向けて、特定の教科だけフォローして欲しい生徒には、高校の授業とは別に、オンライン個別塾PASSにもコードアカデミー高校生専用コースを用意しています。<br><img src='img/schoolloc_07.jpg'/><br><font color='#0B614B'><h2>中学校の学習に不安がある生徒には『中学校の補習講座』</h2></font><br>なかには中学時代の不登校経験から中学校の学習に不安を持っている生徒もいます。たしかに中学校の学習は高校学習の基礎となります。<br>そこで、希望する生徒には、中学校の学習を振り返る補習講座も用意しています。<br><img src='img/parent_08.jpg'/><br><br>そんなコードアカデミー高校に関心のある方のお問い合わせは→　<a href='#' onclick='moveto_contact();'>こちらからお気軽に</a><br><br><br><br>Create by「15BF2005／ayumu nakamura」2016 Preview build.");
		},5000);
		setTimeout(function(){$('body').css('background-image','url(img/dream_01.png)');},5002);
		setTimeout(function(){$('.loading_screen').css('opacity','0');},5003);
		setTimeout(function(){$('.windows8').css('opacity','0');},5003);
		setTimeout(function(){$('body').css('overflow-y','visible');},5200);
}

function moveto_code(){
		$('.loading_screen').css('opacity','1');
		$('.windows8').css('opacity','1');
		$('.loading_screen').textillate({loop: true,minDisplayTime: 700,in:{effect:'fadeInLeftBig'},out: {effect:'fadeOutRight'}});
		setTimeout(function(){$('.panel-main').css('text-align','left');},4999);
		setTimeout(function(){$('.panel-main').css('padding-left','15%');},4999);
		setTimeout(function(){$('.panel-main').css('padding-bottom','20%');},4999);
		$('body').css('overflow-y','hidden');
		setTimeout(function(){
			$('.page_top').html("<h1>日本でここだけの、カリキュラム。</h1>");
			$('.panel-main').html("<h1>コード教育</h1><br><br><h2>「プログラミング」ができることで、未来が広がる</h2>普段みなさんが使っているスマートフォンやパソコンが「どうして動くのか」を考えたことはありますか？<br>実はスマートフォンやパソコンだけがわかる「言語」で、すべての動作が書かれており、その言語は「コード」や「プログラム」と呼ばれています。<br>プログラマーとは、ちょうど通訳のような存在です。<br>人間の思いをコンピュータが理解できるよう翻訳する。<br>コードを書くとは、思いをコンピュータへ伝える作業に他なりません。<br><br>みなさん、少し将来について想像してみましょう。<br>将来どんな自分になりたいですか？<br>そしてその未来の自分は、コンピュータとどんな関係にあるでしょうか。<br><br>プログラミングを学んだ人が最も想像しやすい将来の姿は、ゲームやアプリやシステムを動かす「プログラマー」や「システムエンジニア」と呼ばれる職業に就くことでしょう。<br>テクノロジーの進化に伴って、年々プログラミングができる人は社会から必要とされています。<br>しかし、プログラミングを学習する意義は、プログラマーになるためだけではありません。<br>現在ほとんどのビジネスは、ウェブやモバイルと密接な関係があります。<br><br>プログラミングの知識と実装能力は、これからの必須スキルとして産業界から必要とされています。<br><br>プログラミングの知識と実装能力は、これからの必須スキルとして産業界から必要とされています。<br><br>コードを学び、自分のアイデアを形にする。そんな新しいタイプの学校です。<br><br><br>なぜプログラミングなのか？（Interview Video）<br><iframe width='560' height='315' src='https://www.youtube.com/embed/HAnBF1ivOco' frameborder='0' allowfullscreen></iframe><br><br>なぜプログラミングなのか？　業界の識者にインタビューしたビデオです。これからコードを学ぶみなさんへのエールです。<br><br>※肖像権の都合によりプレビュー版では名前のみ記載<br><br>・慶応義塾大学　環境情報学部教授　村井純氏<br>・グリー株式会社　代表取締役　田中良和氏<br>・ツイッター 共同創設者　スクエア代表取締役ジャック　ドーシー氏<br>・ジャストシステム（日本語ワープロソフト一太郎）共同創業者　METAMOJI専務　浮川初子氏<br>・クリエイター　灘高校生　TEHU氏<br>・株式会社ZAIM（家計簿アプリZAIM）代表取締役　閑歳孝子氏<br><br><br><font color='#0B614B'><h2>カリキュラムについて</h2></font><br><b>初心者でも安心して学び始められる</b><br>コードアカデミー高等学校では、学習をはじめるときのレベルを問いません。<br>ですので、まったくプログラミング経験のない方でも大丈夫です。ゼロからプログラマーとして必要な知識・技術を習得していけるようなカリキュラムとなっています。<br>また、プログラミング経験者も決して飽きることのないような内容です。第一線でエンジニアとして活躍しているメンターとの週に一度のメンターアワーや、<br>「マイプロジェクト」などの活動を通じて、もう一歩上の技術を備えたプログラマーになるためのサポートをしていきます。<br><br><h2>4つの学び方 - 「マイプロジェクト」でやりたいことを実現する</h2><br><img src='img/code_02.png'/><br>コード科目では4つの学び方を用意しています。<br><br>まず、プログラミングの基礎を学ぶ「カリキュラム」。<br>コード初心者にもやさしく学び始めることができる教材を独自に作成しました。<br><br>「インテンシブ」と呼ばれる専門的な集中講義では、興味のある分野の必要な知識を身に付けていきます。<br>インテンシブには、Amazon Web Serviceを活用したサーバー設計、セキュリティ設計、インターフェイスデザインなど、コードを書く上で必要となる周辺知識や言語が用意されています。<br>教員やメンターと相談しながら、目標に向けてどんな技術が必要か、相談しながら学習を進めます。<br><br>「マイプロジェクト」はカリキュラムにて学習した言語を用いて興味があるテーマを設定し、アプリなどの作品を制作します。<br>作成のためのテーマや目標は、1人1人の興味に合わせて教員とメンターとともに作り上げます。<br><br>「部活」は、一緒に学ぶ仲間と共通のテーマについて考えたり、簡単なアジャイル開発を経験する場です。自分の興味のあるアプリ開発やゲームデザイン、<br>企業との共同プロジェクトでの開発を経験しながら、「いっしょにコードを書く」体験を通じて学習を進めます。<br><br><font color='#0B614B'><h3>◆ご質問・お問い合せは→　<a href='#' onclick='moveto_contact();'>こちらまで</a></h3></font><br><br><br><br>Create by「15BF2005／ayumu nakamura」2016 Preview build.");
		},5000);
		setTimeout(function(){$('body').css('background-image','url(img/code_01.png)');},5002);
		setTimeout(function(){$('.loading_screen').css('opacity','0');},5003);
		setTimeout(function(){$('.windows8').css('opacity','0');},5003);
		setTimeout(function(){$('body').css('overflow-y','visible');},5200);
}

function moveto_study(){
		$('.loading_screen').css('opacity','1');
		$('.windows8').css('opacity','1');
		$('.loading_screen').textillate({loop: true,minDisplayTime: 700,in:{effect:'fadeInLeftBig'},out: {effect:'fadeOutRight'}});
		setTimeout(function(){$('.panel-main').css('text-align','left');},4999);
		setTimeout(function(){$('.panel-main').css('padding-left','15%');},4999);
		setTimeout(function(){$('.panel-main').css('padding-bottom','20%');},4999);
		$('body').css('overflow-y','hidden');
		setTimeout(function(){
			$('.page_top').html("<h1>通信制高校での学習とは？</h1>");
			$('.panel-main').html("<h1>通信制高校とは</h1><br><br>コードアカデミー高等学校は単位制の通信制高校です。当校での学習は、次の図のようなイメージで行います。<br><img src='img/study_02.png'/><br><br><font color='#0B614B'><h2>1. 普段は自宅で添削課題に取り組みます。</h2></font><br>教材は教科書・添削課題のセットです。<br>この学校から提示された添削課題を提出したり、添削が返ってきたりとやりとりを行うことで、学習を進めます。<br><br><font color='#0B614B'><h2>2. 学習の理解を補完するための面接指導（対面授業、スクーリング）があります。</font></h2><br>科目ごとに添削指導・面接指導の回数は最低基準があり、たとえば国語総合の場合、添削12回と、面接指導4回を行うことになっています。<br>この面接指導、メディア視聴で60％まで代替可能なので、メディアを見て視聴確認できれば、面接指導に出なくてならないのは国語総合の場合は実質2回です。<br>また主要5科目の他に、学校の教育課程に則り、音楽、美術、体育、家庭、情報、総合学習、学校設定科目の履修が必要です。<br>面接指導（スクーリング）は夏1回（7月下旬頃）、冬1回（2月下旬頃）の各4日程度の合宿型の集中スクーリングで実施します。<br>◆スクーリングの様子は→　<a href='#' onclick='moveto_news();'>「こちら」</a><br><br><font color='#0B614B'><h2>インターネットを活用したインタラクティブかつきめ細かい学習環境</h2></font><br>コードアカデミー高等学校では、従来郵送でやりとりをしていた学習を、インターネット上のクラスルームを利用して行います。<br>これにより、これまでの通信制高校の問題であった「一方的な先生とのやりとり」ではなく、インタラクティブ（相互的）な会話や<br>質問への回答などを通じて、自分のペースで学んで行くことができます。<br>各科目の先生は、学校法人信学会のエキスパートの教師が務めますので、個人にあったきめ細かな指導を実現します。<br><br><font color='#0B614B'><h2>添削課題</h2></font>学校から送られてくる「添削課題」を自宅学習するのが学習の基本です。<br>この「添削課題」を提出することが、全日制高校での「授業」にあたります。添削課題を提出し添削指導を受けることが通信制高校での学習の要になります。<br>たとえば「世界史A」は年6回というように、科目ごとに必要提出回数が決められています。<br>時間割にしばられることなく、自分のペースで学習できるのか不安な人や、不登校やちょっとしたきっかけで学校になじめなかった生徒も学びやすいスタイルです。<br><br><font color='#0B614B'><h2>面接指導（=対面授業）</h2></font><br>学習理解を深めるため、年2回の「面接指導（＝対面授業）」があり、これは本校でのスクーリングで行われます。<br>面接指導とは実際に先生と生徒が対面して行う、いわゆる授業です。ここで、自宅学習での疑問などを直接先生に聞いたりして、学習の理解度を深めます。<br>たとえば「日本史A」は年2回など、科目ごとに必要受講回数が決められています。また、スクーリングでは通常授業の他に、様々な体験活動などの特別活動を用意しています。<br><font color='#0B614B'><h2>メディア視聴</h2></font><br>「面接指導」を自宅で「メディア視聴」しながら学習することができます。<br>各科目の解説授業や、理解を深めるのに参考になるビデオを自宅でインターネットで視聴しながら学習することができ、<br>視聴報告を提出することでスクーリングでの「面接指導（＝対面授業）」の代替とすることができます。<br>メールやチャット、SNSを活用した質問もできますので、対面でのコミュニケーションがちょっと苦手という生徒も学びやすいスタイルです。<br><font color='#0B614B'><h2>試験</h2></font><br>「試験」日頃の学習の成果を確認するために、年2回の試験が実施されます。出題される内容は添削課題の総復習です。<br><font color='#0B614B'><h2>個別カリキュラム</h2></font><br>当校は高校卒業に必ず必要な科目と・自由選択科目を組み合わせながら自分で履修科目を決められる個別カリキュラム制です。<br>自分が興味のある科目を選べ、履修した単位を積み重ねていき、74単位以上の修得で卒業となります。<br>年間25単位ずつ習得すると、3年間で75単位になりますので、通常1年次入学ですと最短3年間で卒業できます。<br>また、他の高校を中退や転校し、本校に編入学や転入学してくる生徒の方は前の高校で習得済みの単位を本校でも可能なかぎり認定することができ、残りの単位修得のみで卒業することができます。<br>転入・編入希望のみなさんは前籍校の修得単位などを事前にご相談ください。<br><br><br>コードアカデミー高等学校の特色について詳しくは、下のリンクよりご覧ください。<br>・<a href='#' onclick='moveto_guide();'>高校案内＞学校の特色</a><br>その他お問い合わせは下のリンクよりご覧下さい。<br>・<a href='#' onclick='moveto_contact();'>問い合わせ</a><br><br><br><br>Create by「15BF2005／ayumu nakamura」2016 Preview build.");
		},5000);
		setTimeout(function(){$('body').css('background-image','url(img/study_01.jpg)');},5002);
		setTimeout(function(){$('.loading_screen').css('opacity','0');},5003);
		setTimeout(function(){$('.windows8').css('opacity','0');},5003);
		setTimeout(function(){$('body').css('overflow-y','visible');},5200);
}

function moveto_news(){
		$('.loading_screen').css('opacity','1');
		$('.windows8').css('opacity','1');
		$('.loading_screen').textillate({loop: true,minDisplayTime: 700,in:{effect:'fadeInLeftBig'},out: {effect:'fadeOutRight'}});
		setTimeout(function(){$('.panel-main').css('padding-bottom','35%');},4999);
		$('body').css('overflow-y','hidden');
		setTimeout(function(){
			$('.page_top').html("<h1>コードアカデミーの最新情報をいつでもお届け</h1>");
			$('.panel-main').html("<h1>プレビュー版につき、該当ページに追加されている要素はありません。</h1><br><br><br><br>Create by「15BF2005／ayumu nakamura」2016 Preview build.");
		},5000);
		setTimeout(function(){$('body').css('background-image','url(img/news_01.jpg)');},5002);
		setTimeout(function(){$('.loading_screen').css('opacity','0');},5003);
		setTimeout(function(){$('.windows8').css('opacity','0');},5003);
		setTimeout(function(){$('body').css('overflow-y','visible');},5200);
}
function moveto_donor(){
		$('.loading_screen').css('opacity','1');
		$('.windows8').css('opacity','1');
		$('.loading_screen').textillate({loop: true,minDisplayTime: 700,in:{effect:'fadeInLeftBig'},out: {effect:'fadeOutRight'}});
		setTimeout(function(){$('.panel-main').css('padding-bottom','35%');},4999);
		$('body').css('overflow-y','hidden');
		setTimeout(function(){
			$('.page_top').html("<h1>未来の産業創出へのサポート</h1>");
			$('.panel-main').html("<h1>プレビュー版につき、該当ページに追加されている要素はありません。</h1><br><br><br><br>Create by「15BF2005／ayumu nakamura」2016 Preview build.");
		},5000);
		setTimeout(function(){$('body').css('background-image','url(img/donor_01.jpg)');},5002);
		setTimeout(function(){$('.loading_screen').css('opacity','0');},5003);
		setTimeout(function(){$('.windows8').css('opacity','0');},5003);
		setTimeout(function(){$('body').css('overflow-y','visible');},5200);
}
function moveto_contact(){
		$('.loading_screen').css('opacity','1');
		$('.windows8').css('opacity','1');
		$('.loading_screen').textillate({loop: true,minDisplayTime: 700,in:{effect:'fadeInLeftBig'},out: {effect:'fadeOutRight'}});
		setTimeout(function(){$('.panel-main').css('padding-bottom','35%');},4999);
		$('body').css('overflow-y','hidden');
		setTimeout(function(){
			$('.page_top').html("<h1>まずはお気軽に</h1>");
			$('.panel-main').html("<h1>プレビュー版につき、該当ページに追加されている要素はありません。</h1><br><br><br><br>Create by「15BF2005／ayumu nakamura」2016 Preview build.");
		},5000);
		setTimeout(function(){$('body').css('background-image','url(img/contact_01.jpg)');},5002);
		setTimeout(function(){$('.loading_screen').css('opacity','0');},5003);
		setTimeout(function(){$('.windows8').css('opacity','0');},5003);
		setTimeout(function(){$('body').css('overflow-y','visible');},5200);
}
import { Injectable } from '@angular/core';
import { Store } from '../interfaces/store';
import { StoreCategory } from '../interfaces/store-category';
import { AngularFireFunctions } from '@angular/fire/functions';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  store: Store[] = [
    // コンビニ
    { id: 'seicomart', name: 'セイコーマート', category: 'convenience' },
    { id: 'seven-eleven', name: 'セブン‐イレブン', category: 'convenience' },
    { id: 'dailyyamazaki', name: 'デイリーヤマザキ', category: 'convenience' },
    { id: 'familymart', name: 'ファミリーマート', category: 'convenience' },
    { id: 'popla', name: 'ポプラ', category: 'convenience' },
    { id: 'ministop', name: 'ミニストップ', category: 'convenience' },
    { id: 'lawson', name: 'ローソン', category: 'convenience' },
    {
      id: 'naturallawson',
      name: 'ナチュラルローソン',
      category: 'convenience',
    },
    { id: 'lawson100', name: 'ローソンストア100', category: 'convenience' },
    // 総合スーパー
    { id: 'akafudado', name: '赤札堂', category: 'superMarket' },
    { id: 'abab', name: 'ABAB', category: 'superMarket' },
    { id: 'ok', name: 'OK', category: 'superMarket' },
    { id: 'otani', name: 'スーパーオータニ', category: 'superMarket' },
    { id: 'superalps', name: 'スーパーアルプス', category: 'superMarket' },
    { id: 'okkasan', name: 'スーパーおっ母さん', category: 'superMarket' },
    { id: 'seiyu', name: '西友', category: 'superMarket' },
    { id: 'sekichu', name: 'セキチュー', category: 'superMarket' },
    { id: 'itoyokado', name: 'イトーヨーカドー', category: 'superMarket' },
    { id: 'yorkmart', name: 'ヨークマート', category: 'superMarket' },
    { id: 'sotetsurosen', name: 'そうてつローゼン', category: 'superMarket' },
    { id: 'takeya', name: '多慶屋', category: 'superMarket' },
    { id: 'daikokuya', name: '大黒屋', category: 'superMarket' },
    {
      id: 'es-tajima',
      name: 'エネルギースーパーたじま',
      category: 'superMarket',
    },
    { id: 'giga-pearl', name: 'ギガパール', category: 'superMarket' },
    { id: 'giga-mart', name: 'ギガマート', category: 'superMarket' },
    { id: 'nakamuraya', name: 'ナカムラヤ', category: 'superMarket' },
    { id: 'hallo-mart', name: 'ハローマート', category: 'superMarket' },
    { id: 'bonvisage', name: 'ボンヴィサージュ', category: 'superMarket' },
    { id: 'yaoyoshi', name: 'ヤオヨシ', category: 'superMarket' },
    { id: 'daiyu', name: 'ダイユー', category: 'superMarket' },
    { id: 'tokyustore', name: '東急ストア', category: 'superMarket' },
    { id: 'tobustore', name: '東武ストア', category: 'superMarket' },
    { id: 'torisen_02', name: 'とりせん', category: 'superMarket' },
    { id: 'biga', name: 'ビッグ・エー', category: 'superMarket' },
    { id: 'bigyosan', name: 'ビッグヨーサン', category: 'superMarket' },
    { id: 'mom', name: 'フードマーケットマム', category: 'superMarket' },
    { id: 'beisia', name: 'ベイシア', category: 'superMarket' },
    { id: 'belc', name: 'ベルク', category: 'superMarket' },
    { id: 'maruya', name: 'マルヤ', category: 'superMarket' },
    { id: 'joyfoods', name: 'ジョイフーズ', category: 'superMarket' },
    { id: 'yamaguchi', name: 'ヤマグチ', category: 'superMarket' },
    { id: 'mrmax_1', name: 'MrMax', category: 'superMarket' },
    { id: 'yamaichi', name: 'ヤマイチ', category: 'superMarket' },
    { id: 'yamaya', name: 'やまや', category: 'superMarket' },
    { id: 'yucoop', name: 'ユーコープ', category: 'superMarket' },
    { id: 'life', name: 'ライフ', category: 'superMarket' },
    { id: 'likaman', name: 'リカーマウンテン', category: 'superMarket' },
    { id: 'ysmart', name: 'ワイズマート', category: 'superMarket' },
    { id: 'watahan', name: '綿半', category: 'superMarket' },
    // ドラッグストア
    { id: 'ainztulpe', name: 'アインズ&トルペ', category: 'drugStore' },
    { id: 'ains', name: 'アインズ', category: 'drugStore' },
    { id: 'lipsandhips', name: 'LIPS', category: 'drugStore' },
    { id: 'welcia', name: 'ウエルシア', category: 'drugStore' },
    { id: 'hacdrug', name: 'ハックドラッグ', category: 'drugStore' },
    { id: 'bbon', name: 'B', category: 'drugStore' },
    { id: 'maruedrug', name: 'マルエドラッグ', category: 'drugStore' },
    { id: 'kawachi', name: 'カワチ薬品', category: 'drugStore' },
    { id: 'kimuraya', name: 'キムラヤ', category: 'drugStore' },
    { id: 'kirindo', name: 'キリン堂', category: 'drugStore' },
    { id: 'aoki', name: 'クスリのアオキ', category: 'drugStore' },
    { id: 'create', name: 'クリエイトエス・ディー', category: 'drugStore' },
    { id: 'kokumin', name: 'コクミンドラッグ', category: 'drugStore' },
    { id: 'cocokarafine', name: 'ココカラファイン', category: 'drugStore' },
    {
      id: 'yamadadrug',
      name: 'コスメティクスアンドメディカル',
      category: 'drugStore',
    },
    { id: 'satsudora', name: 'サツドラ', category: 'drugStore' },
    { id: 'sundrug', name: 'サンドラッグ', category: 'drugStore' },
    { id: 'sanyoyakuhin', name: '三洋薬品HBC株式会社', category: 'drugStore' },
    { id: 'sugiyakkyoku', name: 'スギ薬局', category: 'drugStore' },
    { id: 'japan', name: 'ジャパン', category: 'drugStore' },
    { id: 'sekiyakuhin', name: 'セキ薬局', category: 'drugStore' },
    {
      id: 'daikokudrug',
      name: 'ダイコクドラッグ',
      category: 'drugStore',
    },
    { id: 'tsuruhadrug', name: 'ツルハドラッグ', category: 'drugStore' },
    { id: 'fukutaro', name: 'くすりの福太郎', category: 'drugStore' },
    { id: 'tomods', name: 'トモズ', category: 'drugStore' },
    { id: 'drag11', name: 'ドラッグイレブン', category: 'drugStore' },
    { id: 'bigdrug', name: 'ビックドラッグ', category: 'drugStore' },
    { id: 'kozimadrug', name: 'コジマドラッグ', category: 'drugStore' },
    { id: 'seims', name: 'セイムス', category: 'drugStore' },
    { id: 'matsumoto_kiyosi', name: 'マツモトキヨシ', category: 'drugStore' },
    // 飲食
    { id: 'ueshima', name: '上島珈琲店', category: 'meal' },
    { id: 'ebisufoodhall', name: 'EBISU FOOD HALL', category: 'meal' },
    { id: 'origin', name: 'キッチンオリジン', category: 'meal' },
    { id: 'renge', name: 'れんげ食堂 Toshu', category: 'meal' },
    { id: 'keyscafe', name: 'KeysCafe', category: 'meal' },
    { id: 'kyotokatsugyu', name: '京都勝牛', category: 'meal' },
    { id: 'kurazushi', name: 'くら寿司', category: 'meal' },
    { id: 'kfc', name: 'ケンタッキーフライドチキン', category: 'meal' },
    { id: 'gyushige', name: '元氣七輪焼肉 牛繁', category: 'meal' },
    { id: 'gyukaku', name: '牛角', category: 'meal' },
    { id: 'freshness', name: 'フレッシュネスバーガー', category: 'meal' },
    { id: 'kappa', name: 'かっぱ寿司', category: 'meal' },
    { id: 'suteki', name: 'ステーキ宮', category: 'meal' },
    { id: 'onyasai', name: '温野菜', category: 'meal' },
    { id: '31ice_cream', name: 'サーティワンアイスクリーム', category: 'meal' },
    { id: 'yakinikubanri', name: '焼肉万里', category: 'meal' },
    { id: 'saintmarccafe', name: 'サンマルクカフェ', category: 'meal' },
    { id: 'anan', name: '七輪焼肉 安安', category: 'meal' },
    { id: 'gusto', name: 'ガスト', category: 'meal' },
    { id: 'grazie', name: 'グラッチェガーデンズ', category: 'meal' },
    { id: 'syabuyo2', name: 'しゃぶ葉', category: 'meal' },
    { id: 'jonathan', name: 'ジョナサン', category: 'meal' },
    { id: 'bamiyan', name: 'バーミヤン', category: 'meal' },
    { id: 'dennys', name: 'デニーズ', category: 'meal' },
    { id: 'dennysdiner', name: 'DennysDiner', category: 'meal' },
    { id: 'grandiner', name: 'GranDiner', category: 'meal' },
    { id: 'kojimachi', name: '麹町珈琲（麹は旧字体）', category: 'meal' },
    { id: 'shiroyagi', name: '白ヤギ珈琲店', category: 'meal' },
    { id: 'taiyounogrill', name: '太陽のグリル', category: 'meal' },
    { id: 'alohatable', name: 'アロハテーブル', category: 'meal' },
    { id: 'ichikokudou', name: '壱鵠堂', category: 'meal' },
    { id: 'katsuan', name: 'かつ庵', category: 'meal' },
    { id: 'sukiya', name: 'すき家', category: 'meal' },
    { id: 'setoudon', name: '瀬戸うどん', category: 'meal' },
    { id: 'tamonan', name: 'たもん庵', category: 'meal' },
    { id: 'tenkaichi', name: '天下一', category: 'meal' },
    { id: 'denmaru', name: '伝丸', category: 'meal' },
    { id: 'nakau', name: 'なか卯', category: 'meal' },
    { id: 'nabekura', name: '菜べくら', category: 'meal' },
    { id: 'hanayayohei', name: '華屋与兵衛', category: 'meal' },
    { id: 'hamazushi', name: 'はま寿司', category: 'meal' },
    { id: 'bigboy', name: 'BigBoy', category: 'meal' },
    { id: 'morivacoffee', name: 'モリバコーヒー', category: 'meal' },
    { id: 'wasyokuyohei', name: '和食よへい', category: 'meal' },
    { id: 'gindako', name: '築地銀だこ', category: 'meal' },
    { id: 'hanbey', name: '薄利多賣半兵ヱ', category: 'meal' },
    { id: 'hanamaruudon', name: 'はなまるうどん', category: 'meal' },
    { id: '669', name: 'bb.q OLIVE CHICKEN cafe', category: 'meal' },
    { id: 'hidakaya_hiday', name: '日高屋', category: 'meal' },
    { id: 'firstkitchen_01', name: 'ファーストキッチン', category: 'meal' },
    {
      id: 'firstkitchen',
      name: 'ウェンディーズ・ファーストキッチン',
      category: 'meal',
    },
    { id: 'hondanacoffer', name: '本棚珈琲', category: 'meal' },
    { id: 'matsuya', name: '松屋', category: 'meal' },
    { id: 'tonkatsumatsunoya', name: '松のや', category: 'meal' },
    { id: 'yoshinoya', name: '吉野家', category: 'meal' },
    { id: 'texmix', name: 'TEXMEX FACTORY', category: 'meal' },
    { id: 'fridays', name: 'TGI フライデーズ', category: 'meal' },
    { id: 'nikusuta', name: 'にくスタ', category: 'meal' },
    { id: 'ws', name: 'WANGS GARDEN', category: 'meal' },
    // 宅配
    {
      id: 'deliveryskylark',
      name: 'すかいらーくグループの宅配',
      category: 'delivery',
    },
    {
      id: 'strawberrycones',
      name: 'ストロベリーコーンズ',
      category: 'delivery',
    },
    { id: 'napolinokama', name: 'ナポリの窯', category: 'delivery' },
    { id: 'delis', name: 'デリズ', category: 'delivery' },
    { id: 'pizza_pockets', name: 'ピザポケット', category: 'delivery' },
    { id: 'pizzala', name: 'ピザーラ', category: 'delivery' },
    { id: 'kakiyazushi', name: '柿家鮨', category: 'delivery' },
    // 居酒屋
    { id: 'kanteki', name: 'かんてきや', category: 'izakaya' },
    { id: 'fuziyamasakaya', name: 'フジヤマ桜', category: 'izakaya' },
    { id: 'isomaru', name: '磯丸水産', category: 'izakaya' },
    { id: 'ichigorou', name: '餃子製造販売店 いち五郎', category: 'izakaya' },
    { id: 'toriyoshi', name: '手羽先唐揚専門店 鳥良', category: 'izakaya' },
    { id: 'toriyoshisyoten', name: '鳥良商店', category: 'izakaya' },
    { id: 'kinnokura', name: '金の蔵', category: 'izakaya' },
    { id: 'akamaruya', name: 'アカマル屋', category: 'izakaya' },
    { id: 'tohokenbunroku', name: '東方見聞録', category: 'izakaya' },
    { id: 'baribaridori', name: 'バリバリ鶏', category: 'izakaya' },
    { id: 'sumibiizaykayaen', name: '炭火居酒屋 炎', category: 'izakaya' },
    { id: 'hananomai_01', name: 'はなの舞', category: 'izakaya' },
    { id: 'tometeba', name: 'とめ手羽', category: 'izakaya' },
    { id: 'dartsshoptito', name: 'Darts Shop TiTO', category: 'izakaya' },
    { id: 'sushiuogin', name: '魚銀', category: 'izakaya' },
    { id: 'uotami', name: '魚民', category: 'izakaya' },
    { id: 'uoman', name: '北海道 魚萬', category: 'izakaya' },
    { id: 'uoman01', name: '濱焼北海道魚萬', category: 'izakaya' },
    { id: 'uoman02', name: '横濱 魚萬', category: 'izakaya' },
    { id: 'utanosuke', name: '歌之助', category: 'izakaya' },
    { id: 'uchikuru', name: 'うちくる', category: 'izakaya' },
    { id: 'oideyo', name: 'おいで屋', category: 'izakaya' },
    { id: 'kuroda', name: '串かつ黒田めでた家', category: 'izakaya' },
    { id: 'kuromaru', name: 'くろ○', category: 'izakaya' },
    { id: 'shitokuya', name: '白木屋', category: 'izakaya' },
    { id: 'sennen', name: '千年の宴', category: 'izakaya' },
    { id: 'tsukinoutage', name: '月の宴', category: 'izakaya' },
    { id: 'niatori', name: '鶏のGeorge', category: 'izakaya' },
    { id: 'fukufukuya', name: '福福屋', category: 'izakaya' },
    { id: 'takadatori', name: '豊後高田どり酒場', category: 'izakaya' },
    { id: 'mitsuecyan', name: 'みつえちゃん', category: 'izakaya' },
    { id: 'mekiki', name: '目利きの銀次', category: 'izakaya' },
    { id: 'medetaya', name: 'めでた家', category: 'izakaya' },
    { id: 'yamauchi', name: '山内農場', category: 'izakaya' },
    { id: 'warawara', name: '笑笑', category: 'izakaya' },
    { id: 'wai', name: 'バラエティ厨房 輪囲', category: 'izakaya' },
    { id: 'robokichi', name: 'ROBOT KICHI', category: 'izakaya' },
    { id: 'watami02', name: '和民', category: 'izakaya' },
    { id: 'watami01', name: '坐・和民', category: 'izakaya' },
    { id: 'gohan', name: 'GOHAN', category: 'izakaya' },
    { id: 'torimero', name: '三代目鳥メロ', category: 'izakaya' },
    { id: 'maguro', name: 'まぐろ漁業団', category: 'izakaya' },
    { id: 'miraizaka', name: 'ミライザカ', category: 'izakaya' },
    // 家電量販
    { id: 'edon', name: 'エディオン', category: 'appliances' },
    { id: 'ksdenki', name: 'ケーズデンキ', category: 'appliances' },
    { id: 'denkichi', name: 'デンキチ', category: 'appliances' },
    { id: 'nojima', name: 'ノジマ', category: 'appliances' },
    { id: 'biccamera', name: 'ビックカメラ', category: 'appliances' },
    { id: 'kozima', name: 'コジマ', category: 'appliances' },
    { id: 'sofmap', name: 'ソフマップ', category: 'appliances' },
    { id: 'pcdepo', name: 'PC DEPOT', category: 'appliances' },
    { id: 'beishia', name: 'ベイシア電器', category: 'appliances' },
    { id: 'yamada', name: 'ヤマダ電機', category: 'appliances' },
    { id: 'tsukumo', name: 'TSUKUMO', category: 'appliances' },
    { id: 'best', name: 'ベスト電器', category: 'appliances' },
    { id: 'matsuyadenki', name: 'マツヤデンキ', category: 'appliances' },
    { id: 'pasocon', name: 'パソコン工房', category: 'appliances' },
    // 書籍
    { id: 'tsutaya', name: 'TSUTAYA', category: 'book' },
    { id: 'furuhonichiba', name: '古本市場', category: 'book' },
    { id: 'tranoana', name: 'とらのあな', category: 'book' },
    { id: 'haruya', name: '明屋書店', category: 'book' },
    { id: 'book1st', name: 'ブックファースト', category: 'book' },
    { id: 'maruzen', name: 'MARUZEN', category: 'book' },
    { id: 'junkudo', name: 'ジュンク堂', category: 'book' },
    { id: 'rashinban', name: 'らしんばん', category: 'book' },
    { id: 'libro', name: 'LIBRO', category: 'book' },
    { id: 'ayumibooks', name: 'あゆみBOOKS', category: 'book' },
    { id: 'orion', name: 'オリオン書房', category: 'book' },
    { id: 'parcobook', name: 'パルコブックセンター', category: 'book' },
    { id: 'bunkitsu', name: '文喫', category: 'book' },
    { id: 'bunrokudou', name: '文禄堂', category: 'book' },
    { id: 'miomio', name: 'miomio', category: 'book' },
    { id: 'yomuyomu', name: 'よむよむ', category: 'book' },
    { id: 'wandergoo', name: 'ワンダーGOO', category: 'book' },
    // ファッション
    { id: 'babydoll', name: 'ベビードール', category: 'fashion' },
    { id: 'jeans', name: 'ジーンズメイト', category: 'fashion' },
    { id: 'outdoor', name: 'Outdoor', category: 'fashion' },
    { id: 'takaq', name: 'TAKA-Q', category: 'fashion' },
    { id: 'grandback', name: 'GRAND BACK', category: 'fashion' },
    { id: 'diesel', name: 'DIESEL', category: 'fashion' },
    { id: 'haruyama', name: 'はるやま', category: 'fashion' },
    {
      id: 'perfectsuitfactory',
      name: 'Perfect Suit FActory',
      category: 'fashion',
    },
    { id: 'fithouse', name: 'FIT HOUSE', category: 'fashion' },
    { id: 'machouse', name: 'マックハウス', category: 'fashion' },
    { id: 'righton', name: 'ライトオン', category: 'fashion' },
    // 百貨店
    { id: 'odakyu', name: '小田急百貨店', category: 'department' },
    {
      id: 'grandberrypark',
      name: 'グランベリーパーク',
      category: 'department',
    },
    { id: 'takashimaya', name: '高島屋', category: 'department' },
    {
      id: 'dutyfree',
      name: '髙島屋免税店SHILLA&amp;ANA',
      category: 'department',
    },
    { id: 'lacittadella', name: 'LA CITTADELLA', category: 'department' },
    {
      id: 'nihonkukobuilding',
      name: '日本空港ビルディング',
      category: 'department',
    },
    { id: 'iiyo', name: 'イーヨ!!', category: 'department' },
    { id: 'oazo', name: 'oazo', category: 'department' },
    { id: 'shinmarubiru', name: '新丸ビル', category: 'department' },
    { id: 'tokia', name: 'TOKIA', category: 'department' },
    { id: 'nijubashisquare', name: '二重橋スクエア', category: 'department' },
    { id: 'bricksquare', name: 'ブリックスクエア', category: 'department' },
    { id: 'marubiru', name: '丸ビル', category: 'department' },
    { id: 'randmarkplaza', name: 'ランドマークプラザ', category: 'department' },
    // メガネ•コンタクト
    { id: 'aimegane', name: 'アイメガネ', category: 'glasses' },
    { id: 'owndays', name: 'OWNDAYS', category: 'glasses' },
    { id: 'jins', name: 'JINS', category: 'glasses' },
    { id: 'zoff', name: 'Zoff', category: 'glasses' },
    {
      id: 'cyuoucontact',
      name: '中央コンタクト・フラワーコンタクト',
      category: 'glasses',
    },
    { id: 'heartup', name: 'ハートアップ', category: 'glasses' },
    { id: 'parimiki', name: 'パリミキ', category: 'glasses' },
    { id: 'meganesuper', name: 'メガネスーパー', category: 'glasses' },
    { id: 'fujicontact', name: '富士コンタクト', category: 'glasses' },
    { id: 'meganeichiba', name: '眼鏡市場', category: 'glasses' },
    { id: 'alook', name: 'ALOOK', category: 'glasses' },
    { id: 'meganedrug', name: 'メガネドラッグ', category: 'glasses' },
    { id: 'itagakiglasses', name: 'メガネのイタガキ', category: 'glasses' },
    // ショッピング
    { id: 'akachan', name: 'アカチャンホンポ', category: 'shopping' },
    { id: 'animate', name: 'アニメイト', category: 'shopping' },
    { id: 'gamers', name: 'ゲーマーズ', category: 'shopping' },
    { id: 'ikea', name: 'イケア', category: 'shopping' },
    { id: 'ichibashi', name: 'イシバシ楽器', category: 'shopping' },
    { id: 'windsor', name: 'ウインザーラケットショップ', category: 'shopping' },
    { id: 'kameyatsurigu', name: 'かめや釣具', category: 'shopping' },
    { id: 'kitamura', name: 'カメラのキタムラ', category: 'shopping' },
    { id: 'casting', name: 'キャスティング', category: 'shopping' },
    { id: 'geo', name: 'GEO', category: 'shopping' },
    { id: 'geomobile', name: 'GEOmobile', category: 'shopping' },
    { id: '2ndstreet', name: '2ndSTREET', category: 'shopping' },
    { id: 'cyclespot', name: 'サイクルスポット', category: 'shopping' },
    {
      id: 'cycle-spot-le',
      name: 'サイクルスポット&amp;ル・サイク',
      category: 'shopping',
    },
    { id: 'cb-asahi', name: 'サイクルベースあさひ', category: 'shopping' },
    { id: 'shimamura', name: '島村楽器', category: 'shopping' },
    { id: 'dream', name: '手芸センター ドリーム', category: 'shopping' },
    { id: 'stepsports', name: 'SteP SPORTS', category: 'shopping' },
    { id: 'surugaya', name: '駿河屋', category: 'shopping' },
    { id: 'sonystore', name: 'ソニーストア', category: 'shopping' },
    { id: 'daiso', name: 'DAISO', category: 'shopping' },
    { id: 'dulton', name: 'DULTON', category: 'shopping' },
    { id: 'chiyoda', name: 'チヨダ', category: 'shopping' },
    { id: 'shoeplaza', name: 'シュープラザ', category: 'shopping' },
    {
      id: 'tokyoshoesretailingcenter',
      name: '東京靴流通センター',
      category: 'shopping',
    },
    { id: 'point', name: '釣具のポイント', category: 'shopping' },
    { id: 'golftsuruya', name: 'つるやゴルフ', category: 'shopping' },
    { id: 'toysrus', name: 'トイザらス', category: 'shopping' },
    { id: 'tokyuhands', name: '東急ハンズ', category: 'shopping' },
    { id: 'hobbyzone', name: 'ホビーゾーン', category: 'shopping' },
    // レジャー•娯楽
    { id: 'kaikatsuclub', name: '快活CLUB', category: 'entertainment' },
    { id: 'karaokekan', name: 'カラオケ館', category: 'entertainment' },
    { id: 'usland', name: 'Kids US.LAND', category: 'entertainment' },
    {
      id: 'cotedazur',
      name: 'コート・ダ・ジュール',
      category: 'entertainment',
    },
    { id: 'crokkeclub', name: 'コロッケ倶楽部', category: 'entertainment' },
    { id: 'joysound', name: 'JOYSOUND', category: 'entertainment' },
    { id: 'tackleberry', name: 'タックルベリー', category: 'entertainment' },
    { id: 'cinecitta', name: 'CINECITTA', category: 'entertainment' },
    { id: 'bigecho', name: 'BIGECHO', category: 'entertainment' },
    { id: 'yomiuri', name: 'よみうりランド', category: 'entertainment' },
    { id: 'round1', name: 'ラウンドワン', category: 'entertainment' },
    // 交通
    { id: 'enoshima', name: '江ノ島タクシー', category: 'traffic' },
    { id: 'shonanmonorail', name: '湘南モノレール', category: 'traffic' },
    { id: 'nihonchuou', name: '日本中央交通', category: 'traffic' },
    { id: 'royallimousine', name: 'ロイヤルリムジン', category: 'traffic' },
    { id: 'orientaltaxi', name: 'オリエンタルタクシー', category: 'traffic' },
    {
      id: 'japanpremiumtokyo',
      name: 'ジャパンプレミアム 東京シティエスコート',
      category: 'traffic',
    },
    { id: 'ichinisan', name: '一二三交通自動車', category: 'traffic' },
    // 宿泊•旅
    { id: 'his', name: 'H.I.S.', category: 'stay' },
    { id: 'juraku', name: '聚楽', category: 'stay' },
    { id: 'tabix', name: 'タビックスジャパン', category: 'stay' },
    { id: 'toyoko-inn', name: '東横イン', category: 'stay' },
    { id: 'nikkoniigata', name: 'ホテル日航新潟', category: 'stay' },
    { id: 'monterey-akasaka', name: 'ホテルモントレ赤坂', category: 'stay' },
    { id: 'monterey-ginza', name: 'ホテルモントレ銀座', category: 'stay' },
    { id: 'monterey-hanzomon', name: 'ホテルモントレ半蔵門', category: 'stay' },
    { id: 'monterey-yokohama', name: 'ホテルモントレ横浜', category: 'stay' },
    {
      id: 'monterey-lasoeurginza',
      name: 'ホテルモントレ ラ・スールギンザ',
      category: 'stay',
    },
    { id: 'hotelmystays', name: 'ホテルマイステイズ', category: 'stay' },
    {
      id: 'hotelmystayspremiem',
      name: 'ホテルマイステイズプレミア',
      category: 'stay',
    },
    { id: 'elexstay', name: 'フレックスステイイン', category: 'stay' },
    {
      id: 'monthlyresistays',
      name: 'マンスリーレジステイズ',
      category: 'stay',
    },
    {
      id: 'washington-hotel-plaza',
      name: 'ワシントンホテルプラザ',
      category: 'stay',
    },
    { id: 'randbhotel', name: 'R&amp;Bホテル', category: 'stay' },
    // インターネット
    { id: 'ubereats', name: 'Uber Eats', category: 'online' },
    { id: 'demaecan', name: '出前館', category: 'online' },
    { id: 'osakaohsho', name: '大阪王将公式通販', category: 'online' },
    { id: 'cokeon', name: 'Coke ON', category: 'online' },
    { id: 'appbankstore', name: 'AppBank StorageEvent', category: 'online' },
    {
      id: 'soundhouse',
      name: 'サウンドハウスStorageEvent',
      category: 'online',
    },
    { id: 'ezoa', name: 'ZOAStorageEvent', category: 'online' },
    {
      id: 'okusuri02',
      name: '通販できるみんなのお薬StorageEvent',
      category: 'online',
    },
    {
      id: 'naturum',
      name: 'アウトドア&amp;フィッシング ナチュラムStorageEvent',
      category: 'online',
    },
    { id: 'tshop', name: 'T-SHOPStorageEvent', category: 'online' },
    { id: 'paypay_mall', name: 'PayPayモールStorageEvent', category: 'online' },
    {
      id: 'paypay_freemarket',
      name: 'PayPayフリマStorageEvent',
      category: 'online',
    },
    {
      id: 'yahoo_shopping',
      name: 'Yahoo!ショッピングStorageEvent',
      category: 'online',
    },
    { id: 'yahuoku', name: 'ヤフオクStorageEvent', category: 'online' },
    { id: 'lohaco', name: 'LOHACOStorageEvent', category: 'online' },
    {
      id: 'cycleyoshida',
      name: 'CYCLE YOSHIDAStorageEvent',
      category: 'online',
    },
    { id: 'dlsite', name: 'DLsite', category: 'online' },
    { id: 'niconico', name: 'ニコニコポイント', category: 'online' },
    { id: 'winticket', name: 'WINTICKET', category: 'online' },
    { id: 'segacatcher', name: 'SEGA CATCHER ONLINE', category: 'online' },
    { id: 'mobage', name: 'mobage', category: 'online' },
    {
      id: 'torumo',
      name: 'ネットクレーンモール「とるモ」',
      category: 'online',
    },
    { id: 'icatch', name: 'アイキャッチオンライン', category: 'online' },
    { id: 'getlive', name: 'ゲットライブ', category: 'online' },
    { id: 'mobacure', name: 'モバクレ', category: 'online' },
    { id: 'flier', name: 'フライヤー', category: 'online' },
    { id: 'paypaydome02', name: 'PayPayドームツアー', category: 'online' },
    { id: 'yahoo_uranai', name: 'Yahoo!占い', category: 'online' },
    { id: 'yahoo_game', name: 'Yahoo!ゲーム', category: 'online' },
    { id: 'yahoo_news', name: 'Yahoo!ニュース', category: 'online' },
    { id: 'ebooks', name: 'ebookjapan', category: 'online' },
    { id: 'gyaostore', name: 'GYAO!ストア', category: 'online' },
    { id: 'premoa', name: 'PREMOA', category: 'online' },
    { id: 'dospara', name: 'ドスパラ', category: 'online' },
    { id: 'sycom', name: 'BTOパソコンのサイコム', category: 'online' },
    { id: 'drise', name: 'ディーライズ', category: 'online' },
    { id: 'yamadawebcom', name: 'ヤマダウェブコム', category: 'online' },
    { id: 'fabrictokyo', name: 'ˆFABRIC TOKYO', category: 'online' },
    { id: 'oyolife', name: 'OYO LIFE', category: 'online' },
    { id: 'sakuratravel', name: 'さくらトラベル', category: 'online' },
    { id: 'yahoo_travel', name: 'Yahoo!トラベル', category: 'online' },
    { id: 'didi', name: 'DiDi', category: 'online' },
    {
      id: 'ins',
      name: '三井住友海上・保険料スマホ決済サービス',
      category: 'online',
    },
    // 請求書
    { id: 'tepco', name: '東京電力', category: 'invoice' },
    { id: 'kansaidenryoku', name: '関西電力', category: 'invoice' },
    { id: 'chugokudenryoku', name: '中国電力', category: 'invoice' },
    { id: 'kyusyudenryoku', name: '九州電力', category: 'invoice' },
    { id: 'okinawadenryoku', name: '沖縄電力', category: 'invoice' },
    { id: 'hokkaidougas', name: '北海道ガス', category: 'invoice' },
    { id: 'keiyogas', name: '京葉ガス', category: 'invoice' },
    { id: 'tokyogas', name: '東京ガス', category: 'invoice' },
    { id: 'osakagas', name: '大阪ガス', category: 'invoice' },
    { id: 'hiroshimagas', name: '広島ガス', category: 'invoice' },
    { id: 'saitamashisuidou', name: 'さいたま市水道局', category: 'invoice' },
    { id: 'tokyotosuidou', name: '東京都水道局', category: 'invoice' },
    { id: 'sakaishisuidou', name: '堺市上下水道局', category: 'invoice' },
    { id: 'okayamashisuidou', name: '岡山市水道局', category: 'invoice' },
    {
      id: 'kitakyusyushisuidou',
      name: '北九州市上下水道局',
      category: 'invoice',
    },
    { id: 'kumamotoshisuidou', name: '熊本市上下水道局', category: 'invoice' },
    { id: 'egao', name: 'えがお', category: 'invoice' },
    { id: 'qsai', name: 'キューサイ', category: 'invoice' },
    { id: 'kenkoukazoku', name: '健康家族', category: 'invoice' },
    { id: 'sakuranomori', name: 'さくらの森', category: 'invoice' },
    { id: 'chojyunosato', name: '長寿の里', category: 'invoice' },
    { id: 'fancl', name: 'ファンケル', category: 'invoice' },
    { id: 'belluna', name: 'ベルーナ', category: 'invoice' },
    { id: 'yazuya', name: 'やずや', category: 'invoice' },
    { id: 'wakasaseikatsu', name: 'わかさ生活', category: 'invoice' },
    // その他
    { id: 'arthikkoshi', name: 'アート引越センター', category: 'other' },
    { id: 'aichintai', name: 'ai賃貸', category: 'other' },
    { id: 'arisan', name: 'アリさんマークの引越社', category: 'other' },
    { id: 'ash', name: 'アッシュ', category: 'other' },
    { id: 'diamondeyes', name: 'ダイヤモンドアイズ', category: 'other' },
    { id: 'yellowhat', name: 'イエローハット', category: 'other' },
    { id: 'usachan2', name: 'うさちゃんクリーニング', category: 'other' },
    { id: 'empire', name: 'エンパイアー', category: 'other' },
    { id: 'autobacs', name: 'オートバックス', category: 'other' },
    { id: 'nihoncyusyajokaihatsu', name: '日本駐車場開発', category: 'other' },
    { id: 'bikeou', name: 'バイク王', category: 'other' },
    { id: 'fuji', name: 'Fuji', category: 'other' },
    { id: 'headlight', name: 'HEADLIGHT', category: 'other' },
    { id: 'ricoland', name: 'RICOLAND', category: 'other' },
    { id: 'relxle', name: 'りらくる', category: 'other' },
  ];

  categories: StoreCategory[] = [
    { name: 'コンビニ', id: 'convenience' },
    { name: '総合スーパー', id: 'superMarket' },
    { name: 'ドラッグストア', id: 'drugStore' },
    { name: '飲食', id: 'meal' },
    { name: '宅配', id: 'delivery' },
    { name: '居酒屋', id: 'izakaya' },
    { name: '家電量販', id: 'appliances' },
    { name: '書籍', id: 'book' },
    { name: 'ファッション', id: 'fashion' },
    { name: '百貨店', id: 'department' },
    { name: 'メガネ•コンタクト', id: 'glasses' },
    { name: 'ショッピング', id: 'shopping' },
    { name: '娯楽', id: 'entertainment' },
    { name: '交通', id: 'traffic' },
    { name: '宿泊•旅', id: 'stay' },
    { name: 'インターネット', id: 'online' },
    { name: '請求書', id: 'invoice' },
    { name: 'その他', id: 'other' },
  ].map((category) => {
    return {
      title: category.name,
      id: category.id,
      items: this.store.filter((list) => list.category === category.id),
    };
  });

  incrementViewCount(result: any) {
    const callable = this.fns.httpsCallable('incrementStoreViewCount');
    return callable(result).toPromise();
  }

  // buildCategoryList() {}

  constructor(private fns: AngularFireFunctions) {}
}

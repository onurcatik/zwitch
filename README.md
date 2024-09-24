# Proje Kurulumu

# OBS Kurulumu

## Gereksinimler

- **İşletim Sistemi**: Windows, macOS, Linux
- **OBS Studio**: [İndir](https://obsproject.com/)
- **Git** (isteğe bağlı): [İndir](https://git-scm.com/)
- **Python 3.x** (eklentiler veya betikler için gerekebilir): [İndir](https://www.python.org/)

## Kurulum Adımları

### 1. OBS Studio İndirme ve Kurma
1. OBS Studio'yu [resmi web sitesinden](https://obsproject.com/) işletim sisteminize uygun olan sürümü indirip kurun.
2. Kurulum talimatlarını izleyin ve programı başarıyla yükleyin.

### 2. Proje Dosyalarını İndirme

#### Seçenek 1: Git Kullanarak Projeyi Klonlama
1. Terminal veya Komut İstemcisi açın.
2. Aşağıdaki komutu kullanarak projeyi klonlayın:
    ```bash
    git clone https://github.com/kullaniciadi/obs-project.git
    ```
   
#### Seçenek 2: ZIP Dosyası Olarak İndirme
1. Proje sayfasına gidin ve "Code" butonuna tıklayın.
2. "Download ZIP" seçeneği ile dosyaları indirin.
3. ZIP dosyasını açın ve istediğiniz dizine çıkarın.

### 3. OBS'de Sahne ve Kaynaklar Oluşturma
1. OBS Studio'yu açın.
2. Yeni bir sahne oluşturun:
   - Sol alttaki "Sahneler" panelinde "+" işaretine tıklayın ve sahne adı girin.
3. Kaynaklar ekleyin:
   - Sağ alttaki "Kaynaklar" panelinde "+" işaretine tıklayarak ekran paylaşımı, pencere yakalama, video veya ses dosyası gibi kaynaklar ekleyin.

### 4. Proje Betiklerini Yükleme (İsteğe Bağlı)
- Projenizin Python veya diğer betikler içeriyorsa, bu betikleri OBS'de kullanmak için:
   1. **Dosya > Ayarlar > Gelişmiş** yolunu izleyin.
   2. "Betikler" sekmesine giderek gerekli dosyaları yükleyin ve betiklerin çalışmasını sağlayın.

### 5. Yayın ve Kayıt Ayarları
1. **Dosya > Ayarlar** menüsüne gidin.
2. **Yayın** sekmesinden yayın yapacağınız platformu (YouTube, Twitch, vb.) seçin.
3. **Yayın** Platform, program veya Özel yapılıcağı zaman Yayın sekmesinden özeli seçerek URL olarak Sunucu ismi "rtmp://localhost/live" oluşturun, oluşturduğunuz koda göre "Yayın Anahtarı" girilir ve bu sayede kodladığınız yada özel olarak oluşturduğunuz bir yayın yapabilirsiniz.
4. **Kayıt** sekmesinden video kayıt formatını ve kalitesini ayarlayın.

### 6. Test Yayını
1. Sağ alttaki "Başlat" butonuna tıklayarak yayını başlatın veya kaydı başlatmak için "Kayıt Başlat" butonuna tıklayın.
2. Yayınınızı veya kaydınızı test edin.

## Katkıda Bulunma
Projeye katkıda bulunmak için:
1. Projeyi fork'layın.
2. Yeni bir özellik eklemek için yeni bir dal oluşturun.
3. Değişikliklerinizi push edin ve bir pull request açın.

## Destek
Herhangi bir sorunla karşılaşırsanız [OBS Topluluk Forumu](https://obsproject.com/forum/) üzerinden yardım alabilirsiniz.

---

Bu belge, bir OBS projesinin temellerini kurmayı sağlar. Projeye özel ek yapılandırmalar gerekiyorsa, bunları eklemeniz gerekebilir.


# rtmp-server Kurulumu

"http://localhost:8000/api/streams"
"http://localhost:8000/admin/streams"

URL'leri sayesinde kod, yayın ve chat hakkında bilgi sahibi olabilirsiniz

# React Kurulumu

## Create React App ile Başlarken

Bu proje [Create React App](https://github.com/facebook/create-react-app) ile başlatıldı.

## Kullanılabilir Komutlar

Proje dizininde şu komutları çalıştırabilirsiniz:

### `npm start`

Uygulamayı geliştirme modunda çalıştırır.\
Tarayıcınızda görüntülemek için [http://localhost:3000](http://localhost:3000) adresini açın.

Değişiklik yaptığınızda sayfa yeniden yüklenecektir.\
Ayrıca konsolda hataları görebilirsiniz.

### `npm test`

Test çalıştırıcısını etkileşimli izleme modunda başlatır.\
Daha fazla bilgi için [testleri çalıştırma](https://facebook.github.io/create-react-app/docs/running-tests) bölümüne bakın.

### `npm run build`

Uygulamayı `build` klasörüne üretim için derler.\
React'ı üretim modunda düzgün bir şekilde paketler ve en iyi performans için derlemeyi optimize eder.

Derleme küçültülmüş ve dosya adları hash içerecek şekilde optimize edilmiştir.\
Uygulamanız dağıtıma hazır!

Daha fazla bilgi için [dağıtım](https://facebook.github.io/create-react-app/docs/deployment) bölümüne bakın.

### `npm run eject`

**Not: Bu tek yönlü bir işlemdir. Bir kez `eject` yaptığınızda geri dönüş yoktur!**

Eğer derleme aracı ve yapılandırma seçeneklerinden memnun değilseniz, istediğiniz zaman `eject` komutunu çalıştırabilirsiniz. Bu komut, projeden tek bir bağımlılığı kaldıracak ve tüm yapılandırma dosyalarını (webpack, Babel, ESLint vb.) projenizin içine kopyalayacaktır. Böylece bunlar üzerinde tam kontrol sahibi olursunuz. `eject` dışında tüm komutlar çalışmaya devam eder, ancak kopyalanan komut dosyalarına işaret eder, böylece bunları düzenleyebilirsiniz. Bu noktadan sonra kontrol tamamen sizde olur.

`eject` komutunu hiç kullanmak zorunda değilsiniz. Seçilen özellikler küçük ve orta ölçekli dağıtımlar için uygundur ve bu özelliği kullanma zorunluluğu hissetmemelisiniz. Ancak, hazır olduğunuzda özelleştirme yapabilmek için bu aracın var olduğunu anlıyoruz.


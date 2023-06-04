# User CRUD Projesi
Bu proje, kullanıcılarla ilgili temel  ( Read, Update, Delete) 
işlemlerini gerçekleştiren bir web uygulamasıdır. Kullanıcılar, adlarını, e-posta adreslerini ve diğer bilgilerini  güncelleyebilir, görüntüleyebilir ve silebilirler.

![image](https://github.com/carullahtursun/USER_CRUD_APP/assets/62027425/fb614b8a-c281-4453-96b4-6e71789c23fd)


## Özellikler
- kullanıcılar, e-posta adresleri ve şifreleri ile giriş yapabilir.
- kullanıcılar, eklenen kullanıcıları görüntüleyebilir, güncelleyebilir ve silebilirler.
- hata yönetimi ve hata mesajlarının gösterimi için kullanıcı dostu bir arayüz sağlanmıştır.
- Uygulama, kullanıcı verilerini statik userData Josn alır, giriş yaparken orda kontrol sağlanır.

## Kurulum
1. Bu projeyi bilgisayarınıza klonlayın:
  ``` bash
  git clone https://github.com/kullaniciadi/crud-uygulamasi.git
  ```
 
2 Gerekli paketleri yükleyin:
  ``` bash
  npm install
  ```
  
3 Projeyi başlatın:
  ``` bash
  npm run dev
  ```
1. Tarayıcınızda http://127.0.0.1:5173 adresine giderek uygulamayı görüntüleyin.

## Kullanım
- Uygulama başlatıldığında, login sayfası açılır.
- kullanıcı kendi email ve şifresi ile giriş yapabilir.
- kullanıcı güncelleme yapmak için listede bulunan kullanıcı adına tıklaması yeterlıdır.
- kullanıcı güncelleme veya silme işlemleri için kullanıcı listesindeki ilgili düğmeleri tıklayabilir 
- güncelleme veya silme işlemleri tamamlandığında, kullanıcıya bilgilendirme mesajları gösterilir.
## Teknolojiler ve Kütüphaneler
- React: Web uygulaması oluşturmak için JavaScript kütüphanesi
- React Router: Sayfa yönlendirmeleri için kullanılır
- React Hook Form: Form yönetimi için kullanılır
- Redux: Uygulama durumu yönetimi için kullanılır
- Yup: Şema tabanlı doğrulama için kullanılır
- Tailwind CSS: UI tasarımı için kullanılır

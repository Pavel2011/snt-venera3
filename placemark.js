ymaps.ready(init)
function init() {
  let myMap = new ymaps.Map('ah-map', {
    center: [55.781617, 37.68749],
    zoom: 16,
  });

let placemark = new ymaps.Placemark([55.781617, 37.68749], {
  // baloonContentHeader:'ООО Агрохолдинг',
  // balloonContentBody:'ООО \"Агрохолдинг\"'
  balloonContent:`
  <div class='balloon'>
  <div class='ball-name'>ООО \"Агрохолдинг\"</div>
  <div class='ball-phone'>Телефон\:+ 7 (499) 265-5681</div>
  <div class='ball-address'>Адрес\:105082 г. Москва, Центросоюзный переулок,д.21А,стр.30,этаж 3,пом.II,ком.9</div>
  </div>
  `
}, {
  iconLayout:'default#image',
  // iconImageHref:'',
  iconImageSize:[40,30],
  iconImageOffset:[-10,0]
});

myMap.controls.remove('geolocationControl') // удаляем геолокацию
myMap.controls.remove('searchControl') // удаляем поиск
myMap.controls.remove('trafficControl') // удаляем контроль трафика
myMap.controls.remove('typeSelector') // удаляем тип
myMap.controls.remove('fullscreenControl') // удаляем кнопку перехода в полноэкранный режим
// myMap.controls.remove('zoomControl') // удаляем контрол зуммирования
myMap.controls.remove('rulerControl') // удаляем контрол правил
myMap.behaviors.disable(['scrollZoom']) // отключаем скролл карты (опционально)
myMap.geoObjects.add(placemark);
placemark.balloon.open();
}
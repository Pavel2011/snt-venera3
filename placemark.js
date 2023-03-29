ymaps.ready(init)
function init() {
  let myMap = new ymaps.Map('ah-map', {
    center: [55.781617, 37.68749],
    zoom: 16,
  });

let placemark = new ymaps.Placemark([55.725983986082504, 37.638348341308486], {
  // baloonContentHeader:'ООО Агрохолдинг',
  // balloonContentBody:'ООО \"Агрохолдинг\"'
  balloonContent:`
  <div class='balloon'>
  <div class='ball-name'>ООО \"Агрохолдинг\"</div>
  <div class='ball-phone'>Телефон\:+ 7 (495) 761-6691 (основной).</div>
  <div class='ball-phone'>Телефон\:+ 7 (929) 545-2713</div>
  <div class='ball-address'>Адрес\:Дубининская ул., д. 27, с.7.</div>
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

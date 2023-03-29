// =============MAP-2====at Main Page ....start========
ymaps.ready(init)
function init() {
  let myMap2 = new ymaps.Map('ah-map2', {
    center: [55.781094, 37.688081],
    zoom: 16,
  });

let placemark = new ymaps.Placemark([55.725983986082504, 37.638348341308486], {

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

myMap2.controls.remove('geolocationControl') // удаляем геолокацию
myMap2.controls.remove('searchControl') // удаляем поиск
myMap2.controls.remove('trafficControl') // удаляем контроль трафика
myMap2.controls.remove('typeSelector') // удаляем тип
myMap2.controls.remove('fullscreenControl') // удаляем кнопку перехода в полноэкранный режим
// myMap.controls.remove('zoomControl') // удаляем контрол зуммирования
myMap2.controls.remove('rulerControl') // удаляем контрол правил
myMap2.behaviors.disable(['scrollZoom']) // отключаем скролл карты (опционально)
myMap2.geoObjects.add(placemark);
placemark.balloon.open();
}

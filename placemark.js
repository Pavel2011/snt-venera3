ymaps.ready(init)
function init() {
  let myMap = new ymaps.Map('ah-map', {
    center: [55.095874, 36.517316],
    zoom: 16,
  });

let placemark = new ymaps.Placemark([55.095874, 36.517316], {
  // baloonContentHeader:'ООО Агрохолдинг',
  // balloonContentBody:'ООО \"Агрохолдинг\"'
  balloonContent:`
  <div class='balloon'>
  <div class='ball-name'>СНТ \"Венера\"</div>
  <div class='ball-phone'>Телефон\:Председатель Потехо А.И. + 7 910-910-41-11, 
         </div>
  <div class='ball-phone'>Телефон\:Бухгалтер Милакина Ольга  + 7 951-325-73-38</div>
  <div class='ball-address'>Юридический Адрес\:249010, Калужская область, Боровский район, деревня Городня</div>
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

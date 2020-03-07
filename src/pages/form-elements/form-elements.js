import './form-elements.scss';

import '../../components/_form-elements/dropdown/dropdown';
import {maskOptions, IMask} from '../../components/_form-elements/text-field/masked-text-field/mask-options';
import {datepicker, datepickerConfig} from '../../components/_form-elements/date-dropdown/date-dropdown';
import '../../components/_form-elements/expandable-checkbox-list/expandable-checkbox-list';
import '../../components/_form-elements/_buttons/like/like';
import '../../components/_form-elements/range-slider/range-slider';
import { getPaginationConfig } from '../../components/_form-elements/pagination/pagination';


$(document).ready(function() {
	let maskedField = $('.js-masked-text-field').get(0);	
	let maskedObj = IMask(maskedField, maskOptions);

	let leftDatepicker = $('.js-date-dropdown-left').datepicker(datepickerConfig).data('datepicker');
	let rightDatepicker = $('.js-date-dropdown-right').datepicker(datepickerConfig).data('datepicker');

	let demoArr = [];
	for( let i = 0; i < 200; i++ ) {
		demoArr.push(i);
	}
	let paginationConfig = getPaginationConfig(demoArr, 12);
		$('.js-pagination').pagination(paginationConfig);
})





// import 'air-datepicker';
// $(document).ready(function() {
//     function settings (isLeft) {
//     return {
//         language: "ru",
//         minDate: new Date(),
//         range: true,
//         multipleDays: 2,
//         inline: false,
//         prevHtml: "<svg width='17' height='18' viewBox='0 0 17 18' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M16.1755 8.01562V9.98438H3.98801L9.56613 15.6094L8.15988 17.0156L0.144258 9L8.15988 0.984375L9.56613 2.39062L3.98801 8.01562H16.1755Z' fill='#BC9CFF'/></svg>",
//         nextHtml: "<svg width='17' height='18' viewBox='0 0 17 18' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M8.36301 0.984375L16.3786 9L8.36301 17.0156L6.95676 15.6094L12.5349 9.98438H0.347383V8.01562H12.5349L6.95676 2.39062L8.36301 0.984375Z' fill='#BC9CFF'/></svg>",
//         toggleSelected: true,
//         dateFormat: "dd.mm.yyyy",
//         navTitles: {
//             days: 'MM yyyy'
//         },
//         onSelect: function(fd, startDateText, endDateText) {
//             if(isLeft) {
//                 startDateText = datepickerundefinedLeft.selectedDates[0];
//                 endDateText = datepickerundefinedLeft.selectedDates[1];
//             }
//             else {
//                 startDateText = datepickerundefinedRight.selectedDates[0];
//                 endDateText = datepickerundefinedRight.selectedDates[1];
//             }
//             $("#dateDropdownLeft_undefined").val(getValue(startDateText));
//             $("#dateDropdownRight_undefined").val(getValue(endDateText));
//         },
//         onShow: function (dp, animationCompleted) {
//             if (!animationCompleted) {
//                if (dp.$datepicker.find('h3').html()===undefined) { /*ONLY when button don't existis*/
//                   dp.$datepicker.append('<button type="button" class="datepicker__clearLink">Очистить</button>');
//                   dp.$datepicker.append('<h3 href="#" class="datepicker__applyLink">Применить</h3>');
//                   dp.$datepicker.find('h3').click(function(event) {
//                     dp.hide();
//                   });
//                   dp.$datepicker.find('button').click(function(event) {
//                     $("#dateDropdownLeft_undefined").val("");
//                     $("#dateDropdownRight_undefined").val("");
//                     datepickerundefinedLeft.clear();
//                     datepickerundefinedRight.clear();
//                  });
//                }
//             }
//          }
//     }
//     }  
//     function getValue (DateText) {
//         var day = DateText.getDate();
//         var month = DateText.getMonth();
//         var year =  DateText.getFullYear();
//         day = (day < 10) ? ("0" + day) : day ;
//         month = (month < 9) ? ("0" + (month + 1)) : (month + 1);
//         return (day + "." + month + "." + year);
//     };
//     let datepickerundefinedLeft = $('#dateDropdownLeft_undefined').datepicker(settings(true)).data('datepicker');
//     let datepickerundefinedRight = $('#dateDropdownRight_undefined').datepicker(settings(false)).data('datepicker');
// });
// import '../../_components/_formElements/_dateDropdown/_filterDateDropdown/_filterDateDropdown';
// import '../../_components/_formElements/_expandableCheckboxList/_expandableCheckboxList';
// import '../../_components/_formElements/_buttons/_like/_like';
// import '../../_components/_formElements/_buttons/_rate/_buttons_rate';
// import '../../_components/_formElements/_range_slider/_range_slider';
// import '../../_components/_formElements/_pagination/_pagination';
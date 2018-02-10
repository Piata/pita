import {} from '../../constants/dom-enum';
import BodyElement from '../util/piazza-dom';

const elements = {};

function transformDom() {
	for (const [section, tag] of Object.entries(PIAZZA_DOM_ENUM)) {
		const element = BodyElement.find(tag);
	}
}
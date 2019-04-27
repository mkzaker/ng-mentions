import {NthdMentionsBasic} from './basic/mentions-basic';
import {NthdMentionsCustomSearch} from './custom-search/mentions-custom-search';
import {NthdMentionsStringValues} from './string-values/mentions-string-values';
import {NthdMentionsValidation} from './validation/mentions-validation';
import {NthdMentionsCustomTemplate} from './custom-template/mentions-custom-template';

export const DEMO_DIRECTIVES = [
    NthdMentionsBasic,
    NthdMentionsCustomSearch,
    NthdMentionsStringValues,
    NthdMentionsValidation,
    NthdMentionsCustomTemplate,
];

export const DEMO_SNIPPETS = {
    'basic': {
        'code': require('!!raw-loader!./basic/mentions-basic'),
        'markup': require('!!raw-loader!./basic/mentions-basic.html')
    },
    'custom-search': {
        'code': require('!!raw-loader!./custom-search/mentions-custom-search'),
        'markup': require('!!raw-loader!./custom-search/mentions-custom-search.html')
    },
    'string-values': {
        'code': require('!!raw-loader!./string-values/mentions-string-values'),
        'markup': require('!!raw-loader!./string-values/mentions-string-values.html')
    },
    'validation': {
        'code': require('!!raw-loader!./validation/mentions-validation'),
        'markup': require('!!raw-loader!./validation/mentions-validation.html')
    },
    'custom-template': {
        'code': require('!!raw-loader!./custom-template/mentions-custom-template'),
        'markup': require('!!raw-loader!./custom-template/mentions-custom-template.html')
    }
};

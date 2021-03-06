(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ionic/angular'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ionic4-emoji-picker', ['exports', '@angular/core', '@ionic/angular', '@angular/common'], factory) :
    (global = global || self, factory(global['ionic4-emoji-picker'] = {}, global.ng.core, global.angular, global.ng.common));
}(this, (function (exports, core, angular, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: data/emoji.data.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var EMOJIS = [
        {
            emojis: [
                ['😀', 'grinning'],
                ['😃', 'smiley'],
                ['😄', 'smile'],
                ['😁', 'grin'],
                ['😆', 'laughing'],
                ['😅', 'sweat_smile'],
                ['😂', 'joy'],
                ['🤣', 'rofl'],
                ['😊', 'blush'],
                ['😇', 'innocent'],
                ['🙂', 'slightly_smiling_face'],
                ['🙃', 'upside_down_face'],
                ['😉', 'wink'],
                ['😌', 'relieved'],
                ['😍', 'heart_eyes'],
                ['😘', 'kissing_heart'],
                ['😗', 'kissing'],
                ['😙', 'kissing_smiling_eyes'],
                ['😚', 'kissing_closed_eyes'],
                ['😋', 'yum'],
                ['😜', 'stuck_out_tongue_winking_eye'],
                ['😝', 'stuck_out_tongue_closed_eyes'],
                ['😛', 'stuck_out_tongue'],
                ['🤑', 'money_mouth_face'],
                ['🤗', 'hugs'],
                ['🤓', 'nerd_face'],
                ['😎', 'sunglasses'],
                ['🤡', 'clown_face'],
                ['🤠', 'cowboy_hat_face'],
                ['😏', 'smirk'],
                ['😒', 'unamused'],
                ['😞', 'disappointed'],
                ['😔', 'pensive'],
                ['😟', 'worried'],
                ['😕', 'confused'],
                ['🙁', 'slightly_frowning_face'],
                ['☹️', 'frowning_face'],
                ['😣', 'persevere'],
                ['😖', 'confounded'],
                ['😫', 'tired_face'],
                ['😩', 'weary'],
                ['😤', 'triumph'],
                ['😠', 'angry'],
                ['😡', 'rage'],
                ['😶', 'no_mouth'],
                ['😐', 'neutral_face'],
                ['😑', 'expressionless'],
                ['😯', 'hushed'],
                ['😦', 'frowning'],
                ['😧', 'anguished'],
                ['😮', 'open_mouth'],
                ['😲', 'astonished'],
                ['😵', 'dizzy_face'],
                ['😳', 'flushed'],
                ['😱', 'scream'],
                ['😨', 'fearful'],
                ['😰', 'cold_sweat'],
                ['😢', 'cry'],
                ['😥', 'disappointed_relieved'],
                ['🤤', 'drooling_face'],
                ['😭', 'sob'],
                ['😓', 'sweat'],
                ['😪', 'sleepy'],
                ['😴', 'sleeping'],
                ['🙄', 'roll_eyes'],
                ['🤔', 'thinking'],
                ['🤥', 'lying_face'],
                ['😬', 'grimacing'],
                ['🤐', 'zipper_mouth_face'],
                ['🤢', 'nauseated_face'],
                ['🤧', 'sneezing_face'],
                ['😷', 'mask'],
                ['🤒', 'face_with_thermometer'],
                ['🤕', 'face_with_head_bandage'],
                ['😈', 'smiling_imp'],
                ['👿', 'imp'],
                ['👹', 'japanese_ogre'],
                ['👺', 'japanese_goblin'],
                ['💩', 'hankey'],
                ['👻', 'ghost'],
                ['💀', 'skull'],
                ['☠️', 'skull_and_crossbones'],
                ['👽', 'alien'],
                ['👾', 'space_invader'],
                ['🤖', 'robot'],
                ['🎃', 'jack_o_lantern'],
                ['😺', 'smiley_cat'],
                ['😸', 'smile_cat'],
                ['😹', 'joy_cat'],
                ['😻', 'heart_eyes_cat'],
                ['😼', 'smirk_cat'],
                ['😽', 'kissing_cat'],
                ['🙀', 'scream_cat'],
                ['😿', 'crying_cat_face'],
                ['😾', 'pouting_cat'],
                ['👐', 'open_hands'],
                ['🙌', 'raised_hands'],
                ['👏', 'clap'],
                ['🙏', 'pray'],
                ['🤝', 'handshake'],
                ['👍', '+1'],
                ['👎', '-1'],
                ['👊', 'fist_oncoming'],
                ['✊', 'fist_raised'],
                ['🤛', 'fist_left'],
                ['🤜', 'fist_right'],
                ['🤞', 'crossed_fingers'],
                ['✌️', 'v'],
                ['🤘', 'metal'],
                ['👌', 'ok_hand'],
                ['👈', 'point_left'],
                ['👉', 'point_right'],
                ['👆', 'point_up_2'],
                ['👇', 'point_down'],
                ['☝️', 'point_up'],
                ['✋', 'hand'],
                ['🤚', 'raised_back_of_hand'],
                ['🖐', 'raised_hand_with_fingers_splayed'],
                ['🖖', 'vulcan_salute'],
                ['👋', 'wave'],
                ['🤙', 'call_me_hand'],
                ['💪', 'muscle'],
                ['🖕', 'middle_finger'],
                ['✍️', 'writing_hand'],
                ['🤳', 'selfie'],
                ['💅', 'nail_care'],
                ['💍', 'ring'],
                ['💄', 'lipstick'],
                ['💋', 'kiss'],
                ['👄', 'lips'],
                ['👅', 'tongue'],
                ['👂', 'ear'],
                ['👃', 'nose'],
                ['👣', 'footprints'],
                ['👁', 'eye'],
                ['👀', 'eyes'],
                ['🗣', 'speaking_head'],
                ['👤', 'bust_in_silhouette'],
                ['👥', 'busts_in_silhouette'],
                ['👶', 'baby'],
                ['👦', 'boy'],
                ['👧', 'girl'],
                ['👨', 'man'],
                ['👩', 'woman'],
                ['👱‍♀', 'blonde_woman'],
                ['👱', 'blonde_man'],
                ['👴', 'older_man'],
                ['👵', 'older_woman'],
                ['👲', 'man_with_gua_pi_mao'],
                ['👳‍♀', 'woman_with_turban'],
                ['👳', 'man_with_turban'],
                ['👮‍♀', 'policewoman'],
                ['👮', 'policeman'],
                ['👷‍♀', 'construction_worker_woman'],
                ['👷', 'construction_worker_man'],
                ['💂‍♀', 'guardswoman'],
                ['💂', 'guardsman'],
                ['🕵️‍♀️', 'female_detective'],
                ['🕵', 'male_detective'],
                ['👩‍⚕', 'woman_health_worker'],
                ['👨‍⚕', 'man_health_worker'],
                ['👩‍🌾', 'woman_farmer'],
                ['👨‍🌾', 'man_farmer'],
                ['👩‍🍳', 'woman_cook'],
                ['👨‍🍳', 'man_cook'],
                ['👩‍🎓', 'woman_student'],
                ['👨‍🎓', 'man_student'],
                ['👩‍🎤', 'woman_singer'],
                ['👨‍🎤', 'man_singer'],
                ['👩‍🏫', 'woman_teacher'],
                ['👨‍🏫', 'man_teacher'],
                ['👩‍🏭', 'woman_factory_worker'],
                ['👨‍🏭', 'man_factory_worker'],
                ['👩‍💻', 'woman_technologist'],
                ['👨‍💻', 'man_technologist'],
                ['👩‍💼', 'woman_office_worker'],
                ['👨‍💼', 'man_office_worker'],
                ['👩‍🔧', 'woman_mechanic'],
                ['👨‍🔧', 'man_mechanic'],
                ['👩‍🔬', 'woman_scientist'],
                ['👨‍🔬', 'man_scientist'],
                ['👩‍🎨', 'woman_artist'],
                ['👨‍🎨', 'man_artist'],
                ['👩‍🚒', 'woman_firefighter'],
                ['👨‍🚒', 'man_firefighter'],
                ['👩‍✈', 'woman_pilot'],
                ['👨‍✈', 'man_pilot'],
                ['👩‍🚀', 'woman_astronaut'],
                ['👨‍🚀', 'man_astronaut'],
                ['👩‍⚖', 'woman_judge'],
                ['👨‍⚖', 'man_judge'],
                ['🤶', 'mrs_claus'],
                ['🎅', 'santa'],
                ['👸', 'princess'],
                ['🤴', 'prince'],
                ['👰', 'bride_with_veil'],
                ['🤵', 'man_in_tuxedo'],
                ['👼', 'angel'],
                ['🤰', 'pregnant_woman'],
                ['🙇‍♀', 'bowing_woman'],
                ['🙇', 'bowing_man'],
                ['💁', 'tipping_hand_woman'],
                ['💁‍♂', 'tipping_hand_man'],
                ['🙅', 'no_good_woman'],
                ['🙅‍♂', 'no_good_man'],
                ['🙆', 'ok_woman'],
                ['🙆‍♂', 'ok_man'],
                ['🙋', 'raising_hand_woman'],
                ['🙋‍♂', 'raising_hand_man'],
                ['🤦‍♀', 'woman_facepalming'],
                ['🤦‍♂', 'man_facepalming'],
                ['🤷‍♀', 'woman_shrugging'],
                ['🤷‍♂', 'man_shrugging'],
                ['🙎', 'pouting_woman'],
                ['🙎‍♂', 'pouting_man'],
                ['🙍', 'frowning_woman'],
                ['🙍‍♂', 'frowning_man'],
                ['💇', 'haircut_woman'],
                ['💇‍♂', 'haircut_man'],
                ['💆', 'massage_woman'],
                ['💆‍♂', 'massage_man'],
                ['🕴', 'business_suit_levitating'],
                ['💃', 'dancer'],
                ['🕺', 'man_dancing'],
                ['👯', 'dancing_women'],
                ['👯‍♂', 'dancing_men'],
                ['🚶‍♀', 'walking_woman'],
                ['🚶', 'walking_man'],
                ['🏃‍♀', 'running_woman'],
                ['🏃', 'running_man'],
                ['👫', 'couple'],
                ['👭', 'two_women_holding_hands'],
                ['👬', 'two_men_holding_hands'],
                ['💑', 'couple_with_heart_woman_man'],
                ['👩‍❤️‍👩', 'couple_with_heart_woman_woman'],
                ['👨‍❤️‍👨', 'couple_with_heart_man_man'],
                ['💏', 'couplekiss_man_woman'],
                ['👩‍❤️‍💋‍👩', 'couplekiss_woman_woman'],
                ['👨‍❤️‍💋‍👨', 'couplekiss_man_man'],
                ['👪', 'family_man_woman_boy'],
                ['👨‍👩‍👧', 'family_man_woman_girl'],
                ['👨‍👩‍👧‍👦', 'family_man_woman_girl_boy'],
                ['👨‍👩‍👦‍👦', 'family_man_woman_boy_boy'],
                ['👨‍👩‍👧‍👧', 'family_man_woman_girl_girl'],
                ['👩‍👩‍👦', 'family_woman_woman_boy'],
                ['👩‍👩‍👧', 'family_woman_woman_girl'],
                ['👩‍👩‍👧‍👦', 'family_woman_woman_girl_boy'],
                ['👩‍👩‍👦‍👦', 'family_woman_woman_boy_boy'],
                ['👩‍👩‍👧‍👧', 'family_woman_woman_girl_girl'],
                ['👨‍👨‍👦', 'family_man_man_boy'],
                ['👨‍👨‍👧', 'family_man_man_girl'],
                ['👨‍👨‍👧‍👦', 'family_man_man_girl_boy'],
                ['👨‍👨‍👦‍👦', 'family_man_man_boy_boy'],
                ['👨‍👨‍👧‍👧', 'family_man_man_girl_girl'],
                ['👩‍👦', 'family_woman_boy'],
                ['👩‍👧', 'family_woman_girl'],
                ['👩‍👧‍👦', 'family_woman_girl_boy'],
                ['👩‍👦‍👦', 'family_woman_boy_boy'],
                ['👩‍👧‍👧', 'family_woman_girl_girl'],
                ['👨‍👦', 'family_man_boy'],
                ['👨‍👧', 'family_man_girl'],
                ['👨‍👧‍👦', 'family_man_girl_boy'],
                ['👨‍👦‍👦', 'family_man_boy_boy'],
                ['👨‍👧‍👧', 'family_man_girl_girl'],
                ['👚', 'womans_clothes'],
                ['👕', 'shirt'],
                ['👖', 'jeans'],
                ['👔', 'necktie'],
                ['👗', 'dress'],
                ['👙', 'bikini'],
                ['👘', 'kimono'],
                ['👠', 'high_heel'],
                ['👡', 'sandal'],
                ['👢', 'boot'],
                ['👞', 'mans_shoe'],
                ['👟', 'athletic_shoe'],
                ['👒', 'womans_hat'],
                ['🎩', 'tophat'],
                ['🎓', 'mortar_board'],
                ['👑', 'crown'],
                ['⛑', 'rescue_worker_helmet'],
                ['🎒', 'school_satchel'],
                ['👝', 'pouch'],
                ['👛', 'purse'],
                ['👜', 'handbag'],
                ['💼', 'briefcase'],
                ['👓', 'eyeglasses'],
                ['🕶', 'dark_sunglasses'],
                ['🌂', 'closed_umbrella'],
                ['☂️', 'open_umbrella']
            ],
            name: 'People',
            icon: ['😄', 'smile']
        },
        {
            emojis: [
                ['🐶', 'dog'],
                ['🐱', 'cat'],
                ['🐭', 'mouse'],
                ['🐹', 'hamster'],
                ['🐰', 'rabbit'],
                ['🦊', 'fox_face'],
                ['🐻', 'bear'],
                ['🐼', 'panda_face'],
                ['🐨', 'koala'],
                ['🐯', 'tiger'],
                ['🦁', 'lion'],
                ['🐮', 'cow'],
                ['🐷', 'pig'],
                ['🐽', 'pig_nose'],
                ['🐸', 'frog'],
                ['🐵', 'monkey_face'],
                ['🙈', 'see_no_evil'],
                ['🙉', 'hear_no_evil'],
                ['🙊', 'speak_no_evil'],
                ['🐒', 'monkey'],
                ['🐔', 'chicken'],
                ['🐧', 'penguin'],
                ['🐦', 'bird'],
                ['🐤', 'baby_chick'],
                ['🐣', 'hatching_chick'],
                ['🐥', 'hatched_chick'],
                ['🦆', 'duck'],
                ['🦅', 'eagle'],
                ['🦉', 'owl'],
                ['🦇', 'bat'],
                ['🐺', 'wolf'],
                ['🐗', 'boar'],
                ['🐴', 'horse'],
                ['🦄', 'unicorn'],
                ['🐝', 'bee'],
                ['🐛', 'bug'],
                ['🦋', 'butterfly'],
                ['🐌', 'snail'],
                ['🐚', 'shell'],
                ['🐞', 'beetle'],
                ['🐜', 'ant'],
                ['🕷', 'spider'],
                ['🕸', 'spider_web'],
                ['🐢', 'turtle'],
                ['🐍', 'snake'],
                ['🦎', 'lizard'],
                ['🦂', 'scorpion'],
                ['🦀', 'crab'],
                ['🦑', 'squid'],
                ['🐙', 'octopus'],
                ['🦐', 'shrimp'],
                ['🐠', 'tropical_fish'],
                ['🐟', 'fish'],
                ['🐡', 'blowfish'],
                ['🐬', 'dolphin'],
                ['🦈', 'shark'],
                ['🐳', 'whale'],
                ['🐋', 'whale2'],
                ['🐊', 'crocodile'],
                ['🐆', 'leopard'],
                ['🐅', 'tiger2'],
                ['🐃', 'water_buffalo'],
                ['🐂', 'ox'],
                ['🐄', 'cow2'],
                ['🦌', 'deer'],
                ['🐪', 'dromedary_camel'],
                ['🐫', 'camel'],
                ['🐘', 'elephant'],
                ['🦏', 'rhinoceros'],
                ['🦍', 'gorilla'],
                ['🐎', 'racehorse'],
                ['🐖', 'pig2'],
                ['🐐', 'goat'],
                ['🐏', 'ram'],
                ['🐑', 'sheep'],
                ['🐕', 'dog2'],
                ['🐩', 'poodle'],
                ['🐈', 'cat2'],
                ['🐓', 'rooster'],
                ['🦃', 'turkey'],
                ['🕊', 'dove'],
                ['🐇', 'rabbit2'],
                ['🐁', 'mouse2'],
                ['🐀', 'rat'],
                ['🐿', 'chipmunk'],
                ['🐾', 'feet'],
                ['🐉', 'dragon'],
                ['🐲', 'dragon_face'],
                ['🌵', 'cactus'],
                ['🎄', 'christmas_tree'],
                ['🌲', 'evergreen_tree'],
                ['🌳', 'deciduous_tree'],
                ['🌴', 'palm_tree'],
                ['🌱', 'seedling'],
                ['🌿', 'herb'],
                ['☘️', 'shamrock'],
                ['🍀', 'four_leaf_clover'],
                ['🎍', 'bamboo'],
                ['🎋', 'tanabata_tree'],
                ['🍃', 'leaves'],
                ['🍂', 'fallen_leaf'],
                ['🍁', 'maple_leaf'],
                ['🍄', 'mushroom'],
                ['🌾', 'ear_of_rice'],
                ['💐', 'bouquet'],
                ['🌷', 'tulip'],
                ['🌹', 'rose'],
                ['🥀', 'wilted_flower'],
                ['🌻', 'sunflower'],
                ['🌼', 'blossom'],
                ['🌸', 'cherry_blossom'],
                ['🌺', 'hibiscus'],
                ['🌎', 'earth_americas'],
                ['🌍', 'earth_africa'],
                ['🌏', 'earth_asia'],
                ['🌕', 'full_moon'],
                ['🌖', 'waning_gibbous_moon'],
                ['🌗', 'last_quarter_moon'],
                ['🌘', 'waning_crescent_moon'],
                ['🌑', 'new_moon'],
                ['🌒', 'waxing_crescent_moon'],
                ['🌓', 'first_quarter_moon'],
                ['🌔', 'moon'],
                ['🌚', 'new_moon_with_face'],
                ['🌝', 'full_moon_with_face'],
                ['🌞', 'sun_with_face'],
                ['🌛', 'first_quarter_moon_with_face'],
                ['🌜', 'last_quarter_moon_with_face'],
                ['🌙', 'crescent_moon'],
                ['💫', 'dizzy'],
                ['⭐️', 'star'],
                ['🌟', 'star2'],
                ['✨', 'sparkles'],
                ['⚡️', 'zap'],
                ['🔥', 'fire'],
                ['💥', 'boom'],
                ['☄', 'comet'],
                ['☀️', 'sunny'],
                ['🌤', 'sun_behind_small_cloud'],
                ['⛅️', 'partly_sunny'],
                ['🌥', 'sun_behind_large_cloud'],
                ['🌦', 'sun_behind_rain_cloud'],
                ['🌈', 'rainbow'],
                ['☁️', 'cloud'],
                ['🌧', 'cloud_with_rain'],
                ['⛈', 'cloud_with_lightning_and_rain'],
                ['🌩', 'cloud_with_lightning'],
                ['🌨', 'cloud_with_snow'],
                ['☃️', 'snowman_with_snow'],
                ['⛄️', 'snowman'],
                ['❄️', 'snowflake'],
                ['🌬', 'wind_face'],
                ['💨', 'dash'],
                ['🌪', 'tornado'],
                ['🌫', 'fog'],
                ['🌊', 'ocean'],
                ['💧', 'droplet'],
                ['💦', 'sweat_drops'],
                ['☔️', 'umbrella']
            ],
            name: 'Nature',
            icon: ['🌸', 'cherry_blossom']
        },
        {
            emojis: [
                ['🍏', 'green_apple'],
                ['🍎', 'apple'],
                ['🍐', 'pear'],
                ['🍊', 'tangerine'],
                ['🍋', 'lemon'],
                ['🍌', 'banana'],
                ['🍉', 'watermelon'],
                ['🍇', 'grapes'],
                ['🍓', 'strawberry'],
                ['🍈', 'melon'],
                ['🍒', 'cherries'],
                ['🍑', 'peach'],
                ['🍍', 'pineapple'],
                ['🥝', 'kiwi_fruit'],
                ['🥑', 'avocado'],
                ['🍅', 'tomato'],
                ['🍆', 'eggplant'],
                ['🥒', 'cucumber'],
                ['🥕', 'carrot'],
                ['🌽', 'corn'],
                ['🌶', 'hot_pepper'],
                ['🥔', 'potato'],
                ['🍠', 'sweet_potato'],
                ['🌰', 'chestnut'],
                ['🥜', 'peanuts'],
                ['🍯', 'honey_pot'],
                ['🥐', 'croissant'],
                ['🍞', 'bread'],
                ['🥖', 'baguette_bread'],
                ['🧀', 'cheese'],
                ['🥚', 'egg'],
                ['🍳', 'fried_egg'],
                ['🥓', 'bacon'],
                ['🥞', 'pancakes'],
                ['🍤', 'fried_shrimp'],
                ['🍗', 'poultry_leg'],
                ['🍖', 'meat_on_bone'],
                ['🍕', 'pizza'],
                ['🌭', 'hotdog'],
                ['🍔', 'hamburger'],
                ['🍟', 'fries'],
                ['🥙', 'stuffed_flatbread'],
                ['🌮', 'taco'],
                ['🌯', 'burrito'],
                ['🥗', 'green_salad'],
                ['🥘', 'shallow_pan_of_food'],
                ['🍝', 'spaghetti'],
                ['🍜', 'ramen'],
                ['🍲', 'stew'],
                ['🍥', 'fish_cake'],
                ['🍣', 'sushi'],
                ['🍱', 'bento'],
                ['🍛', 'curry'],
                ['🍚', 'rice'],
                ['🍙', 'rice_ball'],
                ['🍘', 'rice_cracker'],
                ['🍢', 'oden'],
                ['🍡', 'dango'],
                ['🍧', 'shaved_ice'],
                ['🍨', 'ice_cream'],
                ['🍦', 'icecream'],
                ['🍰', 'cake'],
                ['🎂', 'birthday'],
                ['🍮', 'custard'],
                ['🍭', 'lollipop'],
                ['🍬', 'candy'],
                ['🍫', 'chocolate_bar'],
                ['🍿', 'popcorn'],
                ['🍩', 'doughnut'],
                ['🍪', 'cookie'],
                ['🥛', 'milk_glass'],
                ['🍼', 'baby_bottle'],
                ['☕️', 'coffee'],
                ['🍵', 'tea'],
                ['🍶', 'sake'],
                ['🍺', 'beer'],
                ['🍻', 'beers'],
                ['🥂', 'clinking_glasses'],
                ['🍷', 'wine_glass'],
                ['🥃', 'tumbler_glass'],
                ['🍸', 'cocktail'],
                ['🍹', 'tropical_drink'],
                ['🍾', 'champagne'],
                ['🥄', 'spoon'],
                ['🍴', 'fork_and_knife'],
                ['🍽', 'plate_with_cutlery']
            ],
            name: 'Foods',
            icon: ['🍔', 'hamburger']
        },
        {
            emojis: [
                ['⚽️', 'soccer'],
                ['🏀', 'basketball'],
                ['🏈', 'football'],
                ['⚾️', 'baseball'],
                ['🎾', 'tennis'],
                ['🏐', 'volleyball'],
                ['🏉', 'rugby_football'],
                ['🎱', '8ball'],
                ['🏓', 'ping_pong'],
                ['🏸', 'badminton'],
                ['🥅', 'goal_net'],
                ['🏒', 'ice_hockey'],
                ['🏑', 'field_hockey'],
                ['🏏', 'cricket'],
                ['⛳️', 'golf'],
                ['🏹', 'bow_and_arrow'],
                ['🎣', 'fishing_pole_and_fish'],
                ['🥊', 'boxing_glove'],
                ['🥋', 'martial_arts_uniform'],
                ['⛸', 'ice_skate'],
                ['🎿', 'ski'],
                ['⛷', 'skier'],
                ['🏂', 'snowboarder'],
                ['🏋️‍♀️', 'weight_lifting_woman'],
                ['🏋', 'weight_lifting_man'],
                ['🤺', 'person_fencing'],
                ['🤼‍♀', 'women_wrestling'],
                ['🤼‍♂', 'men_wrestling'],
                ['🤸‍♀', 'woman_cartwheeling'],
                ['🤸‍♂', 'man_cartwheeling'],
                ['⛹️‍♀️', 'basketball_woman'],
                ['⛹', 'basketball_man'],
                ['🤾‍♀', 'woman_playing_handball'],
                ['🤾‍♂', 'man_playing_handball'],
                ['🏌️‍♀️', 'golfing_woman'],
                ['🏌', 'golfing_man'],
                ['🏄‍♀', 'surfing_woman'],
                ['🏄', 'surfing_man'],
                ['🏊‍♀', 'swimming_woman'],
                ['🏊', 'swimming_man'],
                ['🤽‍♀', 'woman_playing_water_polo'],
                ['🤽‍♂', 'man_playing_water_polo'],
                ['🚣‍♀', 'rowing_woman'],
                ['🚣', 'rowing_man'],
                ['🏇', 'horse_racing'],
                ['🚴‍♀', 'biking_woman'],
                ['🚴', 'biking_man'],
                ['🚵‍♀', 'mountain_biking_woman'],
                ['🚵', 'mountain_biking_man'],
                ['🎽', 'running_shirt_with_sash'],
                ['🏅', 'medal_sports'],
                ['🎖', 'medal_military'],
                ['🥇', '1st_place_medal'],
                ['🥈', '2nd_place_medal'],
                ['🥉', '3rd_place_medal'],
                ['🏆', 'trophy'],
                ['🏵', 'rosette'],
                ['🎗', 'reminder_ribbon'],
                ['🎫', 'ticket'],
                ['🎟', 'tickets'],
                ['🎪', 'circus_tent'],
                ['🤹‍♀', 'woman_juggling'],
                ['🤹‍♂', 'man_juggling'],
                ['🎭', 'performing_arts'],
                ['🎨', 'art'],
                ['🎬', 'clapper'],
                ['🎤', 'microphone'],
                ['🎧', 'headphones'],
                ['🎼', 'musical_score'],
                ['🎹', 'musical_keyboard'],
                ['🥁', 'drum'],
                ['🎷', 'saxophone'],
                ['🎺', 'trumpet'],
                ['🎸', 'guitar'],
                ['🎻', 'violin'],
                ['🎲', 'game_die'],
                ['🎯', 'dart'],
                ['🎳', 'bowling'],
                ['🎮', 'video_game'],
                ['🎰', 'slot_machine']
            ],
            name: 'Activity',
            icon: ['⚽️', 'soccer']
        },
        {
            emojis: [
                ['🚗', 'car'],
                ['🚕', 'taxi'],
                ['🚙', 'blue_car'],
                ['🚌', 'bus'],
                ['🚎', 'trolleybus'],
                ['🏎', 'racing_car'],
                ['🚓', 'police_car'],
                ['🚑', 'ambulance'],
                ['🚒', 'fire_engine'],
                ['🚐', 'minibus'],
                ['🚚', 'truck'],
                ['🚛', 'articulated_lorry'],
                ['🚜', 'tractor'],
                ['🛴', 'kick_scooter'],
                ['🚲', 'bike'],
                ['🛵', 'motor_scooter'],
                ['🏍', 'motorcycle'],
                ['🚨', 'rotating_light'],
                ['🚔', 'oncoming_police_car'],
                ['🚍', 'oncoming_bus'],
                ['🚘', 'oncoming_automobile'],
                ['🚖', 'oncoming_taxi'],
                ['🚡', 'aerial_tramway'],
                ['🚠', 'mountain_cableway'],
                ['🚟', 'suspension_railway'],
                ['🚃', 'railway_car'],
                ['🚋', 'train'],
                ['🚞', 'mountain_railway'],
                ['🚝', 'monorail'],
                ['🚄', 'bullettrain_side'],
                ['🚅', 'bullettrain_front'],
                ['🚈', 'light_rail'],
                ['🚂', 'steam_locomotive'],
                ['🚆', 'train2'],
                ['🚇', 'metro'],
                ['🚊', 'tram'],
                ['🚉', 'station'],
                ['🚁', 'helicopter'],
                ['🛩', 'small_airplane'],
                ['✈️', 'airplane'],
                ['🛫', 'flight_departure'],
                ['🛬', 'flight_arrival'],
                ['🚀', 'rocket'],
                ['🛰', 'artificial_satellite'],
                ['💺', 'seat'],
                ['🛶', 'canoe'],
                ['⛵️', 'boat'],
                ['🛥', 'motor_boat'],
                ['🚤', 'speedboat'],
                ['🛳', 'passenger_ship'],
                ['⛴', 'ferry'],
                ['🚢', 'ship'],
                ['⚓️', 'anchor'],
                ['🚧', 'construction'],
                ['⛽️', 'fuelpump'],
                ['🚏', 'busstop'],
                ['🚦', 'vertical_traffic_light'],
                ['🚥', 'traffic_light'],
                ['🗺', 'world_map'],
                ['🗿', 'moyai'],
                ['🗽', 'statue_of_liberty'],
                ['⛲️', 'fountain'],
                ['🗼', 'tokyo_tower'],
                ['🏰', 'european_castle'],
                ['🏯', 'japanese_castle'],
                ['🏟', 'stadium'],
                ['🎡', 'ferris_wheel'],
                ['🎢', 'roller_coaster'],
                ['🎠', 'carousel_horse'],
                ['⛱', 'parasol_on_ground'],
                ['🏖', 'beach_umbrella'],
                ['🏝', 'desert_island'],
                ['⛰', 'mountain'],
                ['🏔', 'mountain_snow'],
                ['🗻', 'mount_fuji'],
                ['🌋', 'volcano'],
                ['🏜', 'desert'],
                ['🏕', 'camping'],
                ['⛺️', 'tent'],
                ['🛤', 'railway_track'],
                ['🛣', 'motorway'],
                ['🏗', 'building_construction'],
                ['🏭', 'factory'],
                ['🏠', 'house'],
                ['🏡', 'house_with_garden'],
                ['🏘', 'houses'],
                ['🏚', 'derelict_house'],
                ['🏢', 'office'],
                ['🏬', 'department_store'],
                ['🏣', 'post_office'],
                ['🏤', 'european_post_office'],
                ['🏥', 'hospital'],
                ['🏦', 'bank'],
                ['🏨', 'hotel'],
                ['🏪', 'convenience_store'],
                ['🏫', 'school'],
                ['🏩', 'love_hotel'],
                ['💒', 'wedding'],
                ['🏛', 'classical_building'],
                ['⛪️', 'church'],
                ['🕌', 'mosque'],
                ['🕍', 'synagogue'],
                ['🕋', 'kaaba'],
                ['⛩', 'shinto_shrine'],
                ['🗾', 'japan'],
                ['🎑', 'rice_scene'],
                ['🏞', 'national_park'],
                ['🌅', 'sunrise'],
                ['🌄', 'sunrise_over_mountains'],
                ['🌠', 'stars'],
                ['🎇', 'sparkler'],
                ['🎆', 'fireworks'],
                ['🌇', 'city_sunrise'],
                ['🌆', 'city_sunset'],
                ['🏙', 'cityscape'],
                ['🌃', 'night_with_stars'],
                ['🌌', 'milky_way'],
                ['🌉', 'bridge_at_night'],
                ['🌁', 'foggy']
            ],
            name: 'Places',
            icon: ['🚗', 'car']
        },
        {
            emojis: [
                ['⌚️', 'watch'],
                ['📱', 'iphone'],
                ['📲', 'calling'],
                ['💻', 'computer'],
                ['⌨️', 'keyboard'],
                ['🖥', 'desktop_computer'],
                ['🖨', 'printer'],
                ['🖱', 'computer_mouse'],
                ['🖲', 'trackball'],
                ['🕹', 'joystick'],
                ['🗜', 'clamp'],
                ['💽', 'minidisc'],
                ['💾', 'floppy_disk'],
                ['💿', 'cd'],
                ['📀', 'dvd'],
                ['📼', 'vhs'],
                ['📷', 'camera'],
                ['📸', 'camera_flash'],
                ['📹', 'video_camera'],
                ['🎥', 'movie_camera'],
                ['📽', 'film_projector'],
                ['🎞', 'film_strip'],
                ['📞', 'telephone_receiver'],
                ['☎️', 'phone'],
                ['📟', 'pager'],
                ['📠', 'fax'],
                ['📺', 'tv'],
                ['📻', 'radio'],
                ['🎙', 'studio_microphone'],
                ['🎚', 'level_slider'],
                ['🎛', 'control_knobs'],
                ['⏱', 'stopwatch'],
                ['⏲', 'timer_clock'],
                ['⏰', 'alarm_clock'],
                ['🕰', 'mantelpiece_clock'],
                ['⌛️', 'hourglass'],
                ['⏳', 'hourglass_flowing_sand'],
                ['📡', 'satellite'],
                ['🔋', 'battery'],
                ['🔌', 'electric_plug'],
                ['💡', 'bulb'],
                ['🔦', 'flashlight'],
                ['🕯', 'candle'],
                ['🗑', 'wastebasket'],
                ['🛢', 'oil_drum'],
                ['💸', 'money_with_wings'],
                ['💵', 'dollar'],
                ['💴', 'yen'],
                ['💶', 'euro'],
                ['💷', 'pound'],
                ['💰', 'moneybag'],
                ['💳', 'credit_card'],
                ['💎', 'gem'],
                ['⚖️', 'balance_scale'],
                ['🔧', 'wrench'],
                ['🔨', 'hammer'],
                ['⚒', 'hammer_and_pick'],
                ['🛠', 'hammer_and_wrench'],
                ['⛏', 'pick'],
                ['🔩', 'nut_and_bolt'],
                ['⚙️', 'gear'],
                ['⛓', 'chains'],
                ['🔫', 'gun'],
                ['💣', 'bomb'],
                ['🔪', 'hocho'],
                ['🗡', 'dagger'],
                ['⚔️', 'crossed_swords'],
                ['🛡', 'shield'],
                ['🚬', 'smoking'],
                ['⚰️', 'coffin'],
                ['⚱️', 'funeral_urn'],
                ['🏺', 'amphora'],
                ['🔮', 'crystal_ball'],
                ['📿', 'prayer_beads'],
                ['💈', 'barber'],
                ['⚗️', 'alembic'],
                ['🔭', 'telescope'],
                ['🔬', 'microscope'],
                ['🕳', 'hole'],
                ['💊', 'pill'],
                ['💉', 'syringe'],
                ['🌡', 'thermometer'],
                ['🚽', 'toilet'],
                ['🚰', 'potable_water'],
                ['🚿', 'shower'],
                ['🛁', 'bathtub'],
                ['🛀', 'bath'],
                ['🛎', 'bellhop_bell'],
                ['🔑', 'key'],
                ['🗝', 'old_key'],
                ['🚪', 'door'],
                ['🛋', 'couch_and_lamp'],
                ['🛏', 'bed'],
                ['🛌', 'sleeping_bed'],
                ['🖼', 'framed_picture'],
                ['🛍', 'shopping'],
                ['🛒', 'shopping_cart'],
                ['🎁', 'gift'],
                ['🎈', 'balloon'],
                ['🎏', 'flags'],
                ['🎀', 'ribbon'],
                ['🎊', 'confetti_ball'],
                ['🎉', 'tada'],
                ['🎎', 'dolls'],
                ['🏮', 'izakaya_lantern'],
                ['🎐', 'wind_chime'],
                ['✉️', 'email'],
                ['📩', 'envelope_with_arrow'],
                ['📨', 'incoming_envelope'],
                ['📧', 'e-mail'],
                ['💌', 'love_letter'],
                ['📥', 'inbox_tray'],
                ['📤', 'outbox_tray'],
                ['📦', 'package'],
                ['🏷', 'label'],
                ['📪', 'mailbox_closed'],
                ['📫', 'mailbox'],
                ['📬', 'mailbox_with_mail'],
                ['📭', 'mailbox_with_no_mail'],
                ['📮', 'postbox'],
                ['📯', 'postal_horn'],
                ['📜', 'scroll'],
                ['📃', 'page_with_curl'],
                ['📄', 'page_facing_up'],
                ['📑', 'bookmark_tabs'],
                ['📊', 'bar_chart'],
                ['📈', 'chart_with_upwards_trend'],
                ['📉', 'chart_with_downwards_trend'],
                ['🗒', 'spiral_notepad'],
                ['🗓', 'spiral_calendar'],
                ['📆', 'calendar'],
                ['📅', 'date'],
                ['📇', 'card_index'],
                ['🗃', 'card_file_box'],
                ['🗳', 'ballot_box'],
                ['🗄', 'file_cabinet'],
                ['📋', 'clipboard'],
                ['📁', 'file_folder'],
                ['📂', 'open_file_folder'],
                ['🗂', 'card_index_dividers'],
                ['🗞', 'newspaper_roll'],
                ['📰', 'newspaper'],
                ['📓', 'notebook'],
                ['📔', 'notebook_with_decorative_cover'],
                ['📒', 'ledger'],
                ['📕', 'closed_book'],
                ['📗', 'green_book'],
                ['📘', 'blue_book'],
                ['📙', 'orange_book'],
                ['📚', 'books'],
                ['📖', 'book'],
                ['🔖', 'bookmark'],
                ['🔗', 'link'],
                ['📎', 'paperclip'],
                ['🖇', 'paperclips'],
                ['📐', 'triangular_ruler'],
                ['📏', 'straight_ruler'],
                ['📌', 'pushpin'],
                ['📍', 'round_pushpin'],
                ['✂️', 'scissors'],
                ['🖊', 'pen'],
                ['🖋', 'fountain_pen'],
                ['✒️', 'black_nib'],
                ['🖌', 'paintbrush'],
                ['🖍', 'crayon'],
                ['📝', 'memo'],
                ['✏️', 'pencil2'],
                ['🔍', 'mag'],
                ['🔎', 'mag_right'],
                ['🔏', 'lock_with_ink_pen'],
                ['🔐', 'closed_lock_with_key'],
                ['🔒', 'lock'],
                ['🔓', 'unlock']
            ],
            name: 'Objects',
            icon: ['🔔', 'bell']
        },
        {
            emojis: [
                ['❤️', 'heart'],
                ['💛', 'yellow_heart'],
                ['💚', 'green_heart'],
                ['💙', 'blue_heart'],
                ['💜', 'purple_heart'],
                ['🖤', 'black_heart'],
                ['💔', 'broken_heart'],
                ['❣️', 'heavy_heart_exclamation'],
                ['💕', 'two_hearts'],
                ['💞', 'revolving_hearts'],
                ['💓', 'heartbeat'],
                ['💗', 'heartpulse'],
                ['💖', 'sparkling_heart'],
                ['💘', 'cupid'],
                ['💝', 'gift_heart'],
                ['💟', 'heart_decoration'],
                ['☮️', 'peace_symbol'],
                ['✝️', 'latin_cross'],
                ['☪️', 'star_and_crescent'],
                ['🕉', 'om'],
                ['☸️', 'wheel_of_dharma'],
                ['✡️', 'star_of_david'],
                ['🔯', 'six_pointed_star'],
                ['🕎', 'menorah'],
                ['☯️', 'yin_yang'],
                ['☦️', 'orthodox_cross'],
                ['🛐', 'place_of_worship'],
                ['⛎', 'ophiuchus'],
                ['♈️', 'aries'],
                ['♉️', 'taurus'],
                ['♊️', 'gemini'],
                ['♋️', 'cancer'],
                ['♌️', 'leo'],
                ['♍️', 'virgo'],
                ['♎️', 'libra'],
                ['♏️', 'scorpius'],
                ['♐️', 'sagittarius'],
                ['♑️', 'capricorn'],
                ['♒️', 'aquarius'],
                ['♓️', 'pisces'],
                ['🆔', 'id'],
                ['⚛️', 'atom_symbol'],
                ['🉑', 'accept'],
                ['☢️', 'radioactive'],
                ['☣️', 'biohazard'],
                ['📴', 'mobile_phone_off'],
                ['📳', 'vibration_mode'],
                ['🈶', 'u6709'],
                ['🈚️', 'u7121'],
                ['🈸', 'u7533'],
                ['🈺', 'u55b6'],
                ['🈷️', 'u6708'],
                ['✴️', 'eight_pointed_black_star'],
                ['🆚', 'vs'],
                ['💮', 'white_flower'],
                ['🉐', 'ideograph_advantage'],
                ['㊙️', 'secret'],
                ['㊗️', 'congratulations'],
                ['🈴', 'u5408'],
                ['🈵', 'u6e80'],
                ['🈹', 'u5272'],
                ['🈲', 'u7981'],
                ['🅰️', 'a'],
                ['🅱️', 'b'],
                ['🆎', 'ab'],
                ['🆑', 'cl'],
                ['🅾️', 'o2'],
                ['🆘', 'sos'],
                ['❌', 'x'],
                ['⭕️', 'o'],
                ['🛑', 'stop_sign'],
                ['⛔️', 'no_entry'],
                ['📛', 'name_badge'],
                ['🚫', 'no_entry_sign'],
                ['💯', '100'],
                ['💢', 'anger'],
                ['♨️', 'hotsprings'],
                ['🚷', 'no_pedestrians'],
                ['🚯', 'do_not_litter'],
                ['🚳', 'no_bicycles'],
                ['🚱', 'non-potable_water'],
                ['🔞', 'underage'],
                ['📵', 'no_mobile_phones'],
                ['🚭', 'no_smoking'],
                ['❗️', 'exclamation'],
                ['❕', 'grey_exclamation'],
                ['❓', 'question'],
                ['❔', 'grey_question'],
                ['‼️', 'bangbang'],
                ['⁉️', 'interrobang'],
                ['🔅', 'low_brightness'],
                ['🔆', 'high_brightness'],
                ['〽️', 'part_alternation_mark'],
                ['⚠️', 'warning'],
                ['🚸', 'children_crossing'],
                ['🔱', 'trident'],
                ['⚜️', 'fleur_de_lis'],
                ['🔰', 'beginner'],
                ['♻️', 'recycle'],
                ['✅', 'white_check_mark'],
                ['🈯️', 'u6307'],
                ['💹', 'chart'],
                ['❇️', 'sparkle'],
                ['✳️', 'eight_spoked_asterisk'],
                ['❎', 'negative_squared_cross_mark'],
                ['🌐', 'globe_with_meridians'],
                ['💠', 'diamond_shape_with_a_dot_inside'],
                ['Ⓜ️', 'm'],
                ['🌀', 'cyclone'],
                ['💤', 'zzz'],
                ['🏧', 'atm'],
                ['🚾', 'wc'],
                ['♿️', 'wheelchair'],
                ['🅿️', 'parking'],
                ['🈳', 'u7a7a'],
                ['🈂️', 'sa'],
                ['🛂', 'passport_control'],
                ['🛃', 'customs'],
                ['🛄', 'baggage_claim'],
                ['🛅', 'left_luggage'],
                ['🚹', 'mens'],
                ['🚺', 'womens'],
                ['🚼', 'baby_symbol'],
                ['🚻', 'restroom'],
                ['🚮', 'put_litter_in_its_place'],
                ['🎦', 'cinema'],
                ['📶', 'signal_strength'],
                ['🈁', 'koko'],
                ['🔣', 'symbols'],
                ['ℹ️', 'information_source'],
                ['🔤', 'abc'],
                ['🔡', 'abcd'],
                ['🔠', 'capital_abcd'],
                ['🆖', 'ng'],
                ['🆗', 'ok'],
                ['🆙', 'up'],
                ['🆒', 'cool'],
                ['🆕', 'new'],
                ['🆓', 'free'],
                ['0️⃣', 'zero'],
                ['1️⃣', 'one'],
                ['2️⃣', 'two'],
                ['3️⃣', 'three'],
                ['4️⃣', 'four'],
                ['5️⃣', 'five'],
                ['6️⃣', 'six'],
                ['7️⃣', 'seven'],
                ['8️⃣', 'eight'],
                ['9️⃣', 'nine'],
                ['🔟', 'keycap_ten'],
                ['🔢', '1234'],
                ['#️⃣', 'hash'],
                ['*️⃣', 'asterisk'],
                ['▶️', 'arrow_forward'],
                ['⏸', 'pause_button'],
                ['⏯', 'play_or_pause_button'],
                ['⏹', 'stop_button'],
                ['⏺', 'record_button'],
                ['⏭', 'next_track_button'],
                ['⏮', 'previous_track_button'],
                ['⏩', 'fast_forward'],
                ['⏪', 'rewind'],
                ['⏫', 'arrow_double_up'],
                ['⏬', 'arrow_double_down'],
                ['◀️', 'arrow_backward'],
                ['🔼', 'arrow_up_small'],
                ['🔽', 'arrow_down_small'],
                ['➡️', 'arrow_right'],
                ['⬅️', 'arrow_left'],
                ['⬆️', 'arrow_up'],
                ['⬇️', 'arrow_down'],
                ['↗️', 'arrow_upper_right'],
                ['↘️', 'arrow_lower_right'],
                ['↙️', 'arrow_lower_left'],
                ['↖️', 'arrow_upper_left'],
                ['↕️', 'arrow_up_down'],
                ['↔️', 'left_right_arrow'],
                ['↪️', 'arrow_right_hook'],
                ['↩️', 'leftwards_arrow_with_hook'],
                ['⤴️', 'arrow_heading_up'],
                ['⤵️', 'arrow_heading_down'],
                ['🔀', 'twisted_rightwards_arrows'],
                ['🔁', 'repeat'],
                ['🔂', 'repeat_one'],
                ['🔄', 'arrows_counterclockwise'],
                ['🔃', 'arrows_clockwise'],
                ['🎵', 'musical_note'],
                ['🎶', 'notes'],
                ['➕', 'heavy_plus_sign'],
                ['➖', 'heavy_minus_sign'],
                ['➗', 'heavy_division_sign'],
                ['✖️', 'heavy_multiplication_x'],
                ['💲', 'heavy_dollar_sign'],
                ['💱', 'currency_exchange'],
                ['™️', 'tm'],
                ['©️', 'copyright'],
                ['®️', 'registered'],
                ['〰️', 'wavy_dash'],
                ['➰', 'curly_loop'],
                ['➿', 'loop'],
                ['🔚', 'end'],
                ['🔙', 'back'],
                ['🔛', 'on'],
                ['🔝', 'top'],
                ['🔜', 'soon'],
                ['✔️', 'heavy_check_mark'],
                ['☑️', 'ballot_box_with_check'],
                ['🔘', 'radio_button'],
                ['⚪️', 'white_circle'],
                ['⚫️', 'black_circle'],
                ['🔴', 'red_circle'],
                ['🔵', 'large_blue_circle'],
                ['🔺', 'small_red_triangle'],
                ['🔻', 'small_red_triangle_down'],
                ['🔸', 'small_orange_diamond'],
                ['🔹', 'small_blue_diamond'],
                ['🔶', 'large_orange_diamond'],
                ['🔷', 'large_blue_diamond'],
                ['🔳', 'white_square_button'],
                ['🔲', 'black_square_button'],
                ['▪️', 'black_small_square'],
                ['▫️', 'white_small_square'],
                ['◾️', 'black_medium_small_square'],
                ['◽️', 'white_medium_small_square'],
                ['◼️', 'black_medium_square'],
                ['◻️', 'white_medium_square'],
                ['⬛️', 'black_large_square'],
                ['⬜️', 'white_large_square'],
                ['🔈', 'speaker'],
                ['🔇', 'mute'],
                ['🔉', 'sound'],
                ['🔊', 'loud_sound'],
                ['🔔', 'bell'],
                ['🔕', 'no_bell'],
                ['📣', 'mega'],
                ['📢', 'loudspeaker'],
                ['👁‍🗨', 'eye_speech_bubble'],
                ['💬', 'speech_balloon'],
                ['💭', 'thought_balloon'],
                ['🗯', 'right_anger_bubble'],
                ['♠️', 'spades'],
                ['♣️', 'clubs'],
                ['♥️', 'hearts'],
                ['♦️', 'diamonds'],
                ['🃏', 'black_joker'],
                ['🎴', 'flower_playing_cards'],
                ['🀄️', 'mahjong'],
                ['🕐', 'clock1'],
                ['🕑', 'clock2'],
                ['🕒', 'clock3'],
                ['🕓', 'clock4'],
                ['🕔', 'clock5'],
                ['🕕', 'clock6'],
                ['🕖', 'clock7'],
                ['🕗', 'clock8'],
                ['🕘', 'clock9'],
                ['🕙', 'clock10'],
                ['🕚', 'clock11'],
                ['🕛', 'clock12'],
                ['🕜', 'clock130'],
                ['🕝', 'clock230'],
                ['🕞', 'clock330'],
                ['🕟', 'clock430'],
                ['🕠', 'clock530'],
                ['🕡', 'clock630'],
                ['🕢', 'clock730'],
                ['🕣', 'clock830'],
                ['🕤', 'clock930'],
                ['🕥', 'clock1030'],
                ['🕦', 'clock1130'],
                ['🕧', 'clock1230']
            ],
            name: 'Symbols',
            icon: ['🔠', 'capital_abcd']
        }
    ];

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ionic4-emoji-picker.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Ionic4EmojiPickerComponent = /** @class */ (function () {
        function Ionic4EmojiPickerComponent(modalCtrl) {
            this.modalCtrl = modalCtrl;
            this.emojiCategories = [];
            this.mainEmojiData = EMOJIS;
            this.currentEmojiList = [];
            this.currentCategoryName = '';
            this.isInModal = false; //To determine whether this componet is created using a modal or not
            //To determine whether this componet is created using a modal or not
            this.selectionEvent = new core.EventEmitter(); //TO emmit event when an emoji is selected
        }
        /**
         * @return {?}
         */
        Ionic4EmojiPickerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.getEmojiCategories();
        };
        /**
         * @return {?}
         */
        Ionic4EmojiPickerComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            console.log('ngAfterViewInit');
            this.setActiveCategorySlide();
            this.slides.ionSlideDidChange.subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                console.log('Slide changed data', data);
                _this.setActiveCategorySlide();
            }));
        };
        /**
         * @return {?}
         */
        Ionic4EmojiPickerComponent.prototype.getEmojiCategories = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.mainEmojiData.forEach((/**
             * @param {?} category
             * @return {?}
             */
            function (category) {
                _this.emojiCategories.push(category);
            }));
            this.currentCategoryName = this.emojiCategories[0].name;
            this.currentEmojiList = this.emojiCategories[0].emojis;
        };
        /**
         * @param {?} selectedEmojiList
         * @param {?} categoryIndex
         * @return {?}
         */
        Ionic4EmojiPickerComponent.prototype.categoryChanged = /**
         * @param {?} selectedEmojiList
         * @param {?} categoryIndex
         * @return {?}
         */
        function (selectedEmojiList, categoryIndex) {
            this.currentEmojiList = selectedEmojiList.emojis;
            this.currentCategoryName = selectedEmojiList.name;
            this.slides.slideTo(categoryIndex);
            this.setActiveCategorySlide();
        };
        /**
         * @param {?} code
         * @return {?}
         */
        Ionic4EmojiPickerComponent.prototype.selectEmoji = /**
         * @param {?} code
         * @return {?}
         */
        function (code) {
            /** @type {?} */
            var selectionData = {
                data: code
            };
            this.selectionEvent.emit(selectionData);
            if (this.isInModal) {
                this.modalCtrl.dismiss(selectionData); //Dismiss the modal with data
            }
        };
        /**
         * @return {?}
         */
        Ionic4EmojiPickerComponent.prototype.setActiveCategorySlide = /**
         * @return {?}
         */
        function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.slides.getActiveIndex().then((/**
                             * @param {?} index
                             * @return {?}
                             */
                            function (index) {
                                _this.currentCategoryName = _this.emojiCategories[index].name;
                                console.log(_this.currentCategoryName);
                                /** @type {?} */
                                var categoryDiv = _this.categoryContainer.nativeElement.children.item(index);
                                _this.categoryContainer.nativeElement.scrollLeft = categoryDiv.offsetLeft - 20;
                            }))];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        Ionic4EmojiPickerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'emoji-picker',
                        template: "<ion-content>\n \n  <ion-row>\n    <ion-col size=\"12\">\n      <!--EMOJI CATEGORIES-->\n\n      <div class=\"categoryContainer\" #categoryDiv>\n        <div  class=\"category\" [class.selectedCategory]=\"currentCategoryName==item.name\" *ngFor=\"let item of emojiCategories;let i=index;\" (click)=\"categoryChanged(item,i)\">\n          <p>{{item.icon[0]}}</p>\n          <p>{{item.name}}</p>\n        </div>\n      </div>\n\n    </ion-col>\n    <ion-col size=\"12\">\n      <!--CATEGORY CONTENT-->\n\n      <ion-slides #slides pager=\"false\">\n        <ion-slide *ngFor=\"let item of emojiCategories\">\n          <ion-row>\n            <ion-col size=\"1.5\" *ngFor=\"let childItem of item.emojis\" (click)=\"selectEmoji(childItem[0])\">\n              <p style=\"margin:1px;\">{{childItem[0]}}</p>\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n      </ion-slides>\n      \n\n\n    </ion-col>\n  </ion-row>\n</ion-content>",
                        styles: [".categoryContainer\n  {\n      overflow: scroll;\n      white-space: nowrap;\n  }\n\n  .category\n  {\n      display: inline-block;\n      padding: 10px;\n      text-align: center;\n  }\n  \n  .selectedCategory\n  {\n      border-bottom: 2px solid var(--ion-color-primary);\n  }"]
                    }] }
        ];
        /** @nocollapse */
        Ionic4EmojiPickerComponent.ctorParameters = function () { return [
            { type: angular.ModalController }
        ]; };
        Ionic4EmojiPickerComponent.propDecorators = {
            slides: [{ type: core.ViewChild, args: ['slides', { static: false },] }],
            categoryContainer: [{ type: core.ViewChild, args: ['categoryDiv', { static: false },] }],
            isInModal: [{ type: core.Input, args: ['isInModal',] }],
            selectionEvent: [{ type: core.Output, args: ['onEmojiSelect',] }]
        };
        return Ionic4EmojiPickerComponent;
    }());
    if (false) {
        /** @type {?} */
        Ionic4EmojiPickerComponent.prototype.slides;
        /** @type {?} */
        Ionic4EmojiPickerComponent.prototype.categoryContainer;
        /** @type {?} */
        Ionic4EmojiPickerComponent.prototype.emojiCategories;
        /** @type {?} */
        Ionic4EmojiPickerComponent.prototype.mainEmojiData;
        /** @type {?} */
        Ionic4EmojiPickerComponent.prototype.currentEmojiList;
        /** @type {?} */
        Ionic4EmojiPickerComponent.prototype.currentCategoryName;
        /** @type {?} */
        Ionic4EmojiPickerComponent.prototype.isInModal;
        /** @type {?} */
        Ionic4EmojiPickerComponent.prototype.selectionEvent;
        /**
         * @type {?}
         * @private
         */
        Ionic4EmojiPickerComponent.prototype.modalCtrl;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ionic4-emoji-picker.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Ionic4EmojiPickerModule = /** @class */ (function () {
        function Ionic4EmojiPickerModule() {
        }
        Ionic4EmojiPickerModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [Ionic4EmojiPickerComponent],
                        entryComponents: [Ionic4EmojiPickerComponent],
                        imports: [
                            common.CommonModule,
                            angular.IonicModule.forRoot()
                        ],
                        exports: [Ionic4EmojiPickerComponent]
                    },] }
        ];
        return Ionic4EmojiPickerModule;
    }());

    exports.Ionic4EmojiPickerComponent = Ionic4EmojiPickerComponent;
    exports.Ionic4EmojiPickerModule = Ionic4EmojiPickerModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ionic4-emoji-picker.umd.js.map

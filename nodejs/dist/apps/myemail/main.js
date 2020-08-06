/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const nestjs_toolbox_1 = __webpack_require__(1);
const core_1 = __webpack_require__(2);
const cookieParser = __webpack_require__(3);
const express = __webpack_require__(4);
const winston = __webpack_require__(5);
const environment_1 = __webpack_require__(6);
const app_module_1 = __webpack_require__(9);
const corsOptions = {
    origin: function (origin, callback) {
        callback(null, true);
        return;
        const localByPass = !environment_1.environment.production && /^(?:https?:\/\/)?localhost.*/.test(origin);
        const regEx = new RegExp(`^(?:https:\/\/)?.*\.${environment_1.environment.host}`);
        if (regEx.test(origin) || localByPass) {
            // remove 1 after development
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200,
    allowedHeaders: ['Cache-Control', 'Content-Type', 'X-Auth-Client', 'X-Auth-Token'],
    methods: ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'PATCH', 'POST', 'PUT'],
    credentials: true,
};
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const expressServer = express();
        const app = yield core_1.NestFactory.create(app_module_1.AppModule, {
            logger: new nestjs_toolbox_1.WinstonLoggerService({
                projectName: 'EmailServer',
                transports: [
                    new winston.transports.Console({
                        level: !environment_1.environment.production ? 'info' : 'warn',
                        format: winston.format.combine(winston.format.colorize(), winston.format.prettyPrint()),
                    }),
                ],
            }),
        });
        app.enableCors(corsOptions);
        app.use(cookieParser());
        yield app.listen(3030);
    });
}
bootstrap();


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@lupu60/nestjs-toolbox");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = void 0;
const dotenv = __webpack_require__(7);
const path = __webpack_require__(8);
let isDev = false;
if (process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'local') {
    isDev = true;
}
if (process.env.NODE_ENV === 'local') {
    const enfFile = path.resolve(__dirname, `../../../env/.env.${isDev ? 'local' : 'production'}`);
    dotenv.config({
        path: enfFile,
    });
}
exports.environment = {
    production: !isDev,
    host: 'email.com',
    jwt: {
        token: process.env.JWT_TOKEN,
        expirationSeconds: 10 * 365 * 24 * 60 * 60 * 1000,
        cookieName: 'Authentication',
    },
    databases: {
        mariadb: {
            host: process.env.MARIADB_HOST,
            port: parseInt(process.env.MARIADB_PORT, 10),
            user: process.env.MARIADB_USER,
            password: process.env.MARIADB_PASSWORD,
            database: process.env.MARIADB_DATABASE,
        },
    },
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = __webpack_require__(10);
const emails_1 = __webpack_require__(11);
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [emails_1.EmailsModule],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(12), exports);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailsModule = void 0;
const common_1 = __webpack_require__(10);
const database_1 = __webpack_require__(13);
const emails_controller_1 = __webpack_require__(33);
const emails_service_1 = __webpack_require__(34);
let EmailsModule = class EmailsModule {
};
EmailsModule = __decorate([
    common_1.Module({
        imports: [database_1.EmailsDBModule],
        controllers: [emails_controller_1.EmailsAPIController],
        providers: [emails_service_1.EmailsAPIService],
    })
], EmailsModule);
exports.EmailsModule = EmailsModule;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(14), exports);
__exportStar(__webpack_require__(16), exports);


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(15), exports);


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
var Database;
(function (Database) {
    let Type;
    (function (Type) {
        Type["MARIADB"] = "maria_db";
    })(Type = Database.Type || (Database.Type = {}));
})(Database = exports.Database || (exports.Database = {}));


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(17), exports);
__exportStar(__webpack_require__(29), exports);
__exportStar(__webpack_require__(32), exports);


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailsDBService = void 0;
const environment_1 = __webpack_require__(6);
const common_1 = __webpack_require__(10);
const emails_schema_1 = __webpack_require__(18);
const operators_1 = __webpack_require__(21);
const base_service_1 = __webpack_require__(22);
const database_service_1 = __webpack_require__(26);
const logger = new common_1.Logger('EmailsDBService');
let EmailsDBService = class EmailsDBService extends base_service_1.BaseService {
    constructor(database, mariaDbService) {
        super(database, environment_1.environment.databases.mariadb ? mariaDbService : null);
    }
    /**
     * Get all the emails from the database with only email meta data
     *
     * @param {number} id
     * @returns {Observable<Database.Results<Emails>>}
     */
    select(options = { deleted: false }) {
        this.checkDatabaseService();
        const { sql, values } = this.dbService.select(null, options);
        return this.database.query(sql, values).pipe(operators_1.map((results) => {
            return this.dbService.normalize(results);
        }));
    }
    /**
     * Get a single email from the database with parsed email content
     *
     * @param {number} id
     * @returns {Observable<Database.Results<Emails>>}
     */
    get(id) {
        return super._get(id);
    }
    /**
     * Get a single email from the database with parsed email content
     *
     * @param {Email} email
     * @returns {Observable<Database.Results<Emails>>}
     */
    delete(email) {
        return super._updateWithOptions(email, { deleted: true });
    }
};
EmailsDBService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof database_service_1.DatabaseService !== "undefined" && database_service_1.DatabaseService) === "function" ? _a : Object, typeof (_b = typeof emails_schema_1.MariaDBEmails !== "undefined" && emails_schema_1.MariaDBEmails) === "function" ? _b : Object])
], EmailsDBService);
exports.EmailsDBService = EmailsDBService;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MariaDBEmails = void 0;
const common_1 = __webpack_require__(10);
const getBoolean_1 = __webpack_require__(19);
const base_schema_1 = __webpack_require__(20);
let MariaDBEmails = class MariaDBEmails extends base_schema_1.MariaDBSchema {
    constructor() {
        super(...arguments);
        this.Table = 'Emails';
        this.EmailID = 'EmailID';
        this.Body = 'Body';
        this.Read = 'Read';
        this.Deleted = 'Deleted';
    }
    emailID() {
        return this.Table + '.' + this.EmailID;
    }
    body() {
        return this.Table + '.' + this.Body;
    }
    read() {
        return this.Table + '.' + this.Read;
    }
    deleted() {
        return this.Table + '.' + this.Deleted;
    }
    update(id, options) {
        const sets = [
            (options === null || options === void 0 ? void 0 : options.hasOwnProperty('read')) ? `${this.read()} = ${options.read ? 1 : 0}` : null,
            (options === null || options === void 0 ? void 0 : options.hasOwnProperty('deleted')) ? `${this.deleted()} = ${options.deleted ? 1 : 0}` : null,
        ].filter(value => !!value);
        const sql = [
            `
  UPDATE ${this.Table} SET
  `,
            sets.join(', '),
            `WHERE ${this.emailID()} = ?`,
        ].filter(value => !!value);
        const values = [id].filter(value => !!value);
        return {
            sql: sql.join(' '),
            values: values,
        };
    }
    select(id, options, count) {
        const where = [
            id ? `${this.emailID()} = ?` : null,
            (options === null || options === void 0 ? void 0 : options.hasOwnProperty('read')) ? `${this.read()} = ${options.read ? 1 : 0}` : null,
            (options === null || options === void 0 ? void 0 : options.hasOwnProperty('deleted')) ? `${this.deleted()} = ${options.deleted ? 1 : 0}` : null,
        ].filter(value => !!value);
        const sql = [
            `
SELECT ${!!count ? `COUNT(${this.emailID()}) AS Count` : '*'}
FROM ${this.Table}
`,
            where.length > 0 ? `WHERE ${where.join(' AND ')}` : null,
        ];
        return {
            sql: sql.join(' '),
            values: this.values(id, options),
        };
    }
    values(id, options) {
        return [id ? id : null].filter(value => !!value);
    }
    from(record) {
        return super._from(record, this.EmailID, () => {
            const original = record[this.Body].toString().trim(); // Convert Buffer to String
            return {
                id: parseInt(record[this.EmailID], 10),
                original: original,
                read: getBoolean_1.getBoolean(record[this.Read]),
                deleted: getBoolean_1.getBoolean(record[this.Deleted]),
            };
        });
    }
    normalize(results, storedProcedure = false) {
        return super._normalize(this, results, storedProcedure);
    }
};
MariaDBEmails = __decorate([
    common_1.Injectable()
], MariaDBEmails);
exports.MariaDBEmails = MariaDBEmails;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getBoolean = void 0;
function getBoolean(value) {
    if (!!value) {
        switch (value) {
            case true:
                return true;
        }
        switch (value.toString().toLowerCase()) {
            case 'true':
            case '1':
            case 'on':
            case 'yes':
                return true;
        }
        switch (parseInt(value.toString(), 10)) {
            case 1:
                return true;
        }
    }
    return false;
}
exports.getBoolean = getBoolean;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MariaDBSchema = void 0;
class MariaDBSchema {
    _count(record) {
        if (record && typeof record.Count !== 'undefined' && record.Count !== null) {
            return record.Count;
        }
    }
    _from(record, primaryKey, cb) {
        if (record && typeof record.Count !== 'undefined' && record.Count !== null) {
            return record.Count;
        }
        if (!record || !record[primaryKey]) {
            return null;
        }
        return cb();
    }
    _normalize(_this, results, storedProcedure = false) {
        const records = [];
        const meta = {
            numberRows: 0,
            warningStatus: 0,
        };
        if (storedProcedure && results && results[0]) {
            results = results[0];
        }
        if (results.meta && results.warningStatus) {
            meta.warningStatus = results.meta.warningStatus;
            meta.numberRows = results.meta.length;
            delete results.meta;
        }
        if (results && results.length > 0) {
            results.forEach((record) => {
                records.push(_this.from(record));
            });
        }
        return { records: records, meta: meta };
    }
}
exports.MariaDBSchema = MariaDBSchema;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("rxjs/operators");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
const common_1 = __webpack_require__(10);
const moment = __webpack_require__(23);
const rxjs_1 = __webpack_require__(24);
const operators_1 = __webpack_require__(21);
const uuid_1 = __webpack_require__(25);
const logger = new common_1.Logger('BaseService');
class BaseService {
    constructor(database, dbService) {
        this.database = database;
        this.dbService = dbService;
    }
    checkDatabaseService() {
        if (this.dbService) {
            return true;
        }
        throw new Error('No database connected');
    }
    _get(id) {
        this.checkDatabaseService();
        const { sql, values } = this.dbService.select(id);
        return this.database.query(sql, values).pipe(operators_1.map((results) => {
            return this.dbService.normalize(results);
        }));
    }
    _select() {
        this.checkDatabaseService();
        const { sql, values } = this.dbService.select();
        return this.database.query(sql, values).pipe(operators_1.map((results) => {
            return this.dbService.normalize(results);
        }));
    }
    _updateWithOptions(record, options) {
        const { sql, values } = this.dbService.update(record.id, options);
        return this.database.update(sql, values).pipe(operators_1.map((meta) => {
            const updatedRecord = Object.assign(record, options);
            updatedRecord.modifiedAt = moment();
            const returnRecord = {
                records: [updatedRecord],
                meta: meta,
            };
            return returnRecord;
        }));
    }
    _delete(record) {
        this.checkDatabaseService();
        const options = {
            deleted: true,
        };
        return this._updateWithOptions(record, options);
    }
    getByUUID(uuid) {
        this.checkDatabaseService();
        const { sql, values } = this.dbService.select(null, { uuid: uuid });
        return this.run(sql, values);
    }
    countByUUID(uuid) {
        this.checkDatabaseService();
        const { sql, values } = this.dbService.select(null, { uuid: uuid }, true);
        return this.count(sql, values);
    }
    getIdByUUID(uuid) {
        return this.getByUUID(uuid).pipe(operators_1.map((results) => {
            if (results && results.records && results.records.length === 1) {
                return results.records[0].id;
            }
            return null;
        }));
    }
    count(sql, values) {
        return this.run(sql, values).pipe(operators_1.map(results => {
            return this.getCount(results);
        }));
    }
    run(sql, values) {
        return this.database.query(sql, values).pipe(operators_1.map((results) => {
            return this.dbService.normalize(results);
        }));
    }
    getCount(results) {
        return {
            records: results.records && results.records.length === 1 ? results.records[0] : null,
            meta: results.meta,
        };
    }
    uuid() {
        let uuid = null;
        return rxjs_1.of(uuid_1.v1()).pipe(operators_1.mergeMap((_uuid) => {
            uuid = _uuid;
            return this.countByUUID(uuid);
        }), operators_1.mergeMap((users) => {
            if (users.records && users.records > 0) {
                return this.uuid();
            }
            return rxjs_1.of(uuid);
        }));
    }
}
exports.BaseService = BaseService;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseService = void 0;
const common_1 = __webpack_require__(10);
const rxjs_1 = __webpack_require__(24);
const operators_1 = __webpack_require__(21);
const environment_1 = __webpack_require__(6);
const database_model_1 = __webpack_require__(15);
const mariadb_service_1 = __webpack_require__(27);
const logger = new common_1.Logger('DatabaseService');
let DatabaseService = class DatabaseService {
    constructor(mariaDb) {
        this.mariaDb = mariaDb;
        this.dbType = null;
        if (environment_1.environment.databases.mariadb) {
            this.dbType = database_model_1.Database.Type.MARIADB;
            this.connect();
        }
    }
    connect() {
        if (environment_1.environment.databases.mariadb) {
            this.mariaDb.setPool(environment_1.environment.databases.mariadb.host, environment_1.environment.databases.mariadb.port, environment_1.environment.databases.mariadb.user, environment_1.environment.databases.mariadb.password, environment_1.environment.databases.mariadb.database);
        }
    }
    getConnector() {
        if (!this._connector) {
            if (this.dbType === database_model_1.Database.Type.MARIADB) {
                this._connector = this.mariaDb.connection;
            }
        }
        if (!this._connector) {
            throw new Error('Database connection not defined');
        }
        return this._connector;
    }
    insert(sql, values) {
        return this.query(sql, values);
    }
    update(sql, values) {
        return this.query(sql, values);
    }
    query(sql, values) {
        if (this.dbType === database_model_1.Database.Type.MARIADB) {
            return this.mariaDbQuery(sql, values, 0);
        }
    }
    errorHandler(error, sql, values, kill = 0) {
        logger.warn({
            DatabaseService: error,
        });
        logger.log({ code: error.code, connectionLost: error.code === 'ER_CMD_CONNECTION_CLOSED' });
        if (error.code === 'ER_CMD_CONNECTION_CLOSED' && kill < 10) {
            this._connector = null;
            this.connect();
            if (this.dbType === database_model_1.Database.Type.MARIADB) {
                return this.mariaDbQuery(sql, values, kill + 1);
            }
        }
        throw new Error(`Error in SQL: ${error}`);
    }
    mariaDbQuery(sql, values, kill = 0) {
        let _connection = null;
        return this.getConnector().pipe(operators_1.mergeMap((connection) => {
            _connection = connection;
            if (values && values.length > 0) {
                return rxjs_1.from(_connection.query(sql, values));
            }
            return rxjs_1.from(_connection.query(sql));
        }), operators_1.tap(() => {
            _connection.end();
        }), operators_1.catchError(error => {
            if (_connection) {
                _connection.end();
            }
            return this.errorHandler(error, sql, values, kill);
        }));
    }
};
DatabaseService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof mariadb_service_1.MariaDbService !== "undefined" && mariadb_service_1.MariaDbService) === "function" ? _a : Object])
], DatabaseService);
exports.DatabaseService = DatabaseService;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MariaDbService = void 0;
const common_1 = __webpack_require__(10);
const mariadb = __webpack_require__(28);
const rxjs_1 = __webpack_require__(24);
const logger = new common_1.Logger('MariaDbService');
let MariaDbService = class MariaDbService {
    constructor() {
        this._pool = null;
        this.connectionLimit = 5;
    }
    get connection() {
        return rxjs_1.from(this._pool.getConnection());
    }
    setPool(host, port, user, password, database) {
        this._pool = mariadb.createPool({
            host: host,
            port: port,
            user: user,
            password: password,
            database: database,
            connectionLimit: this.connectionLimit,
        });
    }
};
MariaDbService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], MariaDbService);
exports.MariaDbService = MariaDbService;


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("mariadb");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailsDBModule = void 0;
const common_1 = __webpack_require__(10);
const emails_service_1 = __webpack_require__(17);
const database_module_1 = __webpack_require__(30);
const mariadb_module_1 = __webpack_require__(31);
let EmailsDBModule = class EmailsDBModule {
};
EmailsDBModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule, mariadb_module_1.MariaDbModule],
        exports: [emails_service_1.EmailsDBService],
        providers: [emails_service_1.EmailsDBService],
    })
], EmailsDBModule);
exports.EmailsDBModule = EmailsDBModule;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = __webpack_require__(10);
const database_service_1 = __webpack_require__(26);
const mariadb_module_1 = __webpack_require__(31);
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    common_1.Module({
        imports: [mariadb_module_1.MariaDbModule],
        exports: [database_service_1.DatabaseService],
        providers: [database_service_1.DatabaseService],
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MariaDbModule = void 0;
const common_1 = __webpack_require__(10);
const mariadb_service_1 = __webpack_require__(27);
const emails_schema_1 = __webpack_require__(18);
let MariaDbModule = class MariaDbModule {
};
MariaDbModule = __decorate([
    common_1.Module({
        imports: [],
        exports: [emails_schema_1.MariaDBEmails, mariadb_service_1.MariaDbService],
        providers: [emails_schema_1.MariaDBEmails, mariadb_service_1.MariaDbService],
    })
], MariaDbModule);
exports.MariaDbModule = MariaDbModule;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailsAPIController = void 0;
const common_1 = __webpack_require__(10);
const rxjs_1 = __webpack_require__(24);
const operators_1 = __webpack_require__(21);
const emails_service_1 = __webpack_require__(34);
const emails_model_1 = __webpack_require__(37);
const logger = new common_1.Logger('EmailsAPIController');
/**
 * API Route /emails
 */
let EmailsAPIController = class EmailsAPIController {
    constructor(apiService) {
        this.apiService = apiService;
    }
    /**
     * Get all emails
     *
     * @returns {Observable<EmailsDTO.GET.Response>} Observable of Products
     */
    // @UseGuards(JwtAuthGuard)
    all() {
        return this.apiService.all().pipe(operators_1.map((categories) => {
            return Object.assign(emails_model_1.EmailsDTO.GET.Response.Status, {
                data: categories,
            });
        }));
    }
    /**
     * Get all deleted emails
     *
     * @returns {Observable<EmailsDTO.GET.Response>} Observable of Products
     */
    // @UseGuards(JwtAuthGuard)
    allDeleted() {
        return this.apiService.allDeleted().pipe(operators_1.map((categories) => {
            return Object.assign(emails_model_1.EmailsDTO.GET.Response.Status, {
                data: categories,
            });
        }));
    }
    /**
     * Get an email by id
     *
     * @returns {Observable<EmailDTO.GET.Response>} Observable of Products
     */
    // @UseGuards(JwtAuthGuard)
    get(params) {
        if (!params.id) {
            throw new common_1.NotFoundException('Email not found');
        }
        const id = parseInt(params.id.toString(), 10);
        if (isNaN(id)) {
            throw new common_1.NotFoundException('Email not found');
        }
        return this.apiService.get(id).pipe(operators_1.map((emails) => {
            return Object.assign(emails_model_1.EmailDTO.GET.Response.Status, {
                data: emails,
            });
        }));
    }
    /**
     * Get an email by id
     *
     * @returns {Observable<EmailDTO.DELETE.Response>} Observable of Products
     */
    // @UseGuards(JwtAuthGuard)
    delete(params) {
        if (!params.id) {
            throw new common_1.NotFoundException('Email not found');
        }
        const id = parseInt(params.id.toString(), 10);
        if (isNaN(id)) {
            throw new common_1.NotFoundException('Email not found');
        }
        return this.apiService.delete(id).pipe(operators_1.map((emails) => {
            return Object.assign(emails_model_1.EmailDTO.DELETE.Response.Status, {
                data: emails,
            });
        }));
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_a = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _a : Object)
], EmailsAPIController.prototype, "all", null);
__decorate([
    common_1.Get('deleted'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_b = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _b : Object)
], EmailsAPIController.prototype, "allDeleted", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_c = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _c : Object)
], EmailsAPIController.prototype, "get", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_d = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _d : Object)
], EmailsAPIController.prototype, "delete", null);
EmailsAPIController = __decorate([
    common_1.Controller('emails'),
    __metadata("design:paramtypes", [typeof (_e = typeof emails_service_1.EmailsAPIService !== "undefined" && emails_service_1.EmailsAPIService) === "function" ? _e : Object])
], EmailsAPIController);
exports.EmailsAPIController = EmailsAPIController;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailsAPIService = void 0;
const common_1 = __webpack_require__(10);
const iconv = __webpack_require__(35);
const quotedPrintable = __webpack_require__(36);
const operators_1 = __webpack_require__(21);
const database_1 = __webpack_require__(13);
const logger = new common_1.Logger('EmailsAPIService');
var Headers;
(function (Headers) {
    Headers["TO"] = "to";
    Headers["FROM"] = "from";
    Headers["SUBJECT"] = "subject";
    Headers["DATE"] = "date";
    Headers["CONTENT_TYPE"] = "content-type";
    Headers["CONTENT_ENCODING"] = "content-transfer-encoding";
})(Headers || (Headers = {}));
var ContentEncoding;
(function (ContentEncoding) {
    ContentEncoding["QUOTED"] = "quoted-printable";
    ContentEncoding["BIT_7"] = "7bit";
})(ContentEncoding || (ContentEncoding = {}));
let EmailsAPIService = class EmailsAPIService {
    constructor(emailsDb) {
        this.emailsDb = emailsDb;
    }
    /**
     * Get all emails from the database
     *
     * @returns {Observable<Emails>} Observable of Emails
     */
    all() {
        return this.emailsDb.select().pipe(operators_1.map((results) => {
            if (results.records && results.records.length > 0) {
                return results.records;
            }
            throw new common_1.NotFoundException('Emails not found');
        }), operators_1.map((records) => {
            records.map((email) => {
                return this.parseEmail(email);
            });
            return records;
        }));
    }
    /**
     * Get all deleted emails from the database
     *
     * @returns {Observable<Emails>} Observable of Emails
     */
    allDeleted() {
        return this.emailsDb.select({ deleted: true }).pipe(operators_1.map((results) => {
            if (results.records && results.records.length > 0) {
                return results.records;
            }
            throw new common_1.NotFoundException('Emails not found');
        }), operators_1.map((records) => {
            records.map((email) => {
                return this.parseEmail(email);
            });
            return records;
        }));
    }
    /**
     * Get an email from the database
     *
     * @param {string} uuid Email's UUID
     * @returns {Observable<Emails>} Observable of Emails
     */
    get(id) {
        return this.emailsDb.get(id).pipe(operators_1.map((results) => {
            if (results.records && results.records.length === 1) {
                return results.records;
            }
            throw new common_1.NotFoundException('Email not found');
        }), operators_1.map((records) => {
            records.map((email) => {
                return this.parseEmail(email, false);
            });
            return records;
        }));
    }
    delete(id) {
        return this.emailsDb.get(id).pipe(operators_1.map((results) => {
            if (results.records && results.records.length === 1) {
                return results.records[0];
            }
            throw new common_1.NotFoundException('Email not found');
        }), operators_1.mergeMap((email) => {
            return this.emailsDb.delete(email);
        }), operators_1.map((results) => {
            if (results.records && results.records.length === 1) {
                return results.records;
            }
            throw new common_1.UnprocessableEntityException('Email failed to delete');
        }));
    }
    /**
     * Parse the email looking for meta data and parse for content if required
     *
     * @param {Email} email Email to parse
     * @param {boolean} metaOnly Return only meta data
     * @returns {Email} Parsed email with added meta data and email content
     */
    parseEmail(email, metaOnly = true) {
        const { to, from, subject, date, contentType, charSet, contentEncoding, boundary, body, } = this.getHeaders(email.original);
        let contents = {
            plain: null,
            html: null,
        };
        // If only need meta data then remove the original to return smaller payload
        if (metaOnly) {
            email.original = null;
        }
        else {
            // Else if there was a boundary, parse the email for the plain text and html versions of the email
            if (!!boundary) {
                contents = this.getBoundaryParts(contentType, boundary, body);
            }
            else {
                // Else return either the plain or html version of the email
                contents.html = this.getHTML(contentType, charSet, contentEncoding, body);
                contents.plain = this.getPlain(contentType, charSet, contentEncoding, body);
            }
        }
        // Assign meta data and email content to the email object
        return Object.assign(email, {
            to: to,
            from: from,
            subject: subject,
            date: date,
            plain: contents.plain,
            html: contents.html,
        });
    }
    /**
     * Does the content type contain a boundary option
     *
     * @param {string} contentType Content-Type
     * @returns {boolean}
     */
    isBoundary(contentType) {
        return /.*?boundary="(.*?)"/.test(contentType);
    }
    /**
     * Does the content type a multipart alternative
     *
     * @param {string} contentType Content-Type
     * @returns {boolean}
     */
    isAlternative(contentType) {
        return /^multipart\/alternative/.test(contentType);
    }
    /**
     * Does the content type html
     *
     * @param {string} contentType Content-Type
     * @returns {boolean}
     */
    isHTML(contentType) {
        return /^text\/html/.test(contentType);
    }
    /**
     * Does the content type plain text
     *
     * @param {string} contentType Content-Type
     * @returns {boolean}
     */
    isPlain(contentType) {
        return /^text\/plain/.test(contentType);
    }
    /**
     * Get the boundary value from the content type
     *
     * @param {string} contentType Content-Type
     * @returns {string} Boundary
     */
    getBoundary(contentType) {
        if (this.isAlternative(contentType)) {
            return contentType.replace(/^multipart\/alternative; ?boundary="(.*?)"/, '$1').trim();
        }
        if (this.isBoundary(contentType)) {
            return contentType.replace(/.*?boundary="(.*?)"/, '$1').trim();
        }
        return null;
    }
    /**
     * Parse email content and return found headers
     *
     * @param {string} original Original Email or Origin Email Part
     * @returns {EmailComponents} Email Components
     */
    getHeaders(original) {
        const components = original.trim().split(/^$/gm);
        const headerString = components.shift();
        const headers = headerString.split(/[\r\n]/gm);
        const parsedComponents = {
            to: null,
            from: null,
            subject: null,
            date: null,
            contentType: 'text/html',
            charSet: 'utf-8',
            contentEncoding: '8bit',
            boundary: null,
            body: components.join('\n').trim(),
        };
        headers.forEach((header) => {
            const components = header.split(':');
            const key = components[0].trim();
            if (components.length > 1) {
                const value = components[1].trim();
                switch (key.toLowerCase()) {
                    case Headers.TO:
                        parsedComponents.to = this.getContact(value);
                        break;
                    case Headers.FROM:
                        parsedComponents.from = this.getContact(value);
                        break;
                    case Headers.SUBJECT:
                        parsedComponents.subject = value;
                        break;
                    case Headers.DATE:
                        parsedComponents.date = new Date(value);
                        break;
                    case Headers.CONTENT_TYPE:
                        parsedComponents.contentType = value;
                        parsedComponents.charSet = value.replace(/.*?charset=(.*?)$/gi, '$1').toLowerCase();
                        parsedComponents.boundary = this.getBoundary(value);
                        break;
                    case Headers.CONTENT_ENCODING:
                        parsedComponents.contentEncoding = value;
                        break;
                }
            }
            else if (!parsedComponents.boundary) {
                parsedComponents.boundary = this.getBoundary(key);
            }
        });
        return parsedComponents;
    }
    /**
     * Parse the contact information and return name and email
     *
     * @param {string} orgContact Original Contact
     * @returns {EmailContact} Email Contact
     */
    getContact(orgContact) {
        const contact = {
            name: null,
            email: null,
        };
        const email = orgContact.replace(/.*?<(.*?)>/, '$1');
        const name = orgContact.replace(/\W?<.*?>/, '');
        if (!name || name === email) {
            contact.email = email;
        }
        else {
            contact.name = name;
            contact.email = email;
        }
        return contact;
    }
    /**
     * Parse the provided content and return the normalized html portion of the email
     *
     * @param {string} contentType Email Content Type
     * @param {string} charSet Email Character Set
     * @param {string} contentEncoding Email Content Encoding
     * @param {string} body Email Body
     * @returns {string} Normalized Email Body in HTML
     */
    getHTML(contentType, charSet, contentEncoding, body) {
        if (this.isHTML(contentType)) {
            let normalize = this.normalizeEncoding(charSet, contentEncoding, body);
            normalize = normalize.replace(/[\r\n\t]/g, '').replace(/\s{2,}/g, '');
            normalize = normalize.replace(/.*?<body(.*?)>(.*)<\/(body)>.*/, '<div$1>$2</div>');
            return normalize;
        }
        return null;
    }
    /**
     * Parse the provided content and return the normalized plain text portion of the email in html
     *
     * @param {string} contentType Email Content Type
     * @param {string} charSet Email Character Set
     * @param {string} contentEncoding Email Content Encoding
    c
     * @returns {string} Normalized Email Body in HTML
     */
    getPlain(contentType, charSet, contentEncoding, body) {
        if (this.isPlain(contentType)) {
            let normalize = this.normalizeEncoding(charSet, contentEncoding, body);
            normalize = normalize.replace(/&amp;/g, '&');
            return this.convertTextToHtml(normalize);
        }
        return null;
    }
    /**
     * Parse the email looking for the boundary parts and return normalized html and plain text components of email
     *
     * @param {string} contentType Email Content Type
     * @param {string} boundary Boundary
     * @param {string} body Email Body
     * @returns {EmailContents} Email Contents
     */
    getBoundaryParts(contentType, boundary, body) {
        const contents = {
            plain: null,
            html: null,
        };
        if (this.isAlternative(contentType) && boundary) {
            const bodyComponents = body.split(`--${boundary}`);
            bodyComponents.forEach((bodyComponent) => {
                if (bodyComponent.length > 0 && bodyComponent !== '--') {
                    const { contentType, charSet, contentEncoding, body } = this.getHeaders(bodyComponent);
                    const html = this.getHTML(contentType, charSet, contentEncoding, body);
                    const plain = this.getPlain(contentType, charSet, contentEncoding, body);
                    if (!contents.html && !!html) {
                        contents.html = html;
                    }
                    if (!contents.plain && !!plain) {
                        contents.plain = plain;
                    }
                }
            });
        }
        return contents;
    }
    /**
     * Attempt to normalize the email content to utf-8
     *
     * @param {string} charSet Character Set
     * @param {string} contentEncoding Content Encoding
     * @param {string} body Email Body
     * @returns {string} UTF-8 version of email
     */
    normalizeEncoding(charSet, contentEncoding, body) {
        if (contentEncoding === ContentEncoding.QUOTED) {
            body = quotedPrintable.decode(body);
        }
        else if (contentEncoding === ContentEncoding.BIT_7) {
            body = body.replace(/(.)[\r\n](.)/g, '$1$2');
        }
        if (iconv.encodingExists(charSet)) {
            return iconv.decode(Buffer.from(body, 'binary'), charSet);
        }
        return body;
    }
    /**
     * Convert plain text version of email to a renderable html version with embedded links
     *
     * @param {string} plain Plain text version of email
     * @returns {string} Html version of plain text email
     */
    convertTextToHtml(plain) {
        let html = '';
        plain = plain.trim();
        if (plain.length > 0) {
            html += '<p>'; // begin by creating paragraph
            for (let counter = 0; counter < plain.length; counter++) {
                switch (plain[counter]) {
                    case '\n':
                    case '\r':
                        if (plain[counter + 1] === '\n' || plain[counter + 1] === '\r') {
                            html += '</p><p>';
                            counter++;
                        }
                        else
                            html += '<br />';
                        break;
                    case ' ':
                        if (plain[counter - 1] != ' ' && plain[counter - 1] != '\t')
                            html += ' ';
                        break;
                    case '\t':
                        if (plain[counter - 1] != '\t')
                            html += ' ';
                        break;
                    default:
                        html += plain[counter];
                }
            }
            html += '</p>'; // finally close paragraph
        }
        // Convert links to an anchor tag
        html = html.replace(/((ftp|https?):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?)/g, '<a href="$1">$1</a>');
        html = html.replace(/&/g, '&amp;');
        const links = html.match(/<a.*?href=".*?".*?>/g);
        if (links && links.length > 0) {
            links.forEach((link) => {
                const regEx = new RegExp(link, 'g');
                html = html.replace(regEx, link.replace(/&amp;/g, '&'));
            });
        }
        // Convert carrots to html encoded
        html = html.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        // Fix anchor tags
        html = html.replace(/&lt;a(.*?)&gt;/g, '<a$1>').replace(/&lt;\/a&gt;/g, '</a>');
        // Fix paragraph tags
        html = html.replace(/&lt;p&gt;/g, '<p>').replace(/&lt;\/p&gt;/g, '</p>');
        // Fix break tags
        html = html.replace(/&lt;br \/&gt;/g, '<br />');
        // Fix for duplicate & characters
        html = html.replace(/&&amp;amp;/g, '&amp;');
        // Remove empty paragraphs
        html = html.replace(/<p><\/p>/g, '');
        return html;
    }
};
EmailsAPIService = __decorate([
    common_1.Injectable({ scope: common_1.Scope.REQUEST }),
    __metadata("design:paramtypes", [typeof (_a = typeof database_1.EmailsDBService !== "undefined" && database_1.EmailsDBService) === "function" ? _a : Object])
], EmailsAPIService);
exports.EmailsAPIService = EmailsAPIService;


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("iconv-lite");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("quoted-printable");

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailDTO = exports.EmailsDTO = void 0;
const base_model_1 = __webpack_require__(38);
var EmailsDTO;
(function (EmailsDTO) {
    let GET;
    (function (GET) {
        let Response;
        (function (Response) {
            Response.Status = base_model_1.DTO.GET.Response.Status;
        })(Response = GET.Response || (GET.Response = {}));
    })(GET = EmailsDTO.GET || (EmailsDTO.GET = {}));
})(EmailsDTO = exports.EmailsDTO || (exports.EmailsDTO = {}));
var EmailDTO;
(function (EmailDTO) {
    let GET;
    (function (GET) {
        let Response;
        (function (Response) {
            Response.Status = base_model_1.DTO.GET.Response.Status;
        })(Response = GET.Response || (GET.Response = {}));
    })(GET = EmailDTO.GET || (EmailDTO.GET = {}));
    let DELETE;
    (function (DELETE) {
        let Response;
        (function (Response) {
            Response.Status = base_model_1.DTO.DELETE.Response.Status;
        })(Response = DELETE.Response || (DELETE.Response = {}));
    })(DELETE = EmailDTO.DELETE || (EmailDTO.DELETE = {}));
})(EmailDTO = exports.EmailDTO || (exports.EmailDTO = {}));


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DTO = void 0;
var DTO;
(function (DTO) {
    let GET;
    (function (GET) {
        let Response;
        (function (Response) {
            Response.Status = {
                statusCode: 200,
                message: null,
                error: null,
            };
        })(Response = GET.Response || (GET.Response = {}));
    })(GET = DTO.GET || (DTO.GET = {}));
    let POST;
    (function (POST) {
        let Response;
        (function (Response) {
            Response.Status = {
                statusCode: 201,
                message: null,
                error: null,
            };
        })(Response = POST.Response || (POST.Response = {}));
    })(POST = DTO.POST || (DTO.POST = {}));
    let PUT;
    (function (PUT) {
        let Response;
        (function (Response) {
            Response.Status = GET.Response.Status;
        })(Response = PUT.Response || (PUT.Response = {}));
    })(PUT = DTO.PUT || (DTO.PUT = {}));
    let DELETE;
    (function (DELETE) {
        let Response;
        (function (Response) {
            Response.Status = GET.Response.Status;
        })(Response = DELETE.Response || (DELETE.Response = {}));
    })(DELETE = DTO.DELETE || (DTO.DELETE = {}));
})(DTO = exports.DTO || (exports.DTO = {}));


/***/ })
/******/ ]);
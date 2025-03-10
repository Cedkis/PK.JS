"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _adminLog = _interopRequireDefault(require("./admin-log"));

var _adminPermission = _interopRequireDefault(require("./admin-permission"));

var _ban = _interopRequireDefault(require("./ban"));

var _directives = _interopRequireDefault(require("./directives"));

var _ipRecord = _interopRequireDefault(require("./ip-record"));

var _item = _interopRequireDefault(require("./item"));

var _mutation = _interopRequireDefault(require("./mutation"));

var _note = _interopRequireDefault(require("./note"));

var _player = _interopRequireDefault(require("./player"));

var _playerName = _interopRequireDefault(require("./player-name"));

var _playerStats = _interopRequireDefault(require("./player-stats"));

var _query = _interopRequireDefault(require("./query"));

var _scalars = _interopRequireDefault(require("./scalars"));

var _server = _interopRequireDefault(require("./server"));

var _serverConfigFile = _interopRequireDefault(require("./server-config-file"));

var _serverStats = _interopRequireDefault(require("./server-stats"));

var _serverStatus = _interopRequireDefault(require("./server-status"));

var _steamUser = _interopRequireDefault(require("./steam-user"));

var _warning = _interopRequireDefault(require("./warning"));

var _default = [_adminLog.default, _adminPermission.default, _ban.default, _directives.default, _ipRecord.default, _item.default, _mutation.default, _note.default, _player.default, _playerName.default, _playerStats.default, _query.default, _scalars.default, _server.default, _serverConfigFile.default, _serverStats.default, _serverStatus.default, _steamUser.default, _warning.default];
exports.default = _default;
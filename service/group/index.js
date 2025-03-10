const addIntoGroup = require('./addIntoGroup/index')
const exitFromGroup = require('./exitFromGroup/index')
const getAllGroup = require('./getAllGroup/index')
const getEntryGroup = require('./getEntryGroup/index')
const getManageGroup = require('./getManageGroup/index')
const getManagerGroupDetailInfo = require('./getManagerGroupDetailInfo/index')
const getShareableGroup = require('./getShareableGroup/index')
const pullVisitorFromGroup = require('./pullVisitorFromGroup/index')
const searchGroup = require('./searchGroup/index')

exports.main = async (event, context) => {
    switch (event.type) {
        case 'addIntoGroup':
            return await addIntoGroup.main(event, context);
        case 'exitFromGroup':
            return await exitFromGroup.main(event, context);
        case 'getAllGroup':
            return await getAllGroup.main(event, context);
        case 'getEntryGroup':
            return await getEntryGroup.main(event, context);
        case 'getManageGroup':
            return await getManageGroup.main(event, context);
        case 'getManagerGroupDetailInfo':
            return await getManagerGroupDetailInfo.main(event, context);
        case 'getShareableGroup':
            return await getShareableGroup.main(event, context);
        case 'pullVisitorFromGroup':
            return await pullVisitorFromGroup.main(event, context);
        case 'searchGroup':
            return await searchGroup.main(event, context);
    }
}
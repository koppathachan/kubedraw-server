export default class Utils {
    public static geFormattedtMap ( listOfMaps: [{ [key: string]: string }] ) {
		var mapData : { [key:string]:string; } = {};
		for ( let map of listOfMaps ) {
			mapData[map["key"]] = map["value"];
		}
		return mapData;
	}
};
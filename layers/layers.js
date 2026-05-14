var wms_layers = [];


        var lyr_BingVirtualEarth_0 = new ol.layer.Tile({
            'title': 'Bing VirtualEarth',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=1'
            })
        });
var format_OSM_railways_1 = new ol.format.GeoJSON();
var features_OSM_railways_1 = format_OSM_railways_1.readFeatures(json_OSM_railways_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OSM_railways_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OSM_railways_1.addFeatures(features_OSM_railways_1);
var lyr_OSM_railways_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OSM_railways_1, 
                style: style_OSM_railways_1,
                popuplayertitle: 'OSM_railways',
                interactive: true,
                title: '<img src="styles/legend/OSM_railways_1.png" /> OSM_railways'
            });

lyr_BingVirtualEarth_0.setVisible(true);lyr_OSM_railways_1.setVisible(true);
var layersList = [lyr_BingVirtualEarth_0,lyr_OSM_railways_1];
lyr_OSM_railways_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'railway': 'railway', 'source_geo': 'source_geo', 'covered': 'covered', 'surface': 'surface', 'highway': 'highway', 'foot': 'foot', 'bicycle': 'bicycle', 'descriptio': 'descriptio', 'railway_tr': 'railway_tr', 'disused_ra': 'disused_ra', 'tunnel': 'tunnel', 'source_bri': 'source_bri', 'bridge_ref': 'bridge_ref', 'service': 'service', 'old_ref': 'old_ref', 'highspeed': 'highspeed', 'source_ele': 'source_ele', 'voltage': 'voltage', 'passenger_': 'passenger_', 'frequency': 'frequency', 'razed_rail': 'razed_rail', 'alt_name': 'alt_name', 'bridge': 'bridge', 'abandoned_': 'abandoned_', 'ref_seq': 'ref_seq', 'ref_elr': 'ref_elr', 'railway__1': 'railway__1', 'layer': 'layer', 'cutting': 'cutting', 'usage': 'usage', 'tracks': 'tracks', 'ref_lor': 'ref_lor', 'ref': 'ref', 'railway_tp': 'railway_tp', 'railway_aw': 'railway_aw', 'passenger': 'passenger', 'operator_w': 'operator_w', 'operator': 'operator', 'name': 'name', 'maxspeed': 'maxspeed', 'loading_ga': 'loading_ga', 'gauge': 'gauge', 'embankment': 'embankment', 'electrifie': 'electrifie', });
lyr_OSM_railways_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'railway': '', 'source_geo': '', 'covered': '', 'surface': '', 'highway': '', 'foot': '', 'bicycle': '', 'descriptio': '', 'railway_tr': '', 'disused_ra': '', 'tunnel': '', 'source_bri': '', 'bridge_ref': '', 'service': '', 'old_ref': '', 'highspeed': '', 'source_ele': '', 'voltage': '', 'passenger_': '', 'frequency': '', 'razed_rail': '', 'alt_name': '', 'bridge': '', 'abandoned_': '', 'ref_seq': '', 'ref_elr': '', 'railway__1': '', 'layer': '', 'cutting': '', 'usage': '', 'tracks': '', 'ref_lor': '', 'ref': '', 'railway_tp': '', 'railway_aw': '', 'passenger': '', 'operator_w': '', 'operator': '', 'name': '', 'maxspeed': '', 'loading_ga': '', 'gauge': '', 'embankment': '', 'electrifie': '', });
lyr_OSM_railways_1.set('fieldLabels', {'full_id': 'inline label - always visible', 'osm_id': 'no label', 'osm_type': 'no label', 'railway': 'inline label - visible with data', 'source_geo': 'no label', 'covered': 'no label', 'surface': 'no label', 'highway': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'descriptio': 'no label', 'railway_tr': 'no label', 'disused_ra': 'no label', 'tunnel': 'no label', 'source_bri': 'no label', 'bridge_ref': 'no label', 'service': 'no label', 'old_ref': 'no label', 'highspeed': 'no label', 'source_ele': 'no label', 'voltage': 'no label', 'passenger_': 'no label', 'frequency': 'no label', 'razed_rail': 'no label', 'alt_name': 'no label', 'bridge': 'no label', 'abandoned_': 'no label', 'ref_seq': 'no label', 'ref_elr': 'no label', 'railway__1': 'no label', 'layer': 'no label', 'cutting': 'no label', 'usage': 'no label', 'tracks': 'no label', 'ref_lor': 'no label', 'ref': 'no label', 'railway_tp': 'no label', 'railway_aw': 'no label', 'passenger': 'no label', 'operator_w': 'no label', 'operator': 'no label', 'name': 'no label', 'maxspeed': 'no label', 'loading_ga': 'no label', 'gauge': 'no label', 'embankment': 'no label', 'electrifie': 'no label', });
lyr_OSM_railways_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
import React, { useCallback, useMemo, useState } from 'react';
import { YMaps, Map, Placemark } from '@iminside/react-yandex-maps';
import styles from './ContactsMap.module.css';

const ContactsMap = ({
    fullAddress,
    mapCaption,
    fallbackCoords = [55.677933, 37.283526],
}) => {
    const [coords, setCoords] = useState(fallbackCoords);

    const mapState = useMemo(
        () => ({
            center: coords,
            zoom: 12,
            controls: [],
        }),
        [coords]
    );

    const handleMapLoad = useCallback(
        (ymaps) => {
            if (!fullAddress || !ymaps?.geocode) return;

            ymaps
                .geocode(fullAddress, { results: 1 })
                .then((result) => {
                    const first = result?.geoObjects?.get(0);
                    const pointCoords = first?.geometry?.getCoordinates?.();
                    if (Array.isArray(pointCoords) && pointCoords.length === 2) {
                        setCoords(pointCoords);
                    }
                })
                .catch(() => {
                    // fallbackCoords already used as initial state
                });
        },
        [fullAddress]
    );

    return (
        <div className={styles.mapWrap}>
            <YMaps query={{ lang: 'ru_RU', load: 'package.full' }}>
                <Map
                    state={mapState}
                    width="100%"
                    height="100%"
                    onLoad={handleMapLoad}
                    modules={['geocode', 'geoObject.addon.hint', 'geoObject.addon.balloon']}
                    options={{
                        suppressMapOpenBlock: true,
                        yandexMapDisablePoiInteractivity: true,
                    }}
                >
                    <Placemark
                        geometry={coords}
                        properties={{
                            iconCaption: mapCaption,
                            hintContent: fullAddress,
                            balloonContent: fullAddress,
                        }}
                        options={{
                            preset: 'islands#redGovernmentIcon',
                            iconCaptionMaxWidth: 200,
                            hideIconOnBalloonOpen: false,
                            openBalloonOnClick: false,
                        }}
                    />
                </Map>
            </YMaps>
        </div>
    );
};

export default ContactsMap;

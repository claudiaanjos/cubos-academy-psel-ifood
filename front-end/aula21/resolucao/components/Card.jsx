import React from "react";
import getAlbumCover from "../../utils/getAlbumCover.js";
import getArtistsNames from "../../utils/getArtistsNames.js";

function Card({ track }) {
    const { name, album, external_urls, artists } = track;

    return (
        <div className="card">
            <a href={external_urls.spotify}>
                <img src={getAlbumCover(album)} alt={`${name} album cover`} />
            </a>
            <b>{name}</b>- {getArtistsNames(artists)}
        </div>
    );
}

export default Card;
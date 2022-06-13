/* eslint-disable jsx-a11y/anchor-is-valid */

function Card(props) {
    return (
        <details className="card">
            <summary>
                {props.name}
            </summary>
            <ul>
                {
                    props.artist &&
                    <p>Исполнитель:{props.artist}</p>
                }
                {/* listeners */}
                <p>Прослушивания:{props.playcount}</p>
            </ul>
        </details>
    );
}

export default Card;
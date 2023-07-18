import { HIDDEN_IMG } from '../cards'

export function Card ({img, cardQty, clickOnCard, showImg}){
    return(
        <div
            className={`${cardQty===12?'w-20 h-20 md:w-32 md:h-32':'w-20 h-20 md:w-32 md:h-32'} rounded-lg border-2 border-black items-center w-fitbg-gray-400`}
            key={img.id}
            onClick={() => clickOnCard(img)}
          >
            <div className={`card-inner ${showImg(img) && 'card-flipped'}`}>
                <div className="card-front">
                <img
              
              className={`p-2 rounded bg-white`}
              alt={img.id}
              src={HIDDEN_IMG}
            />
                </div>
                <div className="card-back">
                <img
              
              className={`p-2 rounded bg-white`}
              alt={img.id}
              src={img.value}
            />
                </div>
            </div>
          </div>
    )
}
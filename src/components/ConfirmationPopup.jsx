import PopupWithForm from "./PopupWithForm"


function ConfirmationPopup({onClose, onConfirm, card}) {
  
  function handleSubmit(e) {
    e.preventDefault();

    onConfirm(card);
  };

    return(
      <PopupWithForm
      name={"delete"}
      title={"Вы уверены?"}
      isOpen={card}
      onClose={onClose} 
      buttonDefaultText={"Да"}
      onSubmit={handleSubmit}
      />
    )
}

export default ConfirmationPopup
import './index.css'

const PasswordManagerItem = props => {
  const {passwordManagerDetails, onDeleteUser, selectBoxActive} = props
  const {id, websiteName, userName, password} = passwordManagerDetails

  const initialName = userName.slice(0, 1)

  const onDelete = () => {
    onDeleteUser(id)
  }

  return (
    <li className="list-item">
      <div className="initial-name-container">
        <p className="initial-name">{initialName}</p>
      </div>
      <div className="user-details-container">
        <p className="user-detail">{websiteName}</p>
        <p className="user-detail">{userName}</p>
        {selectBoxActive ? (
          <p className="user-details">{password}</p>
        ) : (
          <img
            className="star-img"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
          />
        )}
      </div>
      <div>
        <button
          className="button"
          onClick={onDelete}
          type="button"
          data-testid="delete"
        >
          <img
            className="delete-img"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordManagerItem

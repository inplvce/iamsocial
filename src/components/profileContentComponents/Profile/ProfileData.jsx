export const ProfileData = (props) => {
    return (
        <span className="profileData">
            <span>
                {`${props.firstName}` + ' ' + `${props.lastName}`}
            </span>
        </span>
    )
}
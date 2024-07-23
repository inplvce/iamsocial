import {UserType} from "../../../redux/defaultState";

export const ProfileData = (props: any) => {
    return (
        <span className="profileData">
            <span>
                {`${props.firstName}` + ' ' + `${props.lastName}`}
            </span>
        </span>
    )
}
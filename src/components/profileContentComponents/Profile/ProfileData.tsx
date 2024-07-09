import {UserType} from "../../../redux/state";

export const ProfileData = (props: any) => {
    return (
        <span className="profileData">
            <span>
                {`${props.firstName}` + ' ' + `${props.lastName}`}
            </span>
        </span>
    )
}
import { useEffect, useLayoutEffect } from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import { getProfile, getStatus, updatePhoto, updateStatus } from "../../redux/reducers/profile-reducer";
import { AppStateType } from "../../redux/redux-store";
import { withRouter } from "../../hoc/withRouter";
import { compose } from "redux";
import { useNavigate } from "react-router-dom";

const ProfileContainer = (props: any) => {
    const navigate = useNavigate();
    let userId = (props.match) ? props.match.params.userId : props.userId;

    useEffect(() => {
        if (!userId) {
            navigate('/login');
        }
    }, [])

    useLayoutEffect(() => {
        props.getProfile(userId);
        props.getStatus(userId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId])

    return (
        <Profile updatePhoto={updatePhoto} isOwner={!userId} profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
    )
}

export type ProfilePhotosType = {
    small: string | null
    large: string | null | undefined
}
type ProfileContactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}
export type ProfilePropsType = {
    aboutMe?: string | null
    contacts?: ProfileContactsType,
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName?: string
    userId?: number
    photos?: ProfilePhotosType
} | null

const mapStateToProps = (state: AppStateType): { profile: ProfilePropsType, status: string | undefined, userId: number | null, isAuth: boolean } => {

    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        userId: state.auth.userId,
        isAuth: state.auth.isAuth,
    }
}

export default compose<any>(
    connect(mapStateToProps, { getProfile, getStatus, updateStatus, updatePhoto }),
    withRouter,
    // withAuthRedirect,
)(ProfileContainer)
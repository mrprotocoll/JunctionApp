import CandidateCard from 'components/cards/CandidateCard'
import { Formik } from 'formik'
import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import yupSchema from '@hackjunction/shared/schemas/validation/eventSchema'
import { useDispatch, useSelector } from 'react-redux'
import { useMutation } from '@apollo/client'
import { UPDATE_EVENT } from 'graphql/mutations/eventOps'
import * as OrganiserSelectors from 'redux/organiser/selectors'
import * as OrganiserActions from 'redux/organiser/actions'

import * as DashboardSelectors from 'redux/dashboard/selectors'
import * as DashboardActions from 'redux/dashboard/actions'
import * as SnackbarActions from 'redux/snackbar/actions'
import { forOwn } from 'lodash-es'
import NoTeam from 'components/Team/NoTeam'

export default () => {
    const hasTeam = useSelector(DashboardSelectors.hasTeam)
    const team = useSelector(DashboardSelectors.team)
    const event = useSelector(DashboardSelectors.event)

    const candidateList = team.teamRoles?.map(role => role.candidates)
    console.log(candidateList)
    return (
        <>
            {hasTeam && candidateList > 0 ? (
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 1440: 3 }}
                >
                    <Masonry>
                        <CandidateCard />
                        <CandidateCard />
                        <CandidateCard />
                        <CandidateCard />
                        <CandidateCard />
                        <CandidateCard />
                        <CandidateCard />
                    </Masonry>
                </ResponsiveMasonry>
            ) : (
                <NoTeam />
            )}
        </>
    )
}
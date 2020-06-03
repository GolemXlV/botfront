import { RegularExpression } from 'graphql-scalars';
import {
    getForms,
    upsertForm,
    deleteForms,
} from './mongo/forms';

export default {
    Query: {
        getForms(_, args, __) {
            return getForms(args.projectId, args.names);
        },
    },
    Mutation: {
        submitForm: async (_root, args) => {
            const { projectId, environment, tracker } = args;
            return { success: true };
        },
        upsertForm: (_, args) => upsertForm(args),
        deleteForms: (_, args) => deleteForms(args),
    },
    FormName: new RegularExpression('FormName', /^[a-zA-Z0-9-_]+_form$/),
    Form: {
        name: ({ name }) => name,
        slots: ({ slots }) => slots,
        collect_in_botfront: ({ collect_in_botfront: cib }) => cib,
        utter_on_submit: ({ utter_on_submit: uos }) => uos,
    },
    SlotToFill: {
        name: ({ name }) => name,
        filling: ({ filling }) => filling,
        validation: ({ validation }) => validation,
        utter_on_new_valid_slot: ({ utter_on_new_valid_slot: uonvs }) => uonvs,
    },
    SlotValidation: {
        operator: ({ operator }) => operator,
        comparatum: ({ comparatum }) => comparatum,
    },
    SlotFilling: {
        __resolveType: () => {},
        type: ({ type }) => type,
    },
    SlotFillingFromEntity: {
        type: ({ type }) => type,
        entity: ({ entity }) => entity,
        intent: ({ intent }) => intent,
        not_intent: ({ not_intent: notIntent }) => notIntent,
    },
    SlotFillingFromIntent: {
        type: ({ type }) => type,
        value: ({ value }) => value,
        intent: ({ intent }) => intent,
        not_intent: ({ not_intent: notIntent }) => notIntent,
    },
    SlotFillingFromText: {
        type: ({ type }) => type,
        intent: ({ intent }) => intent,
        not_intent: ({ not_intent: notIntent }) => notIntent,
    },
};

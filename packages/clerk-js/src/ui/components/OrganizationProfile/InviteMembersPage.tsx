import { useWizard, Wizard } from '../../common';
import { useCoreOrganization } from '../../contexts';
import { Flex, Icon, Text } from '../../customizables';
import { ContentPage, SuccessPage, useCardState, withCardStateProvider } from '../../elements';
import { Email } from '../../icons';
import { InviteMembersForm } from './InviteMembersForm';
import { OrganizationProfileBreadcrumbs } from './OrganizationProfileNavbar';

export const InviteMembersPage = withCardStateProvider(() => {
  // const title = localizationKeys('userProfile.profilePage.title');
  const title = 'Invite members';
  const subtitle = 'Invite new members to this organization';
  const card = useCardState();
  const wizard = useWizard({ onNextStep: () => card.setError(undefined) });
  const { organization } = useCoreOrganization();

  if (!organization) {
    return null;
  }

  return (
    <Wizard {...wizard.props}>
      <ContentPage
        headerTitle={title}
        headerSubtitle={subtitle}
        Breadcrumbs={OrganizationProfileBreadcrumbs}
      >
        <InviteMembersForm
          organization={organization}
          onSuccess={wizard.nextStep}
        />
      </ContentPage>
      <SuccessPage
        title={title}
        content={<InvitationsSentMessage />}
        Breadcrumbs={OrganizationProfileBreadcrumbs}
      />
    </Wizard>
  );
});

export const InvitationsSentMessage = () => {
  return (
    <Flex
      direction='col'
      center
      gap={4}
    >
      <Flex
        center
        sx={t => ({
          width: t.space.$14,
          height: t.space.$14,
          borderRadius: t.radii.$circle,
          background: t.colors.$blackAlpha200,
        })}
      >
        <Icon
          icon={Email}
          size='md'
        />
      </Flex>
      <Text>Invitations successfully sent</Text>
    </Flex>
  );
};
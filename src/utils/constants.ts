import learning from '@assets/icons/learning.svg';
import publicIcon from '@assets/icons/public.svg';
import employment from '@assets/icons/employment.svg';
import education from '@assets/icons/education.svg';
import project from '@assets/icons/project.svg';

export const tagsObj = {
  ציבורי: {
    group: 'sector',
    name: 'public',
    bgColor: 'var(--coral-blush)',
    icon: publicIcon,
  },
  חברתי: {
    group: 'sector',
    name: 'social',
    bgColor: 'var(--coral-blush)',
    icon: 'publicIcon',
  },
  עסקי: {
    group: 'sector',
    name: 'business',
    bgColor: 'var(--coral-blush)',
    icon: 'social',
  },
  למידה: {
    group: 'field',
    name: 'learning',
    bgColor: 'var(--midnight-blue)',
    icon: learning,
  },
  חינוך: {
    group: 'field',
    name: 'education',
    bgColor: 'var(--midnight-blue)',
    icon: education,
  },
  תעסוקה: {
    group: 'field',
    name: 'employment',
    bgColor: 'var(--midnight-blue)',
    icon: employment,
  },
  מיזם: { group: 'type', name: 'project', bgColor: 'var(--plum-wine)', icon: project },
  תוכנית: { group: 'type', name: 'program', bgColor: 'var(--plum-wine)', icon: '' },
  פלטפורמה: { group: 'type', name: 'platform', bgColor: 'var(--plum-wine)', icon: '' },
};

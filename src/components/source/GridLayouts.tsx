/*
 * Copyright (C) Contributors to the Suwayomi project
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { IconButton, Menu, MenuItem, FormControlLabel, Radio, Tooltip } from '@mui/material';
import React from 'react';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { useTranslation } from 'react-i18next';
import { GridLayout, useLibraryOptionsContext } from '@/components/context/LibraryOptionsContext';

// TODO: clean up this to use a FormControl, and remove dependency on name o radio button
export function SourceGridLayout() {
    const { t } = useTranslation();

    const {
        options: { SourcegridLayout },
        setOptions,
    } = useLibraryOptionsContext();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    function setGridContextOptions(e: React.ChangeEvent<HTMLInputElement>, checked: boolean) {
        if (checked) {
            setOptions((prev: any) => ({ ...prev, SourcegridLayout: parseInt(e.target.name, 10) }));
        }
    }

    return (
        <>
            <Tooltip title={t('global.label.display')}>
                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <ViewModuleIcon />
                </IconButton>
            </Tooltip>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{ 'aria-labelledby': 'basic-button' }}
            >
                <MenuItem onClick={handleClose}>
                    <FormControlLabel
                        label={t('global.grid_layout.label.compact_grid')}
                        value={GridLayout.Compact}
                        control={
                            <Radio
                                name={GridLayout.Compact.toString()}
                                checked={SourcegridLayout === GridLayout.Compact || SourcegridLayout === undefined}
                                onChange={setGridContextOptions}
                            />
                        }
                    />
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <FormControlLabel
                        label={t('global.grid_layout.label.comfortable_grid')}
                        control={
                            <Radio
                                name={GridLayout.Comfortable.toString()}
                                checked={SourcegridLayout === GridLayout.Comfortable}
                                onChange={setGridContextOptions}
                            />
                        }
                    />
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <FormControlLabel
                        label={t('global.grid_layout.label.list')}
                        control={
                            <Radio
                                name={GridLayout.List.toString()}
                                checked={SourcegridLayout === GridLayout.List}
                                onChange={setGridContextOptions}
                            />
                        }
                    />
                </MenuItem>
            </Menu>
        </>
    );
}

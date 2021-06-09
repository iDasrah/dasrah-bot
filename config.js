if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

module.exports = {
	bot_messages: {
		no_argument_error: "vous n'avez pas saisi d'arguments !",
		not_enough_arguments_error: "j'ai besoin de plus d'arguments pour effectuer cette commande !",
		too_much_arguments_error: "vous avez saisi trop d'arguments !",
		command_execution_error: "un problème est survenu lors de l'éxécution de la commande.",
		invalid_command_error: 'commande invalide.',
		NaN_arg_error: 'veuillez utiliser un nombre.',
		too_much_clear_error: 'vous ne pouvez supprimer que 100 messages à la fois.',
		not_enough_clear_error: 'vous devez supprimer au moins un message.',
		not_in_a_voice_channel_error: 'vous devez être dans un salon vocal !',
		no_permission_error: "tu n'as pas le droit de faire cela. Demande à un administrateur.",
		video_not_found: "aucun résultats n'ont été trouvés pour cette recherche.",
		wrong_argument_error: 'je ne comprend pas cet argument.',
		no_urls_wallpaper:
			"oups ! Aucun fond d'écran n'a été trouvé. Tu peux demander à un <@&840677230555955252> d'en ajouter.",
		no_valid_url: 'veuillez saisir un URL valide.',
		add_wallpaper_success: "le fond d'écran a été ajouté avec succès ! :white_check_mark:",
		disabled_command: 'commande désactivée temporairement...',
		has_role: "l'utilisateur a dejà ce rôle !",
		hasnt_role: "l'utilisateur n'a pas ce rôle !",
		user_dont_have_permission: "ce membre n'a pas la permission d'avoir ce rôle !",
		role_doesnt_exist: "ce rôle n'existe pas !",
		no_user_tagged: 'vous devez identifier un membre !',
		cooldown: 'Cooldown activé pour cette commande ! Veuillez attendre ',
		help_invalid_command: "je ne trouve pas d'informations sur cette commande...",
		user_not_found: "ce membre n'existe pas.",
		no_search: 'veuillez me donner un url ou des mots clés.',
		no_video_found: "aucune vidéo n'a été trouvée avec cette recherche.",
		couldnt_connect: "je n'ai pas pu me connecter dans le salon vocal.",
	},
	bot_info: {
		name: 'Sashaa',
		version: 1.3,
	},
	database_connect: `mongodb+srv://${process.env.db_username}:${process.env.db_password}@cluster0.yjwsy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
	defaults: {
		prefix: '-',
	},
};
